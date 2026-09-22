/**
 * This file has been claimed for ownership from @keycloakify/keycloak-account-ui version 260700.0.3.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "account/components/page/Page.tsx" --revert
 */

/* eslint-disable */

// @ts-nocheck

import {
    PageSection,
    Text,
    TextContent,
    Title
} from "../../../shared/@patternfly/react-core";
import { PropsWithChildren } from "react";

type PageProps = {
    title: string;
    description: string;
};

export const Page = ({ title, description, children }: PropsWithChildren<PageProps>) => {
    // EODH: site account-page layout (hero band + card), styled in ../../main.css
    return (
        <>
            <PageSection variant="light" className="eodh-page-hero">
                <div className="eodh-page-hero__inner">
                    <TextContent>
                        <Title headingLevel="h1" data-testid="page-heading">
                            {title}
                        </Title>
                        <Text component="p">{description}</Text>
                    </TextContent>
                </div>
            </PageSection>
            <PageSection variant="light" className="eodh-page-body">
                <div className="eodh-card">{children}</div>
            </PageSection>
        </>
    );
};
