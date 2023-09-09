import Button from "@mui/material/Button";
import React, { ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
    backup: ReactNode | null;
}

interface ErrorBoundaryProps {
    children: ReactNode;
    restore?: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            backup: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("Caught error:", error, errorInfo);

        // eslint-disable-next-line react/destructuring-assignment
        if (this.props.restore) {
            this.restore();
        }
    }

    restore = (): void => {
        this.setState({ hasError: false });
    };

    render(): ReactNode {
        const { backup, hasError } = this.state;
        const { children, restore: restore1 } = this.props;
        if (hasError && !restore1) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <button type="button" onClick={this.restore}>
                        Try to restore
                    </button>
                </div>
            );
        }

        if (backup === null) {
            this.setState({ backup: children });
        }

        return children;
    }
}

export default ErrorBoundary;
