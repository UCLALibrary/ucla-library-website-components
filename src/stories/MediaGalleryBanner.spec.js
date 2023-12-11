describe('MEDIA / Gallery Banner', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=media-gallery-banner--default&args=&viewMode=story'
    )
    cy.get('.banner-image').should('exist')

    cy.get('svg.molecule-image-stack').should('exist')
    cy.get('.gradient').should('not.be.visible')

    cy.percySnapshot('MEDIA GALLERY / Banner Image: Default')
  })

  it('Expanded', () => {
    cy.visit(
      '/iframe.html?id=media-gallery-banner--expanded&args=&viewMode=story'
    )
    cy.get('.banner-image').should('exist')

    cy.get('svg.molecule-image-stack').should('not.exist')
    cy.get('.gradient').should('not.exist')

    cy.percySnapshot()
  })

  it('Single Item', () => {
    cy.visit(
      '/iframe.html?id=media-gallery-banner--single-item&args=&viewMode=story'
    )
    cy.get('.banner-image').should('exist')

    cy.get('svg.molecule-image-stack').should('not.exist')
    cy.get('.gradient').should('not.exist')

    cy.percySnapshot()
  })
})
