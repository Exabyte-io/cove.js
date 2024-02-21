import { Diagnostic } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import { ConsistencyCheck } from "@mat3ra/esse/lib/js/types";
declare const linterGenerator: (checks: ConsistencyCheck[]) => (view: EditorView) => Diagnostic[];
export { linterGenerator };
