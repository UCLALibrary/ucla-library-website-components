describe('Funkhaus / Modal Filter', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-modal-filter--default&args=&viewMode=story'
    )
    cy.get('.modal-filter').should('exist')

    cy.percySnapshot('Funkhaus / Modal Filter')
  })
})
