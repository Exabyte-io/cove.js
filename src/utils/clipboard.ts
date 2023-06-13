import $ from "jquery";
/*
 * @summary Uses JQuery and browser native functionality to copy text to clipboard.
 *          Temporarily creates a hidden input element.
 */
export function copyToClipboard(text: string, callback: () => void) {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    if (callback) callback();
}
