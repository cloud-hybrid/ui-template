import { Tag } from "@carbon/react";

import * as Tagger from "./SCSS/Mode.module.scss";

const Mode = () => {
    const display = process.env.NODE_ENV !== "production";

    return (display === true)
        ? (
            <div className={ Tagger["mode-tag"] }>
                <span>
                    { (process.env.NODE_ENV === "development")
                        ? (<Tag>Development</Tag>)
                        : (<Tag>Staging</Tag>)
                    }
                </span>
            </div>
        ) : (
            <></>
        );
};

export default Mode;
