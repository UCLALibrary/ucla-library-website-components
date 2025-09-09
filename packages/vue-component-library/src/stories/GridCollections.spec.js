describe('FUNKHAUS / Grid Collections', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-grid-collections--default&args=&viewMode=story')
    cy.get('.grid-collections').should('exist')
    cy.percySnapshot('Funkhaus / Grid Collections: Default')
  })
})
