describe('Funkhaus / Search Field', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-search-field--default&args=&viewMode=story')
    cy.get('.search-field').should('exist')
    cy.percySnapshot('Funkhaus / Search Field')
  })
})
