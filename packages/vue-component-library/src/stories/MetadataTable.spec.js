describe('FUNKHAUS / MetadataTable', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-metadatatable--default&args=&viewMode=story'
    )
    cy.get('.metadata-table').should('exist')
    cy.percySnapshot('FUNKHAUS / MetadataTable: Default')
  })
})
