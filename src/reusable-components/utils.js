export const capitalizer = text => {
    const labelText = text.split(" ");
    let formattedText = [];
    labelText.forEach(t =>
        formattedText.push(t.substring(0, 1).toUpperCase() + t.substring(1))
    );
    return formattedText.join(" ");
};

export const stateMapper = (objectToMap, el = this) => {
    const keysArr = Object.keys(objectToMap);
    const valuesArr = Object.values(objectToMap);
    keysArr.forEach((key, i) =>
        el.setState(prev => {
            return {
                ...prev,
                data: {
                    ...prev.data,
                    [key]: {
                        ...prev[key],
                        value: valuesArr[i] || ""
                    }
                },
                errors: {
                    ...prev.errors,
                    [key]: valuesArr[i] ? "" : prev.errors[key]
                },
                empties: {
                    ...prev.empties,
                    [key]: valuesArr[i] ? "" : prev.empties[key]
                }
            };
        })
    );
};

export const secureCardNumber = text => {
    // code to display the phone number like this 090******123
    const sliced = text.slice(3, text.length - 3);
    return text.replace(sliced, "*".repeat(sliced.length));
};

const _digitsValidator = (input, el = this, name) => {
    const re = /^\d+$/;
    const digit = input.trim();
    const validDigit = re.test(digit);
    if (!validDigit) {
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    [name]: {
                        ...prevState[name],
                        value: digit,
                        valid: validDigit
                    }
                },
                errors: {
                    ...prevState.errors,
                    [name]: `${name} must be a number`
                }
            };
        });
    } else {
        const errorsArr = el.state.errors;
        delete errorsArr[name];
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    [name]: {
                        ...prevState[name],
                        value: Number(digit),
                        valid: validDigit
                    }
                },
                errors: {
                    ...errorsArr
                }
            };
        });
    }
};

const _verveCardValidator = (input, el = this, name) => {
    const digit = input.trim();
    const validDigit =
        Number(digit.split(" ").join("")).toString().length === 16 ||
        Number(digit.split(" ").join("")).toString().length === 17;
    if (!validDigit) {
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    [name]: {
                        ...prevState[name],
                        value: digit,
                        valid: validDigit
                    }
                },
                errors: {
                    ...prevState.errors,
                    [name]: `${name} must be a 12`
                }
            };
        });
    } else {
        const errorsArr = el.state.errors;
        delete errorsArr[name];
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    [name]: {
                        ...prevState[name],
                        value: digit,
                        valid: validDigit
                    }
                },
                errors: {
                    ...errorsArr
                }
            };
        });
    }
};

const _phoneHandler = (input, el = this) => {
    const re = /^((\d{8,9})|[0]?\d([7](?=0)|[8](?=0|1)|[9](?=0))\d{9}(?!\d))$/;
    const telephone = input.trim();
    const validPhone = re.test(telephone);

    if (!validPhone) {
        el.setState(prevState => {
            return {
                ...prevState,
                errors: {
                    ...prevState.errors,
                    phoneNumber: "Invalid phone number"
                }
            };
        });
    } else {
        const errorsArr = el.state.errors;
        delete errorsArr.phoneNumber;
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    phoneNumber: {
                        ...prevState.phoneNumber,
                        value: telephone,
                        valid: validPhone
                    }
                },
                errors: {
                    ...errorsArr
                }
            };
        });
    }
};

const _emailHandler = (input, el = this) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = input.trim();
    const validEmail = re.test(email);
    if (!validEmail) {
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    email: {
                        ...prevState.email,
                        value: email,
                        valid: validEmail
                    }
                },
                errors: {
                    ...prevState.errors,
                    email: "Invalid email address"
                }
            };
        });
    } else {
        const errorsArr = el.state.errors;
        delete errorsArr.email;
        el.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    email: {
                        ...prevState.email,
                        value: email,
                        valid: email
                    }
                },
                errors: {
                    ...errorsArr
                }
            };
        });
    }
};

const _emptyTest = (input, el = this, name) => {
    const text = input.trim();
    const empty = text.length > 0 ? false : true;
    if (empty) {
        el.setState(prevState => {
            return {
                ...prevState,
                empties: {
                    ...prevState.empties,
                    [name]: `${name} cannot be empty!`
                }
            };
        });
    } else {
        el.setState(prevState => {
            const emptyArr = prevState.empties;
            delete emptyArr[name];
            return {
                ...prevState,
                empties: emptyArr
            };
        });
    }
    return empty;
};

const _passwordHandler = (input, el = this) => {
    const {
        confirmPassword: { value }
    } = el.state;
    const pass = input.trim();
    const confirmPassVal = value.length > 1 ? value.trim() : "";
    const cpTestResult = _validPassword(confirmPassVal.trim(), pass);
    const passTestResult = pass.length > 7 ? true : false;

    el.setState(prevState => {
        return {
            ...prevState,
            data: {
                ...prevState.data,
                password: {
                    ...prevState.password,
                    value: pass,
                    valid: passTestResult
                },
                confirmPassword: {
                    ...prevState.confirmPassword,
                    valid: cpTestResult && confirmPassVal.length > 0
                }
            },
            errors: {
                ...prevState.errors,
                password: !passTestResult
                    ? "Password must be at least 8 characters"
                    : "",
                confirmPassword:
                    !cpTestResult && confirmPassVal.length > 0
                        ? "Passwords do not match"
                        : ""
            }
        };
    });
};

const _confirmPasswordHandler = (input, el = this) => {
    const confirmPass = input.trim();
    const {
        password: { value }
    } = el.state;
    const validatePassword = value.length > 1 ? value.trim() : "";

    const testResult = _validPassword(validatePassword.trim(), confirmPass);
    el.setState(prevState => {
        return {
            ...prevState,
            data: {
                ...prevState.data,
                confirmPassword: {
                    ...prevState.confirmPassword,
                    value: confirmPass,
                    valid: testResult
                }
            },
            errors: {
                ...prevState.errors,
                confirmPassword: !testResult ? "Passwords do not match" : ""
            }
        };
    });
};

const _validPassword = (confirmer, password) => {
    if (confirmer === "" && password.length > 7) {
        return false;
    } else if (
        confirmer !== "" &&
        password === confirmer &&
        password.length > 7
    ) {
        return true;
    }
};

const _limitText = (string, length = 20) => {
    const stringLength = string.length;
    if (stringLength < length) {
        return string;
    } else {
        return string.substring(0, length) + "...";
    }
};

export {
    _emailHandler,
    _phoneHandler,
    _passwordHandler,
    _confirmPasswordHandler,
    _emptyTest,
    _digitsValidator,
    _limitText,
    _verveCardValidator
};
