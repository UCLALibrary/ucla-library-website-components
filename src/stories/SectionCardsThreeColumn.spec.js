describe('SectionCardsThreeColumn', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-cards-three-column--default&args=&viewMode=story'
    )
    cy.get('.section-cards-three-column').should('exist')

    cy.percySnapshot('SECTION / Cards Three Column: Default')
  })
})
