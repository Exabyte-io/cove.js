import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
// eslint-disable-next-line import/no-unresolved
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
// @ts-ignore
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import { Editor, Viewer } from "@toast-ui/react-editor";
import katex from "katex";
import Prism from "prismjs";
import React, { useCallback } from "react";
import { EditorContainer, ViewerContainer } from "./TextEditor.styled";
function katexPlugin() {
    const toHTMLRenderers = {
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
function TextEditor({ onSave, descriptionObject, editable }) {
    const editorRef = React.useRef(null);
    const handleOnChange = useCallback(() => {
        var _a;
        const editor = (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.getInstance();
        if (editor) {
            // @ts-ignore
            const plainText = editor.preview.el.textContent;
            const markdown = editor.getMarkdown();
            onSave({ value: markdown }, plainText);
        }
    }, []);
    return (React.createElement(EditorContainer, { id: "editor" }, editable ? (React.createElement(Editor, { ref: editorRef, height: "100%", initialValue: (descriptionObject === null || descriptionObject === void 0 ? void 0 : descriptionObject.value) || "", placeholder: "Please enter text.", previewStyle: "tab", initialEditType: "markdown", useCommandShortcut: true, onChange: handleOnChange, plugins: [katexPlugin, [codeSyntaxHighlight, { highlighter: Prism }]] })) : (React.createElement(ViewerContainer, null,
        React.createElement(Viewer, { initialValue: (descriptionObject === null || descriptionObject === void 0 ? void 0 : descriptionObject.value) || "No description", plugins: [katexPlugin, [codeSyntaxHighlight, { highlighter: Prism }]] })))));
}
export default TextEditor;
