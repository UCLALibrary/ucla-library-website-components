describe('BUTTON / Show', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=button-show--default&args=&viewMode=story')
    cy.get('.button-show').should('exist')

    // Wait for fonts to load before proceeding
    cy.waitForFontsToLoad().then(() => {
      // Now take Percy snapshot
      cy.percySnapshot('BUTTON / Show: Default')
    })
  })
})
