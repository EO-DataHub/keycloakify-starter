import type { Meta, StoryObj } from "@storybook/react";
import {
    ActionGroup,
    Button,
    DataList,
    DataListAction,
    DataListCell,
    DataListContent,
    DataListItem,
    DataListItemCells,
    DataListItemRow,
    DataListToggle,
    DescriptionList,
    DescriptionListDescription,
    DescriptionListGroup,
    DescriptionListTerm,
    Form,
    FormGroup,
    Grid,
    GridItem,
    Label,
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
    PageSidebar,
    PageSidebarBody,
    Split,
    SplitItem,
    TextInput,
    Title,
    Toolbar,
    ToolbarContent,
    ToolbarItem
} from "@patternfly/react-core";
import {
    BarsIcon,
    DesktopIcon,
    ExternalLinkAltIcon,
    SyncAltIcon
} from "@patternfly/react-icons";
import logoColourUrl from "../login/assets/eo-datahub-logo-colour.svg";
import { DefaultAvatar } from "../shared/keycloak-ui-shared/masthead/DefaultAvatar";
import { Page as ConsolePage } from "./components/page/Page";

import "@patternfly/patternfly/patternfly-addons.css";
import "@patternfly/react-core/dist/styles/base.css";
import "./main.css";

/**
 * The real Single-Page console needs a live Keycloak, so these stories
 * render the same PatternFly components with this theme's main.css to
 * preview the skin. Verify for real against a running Keycloak.
 */

type ActivePage = "personal-info" | "signing-in" | "device-activity" | "applications";

function ConsoleSkinPreview(props: { active: ActivePage }) {
    const { active } = props;

    // Mirrors root/Header.tsx
    const header = (
        <Masthead backgroundColor="light" className="eodh-masthead">
            <MastheadToggle>
                <Button variant="plain" aria-label="Global navigation">
                    <BarsIcon />
                </Button>
            </MastheadToggle>
            <MastheadMain>
                <MastheadBrand href="#">
                    <img src={logoColourUrl} alt="EO Data Hub" />
                </MastheadBrand>
            </MastheadMain>
            <MastheadContent>
                <Toolbar>
                    <ToolbarContent>
                        <ToolbarItem align={{ default: "alignRight" }}>
                            <MenuToggle>Test User</MenuToggle>
                        </ToolbarItem>
                        <ToolbarItem
                            variant="overflow-menu"
                            align={{ default: "alignRight" }}
                        >
                            <DefaultAvatar />
                        </ToolbarItem>
                    </ToolbarContent>
                </Toolbar>
            </MastheadContent>
        </Masthead>
    );

    // Mirrors root/PageNav.tsx
    const sidebar = (
        <PageSidebar theme="light">
            <PageSidebarBody>
                <Nav theme="light">
                    <NavList>
                        <NavItem isActive={active === "personal-info"}>
                            Personal info
                        </NavItem>
                        <NavExpandable
                            title="Account security"
                            isExpanded={
                                active === "signing-in" || active === "device-activity"
                            }
                            isActive={
                                active === "signing-in" || active === "device-activity"
                            }
                        >
                            <NavItem isActive={active === "signing-in"}>
                                Signing in
                            </NavItem>
                            <NavItem isActive={active === "device-activity"}>
                                Device activity
                            </NavItem>
                        </NavExpandable>
                        <NavItem isActive={active === "applications"}>
                            Applications
                        </NavItem>
                    </NavList>
                </Nav>
            </PageSidebarBody>
        </PageSidebar>
    );

    // Mirrors root/Root.tsx
    return (
        <div className="eodh-account-shell">
            <Page header={header} sidebar={sidebar} isManagedSidebar>
                {active === "personal-info" && <PersonalInfoSection />}
                {active === "signing-in" && <SigningInSection />}
                {active === "device-activity" && <DeviceActivitySection />}
                {active === "applications" && <ApplicationsSection />}
            </Page>
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
        </div>
    );
}

function PersonalInfoSection() {
    return (
        <ConsolePage title="Personal info" description="Manage your basic information">
            <Form isHorizontal>
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
        </ConsolePage>
    );
}

