describe('Funkhaus / Bento Filter Menu', () => {
  it('Default story: renders with theme and all filter items', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bento-filter-menu--default&viewMode=story'
    )
    cy.get('.bento-filter-menu').should('exist')
  })
})
