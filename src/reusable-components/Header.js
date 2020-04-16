import React, { PureComponent } from "react";
import "../scss/header.scss";
import { NavLink } from "react-router-dom";
import { Row, Col, Button } from "antd";
import Logo from "../assets/header-logo.png";
class Header extends PureComponent {
    render() {
        const linksArr = [
            {
                key: 0,
                link: "/about",
                name: "About Us"
            },
            {
                key: 1,
                link: "/how-it-works",
                name: "How it Works"
            },
            {
                key: 2,
                link: "/registration",
                name: "Registration"
            },
            {
                key: 3,
                link: "/restaurant-registration",
                name: "Restaurant Registration"
            },
            {
                key: 4,
                link: "/contact",
                name: "Contact"
            }
        ];

        return (
            <Row className="header" justify="space-between" align="middle">
                <Col className="left-container">
                    <NavLink
                        to="/"
                        activeClassName={""}
                        data-testid="route-home-from-header">
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </Col>
                <Col className="right-container col-11">
                    <Row align="middle">
                        <ul>
                            {linksArr.map(({ key, link, name }) => (
                                <li key={key}>
                                    <NavLink to={link} activeClassName={""} data-testid='nav-links'>
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <Button className="login-btn">Login</Button>
                    </Row>
                </Col>

                <div className="uk-inline" data-testid='hamburger-container'>
                    <span
                        id="burger-cont"
                        className="burger-cont uk-button uk-button-default"
                        type="button">
                        <span />
                        <span />
                        <span />
                    </span>
                    <div
                        className="sidebar"
                        id="sidebar"
                        data-testid="burger-dropdown"
                        uk-dropdown="mode: click;">
                        <Col className="right-container col-11">
                            <Row align="middle">
                                <ul>
                                    {linksArr.map(({ key, link, name }) => (
                                        <li key={key}>
                                            <NavLink
                                                to={link}
                                                activeClassName={""}>
                                                {name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="login-btn">Login</Button>
                            </Row>
                        </Col>
                    </div>
                </div>
            </Row>
        );
    }
}

export default Header;
