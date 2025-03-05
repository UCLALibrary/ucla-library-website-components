describe('Tab Toggle', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=tab-toggle--default&viewMode=story')

    cy.get('.tab-list').should('exist')

    cy.percySnapshot('Tab Toggle: Default')
  })
})
