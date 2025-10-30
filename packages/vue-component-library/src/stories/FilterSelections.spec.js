describe('FilterSelections', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-filterselections--default')
    })

    it('renders the component', () => {
      cy.get('.filter-selections').should('exist')
      cy.percySnapshot('FilterSelections: Default')
    })
  })
})
