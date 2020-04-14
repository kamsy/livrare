import React from "react";
import { Col, Row } from "antd";

export default ({ imgSrc, name, stars, location, category, edt, minOrder }) => (
    <Row className="pizarria-card">
        <div className="floating-rating"></div>
        <Col className="left-col">
            <img src={imgSrc} alt={`${name} pizza`} />
        </Col>
        <Col className="right-col">
            <span>{name}</span>
            <span>{location}</span>
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
        </Col>
    </Row>
);
