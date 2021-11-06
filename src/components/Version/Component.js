import "./Index.scss";

import React, { useState } from "react";

import { AboutModal } from "@carbon/ibm-cloud-cognitive";
import { Button } from "@carbon/react";
import { Link } from "@carbon/react";

import { default as Version } from "../../Version";

const Year = new Date().getFullYear();

const Ignore = () => true;

const Legal = () => (
    <>
        <Link href={"#"} target={"#"}>Copyrights</Link>, <Link href={"#"} target={"#"}>Usage Policy</Link>, <Link href={"#"} target={"#"}>DCMA</Link>, <Link href={"#"} target={"#"}>Security Notices</Link>, and <Link href={"#"} target={"#"}>Personal Data</Link>
    </>
);

const Component = () => {
    const [isOpen, setIsOpen] = useState(null);

    window.onerror = Ignore;

    return (
        <>
            <Button type={"button"} kind={"secondary"} onClick={() => setIsOpen(true)} children={(
                <>
                    Version Information
                </>
            )}/>
            <AboutModal
                open={isOpen}
                additionalInfo={[
                    { label: "Distribution", content: Version}
                ]}
                className="io-version-modal"
                closeIconDescription="Close"
                copyrightText={(
                    <>
                        Copyright © {String(Year)} Cloud-Technology LLC.
                    </>
                )}
                legalText={(
                    <>
                        The established website, domain, and associated namespace(s) contains proprietary notices,
                        copyright information, and conditional usage policies of which must be observed and followed.
                        Please see <Legal/> for additional information and context.
                    </>
                )}
                links={[
                    <Link key="Key-Index-API" href="https://www.ibm.com/design/language">
                        API
                    </Link>,
                    <Link key="Key-Index-Open-Source-Licenses" href="https://www.ibm.com/design/language">
                        Open Source License(s)
                    </Link>,
                    <Link key="Key-Index-Carbon-Design-System" href="https://www.carbondesignsystem.com">
                        Carbon Design System
                    </Link>
                ]}
                logo={(<img alt="Nexus Dashboard Version Component Logo" src="/Favicon/V-12-7.png" style={{maxWidth: "6rem"}}/>)}
                onClose={() => setIsOpen(false)}
                title={(
                    <div className={"io-version-modal-title"}>
                        Nexus
                        { " ‒ " }
                        <span style={{fontWeight: "600"}}>
                            Cloud Dashboard
                        </span>
                    </div>
                )}
                content={(
                    <>
                        <em>
                            The Cloud Practitioners Company
                        </em>
                    </>
                )}
            />
        </>
    );
};

export default Component;
