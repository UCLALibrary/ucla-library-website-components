describe('Funkhaus / Pages / Page Collections Detail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-pages-page-collections-detail--default&args=&viewMode=story'
    )
    cy.get('.collections-detail-page').should('exist')

    cy.percySnapshot('Funkhaus / Pages / Page Collections Detail: Default')
  })
})
