describe('Flexible Blocks', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-blocks--default&args=&viewMode=story'
    )
    cy.get('.simple-cards').should('exist')
    cy.get('.media-gallery').should('exist')
    cy.get('.media-with-text').should('exist')

    cy.percySnapshot()
  })

  it('Gray Background', () => {
    cy.visit(
      '/iframe.html?id=flexible-blocks--gray-background&args=&viewMode=story'
    )
    cy.get('.flexible-blocks').should('exist')

    cy.percySnapshot()
  })
})
