describe('Funkhaus / Pages / Page Asset Detail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-pages-page-asset-detail--default&args=&viewMode=story'
    )
    cy.get('.page-asset-detail').should('exist')

    cy.percySnapshot('Funkhaus / Pages / Page Asset Detail: Default')
  })
})
