/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Chainable<Subject> {
		login(email: string, password: string): void;
		loginWithSession(email: string, password: string): void;
		typeInp(testId: string, value: string): void;
		clickBtn(testId: string): void;
		clickNaviBtn(urlDomain: string): void;
		selectId(testId: string): any;
	}
}

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login'); 
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="submit"]').click();
});

Cypress.Commands.add('loginWithSession', (email, password) => {
    const sessionId = `${email}-${Date.now()}`;
    cy.session(sessionId, () => {
        cy.visit('/login'); 
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(password);
        cy.get('[data-testid="submit"]').click();
        cy.url().should('not.include', '/login');
    },
    {
        cacheAcrossSpecs: true
    })
});

Cypress.Commands.add('typeInp', (testId, value) => {
    cy.get(`[data-testid="${testId}"]`).should('be.visible').clear().type(value);
});

Cypress.Commands.add('clickBtn', (testId) => {
    cy.get(`[data-testid="${testId}"]`).should('be.visible').click();
});

Cypress.Commands.add('clickNaviBtn', (urlDomain) => {
    cy.visit(`[data-testid="nav-${urlDomain}"]`)
        .get(`[data-testid="nav-${urlDomain}"]`).click();
});

Cypress.Commands.add('selectId', (testId) => {
    return cy.get(`[data-testid="${testId}"]`).should('be.visible');
});


//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
