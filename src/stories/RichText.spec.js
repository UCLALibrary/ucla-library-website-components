describe('GLOBAL/ Rich Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=global-rich-text--default&args=&viewMode=story'
    )
    cy.get('.rich-text').should('exist')
    cy.window().then((win) => {
      return win.document.fonts.ready
    }).then(() => {
      cy.percySnapshot('Global / Rich Text: Default')
    })
  })
})
