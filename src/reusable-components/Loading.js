import React from "react";
import "../scss/loading.scss";
export default ({ loaded }) => {
    return (
        <div className={`${loaded} pizza-cont`}>
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
    );
};
