import PropTypes from "prop-types";

import {InlineNotification, ToastNotification, ActionableNotification} from "carbon-components-react";

const Properties = {
    Inline: {
        Default: {
            kind: "info",
            lowContrast: true,
            role: "alert",
            title: "[Title Title]",
            subtitle: "[Subtitle Content]",
            iconDescription: "[Icon Descriptive Content]",
            statusIconDescription: "[Status Icon Descriptive Content]",
            hideCloseButton: false,
            closeOnEscape: true,
            /// onClose: null,
            /// onCloseButtonClick: null,
        },
        Description: {
            kind: "The notification Type",
            lowContrast: "Use low contrast variant",
            role: "ARIA role",
            title: "Notification Title Text",
            subtitle: "Notification Subtitle Context",
            iconDescription: "Icon Hover-Over Content",
            statusIconDescription: "Status Icon Hover-Over Content",
            hideCloseButton: "Disable Close Button",
            closeOnEscape: "Keyboard Escape Shortcut for Closing Notification Dialogue",
            /// onClose: "Close Event Action(s)",
            /// onCloseButtonClick: "Close Button Click Event Action(s)"
        },
        Types: {
            "Error": "error",
            "Info": "info",
            "Info-Square": "info-square",
            "Success": "success",
            "Warning": "warning",
            "Warning-Alternative": "warning-alt",
        }
    },
    Toast: {
        Default: {
            kind: "info",
            lowContrast: true,
            role: "alert",
            title: "[Title Title]",
            subtitle: "[Subtitle Content]",
            iconDescription: "[Icon Descriptive Content]",
            statusIconDescription: "[Status Icon Descriptive Content]",
            hideCloseButton: false,
            closeOnEscape: true,
            /// onClose: null,
            /// onCloseButtonClick: null,

            /* Extended */
            timeout: 1000
        },
        Description: {
            kind: "The notification Type",
            lowContrast: "Use low contrast variant",
            role: "ARIA role",
            title: "Notification Title Text",
            subtitle: "Notification Subtitle Context",
            iconDescription: "Icon Hover-Over Content",
            statusIconDescription: "Status Icon Hover-Over Content",
            hideCloseButton: "Disable Close Button",
            closeOnEscape: "Keyboard Escape Shortcut for Closing Notification Dialogue",
            /// onClose: "Close Event Action(s)",
            /// onCloseButtonClick: "Close Button Click Event Action(s)"

            /* Extended */
            timeout: "Total Visible Time (ms) Until Un-Render"
        },
        Types: {
            "Error": "error",
            "Info": "info",
            "Info-Square": "info-square",
            "Success": "success",
            "Warning": "warning",
            "Warning-Alternative": "warning-alt",
        },
    },
    Actionable: {
        Default: {
            kind: "info",
            lowContrast: true,
            role: "alert",
            title: "[Title Title]",
            subtitle: "[Subtitle Content]",
            iconDescription: "[Icon Descriptive Content]",
            statusIconDescription: "[Status Icon Descriptive Content]",
            hideCloseButton: false,
            closeOnEscape: true,
            /// onClose: null,
            /// onCloseButtonClick: null,

            /* Extended */
            inline: true,
            hasFocus: true,
            actionButtonLabel: "[Button-Label]",
            onActionButtonClick: (event) => console.trace("[Trace]", "Actionable Button Click Event", event)
        },
        Description: {
            kind: "The notification Type",
            lowContrast: "Use low contrast variant",
            role: "ARIA role",
            title: "Notification Title Text",
            subtitle: "Notification Subtitle Context",
            iconDescription: "Icon Hover-Over Content",
            statusIconDescription: "Status Icon Hover-Over Content",
            hideCloseButton: "Disable Close Button",
            closeOnEscape: "Keyboard Escape Shortcut for Closing Notification Dialogue",
            /// onClose: "Close Event Action(s)",
            /// onCloseButtonClick: "Close Button Click Event Action(s)"

            /* Extended */
            inline: "Set Boolean to Assign Visual Inline Element",
            hasFocus: "Focus Element upon Visibility",
            actionButtonLabel: "Button Label",
            onActionButtonClick: "Button Action(s) to Perform upon Click Event(s)"
        },
        Types: {
            "Error": "error",
            "Info": "info",
            "Info-Square": "info-square",
            "Success": "success",
            "Warning": "warning",
            "Warning-Alternative": "warning-alt",
        }
    }
};

