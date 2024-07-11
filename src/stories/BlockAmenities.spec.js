describe('BLOCK / Amenities', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-amenities--default&args=&viewMode=story'
    )
    cy.get('.block-amenities').should('exist')

    cy.percySnapshot('BLOCK / Amenities: Default')
  })
})
