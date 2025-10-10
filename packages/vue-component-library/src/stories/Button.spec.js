describe('Funkhaus / Button', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button--primary&args=&viewMode=story'
    )
    cy.get('button').should('exist')
    cy.percySnapshot('Funkhaus / Button')
  })
})
