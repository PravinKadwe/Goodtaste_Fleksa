describe('Check Language', function () {

    it('Check Flag wise Language', function () {
        cy.viewport(1326, 1000);

        let webPageLanguage = 'ENGLISH'; //DEUTSCH

        let validString = 'to eat and drink'; //Essen und Trinken

        cy.visit("https://goodtaste.fleksa.de/");

        cy.get('#hs-eu-confirmation-button').click();

        cy.get('.bannerindexpagestemplateOnecomponents__Cross-sc-1pven69-5').click()

        cy.get('h2[class="nav-language-changetemplateOnecomponents__Title-sc-50cvt9-2 gNTmmM"]').should('have.text', webPageLanguage)

        cy.get('.heroindexpagestemplateOnecomponents__SubTitle-sc-hpo36g-3')
            .should('have.text', validString)
        //.and('not.include.text', 'Essen und Trinken')

        //Essen und Trinken
        // expect("to eat and drink").to.equal("Essen und Trinken") //Essen und Trinken

    })

    it('Check On Flag wise Language', function () {
        cy.viewport(1326, 1000);

        let webPageLanguage = 'DEUTSCH'; //DEUTSCH

        let validString = 'Essen und Trinken'; //Essen und Trinken

        cy.get(':nth-child(7) > .nav-language-changetemplateOnecomponents__FlagContainer-sc-50cvt9-0').click()

        cy.get('#hs-eu-confirmation-button').click();

        cy.get('.bannerindexpagestemplateOnecomponents__Cross-sc-1pven69-5').click()

        cy.get('h2[class="nav-language-changetemplateOnecomponents__Title-sc-50cvt9-2 gNTmmM"]').should('have.text', webPageLanguage)
        cy.get('.heroindexpagestemplateOnecomponents__SubTitle-sc-hpo36g-3')
            .should('have.text', validString)


    })
})