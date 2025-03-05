describe('GLOBAL / Responsive Image', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=global-responsive-image--default&args=&viewMode=story'
    )
    cy.get('.responsive-image').should('exist')
    cy.get('.credit').should('not.exist')
    cy.percySnapshot('GLOBAL / Responsive Image: Default')
  })
  it('renders credit text', () => {
    cy.visit(
      '/iframe.html?id=global-responsive-image--with-credit-text&args=&viewMode=story'
    )
    cy.get('.credit').should('exist')
  })
})
