describe('Funkhaus / Pages / Page Main Search Field Results', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-pages-page-main-search-field-results--default&args=&viewMode=story'
    )
    cy.get('.page-main-search-field-results').should('exist')

    cy.percySnapshot('Funkhaus / Pages / Page Main Search Field Results: Default')
  })
})
