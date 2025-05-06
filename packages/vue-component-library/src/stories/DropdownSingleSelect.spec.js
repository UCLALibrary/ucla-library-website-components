describe('DropdownSingleSelect', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=dropdown-single-select--default&args=&viewMode=story'
    )
    cy.get('.dropdown-single-select').should('exist')

    cy.percySnapshot('DropdownSingleSelect: Default')
  })
})
