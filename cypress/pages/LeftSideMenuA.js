 class LeftSideMenuA {
    getButtonsPage () {
        return cy.get('a').contains('Buttons')
    }

    getFormsPage () {
        return cy.get('a').contains('Forms')
    }

    getNewTabWindowPage () {
        return cy.get('a').contains('New Tab / Window')
    }

    getCheckboxesPage () {
        return cy.get('#checkboxes')
    }

    getRadioButtonsPage () {
        return cy.get('#radio-buttons')
    }
 }

 export default new LeftSideMenuA();