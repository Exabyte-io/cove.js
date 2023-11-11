import React, { useEffect, useState } from "react";

import PyodideContext from "./PyodideContext";

interface PyodideLoaderProps {
    url?: string;
    children: React.ReactNode;
    triggerLoad?: boolean;
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
    const initializePyodide = async () => {
        const script =
            document.querySelector(".pyodide-script") ?? document.createElement("script");
        if (!document.querySelector(".pyodide-script")) {
            // @ts-ignore
            script.src = url;
            script.className = "pyodide-script";
            document.body.appendChild(script);

            await new Promise<void>((resolve, reject) => {
                // @ts-ignore
                script.onload = resolve;
                // @ts-ignore
                script.onerror = reject;
            });
        }

        const loadedPyodide = await (window as any).loadPyodide();
        await loadedPyodide.loadPackage("micropip");

        const response = await fetch(importsUrl);
        const pythonCode = await response.text();
        await loadedPyodide.runPythonAsync(pythonCode);

        setPyodide(loadedPyodide);
        setPyodideInitialized(true);
    };

    useEffect(() => {
        if (triggerLoad && !pyodideInitialized) initializePyodide();
    }, [url, pyodideInitialized, triggerLoad]);

    return <PyodideContext.Provider value={pyodide}>{children}</PyodideContext.Provider>;
}

export default PyodideLoader;
