import React, {
    Suspense,
    useEffect,
    useRef,
    useState
} from "react";

import {
    default as Breadcrumb,
    Placeholder
} from "./Index";

/***
 *
 * @param duration {Number} Number of Milliseconds to Simulate Load
 * @returns {JSX.Element}
 * @constructor
 *
*/

const Component = ({duration = 1500}) => {
    const Duration = useRef(duration);

    const [awaiting, setAwaiting] = useState(true);

    useEffect(() => {
        const Waiter = () => new Promise((_) => setTimeout(
            ($) => setAwaiting(false),
            Duration.current
        ));

        Waiter().finally();
    }, [awaiting]);

    return (awaiting === false) ? (
        <Breadcrumb/>
    ): (
        <Placeholder/>
    )
};

export default Component;
