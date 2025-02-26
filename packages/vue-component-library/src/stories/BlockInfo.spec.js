describe('BLOCK / Info', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=block-info--default&args=&viewMode=story')

    cy.get('.block-info').should('exist')

    cy.percySnapshot('BLOCK / Info: Default')
  })
})
