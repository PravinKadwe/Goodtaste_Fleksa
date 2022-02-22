/// <reference types ="Cypress" />

describe('Create an Order', function () {
    it('Manu Order', function () {
        cy.viewport(1326, 1000);

        cy.visit("https://goodtaste.fleksa.de/");

        cy.get('#hs-eu-confirmation-button').click();

        cy.get('.bannerindexpagestemplateOnecomponents__Cross-sc-1pven69-5').click()

        cy.get('.heroindexpagestemplateOnecomponents__ButtonContainer-sc-hpo36g-11 > :nth-child(1)').click()

        cy.get(':nth-child(2) > .order-type-managermenupagestemplateOnecomponents__ListItemContent-sc-lc8bvu-8 > .order-type-managermenupagestemplateOnecomponents__IndigatorText-sc-lc8bvu-14').click()

        cy.url().should('include', '/50')

        cy.get('.menu-by-idmenuonetemplates__SideViewLeft-sc-1l5fphe-0 > #list-list > #sidebar-view-category-4 > .category-sidebarmenupagestemplateOnecomponents__CategoryButton-sc-hek4uq-2 > .category-sidebarmenupagestemplateOnecomponents__CategoryButtonText-sc-hek4uq-3').click()

        cy.get('#\\33 29070 > .product-list-itemmenupagestemplateOnecomponents__ClosedViewContainer-sc-1lg1yx7-2 > .product-list-itemmenupagestemplateOnecomponents__ClosedViewInfoContainer-sc-1lg1yx7-3 > .product-list-itemmenupagestemplateOnecomponents__ClosedViewInfoContainerSection2-sc-1lg1yx7-5 > .add-buttoncommontemplateOnecomponents__WrapperButton-sc-uqrp0j-0 > .add-buttoncommontemplateOnecomponents__ButtonContainer-sc-uqrp0j-1 > .customLink__Link-sc-r5cumq-0').click()

        cy.get('#\\33 29094 > .product-list-itemmenupagestemplateOnecomponents__ClosedViewContainer-sc-1lg1yx7-2 > .product-list-itemmenupagestemplateOnecomponents__ClosedViewInfoContainer-sc-1lg1yx7-3 > .product-list-itemmenupagestemplateOnecomponents__ClosedViewInfoContainerSection2-sc-1lg1yx7-5 > .add-buttoncommontemplateOnecomponents__WrapperButton-sc-uqrp0j-0 > .add-buttoncommontemplateOnecomponents__ButtonContainer-sc-uqrp0j-1 > .customLink__Link-sc-r5cumq-0').click()

        cy.get('.menu-by-idmenuonetemplates__SideViewLeft-sc-1l5fphe-0 > .cartcommontemplateOnecomponents__Wrapper-sc-1v9bvy8-0 > .cartcommontemplateOnecomponents__OrderButton-sc-1v9bvy8-6').click()

        cy.url().should('include', '/checkout');

        cy.wait(800)

        cy.get('input[placeholder="Name"]').type('Ramon Castillo')

        cy.get('input[placeholder="Email"]').type('RamonCastillo@dispostable.com')

        cy.get('.selected-flag').click()

        cy.get('.search-box').type('United States') // United States

        // cy.get('[data-flag-key="flag_no_1"]').click()

        cy.get('.country').click()

        cy.get('.form-control').type('7972121805')

        cy.get('.checkoutorderbutton__OrderButton-sc-nw4gpj-0').click()

        cy.wait(1000)

        cy.get('.checkoutlogindropdown__Button-sc-1x4f2nd-5').click()

        for (let i = 1; i < 6; i++) {
            let j = Math.floor((Math.random() * 9) + 1);
            cy.get('[style="display: flex; flex: 1 1 0%; justify-content: space-between; max-width: 500px; place-self: center;"] > :nth-child(' + i + ') > input').type(j)

        }
    })
})