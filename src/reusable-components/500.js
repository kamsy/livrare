import React from "react";
import { Link } from "react-router-dom";
import { Icon500 } from "./svgs";
import { url } from "../App";
import "../scss/error.scss";

const Page_500 = () => (
    <div className={`error-page `}>
        <div className="error-wrapper d-flx-c al-i-c">
            <h4>Error: 500 Unexpected Error</h4>
            <div className="image">
                <Icon500 />
            </div>
            <div className="err-text-wrapper">
                <p className="mb-2">
                    An error ocurred and your request couldn’t be completed.
                </p>
                <p>
                    Either check the URL or{" "}
                    <Link to={`${url}`} className="blue underline csr">
                        go home
                    </Link>
                    .
                </p>
            </div>
        </div>
    </div>
);

export default Page_500;