/***
 *
 * @param kind
 * @param lowContrast
 * @param role
 * @param title
 * @param subtitle
 * @param iconDescription
 * @param statusIconDescription
 * @param hideCloseButton
 * @param closeOnEscape
 * @param onClose
 * @param onCloseButtonClick
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

export const Inline = (
    {
        kind = Properties.Inline.Default.kind,
        lowContrast = Properties.Inline.Default.lowContrast,
        role = Properties.Inline.Default.role,
        title = Properties.Inline.Default.title,
        subtitle = Properties.Inline.Default.subtitle,
        iconDescription = Properties.Inline.Default.iconDescription,
        statusIconDescription = Properties.Inline.Default.statusIconDescription,
        hideCloseButton = Properties.Inline.Default.hideCloseButton,
        closeOnEscape = Properties.Inline.Default.closeOnEscape,
        /// onClose = Properties.Inline.Default.onClose,
        /// onCloseButtonClick = Properties.Inline.Default.onCloseButtonClick,
    }) => {

    const Values = {
        kind,
        lowContrast,
        role,
        title,
        subtitle,
        iconDescription,
        statusIconDescription,
        hideCloseButton,
        closeOnEscape,
        /// onClose,
        /// onCloseButtonClick
    };

    const Delimiter = () => (<>{" "}</>);

    return (
        <InlineNotification {... Values}>
            <span>
                <strong>
                    { title }
                </strong>
                <Delimiter/>
                { subtitle }
            </span>
        </InlineNotification>
    )
};

Inline.propTypes = {
    /**
     * Specify the content
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the notification box
     */
    className: PropTypes.string,

    /**
     * Specify if pressing the escape key should close notifications
     */
    closeOnEscape: PropTypes.bool,

    /**
     * Specify the close button should be disabled, or not
     */
    hideCloseButton: PropTypes.bool,

    /**
     * Provide a description for "close" icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Specify what state the notification represents
     */
    kind: PropTypes.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]),

    /**
     * Specify whether you are using the low contrast variant of the ToastNotification.
     */
    lowContrast: PropTypes.bool,

    /**
     * Provide a function that is called when menu is closed
     */
    onClose: PropTypes.func,

    /**
     * Provide a function that is called when the close button is clicked
     */
    onCloseButtonClick: PropTypes.func,

    /**
     * By default, this value is "alert". You can also provide an alternate
     * role if it makes sense from the accessibility-side
     */
    role: PropTypes.oneOf(["alert", "log", "status"]),

    /**
     * Provide a description for "status" icon that can be read by screen readers
     */
    statusIconDescription: PropTypes.string
};

export const Toast = (
    {
        kind = Properties.Toast.Default.kind,
        lowContrast = Properties.Toast.Default.lowContrast,
        role = Properties.Toast.Default.role,
        title = Properties.Toast.Default.title,
        subtitle = Properties.Toast.Default.subtitle,
        iconDescription = Properties.Toast.Default.iconDescription,
        statusIconDescription = Properties.Toast.Default.statusIconDescription,
        hideCloseButton = Properties.Toast.Default.hideCloseButton,
        closeOnEscape = Properties.Toast.Default.closeOnEscape,
        /// onClose = Properties.Toast.Default.onClose,
        /// onCloseButtonClick = Properties.Toast.Default.onCloseButtonClick,

        /* Extended */
        timeout = Properties.Toast.Default.timeout,

        ... props
    }) => {

    const Values = {
        kind,
        lowContrast,
        role,
        title,
        subtitle,
        iconDescription,
        statusIconDescription,
        hideCloseButton,
        closeOnEscape,
        /// onClose,
        /// onCloseButtonClick,

        /* Extended */
        timeout,
    };

    const Delimiter = () => (<>{" "}</>);

    return (
        <ToastNotification { ... props } {... Values}>
                <strong>
                    {title}
                </strong>
                <Delimiter/>
                {subtitle}
        </ToastNotification>
    )
};

