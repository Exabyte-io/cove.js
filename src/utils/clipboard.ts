export function copyToClipboard(text: string, callback: () => void) {
    navigator.clipboard.writeText(text);

    if (callback) callback();
}
