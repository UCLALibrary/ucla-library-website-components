describe('DateFilter', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=datefilter--default')
    cy.get('.date-filter').should('exist')

    cy.percySnapshot('Date Filter: Default')
  })
})
