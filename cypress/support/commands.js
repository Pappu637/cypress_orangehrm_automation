// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let elementTimeout = 10000;

Cypress.Commands.add("clearNTypeText", (elementSelector, text) => {
    cy.get(elementSelector, { timeout: elementTimeout }).clear({ force: true });
    cy.get(elementSelector, { timeout: elementTimeout }).type(text, {
        force: true,
        delay: 0,
    });
});

Cypress.Commands.add("typeText", (elementSelector, textTotype) => {
    //cy.get(elementSelector, { timeout: elementTimeout }).clear( { force: true });
    cy.get(elementSelector, { timeout: elementTimeout })
        .type(textTotype, { force: true, delay: 0 });
}
);

Cypress.Commands.add("typeTextByIndex", (elementSelector, textTotype, index) => {
    //cy.get(elementSelector, { timeout: elementTimeout }).clear( { force: true });
    cy.get(elementSelector, { timeout: elementTimeout })
        .eq(index)
        .type(textTotype, { force: true, delay: 0 });
}
);

//This is the method to click on the element based on the element selector
Cypress.Commands.add("clickOnElement", (elementSelector, elementText) => {
    cy.get(elementSelector, { timeout: elementTimeout })
        .invoke("removeAttr", "target")
        .click({ force: true }, { multiple: true });
    cy.log(`Clicked on ${elementText}`);
});

//This is the method to click on the element based on the element selector
Cypress.Commands.add("clickOnElementText", (elementSelector, elementText) => {
    cy.get(elementSelector, { timeout: elementTimeout })
        .invoke("removeAttr", "target")
        .contains(elementText)
        .click({ force: true }, { multiple: true });
    cy.log(`Clicked on ${elementText}`);
});

//This is the method to click on the element based on the element selector and index
Cypress.Commands.add(
    "clickOnElementByIndex",
    (elementSelector, elementText, index) => {
        cy.get(elementSelector, { timeout: elementTimeout })
            .eq(index)
            .invoke("removeAttr", "target")
            .click({ force: true }, { multiple: true });
        cy.log(`Clicked on ${elementText}`);
    }
);

//This is the method for verify element is visible based on element selector
Cypress.Commands.add('verifyElementIsVisible', (elementSelector) => {
    cy.get(elementSelector, { timeout: elementTimeout })
        .should('be.visible');
});

//This is the method for verify element is visible based on element selector
Cypress.Commands.add('verifyElementTextIsVisible', (elementSelector, elementText) => {
    cy.get(elementSelector, { timeout: elementTimeout })
        .contains(elementText)
        .should('be.visible');
});
