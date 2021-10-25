import * as Styles from "./SCSS/Index.module.scss";

import React, {useEffect, useState} from "react";

import {Button, Form, FormGroup, TextInput} from "@carbon/react";

import {Toast} from "./../../components/Notifications/Authentication/Informational";

import {default as Types} from "./../../components/Types";

import * as API from "./Login";

const Container = ({children}) => {
    const $ = children;

    return (
        <div className={Styles.container}>
            {
                $
            }
        </div>
    );
}

const Component = ({Target, Authorizer}) => {
    const [awaiting, setAwaiting] = useState(false);

    const [validUsername, setValidUsername] = useState(true);

    const [validation, setValidation] = useState({
        User: {
            Input: {
                Empty: true,
                Invalid: false,
                Malformed: null
            },
            Content: {
                Label: "Account",
                Empty: "Account Sign-In Cannot be Empty",
                Help: "Username, Email Address, or ID",
                Invalid: "Invalid Account-ID, Username, or Email + Password Combination"
            }
        }, Password: {
            Input: {
                Empty: true,
                Invalid: false,
                Malformed: null
            },
            Content: {
                Label: "Password",
                Empty: "The Password Field is Required",
                Help: "Private Secret or Token",
                Invalid: "Secret Phrase or Personal Access Token"
            }
        }
    });

    useEffect(() => {
        const addEventListeners = () => {
            document.getElementById("username-field")?.addEventListener(("keypress"), (event) => {
                if (event.key === "Enter") {
                    console.debug("[Debug]", "Username", "Return Key Event");
                    document.getElementById("login-form")?.submit();
                    document.getElementById("username-field").focus();
                }

                document.getElementById("username-field").focus();
            });

            document.getElementById("password-field")?.addEventListener(("keypress"), (event) => {
                if (event.key === "Enter") {
                    console.debug("[Debug]", "Password", "Return Key Event");
                    document.getElementById("login-form")?.submit();
                    document.getElementById("password-field").focus();
                }

                document.getElementById("password-field").focus();
            });

            console.debug("[Debug]", "Return", "Successfully Added Key-Press Listeners");
        }


        addEventListeners();

        document.getElementById("username-field").focus();
        document.getElementById("username-field").select();
        document.getElementById("username-field").click();

    }, []);

    const handleChanges = (event, Data, Input) => {
        event.preventDefault();

        const $ = validation;

        const Field = document.getElementById(Input).value;

        $[String(Data)].Input.Empty = (Field === "");
        $[String(Data)].Input.Invalid = (Field === "");

        setValidation($);
    }

    const handleFormChanges = (event) => {
        const Submit = document.getElementById("submit-button");

        handleChanges(event, "User", "username-field");
        handleChanges(event, "Password", "password-field");

        if (!(validation.User.Input.Invalid && validation.Password.Input.Invalid)) {
            Submit.removeAttribute("disabled");
            Submit.classList.toggle("cds--btn--disabled", false);
        } else {
            Submit.setAttribute("disabled", "true");
            Submit.classList.toggle("cds--btn--disabled", true);
        }


    };

    const Awaitable = () => {
        return (
            <Form
                id={"login-form"}
                className={ Styles.form }
                onChange={(event) => handleFormChanges(event)}
                onSubmit={
                    (event) => {
                        event.preventDefault();

                        /// Disable Ability to Modify Field(s) & Style Components
                        const Username = document.getElementById("username-field");
                        const Password = document.getElementById("password-field");
                        const Submit = document.getElementById("submit-button");

                        Username.toggleAttribute("readonly", true);
                        Password.toggleAttribute("readonly", true);
                        Submit.toggleAttribute("disabled", true);

                        Username.contentEditable = "false";
                        Password.contentEditable = "false";

                        const User = Username.value;

                        const Handler = async () => {
                            const Transmission = API.Cancellation();

                            return await API.Authenticate(
                                {
                                    Username: User,
                                    Password: Password.value
                                }, Transmission
                            );
                        }

                        Handler().then((Response) => {
                            console.debug("[Debug] Validating Authentication Attempt ...");

                            if (Response.Status.Code === -1) {
                                console.warn("@Task: Implement Race-Condition Notification");
                            }
                            else if (Response.Status.Code === 200) {
                                // console.log("@Task: Implement Successful Notification");
                                setTimeout(() => Authorizer[1](true), 1250);
                            } else if (Response.Status.Code >= 300 && Response.Status.Code < 500) {
                                // console.error("@Task: Implement Error Notification");
                                throw new Error(Response?.Error);
                            } else if (Response.Status.Code >= 500) {
                                console.warn("@Task: Implement Internal Server Error Notification");
                            } else {
                                console.warn("@Task: Implement Unknown Notification");
                            }
                        }).catch((error) => {
                            console.warn("[Warning]", error);

                            Username.removeAttribute("readonly");
                            Password.removeAttribute("readonly");

                            Username.contentEditable = "true";
                            Password.contentEditable = "true";

                            setValidUsername(false);
                        }).finally(() => {
                            document.getElementById("username-field").focus();
                            document.getElementById("username-field").select();
                            document.getElementById("username-field").click();

                            document.getElementById("username-field").value = User;
                        });
                    }
                }
            >
                <FormGroup legendText={""} className={Styles.fields}>
                    <TextInput
                        id={ "username-field" }
                        className={[Styles.field, Styles.normalized].join(" ")}
                        invalid={!validUsername}
                        inline={ false }
                        type={Types.Input.text}
                        helperText={validation.User.Content.Help}
                        invalidText={validation.User.Content.Invalid}
                        labelText={"Account"}
                        hideLabel={false}
                        autoComplete={ "username" }
                        onChange={(event) => {
                            handleChanges(event, "User", "username-field");
                        }}
                    />
                    <TextInput
                        id={ "password-field" }
                        className={Styles.field}
                        inline={ false }
                        type={Types.Input.password}
                        invalidText={validation.Password.Content.Invalid}
                        helperText={(!validUsername) ? validation.Password.Content.Invalid : ""}
                        labelText={"Password"}
                        hideLabel={false}
                        autoComplete={"password"}
                    />
                </FormGroup>
                <FormGroup legendText={""} className={Styles.footer} invalid={!validUsername}>
                    <Button
                        id={ "submit-button" }
                        className={ Styles.button }
                        kind={Types.Button.Kind.tertiary}
                        tabIndex={ 0 }
                        disabled={true}
                        type={Types.Input.submit }
                        tooltipAlignment={ "center" }
                        tooltipPosition={ "right" }
                        onClick={(event) => {
                            event.preventDefault();

                            console.debug("[Debug]", "Submit Button Event", "Submitting ...");

                            const Form = document.getElementById("login-form");

                            Form.submit();

                            const Username = document.getElementById("username-field");

                            Username.focus();
                        }}
                        children={(
                            <>
                                Submit
                            </>
                        )}
                    />
                </FormGroup>
            </Form>
        );
    };

    return (<Awaitable/>);

    // function modifierStateGetter(keyArg) { var syntheticEvent = this; var nativeEvent = syntheticEvent.nativeEvent; if (nativeEvent.getModifierState) { return nativeEvent.getModifierState(keyArg); } var keyProp = modifierKeyToProp[keyArg]; return keyProp ? !!nativeEvent[keyProp] : false; }

//    return (Handler.Waiter && Handler.Waiter !== false || awaiting === true)
//        ? (<SkeletonPlaceholder/>) : (<Awaitable/>);

};

export default Component;
