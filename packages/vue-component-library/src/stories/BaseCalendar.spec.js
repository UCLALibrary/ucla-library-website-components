describe('Base Calendar', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=base-calendar--default&viewMode=story')

    cy.get('.base-calendar').should('exist')

    cy.percySnapshot('Base Calendar: Default')
  })
})
