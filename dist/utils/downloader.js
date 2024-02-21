import JSZip from "jszip";
// @ts-ignore
import * as JSZipUtils from "jszip-utils";
import s from "underscore.string";
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
/**
 * Exports and downloads the content.
 * @param content {String} Content to be saved in downloaded file
 * @param name {String} File name to be written on disk.
 * @param extension {String} File extension.
 */
export function exportToDisk(content, name = "file", extension = "txt") {
    const pom = document.createElement("a");
    pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    pom.setAttribute("download", s.sprintf(`%s.${extension}`, name));
    pom.click();
}
