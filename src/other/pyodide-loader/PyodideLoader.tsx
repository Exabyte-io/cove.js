import React from "react";

interface PyodideLoaderProps {
    url: string;
    children?: React.ReactNode;
}

interface PyodideLoaderState {
    url: string;
    pyodideInitialized: boolean;
    pyodide?: any;
}

const defaultUrl = "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js";

class PyodideLoader extends React.Component<PyodideLoaderProps, PyodideLoaderState> {
    constructor(props: PyodideLoaderProps) {
        super(props);
        this.state = {
            url: props.url || defaultUrl,
            pyodideInitialized: false,
            pyodide: null,
        };
    }

    componentDidMount(): void {
        this.initializePyodide();
    }

    async initializePyodide() {
        const { pyodide, pyodideInitialized, url } = this.state;
        if (!pyodideInitialized) {
            const script =
                document.querySelector(".pyodide-script") || document.createElement("script");
            if (!document.querySelector(".pyodide-script")) {
                // @ts-ignore
                script.src = url;
                script.className = "pyodide-script";
                document.body.appendChild(script);
                await new Promise<void>((resolve, reject) => {
                    // @ts-ignore
                    script.onload = () => {
                        this.setState({ pyodideInitialized: true });
                        resolve();
                    };
                    // @ts-ignore
                    script.onerror = reject;
                });
            }

            // @ts-ignore
            if (typeof window.loadPyodide === "undefined") {
                throw new Error("loadPyodide is not available. Please check the CDN URL.");
            }

            // @ts-ignore
            this.setState({ pyodide: window.loadPyodide() });
            await pyodide.loadPackage("micropip");

            // TODO: add caching for our code as well
            const response = await fetch(
                "https://raw.githubusercontent.com/Exabyte-io/api-examples/48f86e29c069fc0205216c50b1b98c19634a6445/other/pyodide/imports.py",
            );
            const pythonCode = await response.text();
            await pyodide.runPythonAsync(pythonCode);

            // document.pyodideMplTarget = document.getElementById("pyodide-plot-target");
        }
    }

    render() {
        const { children } = this.props;
        return <div>{children}</div>;
    }
}

export default PyodideLoader;
