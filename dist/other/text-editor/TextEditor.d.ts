import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import React from "react";
export interface TextEditorProps {
    onSave: (descriptionObject: {
        value: string;
    }, description: string) => void;
    descriptionObject: {
        value: string;
    };
    editable: boolean;
}
declare function TextEditor({ onSave, descriptionObject, editable }: TextEditorProps): React.JSX.Element;
export default TextEditor;
