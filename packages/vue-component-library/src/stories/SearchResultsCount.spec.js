// SearchResultsCount.spec.js
describe('SearchResultsCount', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-searchresultscount--default&args=&viewMode=story'
    )
    cy.get('.search-results-count').should('exist')

    cy.percySnapshot('SearchResultsCount: Default')
  })
})
