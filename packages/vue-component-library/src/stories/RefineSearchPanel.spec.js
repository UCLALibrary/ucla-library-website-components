describe('RefineSearchPanel', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-refinesearchpanel--default')
    })

    it('renders the component', () => {
      cy.get('.refine-search-panel').should('exist')
      cy.percySnapshot('RefineSearchPanel: Default')
    })
  })
})
