import React from "react";
import {
    Information as Icon
} from "@carbon/icons-react/next";
import { button } from "./SCSS/Index.module.scss";

const Component = () => (
    <button
        onClick={
            (event) => {
                console.debug("[DEBUG] Click Event", event);
            }
        }
        className={ button }
        type="button"
        aria-label="Page Information"
        children={(<Icon/>)}
    />
);

export default Component;
