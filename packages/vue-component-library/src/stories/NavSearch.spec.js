describe('NAV / Search', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=nav-search--default&args=&viewMode=story')
    cy.get('.nav-search').should('exist')
    cy.percySnapshot('NAV / Search')
  })
})
