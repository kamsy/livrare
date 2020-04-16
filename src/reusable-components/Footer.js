import React from "react";
import "../scss/footer.scss";
import { NavLink } from "react-router-dom";
import { Row, Col, Button } from "antd";
import Logo from "../assets/header-logo.png";
import Tomatoes from "../assets/footer-tomatoes.png";
import { FBSvg, PinterCrest, TwitterSvg } from "./svgs";
const Footer = () => {
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
        <Row className="footer" justify="space-between" id='footer'>
            <Col className="left-container">
                <NavLink to="/" activeClassName={""} data-testid="route-home-from-footer">
                    <img src={Logo} alt="logo" />
                </NavLink>
                <Row className="svgs-container" justify="space-between">
                    <FBSvg />
                    <PinterCrest />
                    <TwitterSvg />
                </Row>
            </Col>

            <Col className="middle-container col-11">
                <Row align="middle" justify="center">
                    <ul>
                        {linksArr.map(({ key, link, name }) => (
                            <li key={key}>
                                <NavLink to={link} activeClassName={""}>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <Button className="login-btn">Login</Button>
                </Row>
            </Col>
            <Col className="right-container">
                <img src={Tomatoes} alt="logo" />
            </Col>
            <div className="floating-container">
                <span>Ordering Pizza Online</span>
                <span>
                    Copyright © 2017 - Order Food Online - Pizza Delivery at
                    Home | Pizzalivrare.ro
                </span>
            </div>
        </Row>
    );
};

export default Footer;
