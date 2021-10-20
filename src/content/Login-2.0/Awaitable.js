import { default as Types } from "prop-types";

import * as Styles from "./SCSS/Index.module.scss";

import React, {
    useState,
    useEffect
} from "react";

import {
    Button,
    Form,
    Grid,
    TextInput,
    Loading
} from "@carbon/react";

// import * as Query from "./Login";

import { default as Authenticator } from "./Authenticator";

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

const Component = ({}) => {
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
    //
    // const Expression = {
    //     Password: /.*/, // Password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
    //     Username: /.*/  // Username: /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){4,32}[a-zA-Z0-9]$/
    // };
    //
    const Username = () => {
        const Element = document.getElementById(Properties.Username.ID);
        const Validation = true;

        // (Debug) ? console.debug("[Debug]", "Username Client-Side Validation", Validation, Element.value)
        //     : console.debug("[Debug]", "Username Client-Side Validation", Validation);

        /// setUsernameValidation(Validation);

        return Validation;

        // (Element.value !== null) ? setUsernameValidation(true)
        //     : setUsernameValidation(null);

        // setUsernameValidation(Element.value !== null);
    };
    //
    const Password = () => {
        const Element = document.getElementById(Properties.Password.ID);
        const Validation = (Element && Element.value !== "");

        // (Debug) ? console.debug("[Debug]", "Password Client-Side Validation", Validation, Element.value)
        //     : console.debug("[Debug]", "Password Client-Side Validation", Validation);

        return Validation;
    };
    //
    // const Fields = () => {
    //     setFormValidation(
    //         usernameValidation === true && passwordValidation === true
    //     );
    // };
    //
    // const Validations = (attribute) => {
    //     const Default = () => (
    //         usernameValidation === true
    //         && passwordValidation === true
    //     );
    //
    //     switch (attribute) {
    //         case "Username": {
    //             Username(true);
    //             // break;
    //         }
    //         case "Password": {
    //             Password(true);
    //             // break;
    //         }
    //         case "Fields": {
    //             Default();
    //         }
    //         default:
    //             Fields();
    //
    //             break;
    //     }
    // };
    //
    // const Invalidate = () => {
    //     setUsernameValidation(false);
    //     setPasswordValidation(false);
    //     setFormValidation(false);
    // };
    //
    // const Reject = (event) => {
    //     console.debug("[Debug]", "Invalid Form Rejection Event", event);
    //     document.getElementById(Properties.Password.ID).value = "";
    // };
    //
    // const Approve = (event) => {
    //     console.debug("[Debug]", "Valid Form Succession Event", event);
    //     setAwaiting(true);
    // };

    const Events = useState({
        Username: null,
        Password: {
            Valid: null,
            Value: "",
            Error: null
        }
    });

    // /***
    //  *
    //  * Username & Password Form Field IDs
    //  *
    //  * @param Fields {{ Username: String, Password: String }}
    //  *
    //  * @returns {JSX.Element}
    //  *
    //  * @constructor
    //  *
    // */
    //
    // const Authenticator = ({ Fields }) => {
    //     const Data = useState(null);
    //
    //     const [awaiting, setAwaiting] = useState(true);
    //
    //     useEffect(() => {
    //         const Handler = async () => {
    //             const Transmission = Query.Cancellation();
    //
    //             const Response = await Query.Authenticate(
    //                 {
    //                     Username: document.getElementById(Fields.Username).value,
    //                     Password: document.getElementById(Fields.Password).value
    //                 },
    //                 Transmission
    //             );
    //
    //             if (Response.Error) setAwaiting(false);
    //
    //             switch (Response.Loading) {
    //                 case true:
    //                     setAwaiting(true);
    //                     break;
    //                 case false:
    //                     setAwaiting(false);
    //                     break;
    //                 default:
    //                     setAwaiting(null);
    //                     break;
    //             }
    //
    //             return Response;
    //         }
    //
    //         Handler().then($ => console.debug("[Debug]", "Handler Event", $));
    //     }, []);
    //
    //     return (
    //         <Loading
    //             withOverlay={true}
    //             small={false}
    //             active={awaiting}
    //             description={"Authenticating ..."}
    //         />
    //     );
    // }

    const Debounce = (_, $) => {
        setTimeout(_, $);
    }

    const Notification = () => {
        console.debug("[Debug]", Data[0]);

        if (Data[0].status === 200) {
            console.log("@Task: Implement Successful Notification");
        } else if (Data[0].status > 200 && Data[0] < 300) {
            console.info("@Task: Implement Informational Notification");
        } else if (Data[0].status >= 300 && Data[0].status < 500) {
            console.error("@Task: Implement Error Notification");
        } else if (Data[0].status >= 500) {
            console.error("@Task: Implement Internal Server Error Notification");
        } else {
            console.error("@Task: Implement Unknown Notification");
        }
    }

    const Awaitable = () => {
        return (
            <Form
                id={ Properties.Form.ID }
                className={ Styles.form }
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        document.getElementById("submit-button")
                            .click();
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
                    autoComplete={"current-username"}
                    // onChange={
                    //     (event) => {
                    //         // event.preventDefault();
                    //
                    //         Username();
                    //     }
                    // }
                    // onChange={
                    //     (event) => Debounce(() => Username(), 2500)
                    // }
                    // onChange={Debounce(() => Username(), 1000)}
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
                    autoComplete={"current-password"}
                />
                <Button
                    id={ "submit-button" }
                    className={ Styles.button }
                    kind={ Properties.Button.Kind }
                    tabIndex={ Properties.Button.Index }
                    disabled={(usernameValidation === true && passwordValidation !== true) ? true : false}
                    type={ Properties.Button.Type }
                    tooltipAlignment={ "center" }
                    tooltipPosition={ "right" }
                    children={ "Submit" }
                    onClick={(event) => {
                        event.preventDefault();

                        const Values = Object.values(event.target.parentNode).slice(0, 2);

                        const Username = Values[0].value;
                        const Password = Values[1].value;

                        (Username === "") ? setUsernameInvalid(true) : setUsernameInvalid(false);
                        (Password === "") ? setPasswordInvalid(true) : setPasswordInvalid(false);

                        setUsernameValidation(!usernameInvalid);
                        setPasswordValidation(!passwordInvalid);

                        if (usernameValidation === true && passwordValidation === true) {
                            setAwaiting(true);
                        } else {
                            setAwaiting(null);
                        }
                    }}
                ></Button>
                { (awaiting) ? (
                    <Authenticator Fields={
                        {
                            Username: document.getElementById("username-field").value,
                            Password: document.getElementById("password-field").value
                        }
                    } State={ Data[1] } Waiter={[awaiting, setAwaiting]}/>
                ): (<React.Fragment/>) }
            </Form>
        );
    };

    return (<Awaitable/>);

    // function modifierStateGetter(keyArg) { var syntheticEvent = this; var nativeEvent = syntheticEvent.nativeEvent; if (nativeEvent.getModifierState) { return nativeEvent.getModifierState(keyArg); } var keyProp = modifierKeyToProp[keyArg]; return keyProp ? !!nativeEvent[keyProp] : false; }

//    return (Handler.Waiter && Handler.Waiter !== false || awaiting === true)
//        ? (<SkeletonPlaceholder/>) : (<Awaitable/>);

};

export default Component;
