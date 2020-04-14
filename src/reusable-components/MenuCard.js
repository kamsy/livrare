import React from "react";
import { Col, Row } from "antd";

export default ({ imgSrc, name, description }) => (
    <Col className="menu-card" md={24} lg={12} xl={12}>
        <img src={imgSrc} alt={`${name} pizza`} />
        <Row>
            <span>{name}</span>
            <span>{description}</span>
        </Row>
    </Col>
);
