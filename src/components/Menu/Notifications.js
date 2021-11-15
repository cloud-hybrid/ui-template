import { NotificationsPanel } from "./../../carbon/ibm-cloud-cognitive/es/components/NotificationsPanel";

import "@carbon/ibm-cloud-cognitive/css/index-without-carbon.min.css";

import "./SCSS/Notification.scss";

const Component = ({ State }) => {
    return (
        <NotificationsPanel
            open={ State[0] }
            //            dismissAllLabel={ "Dismiss-All" }
            //            emptyStateLabel={ "Empty" }
            //            previousLabel={ "Previous" }
            //            readLessLabel={ "Less" }
            //            readMoreLabel={ "More" }
            //            todayLabel={ "Today" }
            //            viewAllLabel={ "All" }
            //            yesterdayLabel={ "Yesterday" }
            data={ [
                {
                    description: "[Test-Notification-Description]",
                    id: "2fa2eab4-65ad-4b8b-ac62-4ee88e060b58",
                    onNotificationClick: function noRefCheck() {
                        console.debug("[Debug]", "Notification-Click");
                    },
                    timestamp: new Date("2021-09-12T09:12:10.172Z"),
                    title: "[Test-Notification-Title]",
                    type: "error",
                    unread: true,
                    link: {
                        url: "https://google.com",
                        text: "Test"
                    }
                },
                {
                    description: "[Test-Notification-Description]",
                    id: "2d14a3e8-0e28-464b-bfe2-dfa667b357aa",
                    onNotificationClick: function noRefCheck() {
                        console.debug("[Debug]", "Notification-Click");
                    },
                    timestamp: new Date("2021-09-12T09:12:10.172Z"),
                    title: "[Test-Notification-Title]",
                    type: "warning",
                    unread: true
                },
                {
                    description: "[Test-Notification-Description]",
                    id: "cad26eec-dc03-4460-82d5-73662dcf1308",
                    onNotificationClick: function noRefCheck() {
                        console.debug("[Debug]", "Notification-Click");
                    },
                    timestamp: new Date("2021-09-10T09:12:10.172Z"),
                    title: "[Test-Notification-Title]",
                    type: "warning",
                    unread: true
                },
                {
                    description: "[Test-Notification-Description]",
                    id: "f1b6b35a-157a-40f7-89ad-a5f63f956fc3",
                    onNotificationClick: function noRefCheck() {
                        console.debug("[Debug]", "Notification-Click");
                    },
                    timestamp: new Date("2021-09-12T07:12:10.172Z"),
                    title: "[Test-Notification-Title]",
                    type: "success"
                },
                {
                    description: "[Test-Notification-Description]",
                    id: "15b6c5e0-709d-4552-ab1d-6a42f8f03c8a",
                    onNotificationClick: function noRefCheck() {
                        console.debug("[Debug]", "Notification-Click");
                    },
                    timestamp: new Date("2021-09-11T09:12:10.172Z"),
                    title: "[Test-Notification-Title]",
                    type: "informational"
                }
            ] }

            onClickOutside={ () => {
                console.debug("[Debug]", "Notifications", "Event: Click Outside");
//                State[1](false);
            } }
            onDismissAllNotifications={ () => {
                console.debug("[Debug]", "Notifications", "Event: Dismiss All");
            } }
            onDismissSingleNotification={ () => {
                console.debug("[Debug]", "Notifications", "Event: Dismiss Single");
            } }
            doNotDisturbLabel={ "Do Not Disturb" }
            onDoNotDisturbChange={ () => {
                // setDoNotDisturb(!doNotDisturb);
            } }
            onSettingsClick={ () => {
                console.debug("[Debug]", "Notifications", "Event: Settings");
            } }
            onViewAllClick={ () => {
                console.debug("[Debug]", "Notifications", "Event: View All");
            } }
            doNotDisturbDefaultToggled={ false }
        />
    );
};

export default Component;
