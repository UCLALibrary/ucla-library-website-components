describe('BannerFeatured', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=banner-featured--default&args=&viewMode=story'
    )
    cy.get('.banner-featured').should('exist')

    // Wait for fonts to load before proceeding
    cy.waitForFontsToLoad().then(() => {
      // Now take Percy snapshot
      cy.percySnapshot('Banner Featured: Defaul')
    })
  })
})
