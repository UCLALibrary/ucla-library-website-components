describe('BLOCK / Form', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=block-form--default&args=&viewMode=story')
    cy.get('.register-button').should('exist')

    cy.percySnapshot('BLOCK / Form: Default')
  })
})
