import React from "react";

import {
    Content,
    Theme
} from "@carbon/react";

import {
    Route,
    Switch
} from "react-router-dom";

import { default as Landing } from "./content/Landing";
import { default as Github } from "./content/GitHub";

const Application = () => {
    const Component = () => (
        <Theme theme="g100">
            <Content>
                <Switch>
                    <Route exact path="/" component={ Landing } />
                    <Route path="/repositories" component={ Github } />
                </Switch>
            </Content>
        </Theme>
    );

    return (<Component />)
}

export default Application;
