describe('FilterDropdown', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-filterdropdown--default')
    })

    it('renders the component', () => {
      cy.get('.filter-dropdown').should('exist')
      cy.percySnapshot('FilterDropdown: Default')
    })
  })
})
