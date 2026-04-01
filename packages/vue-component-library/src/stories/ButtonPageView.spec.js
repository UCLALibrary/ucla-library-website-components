describe('Funkhaus / Button Page View', () => {
  it('Default story: renders with list view active and theme', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button-page-view--default&viewMode=story'
    )
    cy.get('.button-page-view').should('exist')
    cy.get('.button-page-view').should('have.class', 'dlc')
    cy.get('.button-wrapper').should('have.length', 2)
    cy.get('.button-wrapper').first().should('have.class', 'active')
    cy.get('.button-wrapper')
      .first()
      .should('have.attr', 'aria-pressed', 'true')
    cy.get('.button-wrapper').last().should('not.have.class', 'active')
    cy.get('.button-wrapper')
      .last()
      .should('have.attr', 'aria-pressed', 'false')
  })

  it('NoTheme story: renders with list view active and no theme class', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button-page-view--no-theme&viewMode=story'
    )
    cy.get('.button-page-view').should('exist')
    cy.get('.button-page-view').should('not.have.class', 'dlc')
    cy.get('.button-wrapper').first().should('have.class', 'active')
    cy.get('.button-wrapper').last().should('not.have.class', 'active')
  })

  it('MockedViewToggle story: renders with gallery view active', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button-page-view--mocked-view-toggle&viewMode=story'
    )
    cy.get('.button-page-view').should('exist')
    cy.get('.button-page-view').should('have.class', 'dlc')
    cy.get('.button-wrapper').last().should('have.class', 'active')
    cy.get('.button-wrapper')
      .last()
      .should('have.attr', 'aria-pressed', 'true')
    cy.get('.button-wrapper').first().should('not.have.class', 'active')
    cy.get('.button-wrapper')
      .first()
      .should('have.attr', 'aria-pressed', 'false')
  })

  it('Accessibility: ARIA labels and roles', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button-page-view--default&viewMode=story'
    )
    cy.get('.button-wrapper')
      .first()
      .should('have.attr', 'aria-label', 'List view')
    cy.get('.button-wrapper')
      .last()
      .should('have.attr', 'aria-label', 'Card view')
  })

  it('Button types are set correctly', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button-page-view--default&viewMode=story'
    )
    cy.get('.button-wrapper').each(($button) => {
      cy.wrap($button).should('have.attr', 'type', 'button')
    })
  })

  it('Icons are rendered correctly', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-button-page-view--default&viewMode=story'
    )
    cy.get('.button-wrapper').first().find('.icon').should('exist')
    cy.get('.button-wrapper').last().find('.icon').should('exist')
  })
})
