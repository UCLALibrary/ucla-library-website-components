describe('Funkhaus / Search Field Composite', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-searchfieldcomposite--default&args=&viewMode=story'
    )
    cy.get('.search-field-composite').should('exist')
    cy.get('.search-field').should('exist')
    cy.get('.button-dropdown-search').should('not.exist')
    cy.get('.divider-general').should('not.exist')

    cy.percySnapshot('Funkhaus / Search Field Composite')
  })
})
