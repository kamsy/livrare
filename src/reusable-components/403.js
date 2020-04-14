import React from "react";
import { Link } from "react-router-dom";
import { Icon403 } from "./svgs";
import { url } from "../App";
import "../scss/error.scss";

const Page_403 = () => (
    <div className={`error-page `}>
        <div className="error-wrapper d-flx-c al-i-c">
            <h4>Forbidden</h4>
            <div className="image">
                <Icon403 />
            </div>
            <div className="err-text-wrapper">
                <p className="mb-2">
                    Sorry, you don't have access to this page.
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

export default Page_403;
