import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
// eslint-disable-next-line import/no-unresolved
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

// eslint-disable-next-line import/no-unresolved
import { CustomHTMLRenderer } from "@toast-ui/editor/types/editor";
// @ts-ignore
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import { Editor, Viewer } from "@toast-ui/react-editor";
import katex from "katex";
import Prism from "prismjs";
import React, { useCallback } from "react";

import { EditorContainer, ViewerContainer } from "./TextEditor.styled";

function katexPlugin() {
    const toHTMLRenderers: CustomHTMLRenderer = {
        math(node) {
            const html = katex.renderToString(node.literal || "", {
                throwOnError: false,
            });
            return [
                { type: "openTag", tagName: "div", outerNewLine: true },
                { type: "html", content: html },
                { type: "closeTag", tagName: "div", outerNewLine: true },
            ];
        },
    };

    return { toHTMLRenderers };
}

export interface TextEditorProps {
    onSave: (descriptionObject: { value: string }, description: string) => void;
    descriptionObject: { value: string };
    editable: boolean;
}

function TextEditor({ onSave, descriptionObject, editable }: TextEditorProps) {
    const editorRef = React.useRef<Editor>(null);

    const handleOnChange = useCallback(() => {
        const editor = editorRef.current?.getInstance();

        if (editor) {
            // @ts-ignore
            const plainText = editor.preview.el.textContent;
            const markdown = editor.getMarkdown();

            onSave({ value: markdown }, plainText);
        }
    }, []);

    return (
        <EditorContainer id="editor">
            {editable ? (
                <Editor
                    ref={editorRef}
                    height="100%"
                    initialValue={descriptionObject?.value || ""}
                    placeholder="Please enter text."
                    previewStyle="tab"
                    initialEditType="markdown"
                    useCommandShortcut
                    onChange={handleOnChange}
                    plugins={[katexPlugin, [codeSyntaxHighlight, { highlighter: Prism }]]}
                />
            ) : (
                <ViewerContainer>
                    <Viewer
                        initialValue={descriptionObject?.value || "No description"}
                        plugins={[katexPlugin, [codeSyntaxHighlight, { highlighter: Prism }]]}
                    />
                </ViewerContainer>
            )}
        </EditorContainer>
    );
}

export default TextEditor;
