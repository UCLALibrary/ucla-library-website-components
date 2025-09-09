describe('FilterDropdown', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-filterdropdown--default')
    })

    it('renders the component', () => {
      cy.get('.filter-dropdown').should('exist')
      cy.percySnapshot('FilterDropdown: Default')
    })

    it('displays the correct title', () => {
      cy.get('.filter-title').should('contain', 'REFINE SEARCH')
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
      cy.get('.filter-chevron').should('have.length', 9)
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
  })
})
