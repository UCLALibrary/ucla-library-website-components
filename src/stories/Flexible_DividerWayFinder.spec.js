describe('FLEXIBLE / Divider Way Finder', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-divider-way-finder--default&args=&viewMode=story'
    )
    cy.get('.divider-way-finder').should('exist')

    cy.percySnapshot('FLEXIBLE / Divider Way Finder: Default')
  })
})
