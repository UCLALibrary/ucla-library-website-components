describe('BlockEventDetail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-event-detail--default&args=&viewMode=story'
    )
    cy.get('.block-event-detail').should('exist')

// Wait for fonts to load before proceeding
    cy.waitForFontsToLoad().then(() => {
      // Now take Percy snapshot
      cy.percySnapshot('BLOCK / Event Detail: Default')
    })
  })
})
