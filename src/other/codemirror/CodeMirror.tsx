// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/jinja2/jinja2";
// import "codemirror/mode/fortran/fortran";
// import "codemirror/mode/shell/shell";
// import "codemirror/mode/python/python";
// import "codemirror/mode/javascript/javascript";

import { autocompletion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { linter, lintGutter } from "@codemirror/lint";
import CodeMirrorBase, { BasicSetupOptions } from "@uiw/react-codemirror";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LANGUAGES_MAP: Record<string, any> = {
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
}

export interface CodeMirrorState {
    isLoaded: boolean;
    isEditing: boolean;
}

class CodeMirror extends React.Component<CodeMirrorProps, CodeMirrorState> {
    constructor(props: CodeMirrorProps) {
        super(props);
        this.state = { isLoaded: false, isEditing: false };
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    /*
     * editor - CodeMirror object https://uiwjs.github.io/react-codemirror/
     * viewUpdate - object containing the update to the editor tree structure
     */
    handleContentChange(newContent: string, viewUpdate: { origin: string }) {
        const { isLoaded, isEditing } = this.state;
        const { updateContent, updateOnFirstLoad = true } = this.props;
        // kludge for the way state management is handled in web-app
        if (!isLoaded && !updateOnFirstLoad && viewUpdate.origin === "setValue") {
            this.setState({ isLoaded: true });
            return;
        }
        // update content only if component is focused
        // Otherwise content is being marked as edited when selecting a flavor in workflow designer!
        if (isEditing && updateContent) updateContent(newContent);
    }

    // eslint-disable-next-line class-methods-use-this
    getLanguageExtensions(language: string) {
        if (LANGUAGES_MAP[language]) return LANGUAGES_MAP[language];

        return LANGUAGES_MAP.fortran;
    }

    render() {
        const { content = "", options = {}, language, completions } = this.props;
        const completionExtension = autocompletion({ override: [completions] });

        return (
            <CodeMirrorBase
                value={content || ""}
                // @ts-ignore
                onChange={(editor: string, viewUpdate: { origin: string }) => {
                    this.handleContentChange(editor, viewUpdate);
                }}
                onFocus={() => this.setState({ isEditing: true })}
                onBlur={() => this.setState({ isEditing: false })}
                basicSetup={options}
                theme="light"
                // @ts-ignore
                extensions={[completionExtension, ...this.getLanguageExtensions(language)]}
            />
        );
    }
}

export default CodeMirror;
