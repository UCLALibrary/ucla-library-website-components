describe('IMPACT REPORT / Impact Number Card', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=impact-report-impact-number-card--default&args=&viewMode=story'
    )
    cy.get('.impact-number-card').should('exist')

    cy.percySnapshot('IMPACT REPORT / Impact Number Card: Default')
  })
})
