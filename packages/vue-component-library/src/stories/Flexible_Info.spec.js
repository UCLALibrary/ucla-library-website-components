describe('FLEXIBLE / Info', () => {
  it('Flexible FTVA Info', () => {
    cy.visit(
      '/iframe.html?id=flexible-info--ftva-info-block&args=&viewMode=story'
    )
    cy.get('.flexible-info').should('exist')

    cy.percySnapshot('FLEXIBLE / Info: FTVA Info Block')
  })
})
