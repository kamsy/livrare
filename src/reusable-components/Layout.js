import React, { PureComponent } from "react";
import Header from "./Header";
import "../scss/layout.scss";
import Footer from "./Footer";

class Layout extends PureComponent {
    state = { status: "close" };
    componentDidMount() {}
    render() {
        return (
            <div className="layout">
                <Header />

                <div className="children">
                    {React.cloneElement(this.props.children, {
                        title: this.props.title
                    })}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;
