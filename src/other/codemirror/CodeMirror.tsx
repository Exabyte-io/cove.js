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
import { ConsistencyCheck } from "@exabyte-io/code.js/dist/types";
import CodeMirror from "@uiw/react-codemirror";
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
    options: Record<string, unknown>;
    language: string;
    completions: (context: CompletionContext) => CompletionResult;
    theme?: "light" | "dark";
    onFocus?: () => void;
    onBlur?: () => void;
    checks?: ConsistencyCheck[];
    readOnly?: boolean;
}

export interface CodeMirrorState {
    isLoaded: boolean;
    isEditing: boolean;
    extensions: any[];
}

function CodeMirrorComponent({
    updateContent,
    updateOnFirstLoad,
    content,
    options,
    language,
    completions,
    theme,
    onFocus,
    onBlur,
    checks,
    readOnly,
}: CodeMirrorProps) {
    return (
        <CodeMirror
            value={content}
            theme={theme}
            readOnly={readOnly}
            onChange={(value) => {
                updateContent(value);
            }}
            extensions={[...LANGUAGES_MAP[language], checks]}
            autoFocus={updateOnFirstLoad}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

export default CodeMirrorComponent;
