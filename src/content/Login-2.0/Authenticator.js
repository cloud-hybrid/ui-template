import React, {useEffect, useState} from "react";

import * as API from "./Login";

import {Loading} from "@carbon/react";

import {Redirect, useLocation, useHistory} from "react-router-dom";

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

const Component = ({Fields, Waiter, Target, Authorizer}) => {
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const history = useHistory();

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

        Handler().then((Response) => {
            console.debug("[Debug]", Response);
        }).finally(() => {
            Authorizer[1](true);

            console.debug("Proceeding with Authentication ...");

            Waiter[1](false);

            console.debug("[Debug] - Page Redirect Event", JSON.stringify(Response));

            history.push(Target);
        });
    }, [Fields.Password, Fields.Username, Waiter, Target]);

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
