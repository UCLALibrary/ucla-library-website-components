describe('BUTTON / Show', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=button-show--default&args=&viewMode=story')
    cy.get('.button-show').should('exist')

    cy.window().then((win) => {
      return win.document.fonts.ready
    }).then(() => {
      cy.percySnapshot('BUTTON / Show: Default')
    })
  })
})
