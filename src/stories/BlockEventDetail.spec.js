describe('BlockEventDetail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-event-detail--default&args=&viewMode=story'
    )
    cy.get('.block-event-detail').should('exist')

    // Use the custom command and pass the snapshot name
    cy.waitForFontsAndSnapshot('BLOCK / Event Detail: Default')
  })
})
