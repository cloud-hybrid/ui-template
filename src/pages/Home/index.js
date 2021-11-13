import * as Styles from "./SCSS/Index.module.scss";

import {
    Grid, Column, Row
} from "@carbon/react";

import { default as Page } from "./Page";
import { Placeholder as Skeleton } from "./../../components/Card";
import { default as Card } from "./../../components/Card/Card.js";
import { default as Status } from "./../../components/Status-Icon";

const Default = () => (
    <Grid className={ [ Styles.home, Styles.component ].join(" ") }>
        <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles.home }>
            <Row className={Styles.flex}>
                <Skeleton/>
                <Card body={{children: null, text: "Description"}} footer={{children: (<Status message={"Online"} status={"success"} iconDescription="200" size={"sm"}/>)}} header={{tag: "Subtitle", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=", title: "Title"}} label="Label-Text" link="#"/>
            </Row>
            <Page/>
        </Column>
    </Grid>
);

export default Default;
