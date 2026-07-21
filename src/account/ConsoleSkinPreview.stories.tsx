import type { Meta, StoryObj } from "@storybook/react";
import {
    ActionGroup,
    Button,
    DataList,
    DataListAction,
    DataListCell,
    DataListItem,
    DataListItemCells,
    DataListItemRow,
    Form,
    FormGroup,
    Masthead,
    MastheadBrand,
    MastheadContent,
    MastheadMain,
    MastheadToggle,
    MenuToggle,
    Nav,
    NavExpandable,
    NavItem,
    NavList,
    Page,
    PageSection,
    PageSidebar,
    PageSidebarBody,
    TextContent,
    TextInput,
    Title
} from "@patternfly/react-core";
import { BarsIcon } from "@patternfly/react-icons";
import logoWhiteUrl from "../login/assets/eo-datahub-logo-white.png";

import "@patternfly/patternfly/patternfly-addons.css";
import "@patternfly/react-core/dist/styles/base.css";
import "./main.css";

/**
 * The real Single-Page console needs a live Keycloak, so these stories
 * render the same PatternFly components with this theme's main.css to
 * preview the skin. Verify for real against a running Keycloak.
 */

type ActivePage = "personal-info" | "signing-in";

function ConsoleSkinPreview(props: { active: ActivePage }) {
    const { active } = props;

    const header = (
        <Masthead>
            <MastheadToggle>
                <Button variant="plain" aria-label="Global navigation">
                    <BarsIcon />
                </Button>
            </MastheadToggle>
            <MastheadMain>
                <MastheadBrand href="#">
                    <img src={logoWhiteUrl} alt="EO Data Hub" />
                </MastheadBrand>
            </MastheadMain>
            <MastheadContent>
                <div style={{ marginLeft: "auto" }}>
                    <MenuToggle>Test User</MenuToggle>
                </div>
            </MastheadContent>
        </Masthead>
    );

    const sidebar = (
        <PageSidebar>
            <PageSidebarBody>
                <Nav>
                    <NavList>
                        <NavItem isActive={active === "personal-info"}>
                            Personal info
                        </NavItem>
                        <NavExpandable
                            title="Account security"
                            isExpanded={active === "signing-in"}
                            isActive={active === "signing-in"}
                        >
                            <NavItem isActive={active === "signing-in"}>
                                Signing in
                            </NavItem>
                            <NavItem>Device activity</NavItem>
                        </NavExpandable>
                        <NavItem>Applications</NavItem>
                    </NavList>
                </Nav>
            </PageSidebarBody>
        </PageSidebar>
    );

    return (
        <Page header={header} sidebar={sidebar}>
            {active === "personal-info" ? <PersonalInfoSection /> : <SigningInSection />}
            <footer id="eodh-account-footer">
                <span>
                    © {new Date().getFullYear()} Earth Observation DataHub (EODH)
                </span>
                <nav aria-label="EO Data Hub links">
                    <a
                        href="https://docs.eodatahub.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Documentation
                    </a>
                    <a
                        href="https://docs.eodatahub.org.uk/Help/community/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact us
                    </a>
                </nav>
            </footer>
        </Page>
    );
}

function PersonalInfoSection() {
    return (
        <PageSection variant="light">
            <TextContent>
                <Title headingLevel="h1">Personal info</Title>
                <p>Manage your basic information</p>
            </TextContent>
            <Form isHorizontal style={{ maxWidth: 720, marginTop: "2rem" }}>
                <FormGroup label="Username" isRequired fieldId="username">
                    <TextInput
                        id="username"
                        value="testuser"
                        isDisabled
                        onChange={() => {}}
                    />
                </FormGroup>
                <FormGroup label="Email" isRequired fieldId="email">
                    <TextInput
                        id="email"
                        type="email"
                        value="testuser@example.com"
                        onChange={() => {}}
                    />
                </FormGroup>
                <FormGroup label="First name" isRequired fieldId="first-name">
                    <TextInput id="first-name" value="Test" onChange={() => {}} />
                </FormGroup>
                <FormGroup label="Last name" isRequired fieldId="last-name">
                    <TextInput id="last-name" value="User" onChange={() => {}} />
                </FormGroup>
                <ActionGroup>
                    <Button variant="primary">Save</Button>
                    <Button variant="link">Cancel</Button>
                </ActionGroup>
            </Form>
        </PageSection>
    );
}

function SigningInSection() {
    return (
        <PageSection variant="light">
            <TextContent>
                <Title headingLevel="h1">Signing in</Title>
                <p>Configure ways to sign in.</p>
            </TextContent>
            <Title headingLevel="h2" style={{ marginTop: "2rem" }}>
                Basic authentication
            </Title>
            <DataList aria-label="Credentials" style={{ marginTop: "1rem" }}>
                <DataListItem>
                    <DataListItemRow>
                        <DataListItemCells
                            dataListCells={[
                                <DataListCell key="title">My password</DataListCell>,
                                <DataListCell key="created">
                                    <strong>Created</strong> July 21, 2026 at 9:42 PM.
                                </DataListCell>
                            ]}
                        />
                        <DataListAction
                            aria-label="Update password"
                            aria-labelledby="update-password"
                            id="update-password"
                        >
                            <Button variant="secondary">Update</Button>
                        </DataListAction>
                    </DataListItemRow>
                </DataListItem>
            </DataList>
            <Title headingLevel="h2" style={{ marginTop: "2rem" }}>
                Two-factor authentication
            </Title>
            <DataList aria-label="Two-factor" style={{ marginTop: "1rem" }}>
                <DataListItem>
                    <DataListItemRow>
                        <DataListItemCells
                            dataListCells={[
                                <DataListCell key="empty">
                                    Authenticator application is not set up.
                                </DataListCell>
                            ]}
                        />
                        <DataListAction
                            aria-label="Set up authenticator"
                            aria-labelledby="setup-authenticator"
                            id="setup-authenticator"
                        >
                            <Button variant="link">
                                Set up Authenticator application
                            </Button>
                        </DataListAction>
                    </DataListItemRow>
                </DataListItem>
            </DataList>
        </PageSection>
    );
}

const meta = {
    title: "account/console skin preview",
    component: ConsoleSkinPreview,
    parameters: { layout: "fullscreen" }
} satisfies Meta<typeof ConsoleSkinPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PersonalInfo: Story = {
    args: { active: "personal-info" }
};

export const SigningIn: Story = {
    args: { active: "signing-in" }
};
