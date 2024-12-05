describe('FiltersDropdown', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=filters-dropdown--default&args=&viewMode=story'
    )
    cy.get('.filters-dropdown').should('exist')

    cy.percySnapshot('FiltersDropdown: Default')
  })
})