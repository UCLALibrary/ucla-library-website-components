describe('FLEXIBLE / Associated Topic Cards', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=flexible-associated-topic-cards--default&args=&viewMode=story'
    )
    cy.get('.associated-topic-cards').should('exist')

    cy.percySnapshot('FLEXIBLE / Associated Topic Cards: Default')
  })
})
