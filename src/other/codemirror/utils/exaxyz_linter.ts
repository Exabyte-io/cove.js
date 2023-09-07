import { Diagnostic } from "@codemirror/lint";
import { Annotation, StateField } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ConsistencyChecks } from "@exabyte-io/code.js/src/types";
import _ from "underscore";

export const ChecksAnnotation = Annotation.define<{ checks: ConsistencyChecks }>();

export const checksStateField = StateField.define({
    create() {
        return [];
    }, // Initializes with an empty array
    // @ts-ignore
    update(value, tr) {
        if (tr.annotation(ChecksAnnotation)) {
            // @ts-ignore
            return tr.annotation(ChecksAnnotation).checks;
        }
        return value;
    },
});
const exaxyzLinter = (view: EditorView): Diagnostic[] => {
    const checks: ConsistencyChecks | undefined = view.state.field(checksStateField) as
        | ConsistencyChecks
        | undefined;

    if (!checks) return [];
    if (Object.keys(checks).length === 0) return [];

    return checks.messages
        .map((check) => {
            const keyFragments = check.key.split(".");
            const atomIdStr = _.last(keyFragments);
            if (!atomIdStr) return null;

            const atomId = parseInt(atomIdStr, 10);
            const lineNumber = atomId + 1;
            return {
                message: check.message,
                severity: check.severity,
                from: view.state.doc.line(lineNumber).from,
                to: view.state.doc.line(lineNumber).to,
            };
        })
        .filter(Boolean) as Diagnostic[];
};

export { exaxyzLinter };
