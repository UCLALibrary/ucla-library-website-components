describe('BlockCardWithImage', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-card-with-image--default&args=&viewMode=story'
    )
    cy.get('.block-highlight').should('exist')

    cy.percySnapshot('BLOCK / Card With Image: Default')
  })
})
