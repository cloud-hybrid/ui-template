import React from "react";

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
            <Header aria-label="Carbon Tutorial">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={ onClickSideNavExpand }
                    isActive={ isSideNavExpanded }
                />
                <HeaderName element={ Link } to="/" prefix="IBM">
                    Carbon Tutorial
                </HeaderName>
                <HeaderNavigation aria-label="Carbon Tutorial">
                    <HeaderMenuItem element={ Link } to="/repos">
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
                            <HeaderMenuItem element={ Link } to="/repos">
                                Repositories
                            </HeaderMenuItem>
                        </HeaderSideNavItems>
                    </SideNavItems>
                </SideNav>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications" tooltipPosition={ "right" } tooltipAlignment={ "start" } isActive={false}>
                        <Notification />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar">
                        <UserAvatar />
                    </HeaderGlobalAction>
                    {/*
                     Tooltip-Position: 'bottom' | 'top' | 'left' | 'right';

                    */}
                    <HeaderGlobalAction aria-label="App Switcher" tooltipPosition={"left"} tooltipAlignment={"end"}>
                        <Switcher />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        ) }
    />
);

export default Component;
