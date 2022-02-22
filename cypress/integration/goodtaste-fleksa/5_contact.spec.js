/// <reference types ="Cypress" />

describe('ContactUs', function () {

    const name = 'Harry Potter';

    const email_id = 'harry_potter@gmail.com';

    const country_nm = 'United States';

    const phone_num = '7972121805';

    const subject = 'Services provided reviews';

    var your_msg = 'The services are provided by you are really good and affordable.';

    it('Contact us Form', function () {
        cy.viewport(1326, 1000);

        cy.visit('https://goodtaste.fleksa.de/de/contact-us');

        cy.url().should('include', '/contact-us');

        cy.get('#hs-eu-confirmation-button').click();

        cy.get(':nth-child(1) > .contact-usonetemplates__Input-sc-1bb4g9q-6').type(name);

        cy.wait(700);

        cy.get('.contact-usonetemplates__InputContainerFlex-sc-1bb4g9q-12 > :nth-child(2) > .contact-usonetemplates__Input-sc-1bb4g9q-6').type(email_id);

        cy.wait(700);

        cy.get('.selected-flag').click();
        cy.wait(600);

        cy.get('.search-box').type(country_nm);
        cy.wait(600);

        cy.get('.country').click();
        cy.wait(600);

        cy.get('.form-control').type(phone_num);
        cy.wait(600);

        cy.get('.contact-usonetemplates__InputContainer-sc-1bb4g9q-10 > :nth-child(2) > .contact-usonetemplates__Input-sc-1bb4g9q-6').type(subject);
        cy.wait(600);

        cy.get('.contact-usonetemplates__Textarea-sc-1bb4g9q-8').type(your_msg);
        cy.wait(600);

        cy.get('.contact-usonetemplates__Checkbox-sc-1bb4g9q-16').click();
        cy.wait(1000);

        cy.get('.contact-usonetemplates__SendButton-sc-1bb4g9q-17').click();
    })
})












