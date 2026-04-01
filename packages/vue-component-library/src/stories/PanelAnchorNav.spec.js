describe('Funkhaus / Panel Anchor Nav', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-panel-anchor-nav--default&args=&viewMode=story'
    )
    cy.get('.panel-anchor-nav').should('exist')
    cy.percySnapshot('Funkhaus / Panel Anchor Nav')
  })
})
