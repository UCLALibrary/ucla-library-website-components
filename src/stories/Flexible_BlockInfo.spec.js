describe('FLEXIBLE / Block Info', () => {
  it('Flexible FTVA Block Info', () => {
    cy.visit(
      '/iframe.html?id=flexible-blockinfo--ftva-info-block&args=&viewMode=story'
    )
    cy.get('.flexible-block-info').should('exist')

    cy.percySnapshot('FLEXIBLE / Block Info: FTVA Block Info')
  })
})
