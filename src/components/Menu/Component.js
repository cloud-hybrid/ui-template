import React from "react";

import styles from "./SCSS/Index.module.scss";

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
    HeaderSideNavItems
} from "@carbon/react";

import {
    Switcher,
    Notification,
    UserAvatar
} from "@carbon/icons-react/next";

import { Link } from "react-router-dom";

const Component = () => (
    <HeaderContainer
        render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="UI Template">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Menu"
                    onClick={ onClickSideNavExpand }
                    isActive={ isSideNavExpanded }
                />
                <HeaderName element={ Link } to="/" prefix="Cloud">
                    UI Template
                </HeaderName>
                <HeaderNavigation aria-label="UI Template">
                    <HeaderMenuItem element={ Link } to="/repositories">
                        Repositories
                    </HeaderMenuItem>
                </HeaderNavigation>
                <SideNav
                    aria-label="Side navigation"
                    expanded={ isSideNavExpanded }
                    isPersistent={ false }
                >
                    <SideNavItems>
                        <HeaderSideNavItems>
                            <HeaderMenuItem element={ Link } to="/repositories">
                                Repositories
                            </HeaderMenuItem>
                        </HeaderSideNavItems>
                    </SideNavItems>
                </SideNav>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications" tooltipPosition={ "right" } tooltipAlignment={ "start" }>
                        <Notification />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar">
                        <UserAvatar />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Switcher" tooltipPosition={"left"} tooltipAlignment={"end"}>
                        <Switcher />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        ) }
    />
);

export default Component;