function SigningInSection() {
    return (
        <ConsolePage title="Signing in" description="Configure ways to sign in.">
            <Title headingLevel="h2" size="xl">
                Basic authentication
            </Title>
            <Split className="pf-v5-u-mt-lg pf-v5-u-mb-lg">
                <SplitItem>
                    <Title headingLevel="h3" size="md" className="pf-v5-u-mb-md">
                        <span className="cred-title pf-v5-u-display-block">Password</span>
                    </Title>
                    <span className="pf-v5-u-display-block">
                        Sign in by entering your password.
                    </span>
                </SplitItem>
            </Split>
            <DataList aria-label="Credentials" className="pf-v5-u-mb-xl">
                <DataListItem>
                    <DataListItemRow>
                        <DataListItemCells
                            className="pf-v5-u-py-0 pf-v5-u-align-items-center"
                            dataListCells={[
                                <DataListCell
                                    key="title"
                                    className="pf-v5-u-max-width pf-v5-u-pt-0"
                                >
                                    My password
                                    <div className="pf-v5-u-color-200 pf-v5-u-font-size-sm">
                                        Created 21 July 2026 at 21:42
                                    </div>
                                </DataListCell>,
                                <DataListAction
                                    key="action"
                                    aria-label="Update password"
                                    aria-labelledby="update-password"
                                    id="update-password"
                                >
                                    <Button variant="secondary">Update</Button>
                                </DataListAction>
                            ]}
                        />
                    </DataListItemRow>
                </DataListItem>
            </DataList>
            <Title headingLevel="h2" size="xl">
                Two-factor authentication
            </Title>
            <Split className="pf-v5-u-mt-lg pf-v5-u-mb-lg">
                <SplitItem>
                    <Title headingLevel="h3" size="md" className="pf-v5-u-mb-md">
                        <span className="cred-title pf-v5-u-display-block">
                            Authenticator application
                        </span>
                    </Title>
                    <span className="pf-v5-u-display-block">
                        Enter a verification code from authenticator application.
                    </span>
                </SplitItem>
                <SplitItem isFilled>
                    <div className="pf-v5-u-float-right">
                        <Button variant="link">Set up Authenticator application</Button>
                    </div>
                </SplitItem>
            </Split>
            <DataList aria-label="Two-factor" className="pf-v5-u-mb-xl">
                <DataListItem>
                    <DataListItemRow>
                        <DataListItemCells
                            dataListCells={[
                                <DataListCell key="empty">
                                    Authenticator application is not set up.
                                </DataListCell>
                            ]}
                        />
                    </DataListItemRow>
                </DataListItem>
            </DataList>
        </ConsolePage>
    );
}

function DeviceActivitySection() {
    return (
        <ConsolePage
            title="Device activity"
            description="Sign out of any unfamiliar devices."
        >
            <Split hasGutter className="pf-v5-u-mb-lg">
                <SplitItem isFilled>
                    <Title headingLevel="h2" size="xl">
                        Signed in devices
                    </Title>
                </SplitItem>
                <SplitItem>
                    <Button variant="link" icon={<SyncAltIcon />}>
                        Refresh the page
                    </Button>
                </SplitItem>
            </Split>
            <DataList className="signed-in-device-list" aria-label="Signed in devices">
                <DataListItem>
                    <DataListItemRow>
                        <DataListContent
                            aria-label="Session"
                            className="pf-v5-u-flex-grow-1"
                        >
                            <Grid hasGutter>
                                <GridItem span={1} rowSpan={2}>
                                    <DesktopIcon />
                                </GridItem>
                                <GridItem sm={8} md={9} span={10}>
                                    <span className="pf-v5-u-mr-md session-title">
                                        Linux / Chrome
                                    </span>
                                    <Label color="green">Current session</Label>
                                </GridItem>
                                <GridItem
                                    className="pf-v5-u-text-align-right"
                                    sm={3}
                                    md={2}
                                    span={1}
                                >
                                    <Button variant="link">Sign out</Button>
                                </GridItem>
                                <GridItem span={11}>
                                    <DescriptionList
                                        className="signed-in-device-grid"
                                        isHorizontal
                                        columnModifier={{ sm: "2Col", lg: "3Col" }}
                                    >
                                        <DescriptionListGroup>
                                            <DescriptionListTerm>
                                                IP address
                                            </DescriptionListTerm>
                                            <DescriptionListDescription>
                                                127.0.0.1
                                            </DescriptionListDescription>
                                        </DescriptionListGroup>
                                        <DescriptionListGroup>
                                            <DescriptionListTerm>
                                                Last accessed
                                            </DescriptionListTerm>
                                            <DescriptionListDescription>
                                                Just now
                                            </DescriptionListDescription>
                                        </DescriptionListGroup>
                                        <DescriptionListGroup>
                                            <DescriptionListTerm>
                                                Clients
                                            </DescriptionListTerm>
                                            <DescriptionListDescription>
                                                Account Console
                                            </DescriptionListDescription>
                                        </DescriptionListGroup>
                                    </DescriptionList>
                                </GridItem>
                            </Grid>
                        </DataListContent>
                    </DataListItemRow>
                </DataListItem>
            </DataList>
        </ConsolePage>
    );
}

