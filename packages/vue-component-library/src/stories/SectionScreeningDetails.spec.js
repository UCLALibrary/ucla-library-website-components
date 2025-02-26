describe('SECTION / Screening Details', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-screening-details--default&args=&viewMode=story'
    )
    cy.get('.section-screening-details').should('exist')

    cy.percySnapshot('SECTION / Screening Details: Default')
  })
})
