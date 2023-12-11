describe('MEDIA / Thumbnail Card', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=media-thumbnail-card--default&args=&viewMode=story'
    )
    cy.get('.thumbnail-card').should('exist')

    cy.percySnapshot('MEDIA GALLERY / Thumbnail Card: Default')
  })
})
