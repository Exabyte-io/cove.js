import React, { useEffect, useState } from "react";

import PyodideContext from "./PyodideContext";

interface PyodideLoaderProps {
    url?: string;
    children: React.ReactNode;
    triggerLoad?: boolean;
}

declare global {
    interface Window {
        loadPyodide: () => Promise<any>;
    }
}

const defaultSourceUrl = "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js";
const importsUrl =
    "https://raw.githubusercontent.com/Exabyte-io/api-examples/48f86e29c069fc0205216c50b1b98c19634a6445/other/pyodide/imports.py";

function PyodideLoader({
    url = defaultSourceUrl,
    children,
    triggerLoad = true,
}: PyodideLoaderProps) {
    const [pyodide, setPyodide] = useState<any>(null);
    const [pyodideInitialized, setPyodideInitialized] = useState(false);

    const loadScript = (src: string) => {
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
            await loadScript(url);
            const loadedPyodide = await window.loadPyodide();
            await loadedPyodide.loadPackage("micropip");

            const response = await fetch(importsUrl);
            const pythonCode = await response.text();
            await loadedPyodide.runPythonAsync(pythonCode);

            setPyodide(loadedPyodide);
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

    return <PyodideContext.Provider value={pyodide}>{children}</PyodideContext.Provider>;
}

export default PyodideLoader;
