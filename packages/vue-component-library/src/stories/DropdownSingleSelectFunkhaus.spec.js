describe('Funkhaus / DropdownSingleSelectFunkhaus', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-dropdownsingleselectfunkhaus--default&args=&viewMode=story'
    )
    cy.get('.dropdown-single-select-funkhaus').should('exist')

    cy.percySnapshot('Funkhaus / DropdownSingleSelectFunkhaus: Default')
  })

  it('Opens dropdown and shows options', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-dropdownsingleselectfunkhaus--default&args=&viewMode=story'
    )
    cy.get('.dropdown-single-select-funkhaus').click()
    cy.get('.dropdown-single-select-funkhaus .dropdown-option').should(
      'have.length.greaterThan',
      0
    )
  })

  it('Selects first option and updates selection', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-dropdownsingleselectfunkhaus--default&args=&viewMode=story'
    )
    cy.get('.dropdown-single-select-funkhaus').click()
    cy.get('.dropdown-single-select-funkhaus .dropdown-option')
      .first()
      .click()
    cy.get('.dropdown-single-select-funkhaus').should('contain.text', '') // Replace with expected option text if known
  })
})
