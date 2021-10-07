import React from "react";

import * as styles from "./SCSS/Index.module.scss";
import * as placeholder from "./SCSS/Skeleton.module.scss";

import Style from "./../../utilities/Styles";

import { default as Capitalize } from "./../../utilities/Capitalize";

import PropTypes from "prop-types";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbSkeleton
} from "@carbon/react";

const Name = Style(styles).Name.Unique;

const Compose = () => {
    Capitalize();

    const Hash = String(window.location.hash).slice(2);
    const Relative = Hash.capitalize();

    return ["Nexus", window.location.pathname, Relative].join("/");
};

const Deconstruct = () => {
    const Data = [];

    const Composition = Compose();

    const Components = Composition.split("/").filter(($) => $ !== "");

    Components.forEach(
        (Element, Index, Collection) => {
            const Properties = (Index === 0) ? {
                "data-value": Element,
                href: "/#/",
                value: -1,
                key: ["Breadcrumb-Item", String(Index)].join("-"),
                isCurrentPage: (Index === Collection.length - 1)
            }: {
                "data-value": Element,
                href: ["/#", Element.toLowerCase()].join("/"),
                value: -1,
                key: ["Breadcrumb-Item", String(Index)].join("-"),
                isCurrentPage: (Index === Collection.length - 1)
            };

            Data.push(
                (
                    <BreadcrumbItem { ... Properties }>
                        { Properties["data-value"] }
                    </BreadcrumbItem>
                )
            );
        }
    );

    return Data;
}

const Component = () => {
    const Data = Deconstruct();
    return (
        <Breadcrumb aria-label={ "Parent Navigation" } noTrailingSlash={ true } className={ Name }>
            {
                Data.map((Component) => Component)
            }
        </Breadcrumb>
    );
};

Component.propTypes = {};

export const Skeleton = () => {
    return (
        <BreadcrumbSkeleton className={ Style(placeholder).Name.Unique }/>
    );
};

export default Component;
