import React, { Component } from "react";

export class ErrorHandler extends Component {
    state = {
        error: false,
        info: ""
    };

    static getDerivedStateFromError(error) {
        if (error) {
            // Update state so the next render will show the fallback UI.
            return { error: true };
        }
        return { error: true };
    }
    componentDidCatch(info) {
        this.setState({ error: true, info });
    }

    render() {
        const { error } = this.state;

        if (error) {
            return (
                <div className="">
                    <section>
                        <h1>Whoops!!!, an error occurred</h1>
                        <span>
                            <a href="/">Click here to go back to home</a>
                        </span>
                    </section>
                </div>
            );
        } else if (!error) {
            return this.props.children;
        }
    }
}

export default ErrorHandler;
