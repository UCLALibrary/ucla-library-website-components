describe('GLOBAL / Scroll Wrapper', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=scrollwrapper--default')
    cy.get('.scroll-wrapper').should('exist')

    cy.percySnapshot('GLOBAL / Scroll Wrapper: Default')
  })
})
