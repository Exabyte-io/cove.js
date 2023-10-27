import { autocompletion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { linter, lintGutter } from "@codemirror/lint";
import { ConsistencyCheck } from "@exabyte-io/code.js/dist/types";
import { calculateHashFromString } from "@exabyte-io/code.js/dist/utils/hash";
import CodeMirrorBase, { BasicSetupOptions, Extension } from "@uiw/react-codemirror";
import React from "react";

import { linterGenerator } from "./utils/exaxyz_linter";

const LANGUAGES_MAP: Record<string, Extension[]> = {
    python: [python()],
    shell: [StreamLanguage.define(shell)],
    fortran: [StreamLanguage.define(fortran)],
    jinja2: [StreamLanguage.define(jinja2)],
    javascript: [javascript()],
    json: [json(), lintGutter(), linter(jsonParseLinter())],
};

export interface CodeMirrorProps {
    updateContent: (content: string) => void;
    updateOnFirstLoad: boolean;
    content?: string;
    options: boolean | BasicSetupOptions;
    language: string;
    completions: (context: CompletionContext) => CompletionResult;
    theme?: "light" | "dark";
    onFocus?: () => void;
    onBlur?: () => void;
    checks?: { checks: ConsistencyCheck[] };
    readOnly?: boolean;
    triggerReload?: boolean;
}

export interface CodeMirrorState {
    content: string;
    isLoaded: boolean;
    isEditing: boolean;
    extensions: Extension[];
}

class CodeMirror extends React.Component<CodeMirrorProps, CodeMirrorState> {
    constructor(props: CodeMirrorProps) {
        super(props);
        this.state = {
            content: props.content || "",
            isLoaded: false,
            isEditing: false,
            extensions: this.createExtensions(),
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps: CodeMirrorProps) {
        if (nextProps !== this.props) {
            const { content, checks } = this.props;
            if (content && content !== nextProps.content) {
                this.setState({ content });
            }

            if (checks !== nextProps.checks) {
                const consistencyChecks = checks?.checks || [];
                this.setState({ extensions: this.createExtensions(consistencyChecks) });
            }
        }
    }

    /*
     * editor - CodeMirror object https://uiwjs.github.io/react-codemirror/
     * viewUpdate - object containing the update to the editor tree structure
     */
    handleContentChange(newContent: string) {
        const { isLoaded, content, isEditing } = this.state;
        const { updateContent, updateOnFirstLoad = true } = this.props;
        // kludge for the way state management is handled in web-app
        // TODO: RESTORE whatever was removed here!!!!
        if (!isLoaded && !updateOnFirstLoad) {
            this.setState({ isLoaded: true });
            return;
        }
        // update content only if component is focused
        // Otherwise content is being marked as edited when selecting a flavor in workflow designer!

        if (content === newContent) return;
        this.setState({ content: newContent }, () => {
            if (isEditing && updateContent) updateContent(newContent);
        });
    }

    handleFocus() {
        const { onFocus } = this.props;
        if (onFocus) onFocus();
        this.setState({ isEditing: true });
    }

    handleBlur() {
        const { onBlur } = this.props;
        if (onBlur) onBlur();
        this.setState({ isEditing: false });
    }

    createExtensions(checks?: ConsistencyCheck[]): Extension[] {
        const { completions, language } = this.props;
        const completionExtension = autocompletion({ override: [completions] });
        const languageExtensions = LANGUAGES_MAP[language]
            ? LANGUAGES_MAP[language]
            : LANGUAGES_MAP.fortran;

        if (checks) {
            const linterExtension = linterGenerator(checks);
            return [completionExtension, linter(linterExtension), ...languageExtensions];
        }

        return [completionExtension, ...languageExtensions];
    }

    render() {
        const { options = {}, theme, readOnly, triggerReload } = this.props;
        const { extensions, content } = this.state;
        const key = triggerReload ? calculateHashFromString(content || "") : "codemirror-key";

        return (
            <CodeMirrorBase
                key={key}
                value={content || ""}
                // @ts-ignore
                onChange={(value: string) => {
                    this.handleContentChange(value);
                }}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                basicSetup={options}
                theme={theme || "light"}
                extensions={extensions}
                readOnly={readOnly}
            />
        );
    }
}

export default CodeMirror;
