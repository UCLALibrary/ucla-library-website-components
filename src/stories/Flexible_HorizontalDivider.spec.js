describe('FLEXIBLE / Horizontal Divider', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-divider-way-finder--default&args=&viewMode=story'
    )
    cy.get('.divider-way-finder').should('exist')

    cy.percySnapshot('FLEXIBLE / HorizontalDivider: Default')
  })
})
