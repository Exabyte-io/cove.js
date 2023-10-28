import { Diagnostic } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import { ConsistencyCheck } from "@exabyte-io/code.js/dist/types";
import _ from "underscore";

const linterGenerator = (checks: ConsistencyCheck[]) => {
    return (view: EditorView): Diagnostic[] => {
        const { doc } = view.state;
        if (!checks && !doc) return [];

        const warnings = checks.map((check) => {
            const keyFragments = check.key.split(".");
            const keyStr = _.last(keyFragments);
            if (!keyStr) return null;
            const key = parseInt(keyStr, 10);
            const lineNumber = key + 1; // codemirror counts lines from 1
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
