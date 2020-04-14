import React from "react";
import { Col, Row } from "antd";
import ReactStars from "react-stars";
export default ({ imgSrc, name, stars, location, category, edt, minOrder }) => (
    <Row className="pizarria-card">
        <Col className="left-col">
            <img src={imgSrc} alt={`${name} pizza`} />
        </Col>
        <Col className="right-col">
            <div className="floating-ratings">
                <small>Based on 26 reviews</small>
                <ReactStars
                    count={5}
                    value={stars}
                    edit={false}
                    size={20}
                    color2="#F8B80C"
                    color1="#ABABAB"
                    className="stars-container"
                />
            </div>
            <span>{name}</span>
            <span>{location}</span>
            <Row className="details">
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
