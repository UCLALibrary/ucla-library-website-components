describe('FLEXIBLE / Call To Action', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-call-to-action--default&args=&viewMode=story'
    )
    cy.get('.flexible-block-call-to-action').should('exist')

    cy.percySnapshot('FLEXIBLE / Call To Action: Default')
  })
})
