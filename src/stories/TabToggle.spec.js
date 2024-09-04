describe('Tab Toggle', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=tab-toggle--default&args=&viewMode=story')

    cy.get('.tab-toggle').should('exist')

    cy.percySnapshot('Tab Toggle: Default')
  })
})
