describe('FUNKHAUS / GridAssets', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-gridassets--default&args=&viewMode=story'
    )
    cy.get('.grid-assets').should('exist')

    cy.percySnapshot('FUNKHAUS / GridAssets: Default')
  })
})
