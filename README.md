<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Keycloakify</a> v11 starter 🚀</i>
    <br/>
    <br/>
</p>

# Quick start

```bash
git clone https://github.com/keycloakify/keycloakify-starter
cd keycloakify-starter
yarn install # Or use an other package manager, just be sure to delete the yarn.lock if you use another package manager.
```

# Testing the theme locally

[Documentation](https://docs.keycloakify.dev/testing-your-theme)

# How to customize the theme

[Documentation](https://docs.keycloakify.dev/customization-strategies)

# Building the theme

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.

-   On macOS: `brew install maven`
-   On Debian/Ubuntu: `sudo apt-get install maven`
-   On Windows: `choco install openjdk` and `choco install maven` (Or download from [here](https://maven.apache.org/download.cgi))

```bash
npm run build-keycloak-theme
```

Note that by default Keycloakify generates multiple .jar files for different versions of Keycloak.  
You can customize this behavior, see documentation [here](https://docs.keycloakify.dev/targeting-specific-keycloak-versions).

# Account theme

The account console uses Keycloakify's **Single-Page** flavour (`accountThemeImplementation: "Single-Page"` in
`vite.config.ts`): the upstream Keycloak Account Console v3 (`@keycloakify/keycloak-account-ui`, versioned after
the Keycloak server it targets — keep it paired with the Keycloak version in `EO-DataHub/eodh-keycloak`) is copied
into `src/account/` and `src/shared/` by the `postinstall` script (`keycloakify sync-extensions`). Those copies are
git-ignored (`src/.gitignore`, managed by Keycloakify); only the files we have claimed with `npx keycloakify own`
are committed and carry the EODH skin:

-   `src/account/KcAccountUi.tsx` — imports `main.css`, keeps dark mode off
-   `src/account/root/Header.tsx` — light masthead with the colour logo
-   `src/account/root/PageNav.tsx` — light sidebar
-   `src/account/root/Root.tsx` — navy footer band, rendered outside `<Page>` so it spans the sidebar
-   `src/shared/keycloak-ui-shared/masthead/DefaultAvatar.tsx` — the site's signed-in account icon
-   `src/account/components/page/Page.tsx` — hero band + card layout used by every console page
-   `src/account/main.css` — PatternFly 5 overrides (design tokens in `src/shared/eodh-tokens.css`)
-   `public/keycloak-theme/account/early-color-scheme.js` — forces light mode before the app loads

To customise another upstream file run `npx keycloakify own --path "account/<path>"` and commit the result.
The real console cannot run in Storybook (it needs a live Keycloak); `account/console skin preview` stories
render the same PatternFly components with this skin for a quick visual check.

Deploying: bump `THEME_REF` in the `eodh-keycloak` Dockerfile and set the realm's _Account theme_ to
`keycloakify-starter`.

# Initializing the email theme

```bash
npx keycloakify initialize-email-theme
```

# GitHub Actions

The starter comes with a generic GitHub Actions workflow that builds the theme and publishes
the jars [as GitHub releases artifacts](https://github.com/keycloakify/keycloakify-starter/releases/tag/v10.0.0).  
To release a new version **just update the `package.json` version and push**.

To enable the workflow go to your fork of this repository on GitHub then navigate to:
`Settings` > `Actions` > `Workflow permissions`, select `Read and write permissions`.
