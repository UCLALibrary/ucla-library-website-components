describe('Funkhaus / Block Asset Pod', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-block-asset-pod--default&args=&viewMode=story'
    )
    cy.get('.block-asset-pod').should('exist')

    cy.percySnapshot('Funkhaus / Block Asset Pod: Default')
  })
})
