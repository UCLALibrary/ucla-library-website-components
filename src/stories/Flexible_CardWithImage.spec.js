describe('FLEXIBLE / Card With Image', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-card-with-image--default&args=&viewMode=story'
    )
    cy.get('.card-with-image').should('exist')

    cy.window().then(win => {
      return win.document.fonts.ready;
    }).then(() => {
      cy.percySnapshot('FLEXIBLE / Card With Image: Default');
    });
  })
})
