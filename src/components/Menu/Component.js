import * as Styles from "./SCSS/Index.module.scss";

import * as Panel from "./SCSS/Side-Panel.module.scss";

import { Store, STORE } from "./../Authenticate";

import React, { useRef, useState } from "react";

import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    Switcher,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    SwitcherDivider,
    SwitcherItem,
    HeaderPanel, HeaderMenu
} from "@carbon/react";

import {
    Notification,
    Search,
    Switcher as Switch,
    DataBackup,
    UserAvatar,
    Debug,
    Development,
    Dashboard,
    Code,
    UserData
} from "@carbon/icons-react/next";

import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

import { default as Mode } from "./Mode-Tagger";
import { default as Version } from "./Version.js";

const Icons = {
    Home: () => (
        <DataBackup/>
    ),
    Debug: () => (
        <Debug/>
    ),
    Dashboard: () => (
        <Dashboard/>
    ),
    Code: () => (
        <Code/>
    ),
    Development: () => (
        <Development/>
    ),
    Switcher: {
        Primary: () => (
            <Switcher/>
        ),
        Auxiliary: () => (
            <Switch/>
        )
    },
    Search: {
        Primary: () => (
            <Search/>
        ),
        Auxiliary: () => (
            <Search/>
        )
    },
    Login: {
        Primary: () => (
            <UserData/>
        ),
        Auxiliary: () => (
            <UserData/>
        )
    }
};

import { default as Notifications } from "./Notifications.js";

