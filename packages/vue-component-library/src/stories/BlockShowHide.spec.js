describe('BlockShowHide', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=block-show-hide--default&args=&viewMode=story'
    )
    cy.get('.block-show-hide').should('exist')

    cy.get('[data-cy=\'main\']').should('exist').and('be.visible')
    cy.get('[data-cy=\'extra\']').should('exist').and('not.be.visible')
    cy.percySnapshot('BlockShowHide: Hidden')
    cy.get('.button-toggle').should('contain', 'See More').click()

    cy.get('[data-cy=\'main\']').should('exist').and('be.visible')
    cy.get('[data-cy=\'extra\']').should('exist').and('be.visible')
    cy.percySnapshot('BlockShowHide: Shown')
    cy.get('.button-toggle').should('contain', 'See Less').click()

    cy.get('[data-cy=\'extra\']').should('exist').and('not.be.visible')
  })

  it('Disabled', () => {
    cy.visit(
      '/iframe.html?id=block-show-hide--no-hideable-content&args=&viewMode=story'
    )
    cy.get('.block-show-hide').should('exist')

    cy.get('[data-cy=\'main\']').should('exist').and('be.visible')
    cy.get('.button-toggle').should('not.exist')
    cy.percySnapshot('BlockShowHide: Disabled')
  })
})
