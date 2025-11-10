describe('Funkhaus / Header Main Funkhaus', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-header-main-funkhaus--default&args=&viewMode=story'
    )
    cy.get('.header-main-funkahus').should('exist')
    cy.percySnapshot('Funkhaus / Header Main Funkhaus: Default')
  })
})

