import React from "react";

interface PyodideLoaderProps {
    url: string;
    children?: React.ReactNode;
}

interface PyodideLoaderState {
    url: string;
}

const defaultUrl = "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js";

// eslint-disable-next-line
class PyodideLoader extends React.Component<PyodideLoaderProps, PyodideLoaderState> {
    // eslint-disable-next-line
    constructor(props: PyodideLoaderProps) {
        super(props);
        this.state = {
            url: props.url || defaultUrl,
        };
    }

    render() {
        const { children } = this.props;
        const { url } = this.state;
        return (
            <div>
                <script src={url} />
                {children}
            </div>
        );
    }
}

export default PyodideLoader;
