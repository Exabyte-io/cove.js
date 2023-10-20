import setClass from "classnames";
import React from "react";
import Fullscreen from "react-full-screen";

class FullscreenHandlerComponent extends Fullscreen {
    render() {
        // @ts-ignore
        return <div className={this.props.className}>{super.render()}</div>;
    }
}

const FullscreenComponentMixin = (superclass: any) =>
    class extends superclass {
        constructor(props: any) {
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
