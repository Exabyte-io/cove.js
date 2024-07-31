/* eslint-disable react/jsx-props-no-spreading */
import setClass from "classnames";
import React, { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function FullscreenHandlerComponent({ enabled, ...props }) {
    const handle = useFullScreenHandle();
    useEffect(() => {
        if (enabled) {
            handle.enter();
        }
        else {
            handle.exit();
        }
    }, [enabled]);
    return React.createElement(FullScreen, { ...props, handle: handle });
}
const FullscreenComponentMixin = (superclass) => class extends superclass {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            isFullscreen: false,
        };
        this.onFullscreen = this.onFullscreen.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
    }
    toggleFullscreen() {
        if (this.state.isFullscreen) {
            this.setState({ isFullscreen: false });
        }
        else {
            this.setState({ isFullscreen: true });
        }
    }
    // eslint-disable-next-line class-methods-use-this
    get FullscreenHandlerComponent() {
        return FullscreenHandlerComponent;
    }
    onFullscreen(isFullscreen) {
        this.setState({ isFullscreen });
    }
    render() {
        return (React.createElement(this.FullscreenHandlerComponent
        // @ts-ignore
        , { 
            // @ts-ignore
            className: setClass(this.props.className), enabled: this.state.isFullscreen, onChange: this.onFullscreen }, super.render()));
    }
};
export default FullscreenComponentMixin;
