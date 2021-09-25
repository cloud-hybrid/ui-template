import "./Application.scss";

import React from "react";

import {
    Content,
    Theme
} from "@carbon/react";
import TutorialHeader from "./components/Menu";
import {
    Route,
    Switch
} from "react-router-dom";
import LandingPage from "./content/Landing";
import Page from "./content/GitHub";

const Application = () => (
    <Theme theme="g100">
        <TutorialHeader />
        <Content>
            <Switch>
                <Route exact path="/" component={ LandingPage } />
                <Route path="/repos" component={ Page } />
            </Switch>
        </Content>
    </Theme>
);

export default Application;