Toast.propTypes = {
    /**
     * Specify the content
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the notification box
     */
    className: PropTypes.string,

    /**
     * Specify if pressing the escape key should close notifications
     */
    closeOnEscape: PropTypes.bool,

    /**
     * Specify the close button should be disabled, or not
     */
    hideCloseButton: PropTypes.bool,

    /**
     * Provide a description for "close" icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Specify what state the notification represents
     */
    kind: PropTypes.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]),

    /**
     * Specify whether you are using the low contrast variant of the ToastNotification.
     */
    lowContrast: PropTypes.bool,

    /**
     * Provide a function that is called when menu is closed
     */
    onClose: PropTypes.func,

    /**
     * Provide a function that is called when the close button is clicked
     */
    onCloseButtonClick: PropTypes.func,

    /**
     * By default, this value is "alert". You can also provide an alternate
     * role if it makes sense from the accessibility-side
     */
    role: PropTypes.oneOf(["alert", "log", "status"]),

    /**
     * Provide a description for "status" icon that can be read by screen readers
     */
    statusIconDescription: PropTypes.string,

    /**
     * Specify an optional duration the notification should be closed in
     */
    timeout: PropTypes.number
};

export const Actionable = (
    {
        kind = Properties.Actionable.Default.kind,
        lowContrast = Properties.Actionable.Default.lowContrast,
        role = Properties.Actionable.Default.role,
        title = Properties.Actionable.Default.title,
        subtitle = Properties.Actionable.Default.subtitle,
        iconDescription = Properties.Actionable.Default.iconDescription,
        statusIconDescription = Properties.Actionable.Default.statusIconDescription,
        hideCloseButton = Properties.Actionable.Default.hideCloseButton,
        closeOnEscape = Properties.Actionable.Default.closeOnEscape,
        /// onClose = Properties.Actionable.Default.onClose,
        /// onCloseButtonClick = Properties.Actionable.Default.onCloseButtonClick,

        /* Extended */
        inline = Properties.Actionable.Default.inline,
        hasFocus = Properties.Actionable.Default.hasFocus,
        actionButtonLabel = Properties.Actionable.Default.actionButtonLabel,
        onActionButtonClick = Properties.Actionable.Default.onActionButtonClick
    }) => {

    const Values = {
        kind,
        lowContrast,
        role,
        title,
        subtitle,
        iconDescription,
        statusIconDescription,
        hideCloseButton,
        closeOnEscape,
        /// onClose,
        /// onCloseButtonClick,

        /* Extended */
        inline,
        hasFocus,
        actionButtonLabel,
        onActionButtonClick
    };

    const Delimiter = () => (<>{" "}</>);

    return (
        <ActionableNotification {...Values}>
            <strong>
                {title}
            </strong>
            <Delimiter/>
            {subtitle}
        </ActionableNotification>
    )
};

Actionable.propTypes = {
    /**
     * Pass in the action button label that will be rendered within the ActionableNotification.
     */
    actionButtonLabel: PropTypes.string,

    /**
     * Specify the content
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the notification box
     */
    className: PropTypes.string,

    /**
     * Specify if pressing the escape key should close notifications
     */
    closeOnEscape: PropTypes.bool,

    /**
     * Specify if focus should be moved to the component when the notification contains actions
     */
    hasFocus: PropTypes.bool,

    /**
     * Specify the close button should be disabled, or not
     */
    hideCloseButton: PropTypes.bool,

    /**
     * Provide a description for "close" icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /*
     * Specify if the notification should have inline styling applied instead of toast
     */
    inline: PropTypes.bool,

    /**
     * Specify what state the notification represents
     */
    kind: PropTypes.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]),

    /**
     * Specify whether you are using the low contrast variant of the ActionableNotification.
     */
    lowContrast: PropTypes.bool,

    /**
     * Provide a function that is called when the action is clicked
     */
    onActionButtonClick: PropTypes.func,

    /**
     * Provide a function that is called when menu is closed
     */
    onClose: PropTypes.func,

    /**
     * Provide a function that is called when the close button is clicked
     */
    onCloseButtonClick: PropTypes.func,

    /**
     * By default, this value is "alertdialog". You can also provide an alternate
     * role if it makes sense from the accessibility-side.
     */
    role: PropTypes.string,

    /**
     * Provide a description for "status" icon that can be read by screen readers
     */
    statusIconDescription: PropTypes.string
};

const Exports = {
    Inline, Toast, Actionable
};

export default Exports;
