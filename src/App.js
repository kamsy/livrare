import React, { Component, Suspense } from "react";
import { Spin } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { history } from "./reusable-components/history";

import Page_404 from "./reusable-components/404";
import Page_403 from "./reusable-components/403";
import Page_500 from "./reusable-components/500";
import Layout from "./reusable-components/Layout";
import { Landing } from "./pages/Landing";
import Loading from "./reusable-components/Loading";
import { Restaurants } from "./pages/Restaurants";
export const loaderTimer = 1000;
export const url = "/";
// variable to hold auth status and also functions to convert it
export const fakeAuth = {
    isAuthenticated: true,
    authenticate() {
        return (this.isAuthenticated = true);
    },
    signout() {
        return (this.isAuthenticated = false);
    }
};

const WrappedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout {...props} fakeAuth={fakeAuth}>
                <Component {...rest} />
            </Layout>
        )}
    />
);

class App extends Component {
    state = { loading: true };
    render() {
        const { loading } = this.state;
        loading &&
            setTimeout(() => {
                this.setState({ loading: false });
            }, loaderTimer);
        return (
            <>
                <Loading loading={loading} />

                <Suspense fallback={<Spin tip="Loading..." />}>
                    <Router history={history}>
                        <Switch>
                            <WrappedRoute
                                eaxct
                                path={`${url}landing`}
                                component={Landing}
                            />
                            <WrappedRoute
                                eaxct
                                path={`${url}restaurants`}
                                component={Restaurants}
                            />
                            <Route
                                eaxct
                                path={`${url}#/500`}
                                component={Page_500}
                            />
                            <Route
                                exact
                                path={`${url}#/403`}
                                component={Page_403}
                            />
                            <Route
                                exact
                                path={`${url}#/404`}
                                component={Page_404}
                            />
                            <Route
                                path="/"
                                exact
                                render={props => (
                                    <Redirect
                                        to={{
                                            pathname: `${url}landing`
                                        }}
                                        {...props}
                                    />
                                )}
                            />
                            <Route
                                path="*"
                                render={props => (
                                    <Redirect
                                        to={{
                                            pathname: `${url}#/404`
                                        }}
                                        {...props}
                                    />
                                )}
                            />
                        </Switch>
                    </Router>
                </Suspense>
            </>
        );
    }
}

export default App;
