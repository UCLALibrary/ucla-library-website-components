describe('BUTTON / Show', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=button-show--default&args=&viewMode=story')
    cy.get('.button-show').should('exist')

    // Use the custom command and pass the snapshot name
    cy.waitForFontsAndSnapshot('BUTTON / Show: Default')
  })
})
