import React from "react";
import { FullScreenProps } from "react-full-screen";
interface FullscreenHandlerComponent extends Omit<FullScreenProps, "handle"> {
    enabled: boolean;
}
declare function FullscreenHandlerComponent({ enabled, ...props }: FullscreenHandlerComponent): React.JSX.Element;
declare const FullscreenComponentMixin: (superclass: React.ComponentClass) => {
    new (props: never): {
        toggleFullscreen(): void;
        readonly FullscreenHandlerComponent: typeof FullscreenHandlerComponent;
        onFullscreen(isFullscreen: boolean): void;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<any>, nextContext: any): void;
    };
    propTypes?: React.WeakValidationMap<{}> | undefined;
    contextType?: React.Context<any> | undefined;
    contextTypes?: import("prop-types").ValidationMap<any> | undefined;
    childContextTypes?: import("prop-types").ValidationMap<any> | undefined;
    defaultProps?: Partial<{}> | undefined;
    displayName?: string | undefined;
    getDerivedStateFromProps?: React.GetDerivedStateFromProps<{}, any> | undefined;
    getDerivedStateFromError?: React.GetDerivedStateFromError<{}, any> | undefined;
};
export default FullscreenComponentMixin;
