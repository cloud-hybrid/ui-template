import React from "react";

import * as Styles from "./SCSS/Index.module.scss";

import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Tabs,
    Tab,
    Grid,
    Column
} from "@carbon/react";

import { default as Information } from "./../../components/Informational-Card";

import {
    Globe,
    PersonFavorite,
    Application
} from "@carbon/icons-react/next";

const props = {
    tabs: {
        selected: 0,
        role: "navigation"
    },
    tab: {
        role: "presentation",
        tabIndex: 0
    }
};

const Page = () => {
    return (
        <Grid className={Styles["landing-page"]}>
            <Column lg={ 16 } md={ 8 } sm={ 4 } className={Styles["landing-page-banner"]}>
                <Breadcrumb noTrailingSlash aria-label={ "Page Navigation" }>
                    <BreadcrumbItem>
                        <a href="/">Getting started</a>
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1 className={Styles["landing-page-heading"]}>
                    Design &amp; build with Carbon
                </h1>
            </Column>
            <Column lg={ 16 } md={ 8 } sm={ 4 } className={Styles["landing-page-row-2"]}>
                <Tabs
                    { ... props.tabs }
                    aria-label="Tab navigation"
                    className={Styles["landing-page-tabs-group"]}
                >
                    <Tab { ... props.tab } label="About" className={Styles["landing-page-label"]}>
                        <Grid className={Styles["landing-page-tabs-group-content"]}>
                            <Column
                                md={ 4 }
                                lg={ 7 }
                                sm={ 4 }
                                className={ Styles["landing-page-tab-content"] }
                            >
                                <h2 className={Styles["landing-page-subheading"]}>Overview</h2>
                                <p className={Styles["landing-page-paragraph"]}>
                                    Carbon is IBM’s open-source design system for digital products
                                    and experiences. With the IBM Design Language as its
                                    foundation, the system consists of working code, design tools
                                    and resources, human interface guidelines, and a vibrant
                                    community of contributors.
                                </p>
                                <Button>Learn more</Button>
                            </Column>
                            <Column md={ 4 } lg={ { span: 8, offset: 7 } } sm={ 4 }>
                                <img
                                    className={Styles["landing-page-primary-image"]}
                                    src={ `${ process.env.PUBLIC_URL }/illustration.png` }
                                    alt="Carbon illustration"
                                />
                            </Column>
                        </Grid>
                    </Tab>
                    <Tab { ... props.tab } label="Design" className={ Styles["landing-page-label"] }>
                        <Grid className={Styles["landing-page-tabs-group-content"]}>
                            <Column
                                md={ 4 }
                                lg={ 7 }
                                sm={ 4 }
                                className={Styles["landing-page-tab-content"]}
                            >
                                <h2 className={Styles["landing-page-subheading"]}>Designing with Carbon</h2>
                                <p className={Styles["landing-page-paragraph"]}>
                                    Rapidly build beautiful and accessible experiences. The Carbon
                                    kit contains all resources you need to get started.
                                </p>
                                <Button>Learn more</Button>
                            </Column>
                            <Column md={ 4 } lg={ { span: 8, offset: 7 } } sm={ 4 }>
                                <img
                                    className={Styles["landing-page-primary-image"]}
                                    src={ `${ process.env.PUBLIC_URL }/illustration.png` }
                                    alt="Carbon illustration"
                                />
                            </Column>
                        </Grid>
                    </Tab>
                    <Tab { ... props.tab } label="Develop" className={ Styles["landing-page-label"] }>
                        <Grid className={Styles["landing-page-tabs-group-content"]}>
                            <Column
                                md={ 4 }
                                lg={ 7 }
                                sm={ 4 }
                                className={Styles["landing-page-tab-content"]}
                            >
                                <h2 className={Styles["landing-page-subheading"]}>Development</h2>
                                <p className={Styles["landing-page-paragraph"]}>
                                    Carbon provides Styles and components in Vanilla, React,
                                    Angular, and Vue for anyone building on the web.
                                </p>
                                <Button>Learn more</Button>
                            </Column>
                            <Column md={ 4 } lg={ { span: 8, offset: 7 } } sm={ 4 }>
                                <img
                                    className={ Styles["landing-page-primary-image"] }
                                    src={ `${ process.env.PUBLIC_URL }/illustration.png` }
                                    alt="Carbon illustration"
                                />
                            </Column>
                        </Grid>
                    </Tab>
                </Tabs>
            </Column>
            <Column lg={ 16 } md={ 8 } sm={ 4 }>
                <Information.Section heading="The Principles" className={Styles["landing-page-row-3"]}>
                    <Information.Card
                        heading="Carbon is Open"
                        body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
                        icon={ <PersonFavorite size={ 50 } /> }
                    />
                    <Information.Card
                        heading="Carbon is Modular"
                        body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
                        icon={ <Application size={ 50 } /> }
                    />
                    <Information.Card
                        heading="Carbon is Consistent"
                        body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
                        icon={ <Globe size={ 50 } /> }
                    />
                </Information.Section>
            </Column>
        </Grid>
    );
};

export default Page;
