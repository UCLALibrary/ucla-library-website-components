describe('BlockCardThreeColumn', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-card-three-column--default&args=&viewMode=story'
    )
    cy.get('.block-card-three-column').should('exist')

    cy.percySnapshot('BLOCK / Card Three Column: Default')
  })
})
