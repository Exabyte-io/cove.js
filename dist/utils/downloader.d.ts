/**
 * Downloads the specified storage file.
 * @param url {String} URL to download.
 */
export declare function downloadURL(url: string): void;
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
type File = {
    key: string;
    signedUrl: string;
};
export declare function downloadZip(zipName: string, files: File[], onFileComplete: (file: File) => void, onError: (file: File, err: Error) => void, onComplete: () => void, prefix: string): void;
/**
 * Exports and downloads the content.
 * @param content {String} Content to be saved in downloaded file
 * @param name {String} File name to be written on disk.
 * @param extension {String} File extension.
 */
export declare function exportToDisk(content: string | number | boolean, name?: string, extension?: string): void;
export {};
