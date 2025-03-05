describe('BLOCK / Tag', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-tag--default&args=&viewMode=story'
    )
    cy.get('.block-tag').should('exist')
    cy.percySnapshot('BLOCK / Tag')
  })
})
