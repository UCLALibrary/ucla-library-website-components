describe('GLOBAL / Mobile Drawer', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=global-mobile-drawer--default&args=&viewMode=story')
    cy.get('.mobile-drawer').should('exist')

    cy.percySnapshot('GLOBAL / Mobile Drawer: Default')
  })
})
