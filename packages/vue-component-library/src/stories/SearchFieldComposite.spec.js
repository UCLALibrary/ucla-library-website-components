describe('Funkhaus / Search Field Composite', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-search-field-composite--default&args=&viewMode=story'
    )
    cy.get('.search-field-composite').should('exist')

    cy.percySnapshot('Funkhaus / Search Field Composite')
  })
})
