import JSZip from "jszip";
// @ts-ignore
import * as JSZipUtils from "jszip-utils";
import s from "underscore.string";

/**
 * Downloads the specified storage file.
 * @param url {String} URL to download.
 */
export function downloadURL(url: string) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = "true";
    const event = new MouseEvent("click");
    a.dispatchEvent(event);
}

/**
 * Creates and downloads zip file.
 * @param zipName {String} Zip file name (without extension).
 * @param files {Object[]} Job files to add to created zip.
 * @param onFileComplete {Function} Function to track progress.
 * Called each time when one file downloading completed. Downloaded file is passed.
 * @param onError {Function} Callback called when file downloading fails. Error is passed as arg.
 * @param onComplete {Function} Complete callback. Called when zip file saving completed.
 * @param prefix {String}
 */
type File = { key: string; signedUrl: string };

export function downloadZip(
    zipName: string,
    files: File[],
    onFileComplete: (file: File) => void,
    onError: (file: File, err: Error) => void,
    onComplete: () => void,
    prefix: string,
) {
    const zip = new JSZip();
    let counter = 0;
    files.forEach((file) => {
        JSZipUtils.getBinaryContent(file.signedUrl, (err: Error, data: any) => {
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
                    (<any>window).saveAs(blob, `${zipName}.zip`);
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
export function exportToDisk(content: string | number | boolean, name = "file", extension = "txt") {
    const pom = document.createElement("a");
    pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    pom.setAttribute("download", s.sprintf(`%s.${extension}`, name));
    pom.click();
}
