describe('BannerFeatured', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=banner-featured--default&args=&viewMode=story'
    )
    cy.get('.banner-featured').should('exist')

    // Use the custom command and pass the snapshot name
    cy.waitForFontsAndSnapshot('Banner Featured: Default')
  })
})
