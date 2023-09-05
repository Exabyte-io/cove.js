import { Diagnostic } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import { ConsistencyChecks } from "@exabyte-io/code.js/src/types";
import _ from "underscore";

const linterGenerator = (checks: ConsistencyChecks) => {
    return (view: EditorView): Diagnostic[] => {
        const { doc } = view.state;
        if (checks.messages.length === 0 || !doc) return [];

        const warnings = checks.messages.map((check) => {
            const keyFragments = check.key.split(".");
            const atomIdStr = _.last(keyFragments);
            if (!atomIdStr) return null;
            const atomId = parseInt(atomIdStr, 10);
            const lineNumber = atomId + 1; // codemirror counts from 1
            return {
                message: check.message,
                severity: check.severity,
                from: doc.line(lineNumber).from,
                to: doc.line(lineNumber).to,
            };
        });

        return warnings.filter(Boolean) as Diagnostic[];
    };
};

export { linterGenerator };
