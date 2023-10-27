import { autocompletion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { linter, lintGutter } from "@codemirror/lint";
import { Extension } from "@codemirror/state";
import CodeMirrorBase, { BasicSetupOptions } from "@uiw/react-codemirror";
import React from "react";

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
    readOnly?: boolean;
}

export interface CodeMirrorState {
    isLoaded: boolean;
    content: string;
    isEditing: boolean;
}

class CodeMirror extends React.Component<CodeMirrorProps, CodeMirrorState> {
    constructor(props: CodeMirrorProps) {
        super(props);
        this.state = {
            content: "",
            isLoaded: false,
            isEditing: false,
        };
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentDidMount() {
        const { content } = this.props;
        this.setState({ content: content || "" });
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<CodeMirrorProps>, nextContext: any) {
        const { content } = this.props;
        if (nextProps.content !== content) {
            this.setState({ content: nextProps.content || "" });
        }
    }

    /*
     * editor - CodeMirror object https://uiwjs.github.io/react-codemirror/
     * viewUpdate - object containing the update to the editor tree structure
     */
    handleContentChange(newContent: string) {
        const { isLoaded, isEditing, content } = this.state;
        const { updateContent, updateOnFirstLoad = true } = this.props;
        // kludge for the way state management is handled in web-app
        if (!isLoaded && !updateOnFirstLoad) {
            this.setState({ isLoaded: true });
            return;
        }

        if (content === newContent) return;
        this.setState({ content: newContent }, () => {
            if (isEditing) updateContent(newContent);
        });
    }

    // eslint-disable-next-line class-methods-use-this
    getLanguageExtensions(language: string) {
        if (LANGUAGES_MAP[language]) return LANGUAGES_MAP[language];

        return LANGUAGES_MAP.fortran;
    }

    render() {
        const { options = {}, language, completions, theme, readOnly } = this.props;
        const { content } = this.state;
        const completionExtension = autocompletion({ override: [completions] });
        return (
            <CodeMirrorBase
                value={content}
                onChange={(content: string) => {
                    this.handleContentChange(content);
                }}
                onFocus={() => this.setState({ isEditing: true })}
                onBlur={() => this.setState({ isEditing: false })}
                basicSetup={options}
                theme={theme || "light"}
                extensions={[completionExtension, ...this.getLanguageExtensions(language)]}
                readOnly={readOnly}
            />
        );
    }
}

export default CodeMirror;
