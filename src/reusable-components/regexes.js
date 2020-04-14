import React, { Fragment } from "react";
// testing that input is + or digits
export const areDigits = input => {
    const re_digits = /^[+]?[0-9]*$/;
    return re_digits.test(input);
};

export const validateNumber = number => {
    const re_phone = /^[0]?\d([7](?=0)|[8](?=0|1)|[9](?=0))\d{9}$/;
    return re_phone.test(number);
};

export const validateEmail = email => {
    const re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re_email.test(email);
};

export const validateDigit = input => {
    const re_validateDigits = /^[0-9]*$/;
    return re_validateDigits.test(input);
};

export const numValidationObject = {
    required: true,
    pattern: new RegExp(`^[0]?\\d([7](?=0)|[8](?=0|1)|[9](?=0))\\d{9}$`),
    message: <span>Please input a valid phone number! (e.g 09031234567)</span>
};

export const emailValidationObject = {
    required: true,
    pattern: new RegExp(
        `^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@(([[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`
    ),
    message: (
        <Fragment>
            <span>Please input a valid email! (e.g john@doe.com)</span>
        </Fragment>
    )
};

export const lowercase = {
    required: true,
    pattern: new RegExp(`[a-z]`),
    message: (
        <Fragment>
            <span>Must contain at least one lowercase letter</span>
        </Fragment>
    )
};

export const uppercase = {
    required: true,
    pattern: new RegExp(`[A-Z]`),
    message: (
        <Fragment>
            <span>Must contain at least one uppercase letter</span>
        </Fragment>
    )
};

export const digit = {
    required: true,
    pattern: new RegExp(`[0-9]`),
    message: (
        <Fragment>
            <span>Must contain at least one digit letter</span>
        </Fragment>
    )
};
