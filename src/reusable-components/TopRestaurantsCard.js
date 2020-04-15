import React from "react";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

export default ({ imgSrc, name, location, category, edt, minOrder }) => (
    <Col className="top-restaurant-card" sm={24} md={12} lg={12} xl={8}>
        <Row>
            <img src={imgSrc} alt={`shot ${name} pizza restaurant`} />
            <NavLink to="/restaurants" data-testid="go-to-restaurants-page">
                {name}
            </NavLink>
        </Row>
        <Row>
            <Row>{location}</Row>
            <Row className="details" justify="space-between">
                <Col>
                    <span>category</span>
                    <span>{category}</span>
                </Col>
                <Col>
                    <span>delivery time</span>
                    <span>{edt}</span>
                </Col>
                <Col>
                    <span>minimum order</span>
                    <span>{minOrder}</span>
                </Col>
            </Row>
        </Row>
    </Col>
);
