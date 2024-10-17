describe('GLOBAL/ Rich Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=global-rich-text--default&args=&viewMode=story'
    )
    cy.get('.rich-text').should('exist')

    // Wait for fonts to load before proceeding
    cy.waitForFontsToLoad().then(() => {
      // Now take Percy snapshot
      cy.percySnapshot('Global / Rich Text: Default')
    })
  })
})
