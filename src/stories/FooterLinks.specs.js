describe('FOOTER / Links', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=footer-links--default&args=&viewMode=story')

    cy.get('.footer-links').should('exist')

    cy.percySnapshot('FOOTER / Links: Default')
  })
})