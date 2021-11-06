import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link, Tag } from "@carbon/react";

const Year = new Date().getFullYear();

const Ignore = () => true;

const Legal = () => (
    <>
        <Link href={ "#" } target={ "#" }>Copyrights</Link>, <Link href={ "#" } target={ "#" }>Usage
        Policy</Link>, <Link href={ "#" } target={ "#" }>DCMA</Link>, <Link href={ "#" } target={ "#" }>Security Notices</Link>,
        and <Link href={ "#" } target={ "#" }>Personal Data</Link>
    </>
);

import { default as Version } from "./../Version/Component.js";

import "./SCSS/Version.scss";

import * as Tagger from "./SCSS/Mode.module.scss";

const Component = (props) => {
    const display = process.env.NODE_ENV !== "production";

    const State = useState(false);

    window.onerror = Ignore;

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
    version: process.env.REACT_APP_VERSION | "0.0.1"
};

Component.propTypes = {
    version: PropTypes.string.isRequired
};

export default Component;
