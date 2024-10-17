describe('FLEXIBLE / Card With Image', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-card-with-image--default&args=&viewMode=story'
    )
    cy.get('.card-with-image').should('exist')

    // Use the custom command and pass the snapshot name
    cy.waitForFontsAndSnapshot('FLEXIBLE / Card With Image: Default')
  })
})
