describe('BLOCK / Block Media With Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-media-with-text--default&args=&viewMode=story'
    )
    cy.get('.media-with-text').should('exist')

    cy.percySnapshot('BLOCK / Block Media With Text: Default')
  })
})
