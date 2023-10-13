describe('SECTION / Orcid Publications', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-orcid-publications--default&args=&viewMode=story'
    )
    cy.get('.section-staff-orcid-publications').should('exist')

    cy.percySnapshot('SECTION / Orcid Publications: Default')
  })
})
