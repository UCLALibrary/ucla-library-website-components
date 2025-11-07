describe('Funkhaus / CollectionOverview', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-collection-overview--default&args=&viewMode=story'
    )
    cy.get('.collection-overview').should('exist')
    cy.percySnapshot('Funkhaus / CollectionOverview')
  })
})
