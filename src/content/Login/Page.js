import React, { useEffect, useState } from "react";

import {
    Button,
    Form,
    Grid,
    TextInput
} from "@carbon/react";

import { default as Loader } from "./Awaitable";

const Properties = {
    Login: {
        State: false,
        JWT: null,
        Type: null
    },
    Password: {
        ID: "Form-Password-Field",
        Text: {
            Show: {
                "Dont-Display": false,
                Label: "Show Password"
            }, Hide: {
                "Dont-Display": false,
                Label: "Hide"
            },
            Label: "Password"
        },
        Alignment: "end",
        Position: "top",
        Inline: false,
        Type: "password",
        Help: null // "[Optional-Password-Field-Text]"
    },
    Username: {
        ID: "Form-Username-Field",
        Text: {
            Show: {
                "Dont-Display": false,
                Label: "[Show-Username-Label]"
            }, Hide: {
                "Dont-Display": false,
                Label: "[Hide-Username-Label]"
            },
            Label: "Username"

        },
        Alignment: "end",
        Position: "top",
        Inline: false,
        Type: "text",
        Help: null // "[Optional-Username-Field-Text]"
    },
    Button: {
        ID: "IO-Login-Form-Submission-Button",
        Kind: "tertiary",
        Index: 0,
        Type: "submit",
        Class: "IO-Login-Submission-Button-Gray",
        Disabled: true
    },
    Loading: {
        Active: false,
        Description: "[Description]",
        Small: false,
        Overlay: true
    }
};

export const Page = () => {
    /// Authorization Validation

    const [passwordValidation, setPasswordValidation] = useState(null);
    const [usernameValidation, setUsernameValidation] = useState(null);
    const [formValidation, setFormValidation] = useState(null);

    const [loading, setLoading] = useState(false);

    const Expression = {
        Password: /.*/,
        //Password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
        Username: /.*/
        //Username: /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){4,32}[a-zA-Z0-9]$/
    };

    const Username = (value) => {
        const Element = document.getElementById(Properties.Username.ID);
        const Value = Element.value;
        const Validation = true; //Expression.Username.test(Value);

        console.debug("[Debug]", "Username Client-Side Validation", Validation);

        (value !== null) ? setUsernameValidation(Validation) : setUsernameValidation(null);
    };

    const Password = (value) => {
        const Element = document.getElementById(Properties.Password.ID);
        const Value = Element.value;
        const Validation = true; //Expression.Password.test(Value);

        console.debug("[Debug]", "Password Client-Side Validation", Validation);

        (value !== null) ? setPasswordValidation(Validation) : setPasswordValidation(null);
    };

    const Fields = () => {
        setFormValidation(
            usernameValidation === true && passwordValidation === true
        );
    };

    const Validations = (attribute) => {
        const Default = () => (
            usernameValidation === true
            && passwordValidation === true
        );

        switch (attribute) {
            case "Username": {
                Username(true);
                // break;
            } case "Password": {
                Password(true);
                // break;
            } case "Fields": {
                Default();
            } default:
                Fields();

                break;;;
        };
    };

    const Invalidate = () => {
        setUsernameValidation(false);
        setPasswordValidation(false);
        setFormValidation(false);
    };

    const Reject = (event) => {
        console.debug("[Debug]", "Invalid Form Rejection Event", event);
        document.getElementById(Properties.Password.ID).value = "";
    };

    const Approve = (event) => {
        console.debug("[Debug]", "Valid Form Succession Event", event);
        setLoading(true);
    };

    return (
        <Grid narrow={false} condensed={false} fullWidth={false}>
            <Form id={"IO-Login-Form"} onChange={() => Validations(null)}
                  onSubmit={
                      (event) => {
                          event.preventDefault();
                          (usernameValidation === null || passwordValidation === null)
                              ? Invalidate()
                              : (formValidation === null)
                                  ? Reject(event)
                                  : Approve(event);
                      }
                  }>
                <TextInput
                    className={"IO-Login-Form-Field IO-Form-Field-Username-Input"}
                    id={Properties.Username.ID}
                    invalid={(usernameValidation === false && usernameValidation !== null)}
                    inline={Properties.Username.Inline}
                    type={Properties.Username.Type}
                    helperText={Properties.Username.Help}
                    labelText={Properties.Username.Text.Label}
                    hideLabel={Properties.Username.Text.Show["Dont-Display"]}
                    onChange={
                        () => Validations("Username")
                    }
                    autoComplete={"username"}
                    light={false}
                />
                <TextInput
                    className={"IO-Login-Form-Field IO-Form-Field-Password-Input"}
                    id={Properties.Password.ID}
                    invalid={(passwordValidation === false && passwordValidation !== null)}
                    // tooltipAlignment={Properties.Password.Alignment}
                    // tooltipPosition={Properties.Password.Position}
                    inline={Properties.Password.Inline}
                    type={Properties.Password.Type}
                    helperText={Properties.Password.Help}
                    labelText={Properties.Password.Text.Label}
                    // showPasswordLabel={Properties.Password.Text.Show.Label}
                    // hideLabel={Properties.Password.Text.Show["Dont-Display"]}
                    // hidePasswordLabel={Properties.Password.Text.Hide.Label}
                    onChange={
                        () => Validations("Password")
                    }
                    // autoComplete={"current-password"}
                    light={false}
                />
                <Button
                    id={Properties.Button.ID}
                    kind={Properties.Button.Kind}
                    tabIndex={Properties.Button.Index}
                    type={Properties.Button.Type}
                    className={Properties.Button.Class + " " + "Unselectable"}
                    disabled={Boolean(!(usernameValidation === true && passwordValidation === true))}
                    tooltipAlignment={"center"}
                    tooltipPosition={"right"}
                    children={"Submit"}
                />
                {(loading) ? (<Loader/>) : (<React.Fragment/>)}
            </Form>
        </Grid>
    );
};

export default Page;
