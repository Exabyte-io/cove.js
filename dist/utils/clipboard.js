export function copyToClipboard(text, callback) {
    navigator.clipboard.writeText(text);
    if (callback)
        callback();
}
