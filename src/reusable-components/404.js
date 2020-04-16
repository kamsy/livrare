import React from "react";
import { Link } from "react-router-dom";
import { Icon404 } from "./svgs";
import { url } from "../App";
import "../scss/error.scss";

const Page_404 = () => (
    <div className={`error-page `}>
        <div className="error-wrapper d-flx-c al-i-c">
            <h4>Error: 404 Unexpected Error</h4>
            <div className="image">
                <Icon404 />
                <div className="rotate-me">
                    <div className="pizza">
                        <div className="slice1">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                        <div className="slice2">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                        <div className="slice3">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                        <div className="slice4">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                        <div className="slice5">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                        <div className="slice6">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                        <div className="slice7">
                            <span role="img" aria-label="slice-of-pizza">
                                🍕
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="err-text-wrapper">
                <p className="mb-2">
                    Sorry, the page you're looking for cannot be accessed.
                </p>
                <p>
                    Either check the URL or{" "}
                    <Link to={`${url}`} className="blue underline csr" data-testid='to-safehouse'>
                        go home
                    </Link>
                    .
                </p>
            </div>
        </div>
    </div>
);

export default Page_404;
