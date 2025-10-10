describe('RefineSearchPanel', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-refinesearchpanel--default')
    })

    it('renders the component', () => {
      cy.get('.refine-search-panel').should('exist')
      cy.percySnapshot('RefineSearchPanel: Default')
    })

    it('displays the correct title', () => {
      cy.get('.filter-title').should('contain', 'REFINE SEARCH')
    })

    it('renders the FilterDropdown component', () => {
      cy.get('.filter-dropdown').should('exist')
    })

    it('renders all filter items', () => {
      cy.get('.filter-item').should('have.length', 9) // Based on defaultFilters array
    })

    it('renders filter options correctly', () => {
      cy.get('.filter-item').first().click()
      cy.get('.filter-option').should('exist')
      cy.get('.see-all').should('exist')
    })

    it('displays filter names correctly', () => {
      cy.get('.filter-name').should('contain', 'Subject')
      cy.get('.filter-name').should('contain', 'Resource Type')
      cy.get('.filter-name').should('contain', 'Genre')
      cy.get('.filter-name').should('contain', 'Location')
      cy.get('.filter-name').should('contain', 'Names')
      cy.get('.filter-name').should('contain', 'Date Range')
      cy.get('.filter-name').should('contain', 'Collection')
      cy.get('.filter-name').should('contain', 'Repository')
      cy.get('.filter-name').should('contain', 'Program')
    })

    it('has filter chevron icons', () => {
      cy.get('.filter-chevron svg').should('exist')
    })

    it('shows filter options when clicked', () => {
      cy.get('.filter-item').first().click()
      cy.get('.filter-options').should('be.visible')
      cy.get('.filter-option').should('exist')
    })

    it('displays option counts', () => {
      cy.get('.filter-item').first().click()
      cy.get('.option-count').should('exist')
      cy.get('.option-count').first().should('contain', '15420')
    })

    it('shows See All button when showAll is true', () => {
      cy.get('.filter-item').first().click()
      cy.get('.see-all').should('exist')
      cy.get('.see-all').should('contain', 'See All')
    })

    it('can be opened and closed by clicking the summary', () => {
      // Initially should be open (opened: true by default)
      cy.get('.filter-dropdown').should('be.visible')

      // Click the summary to close
      cy.get('.filter-reveal-summary').click()
      cy.get('.filter-dropdown').should('not.be.visible')

      // Click again to open
      cy.get('.filter-reveal-summary').click()
      cy.get('.filter-dropdown').should('be.visible')
    })

    it('has the correct summary styling', () => {
      cy.get('.filter-reveal-summary').should('exist')
      cy.get('.filter-reveal-summary .filter-title').should('contain', 'REFINE SEARCH')
      cy.get('.filter-reveal-summary .filter-chevron').should('exist')
    })
  })
})
