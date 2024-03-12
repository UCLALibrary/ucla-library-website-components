describe('DateFilter', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=date-filter--default')
    cy.get('.date-filter').should('exist')

    cy.percySnapshot('Date Filter: Default')
  })
})
