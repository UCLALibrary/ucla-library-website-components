describe('Funkhaus / ExcerptPod', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-excerptpod--default&args=&viewMode=story'
    )
    cy.get('.excerpt-pod').should('exist')
    cy.get('.excerpt-pod .title').should('exist')
    cy.get('.excerpt-pod .subtitle').should('exist')
    cy.get('.excerpt-pod .text').should('exist')
    cy.percySnapshot('Funkhaus / ExcerptPod: Default')
  })

  it('Renders NotesAccordion when accordions are present', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-excerptpod--moresections&args=&viewMode=story'
    )
    cy.get('.excerpt-pod .notes-accordion').should('exist')
    cy.get('.notes-accordion .btn').should('exist')
  })
})
