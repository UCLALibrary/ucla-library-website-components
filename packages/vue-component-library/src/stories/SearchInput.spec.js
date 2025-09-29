describe('Funkhaus / Search Input', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-search-input--default&args=&viewMode=story'
    )
    cy.get('.search-input').should('exist')
    cy.percySnapshot('Funkhaus / Search Input')
  })
})
