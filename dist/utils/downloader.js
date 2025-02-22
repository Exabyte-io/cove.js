import JSZip from "jszip";
// @ts-ignore
import * as JSZipUtils from "jszip-utils";
/**
 * Downloads the specified storage file.
 * @param url {String} URL to download.
 */
export function downloadURL(url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = "true";
    const event = new MouseEvent("click");
    a.dispatchEvent(event);
}
export function downloadZip(zipName, files, onFileComplete, onError, onComplete, prefix) {
    const zip = new JSZip();
    let counter = 0;
    files.forEach((file) => {
        JSZipUtils.getBinaryContent(file.signedUrl, (err, data) => {
            if (err) {
                onError(file, err);
            }
            zip.file(file.key.replace(prefix, ""), data, { binary: true });
            onFileComplete(file);
            // eslint-disable-next-line no-plusplus
            counter++;
            if (counter === files.length) {
                zip.generateAsync({ type: "blob" }).then((blob) => {
                    // eslint-disable-next-line no-undef
                    window.saveAs(blob, `${zipName}.zip`);
                    onComplete();
                });
            }
        });
    });
}
export function exportToDisk(content, name = "file", extension = "txt") {
    const pom = document.createElement("a");
    pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    pom.setAttribute("download", `${name}.${extension}`);
    pom.click();
}
export function saveStringDataToFile(strData, filename = "data.txt") {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = filename;
    link.href = strData;
    link.click();
    document.body.removeChild(link);
}
export function saveImageDataToFile(imgData, filename = "screenshot.png") {
    try {
        saveStringDataToFile(imgData, `${filename}`);
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * Exports and downloads the content to disk. Browser compatibility with IE.
 * @param content {String} Content to be saved in downloaded file
 * @param name {String} File name to be written on disk.
 * @param extension {String} File extension.
 * @param mime {String} type of the content.
 * Source: https://github.com/kennethjiang/js-file-download/blob/master/file-download.js
 */
export const exportToDiskLegacy = function exportToDisk(content, name = "file", extension = "txt", mime = "application/octet-stream") {
    const blob = new Blob([content], { type: mime });
    const filename = `${name}.${extension}`;
    // @ts-ignore
    if (typeof window.navigator.msSaveBlob !== "undefined") {
        // IE workaround for "HTML7007: One or more blob URLs were
        // revoked by closing the blob for which they were created.
        // These URLs will no longer resolve as the data backing
        // the URL has been freed."
        // @ts-ignore
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        const blobURL = window.URL.createObjectURL(blob);
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", filename);
        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === "undefined")
            tempLink.setAttribute("target", "_blank");
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
    }
};
