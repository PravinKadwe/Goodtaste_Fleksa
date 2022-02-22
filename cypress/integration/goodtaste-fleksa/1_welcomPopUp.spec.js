/// <reference types ="Cypress" />

describe("Test pop-up window", () => {
    it('No HTML elements', function () {
        cy.visit("https://goodtaste.fleksa.de/");

        cy.get('#hs-eu-confirmation-button').click();

        cy.get('.bannerindexpagestemplateOnecomponents__Description-sc-1pven69-4')
            .should('have.text', 'Wilkommen bei Good Taste');

    })


})