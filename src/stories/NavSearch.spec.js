describe('NAV / Search', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=nav-secondary--default&args=&viewMode=story')
    cy.get('.nav-search').should('exist')
    cy.percySnapshot('NAV / Search')
  })
})