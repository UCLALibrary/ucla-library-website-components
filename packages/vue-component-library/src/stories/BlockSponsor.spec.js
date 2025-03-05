describe('BLOCK / Sponsor', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=block-sponsor--default&args=&viewMode=story')
    cy.get('.block-sponsor').should('exist')

    cy.percySnapshot('BLOCK / Sponsor: Default')
  })
})
