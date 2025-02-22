/**
 * Downloads the specified storage file.
 * @param url {String} URL to download.
 */
export declare function downloadURL(url: string): void;
/**
 * Creates and downloads a zip file.
 * @param zipName {String} Zip file name (without extension).
 * @param files {Object[]} Job files to add to created zip.
 * @param onFileComplete {Function} Function to track progress.
 * Called each time when one file downloading completed. Downloaded file is passed.
 * @param onError {Function} Callback called when file downloading fails. Error is passed as arg.
 * @param onComplete {Function} Complete callback. Called when zip file saving completed.
 * @param prefix {String}
 */
type File = {
    key: string;
    signedUrl: string;
};
export declare function downloadZip(zipName: string, files: File[], onFileComplete: (file: File) => void, onError: (file: File, err: Error) => void, onComplete: () => void, prefix: string): void;
export declare function exportToDisk(content: string | number | boolean, name?: string, extension?: string): void;
export declare function saveStringDataToFile(strData: string, filename?: string): void;
export declare function saveImageDataToFile(imgData: string, filename?: string): void;
/**
 * Exports and downloads the content to disk. Browser compatibility with IE.
 * @param content {String} Content to be saved in downloaded file
 * @param name {String} File name to be written on disk.
 * @param extension {String} File extension.
 * @param mime {String} type of the content.
 * Source: https://github.com/kennethjiang/js-file-download/blob/master/file-download.js
 */
export declare const exportToDiskLegacy: (content: string, name?: string, extension?: string, mime?: string) => void;
export {};
