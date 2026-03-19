export function copyToClipboard(text: string, callback: () => void) {
    navigator.clipboard.writeText(text);

    if (callback) callback();
}

/**
 * Copies text to the clipboard without throwing.
 *
 * Why we need this: navigator.clipboard.writeText() requires the document to have
 * focus (browser security / user gesture). When the document is not focused—e.g.
 * in Cypress/Playwright (test runner or another window has focus) or when the
 * user gesture context is lost before the async call runs—the API rejects with
 * NotAllowedError. If that rejection is unhandled, it surfaces as "Uncaught (in
 * promise)" and causes flaky test failures. This helper catches any rejection
 * and resolves to false instead, so callers can skip the success message and
 * tests no longer see an uncaught error.
 *
 * @returns Promise that resolves to true if copy succeeded, false otherwise.
 */
export function copyToClipboardSafe(text: string): Promise<boolean> {
    if (!text) return Promise.resolve(false);
    if (typeof navigator?.clipboard?.writeText !== "function") {
        return Promise.resolve(false);
    }
    return navigator.clipboard.writeText(text).then(
        () => true,
        () => false,
    );
}
