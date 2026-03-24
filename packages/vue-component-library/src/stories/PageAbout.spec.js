describe('Funkhaus / Pages / Page About', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-pages-page-about--default&args=&viewMode=story'
    )
    cy.get('.about-page').should('exist')

    cy.percySnapshot('Funkhaus / Pages / Page About: Default')
  })
})
