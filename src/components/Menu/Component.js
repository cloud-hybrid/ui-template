import "./SCSS/Side-Panel.scss";

import React, { useState } from "react";

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
    HeaderPanel
} from "@carbon/react";

import {
    Notification,
    Search,
    AppSwitcher,
    DataBackup,
    UserAvatar,
    Debug,
    Development,
    Dashboard,
    Code,
    UserData
} from "@carbon/icons-react/next";

import { Link } from "react-router-dom";

import { default as Mode } from "./Mode-Tagger";

const Icons = {
    Home: () => (<DataBackup/>),
    Debug: () => (<Debug/>),
    Dashboard: () => (<Dashboard/>),
    Code: () => (<Code/>),
    Development: () => (<Development/>),
    Switcher: {
        Primary: () => (<AppSwitcher/>),
        Auxiliary: () => (
            <AppSwitcher/>)
    },
    Search: {
        Primary: () => (<Search/>),
        Auxiliary: () => (<Search/>)
    },
    Login: {
        Primary: () => (<UserData/>),
        Auxiliary: () => (<UserData/>)
    }
};

const Component = () => {
    const [applicationsIsOpen, setApplicationsIsOpen] = useState(false);

    return (
        <>
            <HeaderContainer
                render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="UI Template">
                        <SkipToContent/>
                        <HeaderMenuButton
                            aria-label="Menu"
                            onClick={
                                () => {
                                    onClickSideNavExpand();
                                }
                            }
                            isActive={ isSideNavExpanded }
                        />
                        <HeaderName
                            to="/"
                            element={ Link }
                            prefix="Cloud"
                            onClick={
                                () => {
                                    if (isSideNavExpanded) onClickSideNavExpand();
                                }
                            }
                        >
                            Nexus
                        </HeaderName>
                        <HeaderNavigation aria-label="Nexus">
                            <HeaderMenuItem element={ Link } to="/github">
                                GitHub
                            </HeaderMenuItem>
                            <HeaderMenuItem element={ Link } to="/gitlab">
                                GitLab
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <Mode/>
                        <SideNav
                            aria-label="Side Navigation"
                            expanded={ isSideNavExpanded }
                            isPersistent={ false }
                            children={ (
                                <SideNavItems>
                                    <SideNavLink
                                        renderIcon={ Icons.Development } href="/#/gitlab"
                                        onClick={
                                            () => {
                                                onClickSideNavExpand();
                                            }
                                        }
                                        async={ true }
                                    >
                                        GitLab
                                    </SideNavLink>
                                    <SideNavLink
                                        renderIcon={ Icons.Dashboard } href="/#/github"
                                        onClick={
                                            () => {
                                                onClickSideNavExpand();
                                            }
                                        }
                                        async={ true }
                                    >
                                        GitHub
                                    </SideNavLink>
                                    <SideNavMenu
                                        renderIcon={ Icons.Debug }
                                        title="Development"
                                    >
                                        <SideNavMenuItem
                                            href="/#/servers" resource={ "servers" }
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
                                            href="/#/servers" resource={ "servers" }
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
                                            href="/#/servers" resource={ "servers" }
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
                            ) }
                        />
                        <HeaderGlobalBar>
                            <HeaderGlobalAction
                                aria-label="Notifications"
                                tooltipAlignment="start"
                                children={ (
                                    <Notification/>
                                ) }
                                onClick={
                                    () => {
                                        console.debug("...");
                                    }
                                }
                            />
                            <HeaderGlobalAction
                                aria-label="User Avatar"
                                children={ (
                                    <UserAvatar/>
                                ) }
                                onClick={
                                    () => {
                                        console.debug("...");
                                    }
                                }
                            />
                            <HeaderGlobalAction
                                aria-label="Switcher"
                                isActive={ applicationsIsOpen }
                                tooltipPosition={ "left" }
                                tooltipAlignment={ "end" }
                                onClick={
                                    () => {
                                        setApplicationsIsOpen(!applicationsIsOpen);
                                    }
                                }
                            >
                                <Icons.Switcher.Primary/>
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </Header>
                ) }
            >
            </HeaderContainer>
            <HeaderPanel
                aria-label="Header Panel"
                expanded={ applicationsIsOpen }
                style={
                    { backgroundColor: "var(--cds-background)" }
                }
            >
                <Switcher aria-label={ "Switcher Container" }>
                    <SwitcherItem aria-label="Sign-Out" onClick={
                        async () => {
                            console.debug("Logout Under Refactor & Development");

                            setApplicationsIsOpen(false);
                        }
                    } async={ true }>
                        Sign-Out
                    </SwitcherItem>
                    <SwitcherDivider/>
                    <SwitcherItem target={ "_blank" } href="#" aria-label="Content Management System">
                        CMS
                    </SwitcherItem>
                    <SwitcherItem target={ "_blank" } href="#" aria-label="Calendar">
                        Calendar
                    </SwitcherItem>
                    <SwitcherItem target={ "_blank" } href="#" aria-label="Vusion">
                        Vusion
                    </SwitcherItem>
                    <SwitcherDivider/>
                    <SwitcherItem
                        target={ "_blank" } href="https://983281742669.signin.aws.amazon.com/console/"
                        aria-label="Amazon Web Service(s)"
                    >
                        AWS
                    </SwitcherItem>
                    <SwitcherItem
                        target={ "_blank" } href="https://api.cloud-technology.io:3000/Documentation"
                        aria-label="Nexus API"
                    >
                        Nexus API
                    </SwitcherItem>
                    <SwitcherItem target={ "_blank" } href="https://gitlab.cloud-technology.io" aria-label="Gitlab VCS">
                        Version Control
                    </SwitcherItem>
                </Switcher>
            </HeaderPanel>
        </>
    );
}

export default Component;
