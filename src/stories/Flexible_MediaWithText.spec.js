describe('FLEXIBLE / Media With Text', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-media-with-text--default&args=&viewMode=story'
    )
    cy.get('.section-media-with-text').should('exist')

    // Wait for fonts to load before proceeding
    cy.waitForFontsToLoad().then(() => {
      // Now take Percy snapshot
      cy.percySnapshot('FLEXIBLE / Media With Text: Default')
    })
  })
})
