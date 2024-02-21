import { useEffect, useState } from "react";
const defaultSourceUrl = "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js";
/**
 * Loads Pyodide in window.pyodide and initializes it with micropip to allow for packages installation.
 * @param url The URL to load Pyodide from.
 * @param onLoad A callback that receives the Pyodide instance once it is loaded.
 * @param triggerLoad A variable for conditional loading of Pyodide.
 * @constructor
 */
function PyodideLoader({ url = defaultSourceUrl, onLoad, triggerLoad = true }) {
    const [pyodide, setPyodide] = useState(null);
    const [pyodideInitialized, setPyodideInitialized] = useState(false);
    const createScriptTag = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.body.appendChild(script);
        });
    };
    const initializePyodide = async () => {
        try {
            if (!window.pyodide) {
                await createScriptTag(url);
                window.pyodide = await window.loadPyodide();
                await window.pyodide.loadPackage("micropip");
            }
            setPyodide(window.pyodide);
            setPyodideInitialized(true);
        }
        catch (error) {
            console.error("Could not initialize Pyodide", error);
        }
    };
    useEffect(() => {
        if (triggerLoad && !pyodideInitialized) {
            initializePyodide();
        }
    }, [triggerLoad, pyodideInitialized]);
    useEffect(() => {
        if (pyodideInitialized) {
            onLoad(pyodide);
        }
    }, [pyodideInitialized, pyodide]);
    return null;
}
export default PyodideLoader;
