import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import * as Styles from "./SCSS/Index.module.scss";

import {
    Button,
    Modal,
    SelectableTile,
    TextInput
} from "@carbon/react";

import { useState } from "react";

/***
 *
 * @param props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

const Selectable = ({ props }) => {
    const [selected, setSelected] = useState(false);

    return (
        <SelectableTile
            id={ props?.ID }
            name={ props?.Name }
            value={ props?.value }
            selected={ props?.selected }
            disabled={ props?.disabled }
            children={ props?.Children }

            onClick={ () => setSelected( ! selected) }
        />
    );
};

Selectable.propTypes = {
    /***
     *
     */

    id: PropTypes.string,

    /***
     *
     */

    name: PropTypes.string,

    /***
     *
     */

    value: PropTypes.string,

    /***
     *
     */

    selected: PropTypes.string,

    /***
     *
     */

    onClick: PropTypes.func,

    /***
     *
     */

    disabled: PropTypes.bool,

    /***
     *
     */

    children: PropTypes.element
};

Selectable.defaultProps = {
    ID: "",
    Name: "Tiles"
};

/*****
 *
 * @param Children
 *
 * @returns {*}
 *
 * @constructor
 *
 */

const Selectables = ({ Children = [Properties()] }) => {
    const Components = [];

    Children.forEach(
        (Component, Index) => {
            Components.push(Selectable(... Component));
        }
    );

    return Components;
};

const Component = () => {
    const States = [
        useState([false, "Value"]),
        useState([false, "Value"]),
        useState([false, "Value"])
    ];

    return (
        <div role="group" aria-label="selectable tiles">
            <SelectableTile
                id="tile-1"
                name="tiles"
                selected={ States[0][0][0] }
                onClick={ () => States[0][1]( ! States[0][0][0]) }
                value={ "" }
                disabled={ false }
                className={ ["unselectable", Styles["selectable-tile"]].join(" ") }
            >
                Option-1
            </SelectableTile>
            <SelectableTile
                id="tile-2"
                name="tiles"
                selected={ States[1][0][0] }
                onClick={ () => States[1][1]( ! States[0][0][0]) }
                value={ "" }
                disabled={ false }
                className={ ["unselectable", Styles["selectable-tile"]].join(" ") }
            >
                Option-2
            </SelectableTile>
            <SelectableTile
                id="tile-3"
                name="tiles"
                selected={ States[2][0][0] }
                onClick={ () => States[2][1]( ! States[0][0][0]) }
                value={ "" }
                disabled={ false }
                className={ ["unselectable", Styles["selectable-tile"]].join(" ") }
            >
                Option-3
            </SelectableTile>
        </div>
    );
};

export const Opener = ({ open, setOpen }) => {
    const ModalStateManager = ({
        renderLauncher: LauncherContent,
        children: ModalContent
    }) => {
        return (
            <>
                { ! ModalContent || typeof document === "undefined"
                  ? null
                  : ReactDOM.createPortal(
                        <ModalContent open={ open } setOpen={ setOpen }/>,
                        document.body
                    ) }
                { LauncherContent && <LauncherContent open={ open } setOpen={ setOpen }/> }
            </>
        );
    };

    return (
        <ModalStateManager
            renderLauncher={ ({ setOpen }) => (
                <Button onClick={ () => setOpen(true) }>Launch modal</Button>
            ) }
        >
            { ({ open, setOpen }) => (
                <Modal
                    modalHeading="Add a custom domain"
                    modalLabel="Account resources"
                    primaryButtonText="Add"
                    secondaryButtonText="Cancel"
                    open={ open }
                    onRequestClose={ () => setOpen(false) }
                >
                    <p style={ { marginBottom: "1rem" } }>
                        Custom domains direct requests for your apps in this Cloud Foundry
                        organization to a URL that you own. A custom domain can be a shared
                        domain, a shared subdomain, or a shared domain and host.
                    </p>
                    <TextInput
                        data-modal-primary-focus
                        id="text-input-1"
                        labelText="Domain name"
                        placeholder="e.g. github.com"
                        style={ { marginBottom: "1rem" } }
                    />
                    <Component/>
                </Modal>
            ) }
        </ModalStateManager>
    );
};

export default Component;
