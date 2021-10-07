import ReactDOM from "react-dom";
import * as Styles from "./SCSS/Index.module.scss";

import {
    Button,
    Modal,
    SelectableTile,
    TextInput
} from "@carbon/react";

import { useState } from "react";

const Properties = (ID = "", Name = "Tiles", Children = () => (<></>)) => {
    return {
        ID: ID,
        Name: Name,
        Children: Children
    };
}

/*****
 *
 * @param Properties
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

const Selectable = (Properties = Properties()) => {
    const [selected, setSelected] = useState(false);

    return (
        <SelectableTile
            id={ Properties.ID }
            name={ Properties.Name }
            selected={ selected }
            onClick={ () => setSelected(!selected) }
            disabled={ false }
            children={ Properties.Children }
        />
    );
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
        useState(false),
        useState(false),
        useState(false)
    ];

    return (
        <div role="group" aria-label="selectable tiles">
            <SelectableTile
                id="tile-1"
                name="tiles"
                selected={ States[0][0] }
                onClick={ () => States[0][1]( ! States[0][0]) }
                disabled={ false }
                className={ ["unselectable", Styles["selectable-tile"]].join(" ") }
            >
                Option-1
            </SelectableTile>
            <SelectableTile
                id="tile-2"
                name="tiles"
                selected={ States[1][0] }
                onClick={ () => States[1][1]( ! States[0][0]) }
                disabled={ false }
                className={ ["unselectable", Styles["selectable-tile"]].join(" ") }
            >
                Option-2
            </SelectableTile>
            <SelectableTile
                id="tile-3"
                name="tiles"
                selected={ States[2][0] }
                onClick={ () => States[2][1]( ! States[0][0]) }
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
        children: ModalContent,
    }) => {
        return (
            <>
                { ! ModalContent || typeof document === 'undefined'
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
                    <p style={ { marginBottom: '1rem' } }>
                        Custom domains direct requests for your apps in this Cloud Foundry
                        organization to a URL that you own. A custom domain can be a shared
                        domain, a shared subdomain, or a shared domain and host.
                    </p>
                    <TextInput
                        data-modal-primary-focus
                        id="text-input-1"
                        labelText="Domain name"
                        placeholder="e.g. github.com"
                        style={ { marginBottom: '1rem' } }
                    />
                    <Component/>
                </Modal>
            ) }/>
        </ModalStateManager>
    );
};

export default Component;
