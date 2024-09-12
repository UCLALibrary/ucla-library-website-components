describe('SectionCardThreeColumn', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-card-three-column--default&args=&viewMode=story'
    )
    cy.get('.section-card-three-column').should('exist')

    cy.percySnapshot('SECTION / Card Three Column: Default')
  })
})
