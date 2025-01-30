describe('Table', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=table--default&viewMode=story')

    cy.get('.table-component').should('exist')

    cy.percySnapshot('Table: Default')
  })
})
