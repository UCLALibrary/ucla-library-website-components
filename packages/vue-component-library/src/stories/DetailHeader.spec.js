describe('Funkhaus / Detail Header', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-detail-header--default&args=&viewMode=story'
    )
    cy.get('.detail-header').should('exist')
    cy.percySnapshot('Funkhaus / Detail Header')
  })
})
