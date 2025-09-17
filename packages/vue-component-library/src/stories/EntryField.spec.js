describe('Funkhaus / Entry Field', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-entry-field--default&args=&viewMode=story')
    cy.get('.entry-field').should('exist')
    cy.percySnapshot('Funkhaus / Entry Field')
  })
})
