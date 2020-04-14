import React from "react";
import SliderBg1 from "../assets/page-2-bg.png";
import SliderBg2 from "../assets/page-3-bg.png";
import "../scss/pages/restaurants.scss";
import { Tabs, Col, Row, Pagination, Button } from "antd";
import PizarriaCard from "../reusable-components/PizarriaCard";
import Restaurant1 from "../assets/location1.png";
import Restaurant2 from "../assets/location2.png";
import Restaurant3 from "../assets/location3.png";
import Restaurant from "../assets/big-restaurant-image.png";
import Menu4 from "../assets/menu4.png";
import MenuCard2 from "../reusable-components/MenuCard2";
const { TabPane } = Tabs;
export const Restaurants = () => {
    function itemRender(current, type, originalElement) {
        if (type === "prev") {
            return <span>Previous</span>;
        }
        if (type === "next") {
            return <span>Next Page</span>;
        }
        return originalElement;
    }

    const recommenedArr = [
        { key: 1, name: "Gambino's Pizza" },
        { key: 2, name: "Gambino's Pizza" },
        { key: 3, name: "Gambino's Pizza" },
        { key: 4, name: "Gambino's Pizza" },
        { key: 5, name: "Gambino's Pizza" }
    ];

    const timeTable = [
        { key: 1, name: "Monday", time: "10:00 - 11:00pm" },
        { key: 2, name: "Tuesday", time: "10:00 - 11:00pm" },
        { key: 3, name: "Wednesday", time: "10:00 - 11:00pm" },
        { key: 4, name: "Thursday", time: "10:00 - 11:00pm" },
        { key: 5, name: "Friday", time: "10:00 - 11:00pm" },
        { key: 6, name: "Saturday", time: "10:00 - 11:00pm" },
        { key: 7, name: "Sunday", time: "10:00 - 11:00pm" }
    ];
    return (
        <div className="restaurants-page">
            <div
                className="section1"
                // tabindex="-1"
                uk-slideshow="animation: fade; pause-on-hover: false; autoplay: true; autoplay-interval: 3000">
                <ul className="uk-slideshow-items">
                    <li>
                        <img src={SliderBg1} alt="" />
                    </li>
                    <li>
                        <img src={SliderBg2} alt="" />
                    </li>
                </ul>
                {/* eslint-disable-next-line */}
                <a
                    className="uk-position-center-left uk-position-small uk-hidden-hover"
                    href="#"
                    uk-slideshow-item="previous"></a>
                {/* eslint-disable-next-line */}
                <a
                    className="uk-position-center-right uk-position-small uk-hidden-hover"
                    href="#"
                    uk-slideshow-item="next"></a>
                <div className="section1-underlay" />
                <span className="overlay-text">
                    Order Pizaa From The Comfort Of Your Home
                </span>
            </div>

            <div className="section2">
                <Tabs defaultActiveKey="1">
                    {/* tab1 content */}
                    <TabPane tab="Choose Pizarria" key="1">
                        <Row>
                            <Col>
                                <Row className="row row-1">
                                    <span>recommended</span>
                                    <ol>
                                        {recommenedArr.map(({ key, name }) => (
                                            <li key={key}>{name}</li>
                                        ))}
                                    </ol>
                                </Row>
                                <Row className="row-2 row">
                                    <span>places</span>
                                    <ol>
                                        {recommenedArr.map(({ key, name }) => (
                                            <li key={key}>{name}</li>
                                        ))}
                                    </ol>
                                </Row>
                            </Col>
                            <Col>
                                <PizarriaCard
                                    imgSrc={Restaurant1}
                                    name="Dodo pizza"
                                    location="Herbert Macaulay"
                                    category="Pizza, Other, Grill & Steak"
                                    edt="60 mins"
                                    minOrder="3"
                                />
                                <PizarriaCard
                                    imgSrc={Restaurant2}
                                    name="Dodo pizza"
                                    location="Herbert Macaulay"
                                    category="Pizza, Other, Grill & Steak"
                                    edt="60 mins"
                                    minOrder="3"
                                />
                                <PizarriaCard
                                    imgSrc={Restaurant3}
                                    name="Dodo pizza"
                                    location="Herbert Macaulay"
                                    category="Pizza, Other, Grill & Steak"
                                    edt="60 mins"
                                    minOrder="3"
                                />

                                <Pagination
                                    defaultCurrent={1}
                                    total={100}
                                    itemRender={itemRender}
                                    onChange={() => {}}
                                />
                            </Col>
                        </Row>
                    </TabPane>

                    {/* tab2 content */}
                    <TabPane tab="Menu" key="2" className="tab2">
                        <Col>
                            <Row>
                                <Col className="image-col">
                                    <img src={Restaurant} alt="restaurant" />
                                </Col>
                                <Col className="right-column">
                                    <Row className="pizarria-card">
                                        <div className="floating-rating"></div>

                                        <Col className="right-col">
                                            <span>Dodo pizza</span>
                                            <span>Herbert Macaulay</span>
                                            <Row
                                                className="details"
                                                justify="space-between">
                                                <Col>
                                                    <span>category</span>
                                                    <span>
                                                        Pizza, Other, Grill &
                                                        Steak
                                                    </span>
                                                </Col>
                                                <Col>
                                                    <span>delivery time</span>
                                                    <span>60 Mins</span>
                                                </Col>
                                                <Col>
                                                    <span>minimum order</span>
                                                    <span>4</span>
                                                </Col>
                                            </Row>
                                            <span className="timetable">
                                                Timetable
                                            </span>
                                            <ul>
                                                {timeTable.map(
                                                    ({ name, time }) => (
                                                        <li>
                                                            <span className="bold">
                                                                {name}:
                                                            </span>
                                                            {time}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="custom-row">
                                <Col>
                                    <Tabs defaultActiveKey="1">
                                        <TabPane
                                            disabled
                                            tab="Category:"
                                            key="0"
                                        />
                                        <TabPane tab="Pizza baby" key="1">
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />

                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                        </TabPane>
                                        <TabPane tab="Pizza medium" key="2">
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                        </TabPane>
                                        <TabPane tab="Pizza large" key="3">
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                            <MenuCard2
                                                imgSrc={Menu4}
                                                name="Margherita"
                                                description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                                            />
                                        </TabPane>
                                    </Tabs>
                                </Col>

                                <Col className="sticky-container-column">
                                    <div
                                        className="sticky-container"
                                        uk-sticky="offset: 24; bottom: #top">
                                        <span className="order">
                                            your order
                                        </span>
                                        <ul>
                                            <li>
                                                <span>1x Dodo</span>
                                                <span>N3900</span>
                                            </li>
                                            <li>
                                                <span>Subtotal</span>
                                                <span>N3900</span>
                                            </li>
                                            <li>
                                                <span>Delivery Cost</span>
                                                <span>N100</span>
                                            </li>
                                            <li>
                                                <span>Total</span>
                                                <span>N4000</span>
                                            </li>
                                        </ul>

                                        <Button className="checkout-btn">
                                            checkout
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};
