/**
 * This file has been claimed for ownership from @keycloakify/keycloak-account-ui version 260700.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "account/early-color-scheme.js" --public --revert
 *
 * early-color-scheme.js is a special file that will be imported in the head automatically by Keycloakify.
 * Note that this file is not loaded in Storybook or when using the Vite DEV server.
 * To test it you can use `NO_DEV_SERVER=true npx keycloakify start-keycloak` (NO_DEV_SERVER is only relevant for Account SPA and Admin themes)
 *
 * EODH: force light mode; the skin has no dark-mode values.
 */

{
    const element = document.createElement("style");

    element.id = "root-color-scheme-style";

    element.innerHTML = ":root { color-scheme: light; }";

    document.head.appendChild(element);

    document.documentElement.style.backgroundColor = "#FFFFFF";
}
