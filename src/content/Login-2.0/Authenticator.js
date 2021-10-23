import React, {useEffect, useState} from "react";

import * as API from "./Login";

import {Loading} from "@carbon/react";

import {Redirect, useLocation} from "react-router-dom";

/***
 *
 * Username & Password Form Field IDs
 *
 * @param Fields {{ Username: String, Password: String }}
 *
 * @param State { (S) => SetStateAction<S> }
 *
 * @param Waiter { [ { Boolean }, () => (Dispatch) ] }
 *
 * @returns { JSX.Element }
 *
 * @constructor
 *
 */

const Component = ({Fields, Waiter}) => {
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        const Handler = async () => {
            const Transmission = API.Cancellation();

            const Response = await API.Authenticate(
                {
                    Username: Fields.Username,
                    Password: Fields.Password
                }, Transmission
            );

            if (Response.Error) Waiter[1](false);

            return Response;
        }

        Handler().finally(() => {
            console.debug("Proceeding with Authentication ...");

            Waiter[1](false);

            setTimeout(() => window.location.href = from.pathname);
        });
    }, [Fields.Password, Fields.Username, Waiter]);

    return (
        <Loading
            withOverlay={true}
            small={false}
            active={Waiter[0]}
            description={"Authenticating ..."}
        />
    )
};

export default Component;
