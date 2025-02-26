describe('SEARCH / Dropdown /BaseCheckboxGroup', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=search-dropdown-basecheckboxgroup--default&args=&viewMode=story'
    )
    cy.get('.base-checkbox-group').should('exist')

    cy.percySnapshot('SEARCH / Dropdown /BaseCheckboxGroup: Default')
  })
})
