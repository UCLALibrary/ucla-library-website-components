describe('SECTION / Generic / List', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-generic-list--default&args=&viewMode=story'
    )
    cy.get('.section-block-generic-list').should('exist')

    cy.percySnapshot('SECTION / Generic / List: Default')
  })
})
