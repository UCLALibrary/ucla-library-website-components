describe('GLOBAL/ Rich Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=global-rich-text--default&args=&viewMode=story'
    )
    cy.get('.rich-text').should('exist')

    // Use the custom command and pass the snapshot name
    cy.waitForFontsAndSnapshot('Global / Rich Text: Default')
  })
})
