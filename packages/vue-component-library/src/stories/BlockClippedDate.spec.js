describe('BlockClippedDate', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-clipped-date--default&args=&viewMode=story'
    )
    cy.get('.block-clipped-date').should('exist')

    cy.percySnapshot('BLOCK / Clipped Date: Default')
  })
})
