describe('BUTTON / PageView', () => {
  it('renders both toggle buttons', () => {
    cy.visit('/iframe.html?id=button-page-view--default&args=&viewMode=story')
    cy.get('.button-page-view').should('have.length', 2)
  })

  it('toggles active state on click', () => {
    cy.visit('/iframe.html?id=button-page-view--default&args=&viewMode=story')
    cy.get('.button-page-view').first().should('have.class', 'active')
    cy.get('.button-page-view').last().click().should('have.class', 'active')
    cy.get('.button-page-view').first().should('not.have.class', 'active')
  })

  it('matches visual snapshot', () => {
    cy.visit('/iframe.html?id=button-page-view--default&args=&viewMode=story')
    cy.percySnapshot('BUTTON / PageView: Default')
  })
})
 