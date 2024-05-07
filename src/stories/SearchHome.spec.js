describe('Search / Search Home', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=search-search-home--default&args=&viewMode=story'
    )
    cy.get('.search-home').should('exist')

    cy.percySnapshot('Search / Home: Default')
  })
  it('uses q for query parameter', () => {
    cy.visit('/iframe.html?id=search-search-home--default&args=&viewMode=story')
    // click the library search tab, then submit empty search
    cy.contains('button', 'Site Search').click()
    cy.get('button[class="button-submit"]').click()
    cy.url().should('include', '?q=')
  })
})
