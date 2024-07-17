describe('BLOCK/ Screening / Detail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-screening-detail--default&args=&viewMode=story'
    )
    cy.get('.block-screening-detail').should('exist')

    cy.percySnapshot('BLOCK / Screening Detail: Default')
  })
})
