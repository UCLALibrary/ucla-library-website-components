describe('LAYOUT / Two Columns W Sticky Sidebar', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=layout-2-column-layout-with-sticky-sidebar--event-series'
    )
    cy.get('.two-column').should('exist')

    cy.percySnapshot('LAYOUT / Two Columns W Sticky Sidebar: Event Series')
  })
})
