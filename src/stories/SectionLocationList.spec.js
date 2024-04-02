describe('SECTION / Location / List', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-location-list--default&args=&viewMode=story'
    )
    cy.get('.section-location-list').should('exist')

    cy.percySnapshot('SECTION / Location / List: Default')
  })
})