/***
 *
 * @param Target {String} -
 * @param Authorizer
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

const Component = ({ Authorizer }) => {
    const location = useLocation();
    const navigation = useNavigate();

    const Opener = useState(false);
    const Notifies = useState(false);

    const Active = (_ = "") => {
        const $ = "/" + _;
        const Path = (
            $ === location.pathname
        );
        const Hash = (
            $ === "#" + Path
        );

        return (
            Path || Hash
        );
    };

    return (
        <nav className={ Styles.menu }>
            <HeaderContainer
                render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="UI Template">
                        <SkipToContent/>
                        {
                            (
                                Authorizer[0] === true
                            ) ?
                                (
                                    <HeaderMenuButton
                                        id={ "io-side-navigation-menu-toggle" }
                                        className={ Panel.toggle }
                                        aria-label="Menu"
                                        onClick={
                                            () => {
                                                onClickSideNavExpand();
                                            }
                                        }
                                        isActive={ isSideNavExpanded === true }
                                    />
                                ) : (
                                    <></>
                                )
                        }
                        <HeaderName
                            href="/"
                            element={ Link }
                            to={ "/" }
                            prefix="Cloud"
                        >
                            Nexus
                        </HeaderName>
                        <HeaderNavigation aria-label="Nexus">
                            {/* ... Current-Page State --> isCurrentPage={location.hash === "#/github"} onClick={() => handleCurrentPage("/github")} */ }
                            <HeaderMenuItem element={ Link } to={ "/github" } isCurrentPage={ Active("github") } onClick={ () => navigation("/github") }>
                                GitHub
                            </HeaderMenuItem>
                            {/* ... Current-Page State --> isCurrentPage={location.hash === "#/gitlab"} onClick={() => handleCurrentPage("/gitlab")} */ }
                            <HeaderMenuItem element={ Link } to={ "/gitlab" } isCurrentPage={ Active("gitlab") } onClick={ () => navigation("/gitlab") }>
                                GitLab
                            </HeaderMenuItem>
                            {/* ... Current-Page State --> isCurrentPage={location.hash === "#/pipelines"} onClick={() => handleCurrentPage("/pipelines")} */ }
                            <HeaderMenuItem element={ Link } to={ "/pipelines" } isCurrentPage={ Active("pipelines") } onClick={ () => navigation("/pipelines") }>
                                Pipelines
                            </HeaderMenuItem>
                            <hr
                                width="1px"
                                size="auto"
                                style={
                                    {
                                        borderStyle: "solid",
                                        color: "var(--cds-border-subtle)",
                                        marginLeft: "0.5rem",
                                        marginRight: "0.5rem"
                                    }
                                }
                            />
                            <HeaderMenu aria-label={ "Label" } menuLinkName={ "Development" }>
                                <HeaderMenuItem element={ Link } to="/template">
                                    <strong>Template</strong>
                                </HeaderMenuItem>
                                <HeaderMenuItem element={ Link } to="/notifications">
                                    <strong>Notifications</strong>
                                </HeaderMenuItem>
                                <HeaderMenuItem element={ Link } to="/snippet">
                                    <strong>Code-Snippet</strong>
                                </HeaderMenuItem>
                            </HeaderMenu>
                            <hr
                                width="1px"
                                size="auto"
                                style={
                                    {
                                        borderStyle: "solid",
                                        color: "var(--cds-border-subtle)",
                                        marginLeft: "0.5rem",
                                        marginRight: "0.5rem"
                                    }
                                }
                            />
                        </HeaderNavigation>
                        <Mode/>
                        <Version/>
                        {
                            (
                                Authorizer[0] === true
                            ) ? (
                                <SideNav
                                    aria-label="Side Navigation"
                                    expanded={ isSideNavExpanded }
                                    isPersistent={ false }
                                    className={ Panel.side }
                                    onOverlayClick={ (event) => {
                                        onClickSideNavExpand();
                                    } }
                                >
                                    <SideNavItems>
                                        <SideNavLink
                                            renderIcon={ Icons.Development }
                                            isSideNavExpanded={ isSideNavExpanded }
                                            isActive={ Active("gitlab") }
                                            onClick={
                                                () => {
                                                    navigation("/gitlab");
                                                    onClickSideNavExpand();
                                                }
                                            }
                                        >
                                            GitLab
                                        </SideNavLink>
                                        <SideNavLink
                                            renderIcon={ Icons.Development }
                                            isSideNavExpanded={ isSideNavExpanded }
                                            isActive={ Active("github") }
                                            onClick={
                                                () => {
                                                    navigation("/github");
                                                    onClickSideNavExpand();
                                                }
                                            }
                                        >
                                            GitHub
                                        </SideNavLink>
                                        <SideNavLink
                                            renderIcon={ Icons.Development }
                                            isSideNavExpanded={ isSideNavExpanded }
                                            isActive={ Active("pipelines") }
                                            onClick={
                                                () => {
                                                    navigation("/pipelines");
                                                    onClickSideNavExpand();
                                                }
                                            }
                                        >
                                            Pipelines
                                        </SideNavLink>
                                        <SideNavMenu
                                            renderIcon={ Icons.Debug }
                                            title="Development"
                                        >
                                            <SideNavMenuItem
                                                href="/servers" resource={ "servers" }
                                                onClick={
                                                    () => {
                                                        onClickSideNavExpand();
                                                    }
                                                }
                                                async={ true }
                                            >
                                                Item-1
                                            </SideNavMenuItem>
                                            <SideNavMenuItem
                                                href="/servers" resource={ "servers" }
                                                onClick={
                                                    () => {
                                                        onClickSideNavExpand();
                                                    }
                                                }
                                                async={ true }
                                            >
                                                Item-2
                                            </SideNavMenuItem>
                                            <SideNavMenuItem
                                                href="/servers" resource={ "servers" }
                                                onClick={
                                                    () => {
                                                        onClickSideNavExpand();
                                                    }
                                                }
                                                async={ true }
                                            >
                                                Item-3
                                            </SideNavMenuItem>
                                        </SideNavMenu>
                                    </SideNavItems>
                                </SideNav>
                            ) : (
                                <></>
                            )
                        }
                        <HeaderGlobalBar>
                            <HeaderGlobalAction
                                id={ "primary-menu-notifications-button" }
                                aria-label="Notifications"
                                tooltipAlignment="start"
                                renderIcon={ Notification }
                                children={ (
                                    <></>
                                ) }
                                id={ "global-menu-notifications" }
                                onClickCapture={ (event) => {
                                    console.debug(event);
                                } }
                                onClick={
                                    (event) => {
                                        event.preventDefault();

                                        Notifies[1](!Notifies[0]);
                                    }
                                }
                            />
                            <HeaderGlobalAction
                                id={ "primary-menu-user-profile-button" }
                                aria-label="User Avatar"
                                children={ (
                                    <></>
                                ) }
                                renderIcon={ UserAvatar }
                                onClick={
                                    () => {
                                        console.debug("...");
                                    }
                                }
                            />
                            <HeaderGlobalAction
                                id={ "primary-menu-switcher-button" }
                                aria-label="Switcher"
                                isActive={ Opener[0] }
                                children={ (
                                    <></>
                                ) }
                                renderIcon={ Switch }
                                tooltipPosition={ "left" }
                                tooltipAlignment={ "end" }
                                onClick={
                                    () => {
                                        Opener[1](!Opener[0]);
                                    }
                                }
                            />
                        </HeaderGlobalBar>
                    </Header>
                ) }
            >
            </HeaderContainer>
            <HeaderPanel
                aria-label="Header Panel"
                expanded={ Opener[0] }
                style={
                    { backgroundColor: "var(--cds-background)" }
                }
            >
                {
                    (
                        Authorizer[0] === true
                    ) ? (
                        <Switcher aria-label={ "Switcher Container" }>
                            <SwitcherItem
                                id={ "switcher-side-panel-sign-out-button" }
                                aria-label="Sign-Out" onClick={
                                    async () => {
                                        try {
                                            console.debug("[Debug]", "Authorization Store Key (0)", STORE);

                                            const Value = await Store.getItem(STORE);

                                            console.debug("[Debug]", "Authorization Store Value (1)", Value);

                                            await Store.setItem(STORE, null, (e, value) => {
                                                if ( e ) {
                                                    console.error("[Fatal JWT Nullification Error]", e);
                                                }

                                                console.debug("[Debug]", "JWT Nullification Result (2)", value);
                                            });

                                            Opener[1](false);
                                        } catch ( e ) {
                                            console.error("[Fatal Unknown Authorized JWT := NULL Error]", e);
                                            throw new Error("JWT !:= NULL During an Authorized State");
                                        }
                                        finally {
                                            Authorizer[1](false);
                                        }
                                    }
                                }
                                children={ "Sign-Out" }
                            />
                            <SwitcherDivider/>
                            <SwitcherItem
                                target={ "_blank" }
                                href="#"
                                aria-label="Content Management System"
                            >
                                CMS
                            </SwitcherItem>
                            <SwitcherItem
                                target={ "_blank" }
                                href="#"
                                aria-label="Calendar"
                            >
                                Calendar
                            </SwitcherItem>
                            <SwitcherItem
                                target={ "_blank" }
                                href="#"
                                aria-label="Vusion"
                            >
                                Vusion
                            </SwitcherItem>
                            <SwitcherDivider/>
                            <SwitcherItem
                                target={ "_blank" }
                                href="https://983281742669.signin.aws.amazon.com/console/"
                                aria-label="Amazon Web Service(s)"
                            >
                                AWS
                            </SwitcherItem>
                            <SwitcherItem
                                target={ "_blank" }
                                aria-label="Nexus API"
                                href="https://api.cloud-technology.io:3000/Documentation"
                            >
                                Nexus API
                            </SwitcherItem>
                            <SwitcherItem
                                target={ "_blank" }
                                aria-label="Gitlab VCS"
                                href="https://gitlab.cloud-technology.io"
                            >
                                Version Control
                            </SwitcherItem>
                        </Switcher>
                    ) : (
                        <Switcher aria-label={ "Switcher Container" }>
                            <SwitcherItem
                                target={ "_parent" }
                                aria-label="Login"
                                href="/login"
                            >
                                Login
                            </SwitcherItem>
                        </Switcher>
                    )
                }
            </HeaderPanel>
            <Notifications State={ Notifies }/>
        </nav>
    );
};

export default Component;
