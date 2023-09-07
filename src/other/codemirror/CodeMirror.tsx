import { autocompletion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { linter, lintGutter } from "@codemirror/lint";
import { ViewUpdate } from "@codemirror/view";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ConsistencyChecks } from "@exabyte-io/code.js/src/types";
import CodeMirrorBase, { BasicSetupOptions } from "@uiw/react-codemirror";
import React from "react";
import _ from "underscore";

import { ChecksAnnotation, checksStateField, exaxyzLinter } from "./utils/exaxyz_linter";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LANGUAGES_MAP: Record<string, any> = {
    python: [python()],
    shell: [StreamLanguage.define(shell)],
    fortran: [StreamLanguage.define(fortran)],
    jinja2: [StreamLanguage.define(jinja2)],
    javascript: [javascript()],
    json: [json(), lintGutter(), linter(jsonParseLinter())],
    exaxyz: [StreamLanguage.define(fortran)],
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
}

export interface CodeMirrorState {
    isLoaded: boolean;
    isEditing: boolean;
}

class CodeMirror extends React.Component<CodeMirrorProps, CodeMirrorState> {
    // eslint-disable-next-line react/no-unused-class-component-methods
    debouncedUpdateChecks: (viewUpdate: ViewUpdate) => void;

    constructor(props: CodeMirrorProps) {
        super(props);
        this.state = { isLoaded: false, isEditing: false };
        this.handleContentChange = this.handleContentChange.bind(this);
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.debouncedUpdateChecks = _.debounce(this.updateChecks, 300);
    }

    /*
     * editor - CodeMirror object https://uiwjs.github.io/react-codemirror/
     * viewUpdate - object containing the update to the editor tree structure
     */
    handleContentChange(newContent: string, viewUpdate: ViewUpdate) {
        console.log("handleContentChange viewUpdate", viewUpdate);
        const { isLoaded, isEditing } = this.state;
        const { updateContent, updateOnFirstLoad = true } = this.props;
        // kludge for the way state management is handled in web-app
        if (!isLoaded && !updateOnFirstLoad) {
            this.setState({ isLoaded: true });
            return;
        }
        // update content only if component is focused
        // Otherwise content is being marked as edited when selecting a flavor in workflow designer!
        if (isEditing && updateContent) updateContent(newContent);
    }

    // eslint-disable-next-line class-methods-use-this
    getLanguageExtensions(language: string) {
        const baseExtensions = LANGUAGES_MAP[language] || LANGUAGES_MAP.fortran;

        if (language === "exaxyz") {
            return [...baseExtensions, checksStateField, linter(exaxyzLinter)];
        }

        return baseExtensions;
    }

    updateChecks(viewUpdate: ViewUpdate) {
        console.log("updateChecks viewUpdate", viewUpdate);
        const { checks } = this.props;
        if (checks && checks.keys.length > 0) {
            viewUpdate.view.dispatch({
                annotations: [ChecksAnnotation.of({ checks })],
            });
        }
    }

    render() {
        const { content = "", options = {}, language, completions } = this.props;
        const completionExtension = autocompletion({ override: [completions] });

        const { theme, onFocus, onBlur } = this.props;
        return (
            <CodeMirrorBase
                value={content || ""}
                // @ts-ignore
                onChange={(editor: string, viewUpdate: ViewUpdate) => {
                    this.handleContentChange(editor, viewUpdate);
                    this.updateChecks(viewUpdate);
                }}
                onFocus={() => {
                    if (onFocus) onFocus();
                    this.setState({ isEditing: true });
                }}
                onBlur={() => {
                    if (onBlur) onBlur();
                    this.setState({ isEditing: false });
                }}
                basicSetup={options}
                theme={theme || "light"}
                // @ts-ignore
                extensions={[completionExtension, ...this.getLanguageExtensions(language)]}
            />
        );
    }
}

export default CodeMirror;
