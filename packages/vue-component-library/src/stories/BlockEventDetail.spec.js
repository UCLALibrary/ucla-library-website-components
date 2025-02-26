describe('BlockEventDetail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-event-detail--default&args=&viewMode=story'
    )
    cy.get('.block-event-detail').should('exist')

    cy.percySnapshot('BLOCK / Event Detail: Default')
  })
})
