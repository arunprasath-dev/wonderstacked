// filepath: /wonderstacked/wonderstacked/cypress/support/e2e.ts
import { defineConfig } from "cypress";

Cypress.Commands.add("login", (email, password) => {
  cy.request("POST", "/api/login", { email, password })
    .its("body")
    .then((body) => {
      window.localStorage.setItem("authToken", body.token);
    });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevent Cypress from failing the test on uncaught exceptions
});

// Additional global configurations can be added here.
