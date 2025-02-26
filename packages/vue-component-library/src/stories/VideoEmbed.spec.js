describe('/ Video Embed', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=global-videoembed--default&args=&viewMode=story'
    )
    cy.get('.video-embed').should('exist')

    cy.percySnapshot('VIDEO / Video Embed: Default')
  })
})
