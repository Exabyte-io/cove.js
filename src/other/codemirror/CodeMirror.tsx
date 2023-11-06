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
import { ConsistencyCheck } from "@exabyte-io/code.js/dist/types";
import CodeMirrorBase, { BasicSetupOptions } from "@uiw/react-codemirror";
import React from "react";

import { StatefulEntityMixin } from "../../mixins/statefulEntityMixin";
import { linterGenerator } from "./utils/linterGenerator";

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
    content?: string;
    options: boolean | BasicSetupOptions;
    language: string;
    completions: (context: CompletionContext) => CompletionResult;
    theme?: "light" | "dark";
    checks?: ConsistencyCheck[];
    readOnly?: boolean;
}

export interface CodeMirrorState {
    entity: { content: string; checks?: ConsistencyCheck[] };
    isEditing: boolean;
}

const CodeMirrorClass = React.Component<CodeMirrorProps, CodeMirrorState>;

class CodeMirror extends StatefulEntityMixin(CodeMirrorClass) {
    constructor(props: CodeMirrorProps) {
        super(props);
        this.state = {
            entity: { content: props.content || "", checks: props.checks },
            isEditing: false,
        };
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps: CodeMirrorProps) {
        const { content, checks } = this.state.entity || {};
        const entityUpdate = { ...this.state.entity };

        if (nextProps.content !== content) {
            entityUpdate.content = nextProps.content || "";
        }
        if (nextProps.checks !== checks) {
            entityUpdate.checks = nextProps.checks;
        }

        this.setState({ entity: entityUpdate });
    }

    shouldComponentUpdate(
        nextProps: Readonly<CodeMirrorProps>,
        nextState: Readonly<CodeMirrorState>,
        nextContext: never,
    ): boolean {
        const { entity } = this.state;
        const { entity: nextEntity } = nextState;

        return entity.content !== nextEntity.content || entity.checks !== nextEntity.checks;
    }

    handleContentChange(newContent: string) {
        const { isEditing } = this.state;
        const { updateContent } = this.props;
        if (isEditing && updateContent) updateContent(newContent);
        this.setState({ entity: { content: newContent } });
    }

    createExtensions(): Extension[] {
        const { checks } = this.state.entity;
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
        const { options = {}, theme, readOnly } = this.props;
        const { content } = this.state.entity;
        const extensions = this.createExtensions();

        return (
            <CodeMirrorBase
                value={content}
                onChange={(value: string) => {
                    this.handleContentChange(value);
                }}
                onFocus={() => this.setState({ isEditing: true })}
                onBlur={() => this.setState({ isEditing: false })}
                basicSetup={options}
                theme={theme || "light"}
                extensions={extensions}
                readOnly={readOnly}
            />
        );
    }
}

export default CodeMirror;
