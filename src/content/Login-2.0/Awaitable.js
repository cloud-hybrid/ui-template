import { default as Types } from "prop-types";

import * as Styles from "./SCSS/Index.module.scss";

import React, {
    useState
} from "react";

import {
    Button,
    Form,
    TextInput
} from "@carbon/react";

import { Inline, Toast, Actionable } from "./../../components/Notifications/Authentication/Informational";

import {useHistory} from "react-router-dom";
import * as API from "./Login";

const Debug = process.env.NODE_ENV !== "production";

const Properties = {
    Form: {
        ID: "io-login-form"
    },
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

const Component = ({Target, Authorizer}) => {
    const history = useHistory();

    const Data = useState(null);

    const [passwordValidation, setPasswordValidation] = useState(null);
    const [usernameValidation, setUsernameValidation] = useState(null);
    const [formValidation, setFormValidation] = useState(null);

    const [usernameInvalid, setUsernameInvalid] = useState(null);
    const [usernameHelperLabel, setUsernameHelperLabel] = useState(false);

    const [passwordInvalid, setPasswordInvalid] = useState(null);
    const [passwordHelperLabel, setPasswordHelperLabel] = useState(false);

    const [password, setPassword] = useState("");

    const [awaiting, setAwaiting] = useState(false);

    const Awaitable = () => {
        return (
            <Form
                id={ Properties.Form.ID }
                className={ Styles.form }
                onSubmit={
                    (event) => {
                        event.preventDefault();

                        const Username = document.getElementById("username-field").value;
                        const Password = document.getElementById("password-field").value

                        console.debug(Username, Password);

                        (Username === "") ? setUsernameInvalid(true) : setUsernameInvalid(false);
                        (Password === "") ? setPasswordInvalid(true) : setPasswordInvalid(false);

                        setUsernameValidation(!usernameInvalid);
                        setPasswordValidation(!passwordInvalid);

                        /***
                         *
                         * @returns {Promise<{Loading: boolean, Data: null, Error: boolean, Status: {Code: Number, Message: String}}|null>}
                         * @constructor
                         */
                        const Handler = async () => {
                            const Transmission = API.Cancellation();

                            const Response = await API.Authenticate(
                                {
                                    Username, Password
                                }, Transmission
                            );

                            if (Response?.Error) setAwaiting(false);

                            return Response;
                        }

                        Handler().then((Response) => {
                            console.debug("[Debug] Validating Authentication Attempt ...");

                            if (Response.Status.Code === -1) {
                                console.log("@Task: Implement Race-Condition Notification");
                            }
                            else if (Response.Status.Code === 200) {
                                console.log("@Task: Implement Successful Notification");
                            } else if (Response.Status.Code >= 300 && Response.Status.Code < 500) {
                                console.error("@Task: Implement Error Notification");
                            } else if (Response.Status.Code >= 500) {
                                console.error("@Task: Implement Internal Server Error Notification");
                            } else {
                                console.error("@Task: Implement Unknown Notification");
                            }

                            if (Response?.Error) {
                                console.warn("[Error]", Response?.Error);

                                setUsernameInvalid(true);
                                setPasswordInvalid(true);
                            } else {
                                console.info("[Informational] Successfully Validated. Proceeding with Authentication ...");

                                setTimeout(() => Authorizer[1](true), 5500);

                                console.debug("[Debug] Terminating Waiter(s) ...");

                                setAwaiting(false);

                                console.info("[Informational] Creating Success Notification ...");


                            }
                        });
                    }
                }
            >
                <TextInput
                    id={ "username-field" }
                    className={ Styles.normalized }
                    invalid={ usernameInvalid }
                    inline={ Properties.Username.Inline }
                    type={ Properties.Username.Type }
                    helperText={ (usernameHelperLabel === true) ? "Username Login Field" : ""}
                    invalidText={(usernameInvalid === true) ? "Username Login Field" : ""}
                    labelText={ "Username" }
                    hideLabel={ false }
                    autoComplete={ "username" }
                    light={ false }
                />
                <TextInput
                    id={ "password-field" }
                    invalid={ passwordInvalid }
                    inline={ false }
                    type={ "password" }
                    helperText={(passwordHelperLabel === true) ? "Password Login Field" : ""}
                    invalidText={(passwordInvalid === true) ? "Password Login Field" : ""}
                    labelText={ "Password" }
                    hideLabel={ false }
                    autoComplete={"password"}
                />
                <Button
                    id={ "submit-button" }
                    className={ Styles.button }
                    kind={ Properties.Button.Kind }
                    tabIndex={ Properties.Button.Index }
                    disabled={(usernameValidation === true && passwordValidation !== true)}
                    type={ Properties.Button.Type }
                    tooltipAlignment={ "center" }
                    tooltipPosition={ "right" }
                    children={ "Submit" }
                />
                <Actionable title={"Test Title"}/>
            </Form>
        );
    };

    return (<Awaitable/>);

    // function modifierStateGetter(keyArg) { var syntheticEvent = this; var nativeEvent = syntheticEvent.nativeEvent; if (nativeEvent.getModifierState) { return nativeEvent.getModifierState(keyArg); } var keyProp = modifierKeyToProp[keyArg]; return keyProp ? !!nativeEvent[keyProp] : false; }

//    return (Handler.Waiter && Handler.Waiter !== false || awaiting === true)
//        ? (<SkeletonPlaceholder/>) : (<Awaitable/>);

};

export default Component;
