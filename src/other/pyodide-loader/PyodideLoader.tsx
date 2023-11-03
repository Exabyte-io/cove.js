import React from "react";

interface PyodideLoaderProps {
    url: string;
    children?: React.ReactNode;
}

// eslint-disable-next-line
class PyodideLoader extends React.Component<PyodideLoaderProps> {
    // eslint-disable-next-line
    constructor(props: PyodideLoaderProps) {
        super(props);
    }

    render() {
        const { children, url } = this.props;
        return (
            <div>
                <script src={url} />
                {children}
            </div>
        );
    }
}

export default PyodideLoader;
