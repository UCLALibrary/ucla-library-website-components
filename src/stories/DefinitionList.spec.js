describe('DefinitionList', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=definition-list--default&args=&viewMode=story'
    )
    cy.get('.definition-list').should('exist')

    cy.percySnapshot('DEFINITIONLIST / General: Default')
  })
})
