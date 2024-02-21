/* eslint-disable react/prefer-stateless-function */
import React from "react";
class PlainTextViewer extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const { src } = this.props;
        return (React.createElement("div", { className: "plain-text-viewer-content col-xs-12 p-20" },
            React.createElement("pre", null, src)));
    }
}
export default PlainTextViewer;
