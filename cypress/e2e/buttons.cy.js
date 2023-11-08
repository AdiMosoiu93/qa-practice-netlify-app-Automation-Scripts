/// <reference types="cypress" />
import buttonsCheckboxes  from "../pages/buttonsCheckboxes";
import LeftSideMenuA from "../pages/LeftSideMenuA";

describe('Buttons practice page test suite', () => {

  beforeEach(() => {
    cy.visit('https://qa-practice.netlify.app')
    cy.viewport(1280, 720)
  });

  it('Checks 2 of the available buttons and resets them', () => {

    LeftSideMenuA.getButtonsPage().click()
    LeftSideMenuA.getCheckboxesPage().click()
    cy.get('h2').contains('Checkboxes').should('be.visible')
    buttonsCheckboxes.getcheck1().check().should('be.checked')
    buttonsCheckboxes.getcheck2().check().should('be.checked')
    buttonsCheckboxes.getResetCheckboxesButton().click()
    buttonsCheckboxes.getcheck1().should('not.be.checked')
    buttonsCheckboxes.getcheck2().should('not.be.checked')
  })
})