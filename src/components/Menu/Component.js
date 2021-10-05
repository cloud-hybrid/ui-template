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

const Component = () => {
    return (
        <HeaderContainer
            render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="UI Template">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Menu"
                        onClick={ onClickSideNavExpand }
                        isActive={ isSideNavExpanded }
                    />
                    <HeaderName element={ Link } to="/" prefix="Nexus">
                        Cloud-UI
                    </HeaderName>
                    <HeaderNavigation aria-label="Nexus">
                        <HeaderMenuItem element={ Link } to="/home">
                            Home
                        </HeaderMenuItem>
                        <HeaderMenuItem element={ Link } to="/github">
                            GitHub
                        </HeaderMenuItem>
                        <HeaderMenuItem element={ Link } to="/gitlab">
                            GitLab
                        </HeaderMenuItem>
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={ isSideNavExpanded }
                        isPersistent={ false }
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                <HeaderMenuItem element={ Link } to="/home">
                                    Home
                                </HeaderMenuItem>
                                <HeaderMenuItem element={ Link } to="/github">
                                    GitHub
                                </HeaderMenuItem>
                                <HeaderMenuItem element={ Link } to="/gitlab">
                                    GitLab
                                </HeaderMenuItem>
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction
                            aria-label="Notifications"
                            tooltipAlignment="start"
                            children={ (
                                <Notification/>
                            ) }
                        />
                        <HeaderGlobalAction
                            aria-label="User Avatar"
                            children={ (
                                <UserAvatar/>
                            ) }
                        />
                        <HeaderGlobalAction
                            aria-label="Switcher"
                            tooltipPosition={"left"}
                            tooltipAlignment={"end"}
                            children={ (
                                <Switcher/>
                            ) }
                        />
                    </HeaderGlobalBar>
                </Header>
            )}>
        </HeaderContainer>
    );
}

export default Component;
