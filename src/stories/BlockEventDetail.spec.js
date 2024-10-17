describe('BlockEventDetail', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-event-detail--default&args=&viewMode=story'
    )
    cy.get('.block-event-detail').should('exist')

    cy.window().then(win => {
      return win.document.fonts.ready;
    }).then(() => {
      cy.percySnapshot('BLOCK / Event Detail: Default');
    });
  })
})
