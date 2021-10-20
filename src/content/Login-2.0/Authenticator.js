import React, {useEffect, useState} from "react";

import * as API from "./Login";

import {Loading} from "@carbon/react";

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

const Component = ({Fields, State, Waiter}) => {
    useEffect(() => {
        const Handler = async () => {
            const Transmission = API.Cancellation();

            const Response = await API.Authenticate(
                {
                    Username: Fields.Username,
                    Password: Fields.Password
                },
                Transmission
            );

            if (Response.Error) Waiter[1](false);

            switch (Response.Loading) {
                case true:
                    Waiter[1](true);
                    break;
                case false:
                    Waiter[1](false);
                    break;
                default:
                    Waiter[1](null);
                    break;
            }

            return Response;
        }

        Handler().then(
            ($) => State($)
        );
    });

    return (
        <Loading
            withOverlay={true}
            small={false}
            active={Waiter[0]}
            description={"Authenticating ..."}
        />
    );
};

export default Component;
