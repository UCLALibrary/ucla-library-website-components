describe('GLOBAL / Scroll Wrapper', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=global-scroll-wrapper--default&args=&viewMode=story')
    cy.get('.scroll-wrapper').should('exist')

    cy.percySnapshot('GLOBAL / Scroll Wrapper: Default')
  })
})
