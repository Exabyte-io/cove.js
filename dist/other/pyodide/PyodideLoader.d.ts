interface PyodideLoaderProps {
    url?: string;
    onLoad: (pyodide: any) => void;
    triggerLoad?: boolean;
}
declare global {
    interface Window {
        loadPyodide: () => Promise<any>;
        pyodide: any;
    }
}
/**
 * Loads Pyodide in window.pyodide and initializes it with micropip to allow for packages installation.
 * @param url The URL to load Pyodide from.
 * @param onLoad A callback that receives the Pyodide instance once it is loaded.
 * @param triggerLoad A variable for conditional loading of Pyodide.
 * @constructor
 */
declare function PyodideLoader({ url, onLoad, triggerLoad }: PyodideLoaderProps): null;
export default PyodideLoader;
