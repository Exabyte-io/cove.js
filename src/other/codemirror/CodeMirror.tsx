import { autocompletion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { linter, lintGutter } from "@codemirror/lint";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ConsistencyChecks } from "@exabyte-io/code.js/dist/types";
import CodeMirrorBase, { BasicSetupOptions, ReactCodeMirrorRef } from "@uiw/react-codemirror";
import React from "react";

import exaxyzLinter, { ChecksAnnotation, checksStateField } from "./utils/exaxyz_linter";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LANGUAGES_MAP: Record<string, any> = {
    python: [python()],
    shell: [StreamLanguage.define(shell)],
    fortran: [StreamLanguage.define(fortran)],
    jinja2: [StreamLanguage.define(jinja2)],
    javascript: [javascript()],
    json: [json(), lintGutter(), linter(jsonParseLinter())],
    exaxyz: [StreamLanguage.define(fortran), checksStateField, linter(exaxyzLinter())],
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
    checks?: ConsistencyChecks;
    readOnly?: boolean;
}

export interface CodeMirrorState {
    isLoaded: boolean;
    isEditing: boolean;
    extensions: any[];
}

class CodeMirror extends React.Component<CodeMirrorProps, CodeMirrorState> {
    private codeMirrorRef = React.createRef<ReactCodeMirrorRef>();

    constructor(props: CodeMirrorProps) {
        super(props);
        this.state = {
            isLoaded: false,
            isEditing: false,
            extensions: this.createExtensions(),
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        const { content } = this.props;
        const view = this.codeMirrorRef.current?.view;

        if (view) {
            view.dispatch({
                changes: {
                    from: 0,
                    to: view.state.doc.length,
                    insert: content || "",
                },
            });
        }
    }

    componentDidUpdate(prevProps: CodeMirrorProps) {
        const { content, checks } = this.props;
        const view = this.codeMirrorRef.current?.view;
        if (!view) return;

        if (content !== prevProps.content) {
            view.dispatch({
                changes: {
                    from: 0,
                    to: view.state.doc.length,
                    insert: content || "",
                },
            });
        }

        if (checks && checks.keys.length > 0) {
            view.dispatch({
                annotations: [ChecksAnnotation.of({ checks })],
            });
        }
    }

    /*
     * editor - CodeMirror object https://uiwjs.github.io/react-codemirror/
     * viewUpdate - object containing the update to the editor tree structure
     */
    handleContentChange(newContent: string) {
        const { isLoaded, isEditing } = this.state;
        const { updateContent, updateOnFirstLoad = true } = this.props;
        // kludge for the way state management is handled in web-app
        // TODO: RESTORE whatever was removed here!!!!
        if (!isLoaded && !updateOnFirstLoad) {
            this.setState({ isLoaded: true });
            return;
        }
        // update content only if component is focused
        // Otherwise content is being marked as edited when selecting a flavor in workflow designer!
        if (isEditing && updateContent) updateContent(newContent);
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

    // eslint-disable-next-line class-methods-use-this
    getLanguageExtensions(language: string) {
        if (LANGUAGES_MAP[language]) return LANGUAGES_MAP[language];

        return LANGUAGES_MAP.fortran;
    }

    createExtensions() {
        const { completions, language } = this.props;
        const completionExtension = autocompletion({ override: [completions] });
        const languageExtensions = this.getLanguageExtensions(language);
        return [completionExtension, ...languageExtensions];
    }

    render() {
        const { options = {}, theme, readOnly } = this.props;
        const { extensions } = this.state;

        return (
            <CodeMirrorBase
                ref={this.codeMirrorRef}
                // @ts-ignore
                onChange={(value: string) => {
                    this.handleContentChange(value);
                }}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                basicSetup={options}
                theme={theme || "light"}
                // @ts-ignore
                extensions={extensions}
                readOnly={readOnly}
            />
        );
    }
}

export default CodeMirror;
