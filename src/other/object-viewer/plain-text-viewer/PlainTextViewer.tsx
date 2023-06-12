/* eslint-disable react/prefer-stateless-function */
import React from "react";

export interface PlainTextViewerProps {
    src: string;
}

class PlainTextViewer extends React.Component<PlainTextViewerProps> {
    render() {
        // eslint-disable-next-line react/prop-types
        const { src } = this.props;

        return (
            <div className="plain-text-viewer-content col-xs-12 p-20">
                <pre>{src}</pre>
            </div>
        );
    }
}

export default PlainTextViewer;
