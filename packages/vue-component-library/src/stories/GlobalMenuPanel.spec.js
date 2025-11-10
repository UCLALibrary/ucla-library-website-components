describe('Funkhaus / Global Menu Panel', () => {
  it('Default', () => {
    // open the storybook page of the component
    cy.visit(
      '/iframe.html?id=funkhaus-global-menu-panel--default&args=&viewMode=story'
    )

    // assert the url
    cy.url().should('include', 'global-menu-panel')

    cy.percySnapshot('Funkhaus / Global Menu Panel: Default')
  })
})
