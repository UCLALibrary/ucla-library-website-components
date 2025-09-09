describe('Funkhaus / Header Collection', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-header-collection--default&args=&viewMode=story'
    )
    cy.get('.header-collection').should('exist')

    cy.percySnapshot('Funkhaus / Header Collection')
  })
})
