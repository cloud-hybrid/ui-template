import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { CodeSnippet, CodeSnippetSkeleton, InlineNotification } from "@carbon/react";

import axios from "axios";

import "./SCSS/Snippet.scss";
import * as Styles from "./SCSS/Snippet.module.scss";

const Component = () => {
    const url = "https://localhost:3000/API/Awaitable?Time=1";

    const [ data, setData ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const $ = await axios(url);

                setData($);

                setError(false);
            } catch ( error ) {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData().finally(() => {
            console.debug("[Debug] Loading Complete");
        });
    }, [ url ]);

    const Awaitable = () => (loading) && (<CodeSnippetSkeleton type={ "multi" }/>);
    const Error = () => (error) && (
        <div>
            <InlineNotification
                caption="00:00:00 AM"
                iconDescription="describes the close button"
                subtitle={ <span>Subtitle text goes here. <a href="#example">Example link</a></span> }
                timeout={ 0 }
                title="Notification title"
            />
        </div>
    );
    const Data = () => (data) && (
        <CodeSnippet
            type={ "multi" }
            className={ Styles.snippet }
            children={
                JSON.stringify(data, null, 4)
            }
            showMoreText={ "Expand" }
            showLessText={ "Collapse" }
            wrapText={ false }
        />
    );

    return (
        <>
            { (<Error/>) }
            { (<Awaitable/>) }
            { (<Data/>) }
        </>
    );
};

Component.propTypes = {};

export default Component;
