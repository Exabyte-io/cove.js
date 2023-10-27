import { autocompletion, CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { StreamLanguage } from "@codemirror/language";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { linter, lintGutter } from "@codemirror/lint";
import CodeMirrorBase, { BasicSetupOptions, Extension } from "@uiw/react-codemirror";
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
    onFocus?: () => void;
    onBlur?: () => void;
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
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        const { content } = this.props;
        this.setState({ content: content || "" });
    }

    componentDidUpdate(prevProps: CodeMirrorProps) {
        const { content } = this.props;
        if (prevProps.content !== content) {
            this.setState({ content: content || "" });
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

        // Avoid triggering update actions when content is set from props
        if (content === newContent) return;
        this.setState({ content: newContent }, () => {
            updateContent(newContent);
        });
    }

    handleFocus() {
        const { onFocus } = this.props;
        this.setState({ isEditing: true }, () => {
            if (onFocus) onFocus();
        });
    }

    handleBlur() {
        const { onBlur, updateContent } = this.props;
        const { content } = this.state;

        this.setState({ isEditing: false }, () => {
            if (onBlur) onBlur();

            updateContent(content);
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
                onFocus={() => this.handleFocus()}
                onBlur={() => this.handleBlur()}
                basicSetup={options}
                theme={theme || "light"}
                extensions={[completionExtension, ...this.getLanguageExtensions(language)]}
                readOnly={readOnly}
            />
        );
    }
}

export default CodeMirror;
