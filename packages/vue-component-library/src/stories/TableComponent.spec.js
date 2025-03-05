describe('TABLE / Table Component', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=table-table-with-header--default&viewMode=story')

    cy.get('.table-component').should('exist')

    cy.percySnapshot('TABLE / Table Component')
  })
})
