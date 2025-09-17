describe('Funkhaus / Button Submit', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-button-submit--default&args=&viewMode=story')
    cy.get('.button-submit').should('exist')

    cy.percySnapshot('Funkhaus / Button Submit')
  })
})
