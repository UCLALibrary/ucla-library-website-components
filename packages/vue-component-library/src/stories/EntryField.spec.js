describe('Funkhaus / Entry Field', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-entry-field--default&args=&viewMode=story')
    cy.get('.search-input-wrapper').should('exist')
    cy.percySnapshot('Funkhaus / Entry Field')
  })
})
