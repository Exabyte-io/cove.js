/* eslint-disable react/jsx-props-no-spreading */
import setClass from "classnames";
import React, { useEffect } from "react";
import { FullScreen, FullScreenProps, useFullScreenHandle } from "react-full-screen";

interface FullscreenHandlerComponent extends Omit<FullScreenProps, "handle"> {
    enabled: boolean;
}

function FullscreenHandlerComponent({ enabled, ...props }: FullscreenHandlerComponent) {
    const handle = useFullScreenHandle();

    useEffect(() => {
        if (enabled) {
            handle.enter();
        } else {
            handle.exit();
        }
    }, [enabled]);

    return <FullScreen {...props} handle={handle} />;
}

const FullscreenComponentMixin = (superclass: React.ComponentClass) =>
    class extends superclass {
        constructor(props: never) {
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
            } else {
                this.setState({ isFullscreen: true });
            }
        }

        // eslint-disable-next-line class-methods-use-this
        get FullscreenHandlerComponent() {
            return FullscreenHandlerComponent;
        }

        onFullscreen(isFullscreen: boolean) {
            this.setState({ isFullscreen });
        }

        render() {
            return (
                <this.FullscreenHandlerComponent
                    // @ts-ignore
                    className={setClass(this.props.className)}
                    enabled={this.state.isFullscreen}
                    onChange={this.onFullscreen}>
                    {super.render()}
                </this.FullscreenHandlerComponent>
            );
        }
    };

export default FullscreenComponentMixin;
