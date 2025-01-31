describe('TABLE / Table Row', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=table-row--default&args=&viewMode=story'
    )
    cy.get('.table-row').should('exist')

    cy.percySnapshot('TABLE / Table Row')
  })
})
