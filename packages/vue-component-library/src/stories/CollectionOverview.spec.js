describe('Funkhaus / CollectionOverview', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhauscollection-overview--default&args=&viewMode=story'
    )
    cy.get('.collection-overview').should('exist')

    cy.percySnapshot('Collection Overview: Default')
  })
})
