class buttonsCheckboxes {
    getcheck1 () {
        return cy.get('#checkbox1')
    }

    getcheck2 () {
        return cy.get('#checkbox2')
    }

    getcheck3 () {
        return cy.get('#checkbox3')
    }

    getResetCheckboxesButton () {
        return cy.get('button').contains('Reset')
    }
 }

 export default new buttonsCheckboxes();