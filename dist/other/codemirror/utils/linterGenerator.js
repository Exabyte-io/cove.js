import _ from "underscore";
const linterGenerator = (checks) => {
    return (view) => {
        const { doc } = view.state;
        if (!checks && !doc)
            return [];
        const warnings = checks.map((check) => {
            const keyFragments = check.key.split(".");
            const keyStr = _.last(keyFragments);
            if (!keyStr)
                return null;
            const key = parseInt(keyStr, 10);
            const lineNumber = key + 1; // codemirror counts lines from 1
            return {
                message: check.message,
                severity: check.severity,
                from: doc.line(lineNumber).from,
                to: doc.line(lineNumber).to,
            };
        });
        return warnings.filter(Boolean);
    };
};
export { linterGenerator };
