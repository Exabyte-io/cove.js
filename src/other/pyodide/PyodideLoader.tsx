import { useEffect, useState } from "react";

interface PyodideLoaderProps {
    url?: string;
    // @ts-ignore
    getPyodide: (pyodide: any) => void;
    triggerLoad?: boolean;
}

declare global {
    interface Window {
        // @ts-ignore
        loadPyodide: () => Promise<any>;
        // @ts-ignore
        pyodide: any;
    }
}

const defaultSourceUrl = "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js";

/**
 * Loads Pyodide in window.pyodide and initializes it with micropip to allow for packages installation.
 * @param url The URL to load Pyodide from.
 * @param getPyodide A callback that receives the Pyodide instance once it is loaded.
 * @param triggerLoad A variable that triggers the loading of Pyodide. If true, Pyodide will be loaded.
 * @constructor
 */
function PyodideLoader({
    url = defaultSourceUrl,
    getPyodide,
    triggerLoad = true,
}: PyodideLoaderProps) {
    const [pyodide, setPyodide] = useState<any>(null);
    const [pyodideInitialized, setPyodideInitialized] = useState(false);

    const createScriptTag = (src: string) => {
        return new Promise<void>((resolve, reject) => {
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
        } catch (error) {
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
            getPyodide(pyodide);
        }
    }, [pyodideInitialized, pyodide]);

    return null;
}

export default PyodideLoader;
