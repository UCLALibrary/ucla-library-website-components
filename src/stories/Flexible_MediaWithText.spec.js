describe('FLEXIBLE / Media With Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-media-with-text--default&args=&viewMode=story'
    )
    cy.get('.section-media-with-text').should('exist')
    cy.document().its("fonts.status").should("equal", "loaded")

    // Use the custom command and pass the snapshot name
    cy.waitForFontsAndSnapshot('FLEXIBLE / Media With Text: Default')
  })
})
