import PropTypes from "prop-types";

import React from "react";

import { Information } from "@carbon/icons-react/next";

import * as Styles from "./SCSS/Index.module.scss"

import { button } from "./SCSS/Index.module.scss";

const Defaults = {
    /***
     * Icon JSX Element XOR null
     */
    Icon: () => (<Information/>),

    /***
     * Title Pop-Over Content (String)
     */
    Title: "Page Information",

    /***
     * Text Assistive Reading Content (String)
     */
    ARIA: "Page Information Button",

    Styles: {
        Keys: Styles,
        Target: button
    }
}

const Component = ({ Properties = Defaults }) => {
    console.debug("Component Styles", "Informational-Corner-Button", Properties.Styles);

    return (
        <button
            onClick={
                (event) => {
                    console.debug("[DEBUG] Click Event", event);
                }
            }
            className={ Properties.Styles.Target }
            data-tooltip-position={ "left" }
            data-tooltip-title={ Properties.Title }
            type={ "button" }
            aria-label={ Properties.ARIA }
            children={
                (<Properties.Icon/>)
            }
        />
    );
}

Component.propTypes = {
    /***
     * Icon JSX Element XOR null
     */
    Icon: PropTypes.object,

    /***
     * Title Pop-Over Content (String)
     */
    Title: PropTypes.any,

    /***
     * Text Assistive Reading Content (String)
     */
    ARIA: PropTypes.any
}

export default Component;

export const Settings = Defaults;
