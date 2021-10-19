// import "./SCSS/Side-Panel.scss";

import "./SCSS/Index.scss";

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
    HeaderPanel, HeaderMenu
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

    const [currentPage, setCurrentPage] = useState("/")

    const checkIsCurrentPage = (comparator = "/") => {
        const Hash = location.hash.replace("#", "");

        return (comparator === Hash);
    }

    const handleCurrentPage = (link) => {
        setCurrentPage(link);
    }

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
                                    setCurrentPage(null);

                                    if (isSideNavExpanded) onClickSideNavExpand();
                                }
                            }
                        >
                            Nexus
                        </HeaderName>
                        <HeaderNavigation aria-label="Nexus">
                            {/* ... Current-Page State --> isCurrentPage={location.hash === "#/github"} onClick={() => handleCurrentPage("/github")} */}
                            <HeaderMenuItem element={ Link } to="/github" isCurrentPage={location.hash === "#/github"} onClick={() => handleCurrentPage("/github")}>
                                GitHub
                            </HeaderMenuItem>
                            {/* ... Current-Page State --> isCurrentPage={location.hash === "#/gitlab"} onClick={() => handleCurrentPage("/gitlab")} */}
                            <HeaderMenuItem element={ Link } to="/gitlab">
                                GitLab
                            </HeaderMenuItem>
                            {/* ... Current-Page State --> isCurrentPage={location.hash === "#/pipelines"} onClick={() => handleCurrentPage("/pipelines")} */}
                            <HeaderMenuItem element={ Link } to="/pipelines">
                                Pipelines
                            </HeaderMenuItem>
                            <hr width="1px" size="auto" style={{borderStyle: "solid", color: "var(--cds-border-subtle)", marginLeft: "0.5rem", marginRight: "0.5rem"}}/>
                            <HeaderMenu aria-label={"Label"} menuLinkName={"Development"}>
                                <HeaderMenuItem element={Link} to="/template">
                                    <strong>Template</strong>
                                </HeaderMenuItem>
                                <HeaderMenuItem element={Link} to="/notifications">
                                    <strong>Notifications</strong>
                                </HeaderMenuItem>
                            </HeaderMenu>
                            <hr width="1px" size="auto" style={{borderStyle: "solid", color: "var(--cds-border-subtle)", marginLeft: "0.5rem", marginRight: "0.5rem"}}/>
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
                                    <SideNavLink
                                        renderIcon={ Icons.Code } href="/#/pipelines"
                                        onClick={
                                            () => {
                                                onClickSideNavExpand();
                                            }
                                        }
                                        async={ true }
                                    >
                                        GitLab
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
