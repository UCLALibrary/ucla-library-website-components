describe('BannerFeatured', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=banner-featured--default&args=&viewMode=story'
    )
    cy.get('.banner-featured').should('exist')

    cy.window().then((win) => {
      return win.document.fonts.ready
    }).then(() => {
      cy.percySnapshot('Banner Featured: Default')
    })
  })
})
