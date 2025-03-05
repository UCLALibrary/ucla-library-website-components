describe('Search / Generic', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=search-generic--default&args=&viewMode=story'
    )
    cy.get('.search-generic').should('exist')

    cy.percySnapshot('Search / Generic: Default')
  })
})
