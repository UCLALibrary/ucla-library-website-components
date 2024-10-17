describe('FLEXIBLE / Media With Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-media-with-text--default&args=&viewMode=story'
    )
    cy.get('.section-media-with-text').should('exist')

    cy.window().then((win) => {
      return win.document.fonts.ready
    }).then(() => {
      cy.percySnapshot('FLEXIBLE / Media With Text: Default')
    })
  })
})
