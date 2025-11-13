describe('Funkhaus / Global Menu Panel', () => {
  it('Default', () => {
    // open the storybook page of the component
    cy.visit(
      '/iframe.html?id=funkhaus-global-menu-panel--default&args=&viewMode=story'
    )

    cy.get('.global-menu-panel').should('exist')
  })
})
