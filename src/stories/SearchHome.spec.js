describe('Search / Search Home', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=search-search-home--default&args=&viewMode=story'
    )
    cy.get('.search-home').should('exist')

    cy.percySnapshot('Search / Home: Default')
  })
})
