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

import { default as Landing } from "./content/Landing";

import { default as Github } from "./content/GitHub";

const Application = () => (
    <Theme theme="g100">
        <TutorialHeader />
        <Content>
            <Switch>
                <Route exact path="/" component={ Landing } />
                <Route path="/repositories" component={ Github } />
            </Switch>
        </Content>
    </Theme>
);

export default Application;
