import { Requestable } from "./../../pages/Development/Code-Snippet-Awaitable/Content.js";

/***
 *
 * @param id
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

export const Variables = ({ id }) => {
    const Token = "quLaoKev91BVPsNQh1SZ";
    const URL = [ "https://gitlab.mycapstone.com/api/v4/projects", id, "variables" ].join("/");

    const Headers = {
        "PRIVATE-TOKEN": Token
    };

    return (<Requestable headers={ Headers } url={ URL }/>);
};