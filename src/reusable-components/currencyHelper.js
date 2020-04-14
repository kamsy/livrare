import React from "react";
import NumberFormat from "react-number-format";

export const formatMoney = amount => (
    <NumberFormat
        value={amount}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        fixedDecimalScale={true}
        prefix={"₦"}
        renderText={value => value}
    />
);

export const formatNumber = amount => (
    <NumberFormat
        value={amount}
        displayType={"text"}
        thousandSeparator={true}
    renderText={value => value}
    />
);
