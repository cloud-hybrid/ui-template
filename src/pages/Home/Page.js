import React from "react";
import PropTypes from "prop-types";

import * as Styles from "./SCSS/Index.module.scss";

import {
    Application,
    Globe,
    PersonFavorite
} from "@carbon/icons-react/next";

import {
    Button,
    Column,
    Row,
    Grid,
    Tab,
    Tabs
} from "@carbon/react";

import { default as Selectable } from "./../../components/Tile-Mutli-Select/Index";

import { default as List } from "./../../components/Selectable-List";

/***
 *
 * @param phrase {string} - Spoken Phrase, Space Separated
 *
 * @returns {(*)[]}
 *
 */

function createArrayFromPhrase(phrase) {
    const splitPhrase = phrase.split(" ");
    const thirdWord = splitPhrase.pop();
    return [ splitPhrase.join(" "), thirdWord ];
}

const Sectional = (props) => (
    <Grid>
        <Column md={ 8 } lg={ 4 } xlg={ 3 }>
            <h3 className={ Styles["home-info-section-heading"] }>
                { props.heading }
            </h3>
        </Column>

        { props.children }
    </Grid>
);

Sectional.propTypes = {
    /***
     * Header H3 String Context
     */
    heading: PropTypes.string.isRequired,

    /***
     * JSX Node(s) as Individual Elements or as an Array
     */
    children: PropTypes.node
};

const Card = ({ heading, body, icon }) => {
    const splitHeading = createArrayFromPhrase(heading);

    return (
        <Column sm={ 4 } md={ 8 } lg={ 4 } className={ Styles["home-info-card"] }>
            <h4 className={ Styles["home-info-heading"] }>
                { splitHeading[0] + " " }
                <strong>
                    {
                        splitHeading[1]
                    }
                </strong>
            </h4>
            <p className={ Styles["home-info-card-body"] }>
                { body }
            </p>
            { icon }
        </Column>
    );
};

/***
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

const Component = () => (
    <React.Fragment>
        <Row className={ Styles["home-row-1"] }>
            <Row>
                <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles["home-banner"] }>
                    <h1 className={ Styles["home-heading"] }>
                        Design &amp; build with Carbon
                    </h1>
                </Column>
            </Row>
            <Row>
                <Column className={ Styles["home-row-2"] }>
                    <Tabs
                        aria-label="Tab Navigation"
                        className={ Styles["home-tabs-group"] }
                    >
                        <Tab label="About" className={ Styles["home-label"] }>
                            <Grid fullWidth={ true }>
                                <Column
                                    md={ 4 }
                                    lg={ 7 }
                                    sm={ 4 }
                                >
                                    <h2 className={ Styles["home-subheading"] }>Overview</h2>
                                    <p className={ Styles["home-paragraph"] }>
                                        Carbon is IBM’s open-source design system for digital products
                                        and experiences. With the IBM Design Language as its
                                        foundation, the system consists of working code, design tools
                                        and resources, human interface guidelines, and a vibrant
                                        community of contributors.
                                    </p>
                                    <Button>Learn more</Button>
                                </Column>
                                <Column
                                    md={ 4 }
                                    lg={ { span: 8, offset: 7 } }
                                    sm={ 4 }
                                >
                                    <img
                                        className={ Styles["home-primary-image"] }
                                        src={ process.env.PUBLIC_URL + "/Isometric.jpeg" }
                                        alt="Carbon illustration"
                                    />
                                </Column>
                            </Grid>
                        </Tab>
                        <Tab label="Design" className={ Styles["home-label"] }>
                            <Grid fullWidth={ true }>
                                <Column
                                    md={ 4 }
                                    lg={ 7 }
                                    sm={ 4 }
                                >
                                    <h2 className={ Styles["home-subheading"] }>Designing with Carbon</h2>
                                    <p className={ Styles["home-paragraph"] }>
                                        Rapidly build beautiful and accessible experiences. The Carbon
                                        kit contains all resources you need to get started.
                                    </p>
                                    <Button>Learn more</Button>
                                </Column>
                                <Column
                                    md={ 4 }
                                    lg={ { span: 8, offset: 7 } }
                                    sm={ 4 }
                                >
                                    <img
                                        className={ Styles["home-primary-image"] }
                                        src={ process.env.PUBLIC_URL + "/Isometric.jpeg" }
                                        alt="Carbon illustration"
                                    />
                                </Column>
                            </Grid>
                        </Tab>
                        <Tab label="Develop" className={ Styles["home-label"] }>
                            <Grid fullWidth={ true }>
                                <Column
                                    md={ 4 }
                                    lg={ 7 }
                                    sm={ 4 }
                                >
                                    <h2 className={ Styles["home-subheading"] }>Development</h2>
                                    <p className={ Styles["home-paragraph"] }>
                                        Carbon provides Styles and components in Vanilla, React,
                                        Angular, and Vue for anyone building on the web.
                                    </p>
                                    <Button>Learn more</Button>
                                </Column>
                                <Column
                                    md={ 4 }
                                    lg={ { span: 8, offset: 7 } }
                                    sm={ 4 }
                                >
                                    <img
                                        className={ Styles["home-primary-image"] }
                                        src={ process.env.PUBLIC_URL + "/Isometric.jpeg" }
                                        alt="Carbon illustration"
                                    />
                                </Column>
                            </Grid>
                        </Tab>
                    </Tabs>
                </Column>
            </Row>
        </Row>
        <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles["home-row-3"] }>
            <Sectional heading="The Principles" className={ Styles["home-row-3"] }>
                <Card
                    heading="Carbon is Open"
                    body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
                    icon={ <PersonFavorite size={ 50 }/> }
                />
                <Card
                    heading="Carbon is Modular"
                    body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
                    icon={ <Application size={ 50 }/> }
                />
                <Card
                    heading="Carbon is Consistent"
                    body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
                    icon={ <Globe size={ 50 }/> }
                />
            </Sectional>
        </Column>
        <hr/>
        <Selectable/>
        <hr/>
        <List rows={ 15 }/>
    </React.Fragment>
);

export default Component;
