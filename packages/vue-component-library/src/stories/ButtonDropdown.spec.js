describe('BUTTON / Dropdown', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=button-dropdown--default&args=&viewMode=story'
    )
    cy.get('.button-dropdown').should('exist')

    cy.percySnapshot('BUTTON / Dropdown: Default')
  })
})
