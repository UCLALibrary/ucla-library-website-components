describe('BLOCK / SimpleCard', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-simple-card--default&args=&viewMode=story'
    )
    cy.get('.block-simple-card').should('exist')

    // Opens external link in new tag
    cy.contains('a.smart-link', 'Types of Sinkholes').should(
      'have.attr',
      'target',
      '_blank'
    )

    cy.percySnapshot('BLOCK / Simple Card: Default')
  })

  it('Opens internal links in the same tab', () => {
    cy.visit(
      '/iframe.html?id=block-simple-card--internal-link&args=&viewMode=story'
    )
    cy.contains('a.smart-link', 'Sink Hole').should(
      'not.have.attr',
      'target',
      '_blank'
    )
  })
})
