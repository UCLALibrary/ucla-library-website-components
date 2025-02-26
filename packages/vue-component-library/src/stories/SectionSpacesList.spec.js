describe('SECTION / Spaces / List', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=section-spaces-list--default&args=&viewMode=story'
    )
    cy.get('.section-spaces-list').should('exist')
    cy.contains('Null Beefeater Numpty').should('be.visible')
    cy.get('.button-toggle').should('not.exist')
    cy.percySnapshot('SECTION / Spaces / List: Default')
  })

  it('Expandable', () => {
    cy.visit(
      '/iframe.html?id=section-spaces-list--expandable&args=&viewMode=story'
    )
    cy.get('.section-spaces-list').should('exist')
    cy.contains('Null Beefeater Numpty').should('not.be.visible')
    cy.get('.button-toggle').should('be.visible').click()
    cy.contains('Null Beefeater Numpty').should('be.visible')
  })
})
