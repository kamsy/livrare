import React from "react";
import Logo from "../assets/central-logo.png";
import "../scss/pages/landing.scss";
import { Row, Col, Button, Input } from "antd";
import { ArrowDropdown } from "../reusable-components/svgs";
import { SearchOutlined } from "@ant-design/icons";
import TopRestaurantsCard from "../reusable-components/TopRestaurantsCard";
import Restaurant1 from "../assets/location1.png";
import Restaurant2 from "../assets/location2.png";
import Restaurant3 from "../assets/location3.png";
import Menu1 from "../assets/menu1.png";
import Menu2 from "../assets/menu2.png";
import Menu3 from "../assets/menu3.png";
import Menu4 from "../assets/menu4.png";
import Chef from "../assets/chef.png";
import OurPromise from "../assets/our-promise-image.png";
import MenuCard from "../reusable-components/MenuCard";

export const Landing = () => {
    return (
        <div className="home-page">
            <div className="section1">
                <div className="section1-underlay" />

                <Col span={24}>
                    <Row justify="center">
                        <img src={Logo} alt="logo" />
                    </Row>
                    <Row justify="center" className="row2">
                        <span>Order Pizaa From The Comfort Of Your Home</span>
                    </Row>
                    <Row justify="center" className="row3">
                        <Col>
                            <Input
                                placeholder="Search your city"
                                suffix={<ArrowDropdown />}
                                prefix={
                                    <SearchOutlined
                                        style={{
                                            fontSize: "17.5px",
                                            marginRight: "35px",
                                            color: "#FFFFFF"
                                        }}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <Button className="search-btn">Search</Button>
                        </Col>
                    </Row>
                </Col>
            </div>

            <div className="section2">
                <Col>
                    <Row justify="center">
                        <span>Top Restaurants</span>
                    </Row>
                    <Row uk-scrollspy="cls: uk-animation-fade; target: .top-restaurant-card; delay: 300;">
                        <TopRestaurantsCard
                            imgSrc={Restaurant1}
                            name="Dodo pizza"
                            location="Herbert Macaulay"
                            category="Pizza, Other, Grill & Steak"
                            edt="60 mins"
                            minOrder="3"
                        />

                        <TopRestaurantsCard
                            imgSrc={Restaurant2}
                            name="Dodo pizza"
                            location="Herbert Macaulay"
                            category="Pizza, Other, Grill & Steak"
                            edt="60 mins"
                            minOrder="3"
                        />

                        <TopRestaurantsCard
                            imgSrc={Restaurant3}
                            name="Dodo pizza"
                            location="Herbert Macaulay"
                            category="Pizza, Other, Grill & Steak"
                            edt="60 mins"
                            minOrder="3"
                        />
                    </Row>
                </Col>
            </div>

            <div className="section3">
                <Col>
                    <Row justify="center">
                        <span>Menu</span>
                    </Row>
                    <Row
                        justify="center"
                        uk-scrollspy="cls: uk-animation-fade; target: .menu-card; delay: 300;">
                        <MenuCard
                            imgSrc={Menu1}
                            name="Margherita"
                            description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                        />

                        <MenuCard
                            imgSrc={Menu2}
                            name="Margherita"
                            description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                        />

                        <MenuCard
                            imgSrc={Menu3}
                            name="Margherita"
                            description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                        />
                        <MenuCard
                            imgSrc={Menu4}
                            name="Margherita"
                            description="Pizza Margherita Red sauce, mozzarella, olive oil, oregano, sliced ​​tomatoes"
                        />
                    </Row>
                </Col>
            </div>

            <div className="section4">
                <Row justify="space-between" align="middle">
                    <Col uk-scrollspy="cls: uk-animation-slide-left;">
                        <img src={Chef} alt="pizza chef" />
                    </Col>
                    <Col uk-scrollspy="cls: uk-animation-slide-right;">
                        <span>trusted chefs</span>
                        <span>
                            Gate Gourmet's global team of accredited chefs are
                            known for designing and preparing delicious,
                            nutritious and unique menus that meet any
                            specification and delight the passenger. They also
                            are responsible for helping ensure culinary
                            consistency and top food quality across our global
                            operation.
                        </span>
                    </Col>
                </Row>
            </div>
            <div className="section5">
                <Row>
                    <Col>
                        <span>our promise</span>
                        <span>
                            Like so many of you, the founders of Livrare care
                            very much about the quality and source of the food
                            we feed our friends, families, and loved ones. Not
                            only where it comes from, but how it's produced, its
                            quality and its impact on the world around us. So we
                            promise to give only the best to our Friends
                        </span>
                    </Col>
                    <Col uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300;">
                        <img src={OurPromise} alt="pizza" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
