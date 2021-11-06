import Path from "path";
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tag } from "@carbon/react";
import { default as Version } from "./../Version/Component.js";
import { default as Build } from "./../../Version.js";

import "./SCSS/Version.scss";

import * as Tagger from "./SCSS/Mode.module.scss";

const Component = (props) => {
    const display = process.env.NODE_ENV !== "production";

    const State = useState(false);

    const {
        version,
        ... Properties
    } = props;

    return (display === true)
        ? (
            <div className={ Tagger.tag }>
                <span>
                    {
                        (process.env.NODE_ENV === "development")
                            ? (
                                <Tag
                                    type={ "blue" } title={ version } filter={ false } size={ "md" }
                                    children={ (
                                        <strong>{ version }</strong>
                                    ) }
                                    onClick={ () => State[1](!State[0]) } outline={ null }
                                />
                            ) : (
                                <Tag>Staging</Tag>
                            )
                    }
                </span>
                <Version state={ State } version={ version }/>
            </div>
        ) : (
            <></>
        );
};

Component.defaultProps = {
    version: Build
};

Component.propTypes = {
    version: PropTypes.string
};

export default Component;
