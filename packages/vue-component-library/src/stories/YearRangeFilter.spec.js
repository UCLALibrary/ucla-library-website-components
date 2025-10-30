describe('YearRangeFilter', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--default')
    })

    it('renders the component', () => {
      cy.get('.year-range-filter').should('exist')
      cy.percySnapshot('YearRangeFilter: Default')
    })
  })
})
