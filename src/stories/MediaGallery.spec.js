describe('MEDIA GALLERY / Gallery', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?globals=backgrounds.grid:true&args=&id=flexible-media-gallery--default&viewMode=story'
    )
    cy.get('.banner-image').should('exist')

    cy.percySnapshot('MEDIA GALLERY / Gallery: Default')
  })

  it('HalfWidth', () => {
    cy.visit(
      '/iframe.html?globals=backgrounds.grid:true&args=&id=flexible-media-gallery--with-half-width&viewMode=story'
    )
    cy.get('.half-width-media-item').should('exist')

    cy.percySnapshot('MEDIA GALLERY / Gallery: Half Width')
  })
})
