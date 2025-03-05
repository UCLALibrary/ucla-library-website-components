describe('PageAnchor', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=pageanchor--default&args=&viewMode=story')
    cy.get('.page-anchor').should('exist')

    cy.percySnapshot('Page Anchor: Default')
  })
})
