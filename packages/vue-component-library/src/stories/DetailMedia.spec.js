describe('Funkhaus / DetailMedia', () => {
  it('Default story: renders with working IIIF manifest', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-detailmedia--default&viewMode=story'
    )
    cy.get('.detail-media').should('exist')
    cy.get('.detail-media').should('have.class', 'dlc')
    cy.get('.viewer-iframe').should('exist')
    cy.get('.viewer-iframe').should('have.attr', 'src').and('include', 'universalviewer.io')
    cy.get('.viewer-iframe').should('have.attr', 'src').and('include', 'manifest=')
  })

})
