import React from 'react';

function JupyterLiteSession(props: {URL: string, defaultNotebookPath: string}) {

    const ORIGIN_URL = "https://jupyterlite.mat3ra.com";
    const IFRAME_ID = "jupyter-lite-iframe";
    const DEFAULT_NOTEBOOK_PATH = "api-examples/other/materials_designer/Introduction.ipynb";

    return (
        <iframe
            name="jupyterlite"
            title="JupyterLite"
            id={IFRAME_ID}
            src={`${ORIGIN_URL}/lab/tree?path=${DEFAULT_NOTEBOOK_PATH}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads"
            width="100%"
            height="100%"
        />
    )
}

export default JupyterLiteSession;
