describe('FOOTER / Main', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=footer-main--default&args=&viewMode=story')

    cy.get('.footer-main').should('exist')

    cy.percySnapshot('FOOTER / Main: Default')
  })
})
