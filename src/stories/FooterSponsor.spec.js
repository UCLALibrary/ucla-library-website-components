describe('FOOTER/ Sponsor', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=footer-sponsor--default&args=&viewMode=story')
    cy.get('.footer-sponsor').should('exist')

    cy.percySnapshot('Footer / Sponsor: Default')
  })
})
