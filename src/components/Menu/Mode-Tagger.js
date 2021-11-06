import { Tag } from "@carbon/react";
import React from "react";

import * as Tagger from "./SCSS/Mode.module.scss";

import { default as Modal } from "./../Version";

const Mode = () => {
    const display = process.env.NODE_ENV !== "production";

    return (display === true)
        ? (
            <div className={ Tagger.tag }>
                <span>
                    {
                        (process.env.NODE_ENV === "development")
                            ? (<Tag type={ "green" }>Development</Tag>)
                            : (<Tag>Staging</Tag>)
                    }
                </span>
            </div>
        ) : (
            <></>
        );
};

export default Mode;
