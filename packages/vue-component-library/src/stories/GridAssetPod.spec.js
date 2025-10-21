describe('Funkhaus / Grid Asset Pod', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-grid-asset-pod--default&args=&viewMode=story'
    )
    cy.get('.grid-asset-pod').should('exist')

    cy.percySnapshot('Funkhaus / Grid Asset Pod: Default')
  })
})
