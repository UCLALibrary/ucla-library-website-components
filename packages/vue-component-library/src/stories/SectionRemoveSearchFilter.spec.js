describe('SECTION / SectionRemoveSearchFilter', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=search-section-remove-search-filter--default&args=&viewMode=story'
    )
    cy.get('.section-remove-search-filter').should('exist')

    cy.percySnapshot('SEARCH / Section Remove Search Filter: Default')
  })
})
