describe('Funkhaus / Grid Metadata', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-grid-metadata--default&args=&viewMode=story'
    )
    cy.get('.grid-metadata').should('exist')

    cy.percySnapshot('Funkhaus / Grid Metadata: Default')
  })
})
