describe('Masthead / Secondary', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=masthead-secondary--default&args=&viewMode=story'
    )
    cy.get('.masthead-secondary').should('exist')

    cy.percySnapshot('Masthead / Secondary: Default')
  })

  it('MEAP Theme', () => {
    cy.visit(
      '/iframe.html?id=masthead-secondary--meap-theme&args=&viewMode=story'
    )
    cy.get('.masthead-secondary').should('exist')
    cy.get('.hero-image').should('exist')
  })
})
