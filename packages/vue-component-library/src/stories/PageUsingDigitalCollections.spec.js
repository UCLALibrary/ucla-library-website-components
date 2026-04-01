describe('Funkhaus / Pages / Page Using Digital Collections', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-pages-page-using-digital-collections--default&args=&viewMode=story'
    )
    cy.get('.using-digital-collections-page').should('exist')

    cy.percySnapshot('Funkhaus / Pages / Page Using Digital Collections: Default')
  })
})
