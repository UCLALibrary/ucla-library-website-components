describe('CardMeta', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=card-meta--default&args=&viewMode=story')
    cy.get('.card-meta').should('exist')

    cy.percySnapshot('Card Meta: Default')
  })
})
