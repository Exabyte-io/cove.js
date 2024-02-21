/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import ReactJson from "react-json-view";
import _ from "underscore";
export default class JSONViewer extends React.Component {
    render() {
        const { src, onUpdate } = this.props;
        return (React.createElement("div", { className: "json-viewer-content col-xs-12 p-20" },
            React.createElement(ReactJson, { src: src, onEdit: onUpdate, onAdd: onUpdate, onDelete: onUpdate, collapsed: 2, theme: "bright:inverted", displayObjectSize: false, displayDataTypes: false, ..._.omit(this.props, "src") })));
    }
}
