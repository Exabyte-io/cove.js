import { Diagnostic } from "@codemirror/lint";
import { Annotation, StateField, Transaction } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ConsistencyCheck } from "@exabyte-io/code.js/src/types";
import _ from "underscore";

export const ChecksAnnotation = Annotation.define<{ checks: Array<ConsistencyCheck> }>();

export const checksStateField = StateField.define({
    create(): Array<ConsistencyCheck> {
        return [{ key: "", name: "default", message: "", severity: "error" }];
    },
    update: (value: Array<ConsistencyCheck>, tr: Transaction) => {
        if (tr.annotation(ChecksAnnotation)) {
            // @ts-ignore
            return tr.annotation(ChecksAnnotation).checks;
        }
        return value;
    },
});
const exaxyzLinter =
    () =>
    (view: EditorView): Diagnostic[] => {
        // TODO: REMOVE type casting
        const checks: Array<ConsistencyCheck> = view.state.field(
            checksStateField,
        ) as Array<ConsistencyCheck>;

        if (!checks) return [];
        if (Object.keys(checks).length === 0) return [];

        return checks
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

export default exaxyzLinter;