function ApplicationsSection() {
    return (
        <ConsolePage
            title="Applications"
            description="Track and manage your app permission to access your account."
        >
            <DataList id="applications-list" aria-label="Applications">
                <DataListItem aria-labelledby="applications-list-header">
                    <DataListItemRow>
                        <span style={{ visibility: "hidden", height: 55 }}>
                            <DataListToggle
                                id="applications-list-header-invisible-toggle"
                                aria-controls="hidden"
                            />
                        </span>
                        <DataListItemCells
                            dataListCells={[
                                <DataListCell
                                    key="name"
                                    width={2}
                                    className="pf-v5-u-pt-md"
                                >
                                    <strong>Name</strong>
                                </DataListCell>,
                                <DataListCell
                                    key="type"
                                    width={2}
                                    className="pf-v5-u-pt-md"
                                >
                                    <strong>Application type</strong>
                                </DataListCell>,
                                <DataListCell
                                    key="status"
                                    width={2}
                                    className="pf-v5-u-pt-md"
                                >
                                    <strong>Status</strong>
                                </DataListCell>
                            ]}
                        />
                    </DataListItemRow>
                </DataListItem>
                <DataListItem aria-labelledby="account-console" isExpanded>
                    <DataListItemRow className="pf-v5-u-align-items-center">
                        <DataListToggle
                            id="toggle-account-console"
                            aria-controls="content-account-console"
                            isExpanded
                        />
                        <DataListItemCells
                            className="pf-v5-u-align-items-center"
                            dataListCells={[
                                <DataListCell width={2} key="client">
                                    <Button
                                        className="pf-v5-u-pl-0 title-case"
                                        component="a"
                                        variant="link"
                                        href="#"
                                    >
                                        Account Console <ExternalLinkAltIcon />
                                    </Button>
                                </DataListCell>,
                                <DataListCell width={2} key="type">
                                    Internal
                                </DataListCell>,
                                <DataListCell width={2} key="status">
                                    In use
                                </DataListCell>
                            ]}
                        />
                    </DataListItemRow>
                    <DataListContent
                        id="content-account-console"
                        className="pf-v5-u-pl-4xl"
                        aria-label="Application details"
                        isHidden={false}
                    >
                        <DescriptionList>
                            <DescriptionListGroup>
                                <DescriptionListTerm>Client</DescriptionListTerm>
                                <DescriptionListDescription>
                                    account-console
                                </DescriptionListDescription>
                            </DescriptionListGroup>
                            <DescriptionListGroup>
                                <DescriptionListTerm>Has access to</DescriptionListTerm>
                                <DescriptionListDescription>
                                    Full access to your account
                                </DescriptionListDescription>
                            </DescriptionListGroup>
                        </DescriptionList>
                    </DataListContent>
                </DataListItem>
            </DataList>
        </ConsolePage>
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

export const DeviceActivity: Story = {
    args: { active: "device-activity" }
};

export const Applications: Story = {
    args: { active: "applications" }
};
