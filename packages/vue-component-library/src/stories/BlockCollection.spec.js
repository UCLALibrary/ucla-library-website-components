describe('FUNKHAUS / Block Collection', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-block-collection--default&args=&viewMode=story')
    cy.get('.block-collection').should('exist')
    cy.percySnapshot('Funkhaus / Block Collection: Default')
  })
})
