import * as Styles from "./SCSS/Index.module.scss";

import React, {useEffect, useState} from "react";

import {Button, Form, FormGroup, InlineLoading, TextInput} from "@carbon/react";

import { useNavigate, useLocation } from "react-router-dom";

import {default as Types} from "./../../components/Types";

import * as API from "./Authentication";

const Component = ({Authorizer}) => {
    const navigate = useNavigate();

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
                Help: "Username or Email Address",
                Invalid: "Invalid Username or Email Address, and Password Combination"
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
            const Username = document.getElementById("username-field");
            const Password = document.getElementById("password-field");
            const Submit = document.getElementById("submit-button");
            const Form = document.getElementById("login-form");

            Username.autofocus = true;

            Username.focus();
            Username.select();
            Username.click();

            document.getElementById("login-form")?.addEventListener("submit", (event) => {
                console.debug("[Event]", "Trusted Event", event.isTrusted);
                console.debug("[Event]", "Phase #", event.eventPhase);
                console.debug("[Event]", "Composed Event Path(s)", event.composedPath());
                console.debug("[Event]", "Event Time-Stamp", event.timeStamp);

                event.preventDefault();
            });

            document.getElementById("username-field")?.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    Username.toggleAttribute("readonly", true);
                    Password.toggleAttribute("readonly", true);

                    Username.contentEditable = "false";
                    Password.contentEditable = "false";

                    console.debug("[Debug]", "Username", "Return Key Event");

                    Username.focus();
                    Username.select();
                    Username.click();

                    Submit.click();
                }
            });

            document.getElementById("password-field")?.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    Username.toggleAttribute("readonly", true);
                    Password.toggleAttribute("readonly", true);

                    Username.contentEditable = "false";
                    Password.contentEditable = "false";

                    console.debug("[Debug]", "Password", "Return Key Event");

                    Username.focus();
                    Username.select();
                    Username.click();

                    Submit.click();
                }

            });

            console.debug("[Debug]", "Event Listeners", "Successfully Loaded Page Listeners");
        }

        addEventListeners();
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
        event.preventDefault();

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
                            setAwaiting(true);

                            const Transmission = API.Cancellation();

                            const Response = await API.Authenticate(
                                {
                                    Username: User,
                                    Password: Password.value
                                }, Transmission
                            );

                            console.debug("[Debug] Validating Authentication Attempt ...", Response);

                            if (Response.Status.Code === -1) {
                                console.warn("@Task: Implement Race-Condition Notification");
                                console.warn(Response);

                                setAwaiting(false);

                                return true;
                            } else if (Response.Status.Code === 200) {
                                console.log("@Task: Implement Successful Notification");

                                setAwaiting(false);

                                return true;
                            } else if (Response.Status.Code >= 300 && Response.Status.Code < 500) {
                                console.error("@Task: Implement Error Notification");
                                console.warn(Response);

                                setAwaiting(false);

                                return false
                            } else if (Response.Status.Code >= 500) {
                                console.warn("@Task: Implement Internal Server Error Notification");
                                console.warn(Response);

                                setAwaiting(false);

                                return false
                            } else {
                                console.error("@Task: !!! Handle Unknown Error");
                                console.error(Response);

                                setAwaiting(false);

                                return false
                            }
                        }

                        Handler().then((Response) => {
                            console.debug("[Debug]", "Validation Outcome", Response);

                            if (Response === true) {
                                Authorizer[1](true);

                                navigate(-1);
                            } else {
                                const e = JSON.stringify(Response, null, 4);
                                console.error("[Error]", e);
                                throw new Error(JSON.stringify(Response, null, 4));
                            }
                        }).catch((error) => {
                            console.warn("[Warning]", error);

                            Username.removeAttribute("readonly");
                            Password.removeAttribute("readonly");

                            Username.contentEditable = "true";
                            Password.contentEditable = "true";

                            Username.focus();
                            Username.select();
                            Username.click();

                            Username.value = User;

                            Authorizer[1]({State: false});

                            setValidUsername(false);
                        });
                    }
                }
                onChange={(event) => handleFormChanges(event)}
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
                        type={Types.Input.submit}
                        tooltipAlignment={ "center" }
                        tooltipPosition={ "right" }
                        name={"submit"}
                        onClick={(event) => {
                            console.debug("[Debug]", "Submit Button Event", "Submitting ...");

                            const Form = document.getElementById("login-form");

                            Form.submit();

                            setAwaiting(true);
                        }}
                        children={
                            (awaiting === true) ? (
                                <InlineLoading description="Loading..."/>
                            ) : (
                                <>
                                    Submit
                                </>
                            )
                        }
                    />
                </FormGroup>
            </Form>
        );
    };

    return (<Awaitable/>);
};

export default Component;
