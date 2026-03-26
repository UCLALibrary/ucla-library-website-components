describe('Funkhaus / Pages / Page Program Landing', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-pages-page-program-landing--default&args=&viewMode=story'
    )
    cy.get('.page-program-landing').should('exist')

    cy.percySnapshot('Funkhaus / Pages / Page Program Landing: Default')
  })
})
