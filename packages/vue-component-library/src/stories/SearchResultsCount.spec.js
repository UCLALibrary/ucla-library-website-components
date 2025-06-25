describe('SEARCH / Search Results Count', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-search-results-count--default&viewMode=story')
    cy.get('.search-results-count').should('exist')
    cy.percySnapshot('Search Results Count: Default')
  })

  it('Lots of Results', () => {
    cy.visit('/iframe.html?id=funkhaus-search-results-count--lots-of-results&viewMode=story')
    cy.get('.search-results-count').should('exist')
    cy.percySnapshot('Search Results Count: Lots of Results')
  })

  it('Big Prefix Label', () => {
    cy.visit('/iframe.html?id=funkhaus-search-results-count--big-prefix-label&viewMode=story')
    cy.get('.search-results-count').should('exist')
    cy.percySnapshot('Search Results Count: Big Prefix Label')
  })

  it('Prefix Only', () => {
    cy.visit('/iframe.html?id=funkhaus-search-results-count--prefix-only&viewMode=story')
    cy.get('.search-results-count').should('exist')
    cy.percySnapshot('Search Results Count: Prefix Only')
  })

  it('Label Only', () => {
    cy.visit('/iframe.html?id=funkhaus-search-results-count--label-only&viewMode=story')
    cy.get('.search-results-count').should('exist')
    cy.percySnapshot('Search Results Count: Label Only')
  })

  it('Not Animated', () => {
    cy.visit('/iframe.html?id=funkhaus-search-results-count--not-animated&viewMode=story')
    cy.get('.search-results-count').should('exist')
    cy.percySnapshot('Search Results Count: Not Animated')
  })
})