import ReactDOM from "react-dom";

import React, { useState } from "react";

import { Button, ComposedModal } from "@carbon/react";
import { Launch } from "@carbon/icons-react/next";

import { Variables } from "./Actions.js";

function ModalStateManager({id, group_id}) {
    const [ open, setOpen ] = useState(false);

    return (
        <>
            { typeof document === "undefined"
                ? null
                : ReactDOM.createPortal(
                    <ComposedModal open={ open } onClose={ () => setOpen(false) }>
                        <Variables id={id}/>
                    </ComposedModal>,
                    document.body
                ) }
            <Button hasIconOnly={ false } size="sm" type="button" kind={ "secondary" } onClick={ () => setOpen(true) }>
                <Launch/>
            </Button>
        </>
    );
}

export default ModalStateManager;