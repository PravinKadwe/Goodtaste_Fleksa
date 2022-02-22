describe('Make Reserve Now', function () {

    it('Test Reserve Now', function () {
        cy.viewport(1326, 1000);

        cy.visit("https://goodtaste.fleksa.de/");

        cy.get('#hs-eu-confirmation-button').click();

        cy.get('.bannerindexpagestemplateOnecomponents__Cross-sc-1pven69-5').click()

        cy.get('.heroindexpagestemplateOnecomponents__ReserveButton-sc-hpo36g-12').click()

        cy.url().should('include', '/reservation')

        cy.get('.form-rightreservationpagestemplateOnecomponents__SelectBox-sc-drygix-2').select('8')

        cy.get('input[type="date"]').type('2022-02-22')

        cy.get('.form-rightreservationpagestemplateOnecomponents__TimeSlots-sc-drygix-9 > :nth-child(9)').click()

        cy.get('input[type="text"]').type('Ramon Castillo')

        cy.get('input[type="email"]').type('RamonCastillo@dispostable.com')

        cy.get('.form-leftreservationpagestemplateOnecomponents__FormContainer-sc-1t6hhwl-1 > :nth-child(3) > .react-tel-input > .flag-dropdown > .selected-flag').click()

        cy.get('.search-box').type('United States') // United States

        // cy.get('[data-flag-key="flag_no_1"]').click()

        cy.get('.country').click()

        cy.get('.form-leftreservationpagestemplateOnecomponents__FormContainer-sc-1t6hhwl-1 > :nth-child(3) > .react-tel-input > .form-control').type('7972121805')
        // 9378703664 twilio
        cy.get('textarea[class="form-leftreservationpagestemplateOnecomponents__Textarea-sc-1t6hhwl-6 hvJakd"]').type('Book my reservation as VIP!, Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. This is the way to success.')

        cy.get('.form-leftreservationpagestemplateOnecomponents__ReservationButton-sc-1t6hhwl-9').click()

        cy.get('.loginpagestemplateOnecomponents__InputContainer-sc-1vgejx8-5 > .react-tel-input > .flag-dropdown > .selected-flag').click()

        cy.get('.search-box').type('United States') // United States

        // cy.get('[data-flag-key="flag_no_1"]').click()

        cy.get('.country').click()

        cy.get('.loginpagestemplateOnecomponents__InputContainer-sc-1vgejx8-5 > .react-tel-input > .form-control').type('7972121805')
        // 9378703664 twilio
        cy.get('.loginpagestemplateOnecomponents__SendOtpButton-sc-1vgejx8-7').click()

        // const otp = 

        for (let i = 1; i < 6; i++) {
            let j = Math.floor((Math.random() * 9) + 1);
            cy.get('[style="display: flex; flex: 1 1 0%; justify-content: space-between; max-width: 500px; place-self: center;"] > :nth-child(' + i + ') > input').type(j)

        }

        cy.get('.loginpagestemplateOnecomponents__VerifyOtpButton-sc-1vgejx8-8').click()

    })

})