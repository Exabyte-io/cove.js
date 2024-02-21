import React from "react";
export interface JSONViewerProps {
    src: object;
    onUpdate: () => void;
}
export default class JSONViewer extends React.Component<JSONViewerProps> {
    render(): React.JSX.Element;
}
