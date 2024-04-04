describe('PageAnchor', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=pageanchor--default')
    cy.get('.page-anchor').should('exist')

    cy.percySnapshot('Page Anchor: Default')
  })
})
