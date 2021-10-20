import React, {useState, useEffect} from "react";

import * as Query from "./Query";

import { Cancellation } from "./Query";

import { Loading } from "@carbon/react";

const Properties = {
    Password: {
        ID: "Form-Password-Field"
    },
    Username: {
        ID: "Form-Username-Field"
    },
    Loading: {
        Active: false,
        Description: "[Description]",
        Small: false,
        Overlay: true
    }
};

const Component = () => {
    const [awaiting, setAwaiting] = useState(true);

    const Token = Query.Cancellation();

    const Handler = Query.State(
        document.getElementById(Properties.Username.ID).value,
        document.getElementById(Properties.Password.ID).value,
        Token
    );

    useEffect((Query = Handler) => {
        switch (Query.Waiter) {
            case true:
                setAwaiting(true);
                break;
            case false:
                setAwaiting(false);
                break;
            default:
                setAwaiting(null);
                break;
        }
    }, []);

    const Authenticator = () => {
        const Location = {
            hash: String(window.location.hash),
            host: String(window.location.host),
            hostname: String(window.location.hostname),
            href: String(window.location.href),
            origin: String(window.location.origin),
            pathname: String(window.location.pathname),
            protocol: String(window.location.protocol),
            port: window.location.port
        };

        const Target = {
            Origin: Location.origin,
            Default: Location.protocol + "//" + Location.host,
            Evaluation: null
        };

        Target.Evaluation = (
            Location.origin.search("login") > 0
                || Location.origin.search("Login") > 0
        ) ? Location.origin: Target.Default;

        console.debug("[Debug] Redirect Evaluation", Target);
        console.debug("[Debug] Authentication Evaluation", Handler);

        setTimeout(() => window.location.replace(Location.origin), 1250);

        return (
            <Loading
                id={"IO-Login-Form-Loader"} withOverlay={Properties.Loading.Overlay}
                small={Properties.Loading.Small} active={awaiting}
                description={""}
            />
        );
    };

    return (
        <React.Fragment>
            {
                (Handler.Waiter) ? (
                    <Loading
                        id={"IO-Login-Form-Loader"}
                        withOverlay={Properties.Loading.Overlay}
                        small={Properties.Loading.Small}
                        active={awaiting}
                        description={Properties.Loading.Description}
                    />
                ) : (<Authenticator/>)
            }
        </React.Fragment>
    );
};

export default Component;
