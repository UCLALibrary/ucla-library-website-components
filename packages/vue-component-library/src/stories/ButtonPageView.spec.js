describe('Funkhaus / Button Page View', () => {
  it('Default - renders with list view active', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')
    cy.get('.button-page-view').should('exist')
    cy.get('.button-wrapper').should('have.length', 2)

    // List view button should be active by default
    cy.get('.button-wrapper').first().should('have.class', 'active')
    cy.get('.button-wrapper').first().should('have.attr', 'aria-pressed', 'true')

    // Grid view button should not be active
    cy.get('.button-wrapper').last().should('not.have.class', 'active')
    cy.get('.button-wrapper').last().should('have.attr', 'aria-pressed', 'false')

    cy.percySnapshot('BUTTON / Page View: Default')
  })

  it('Grid view active - renders with grid view active', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--grid-active&args=&viewMode=story')
    cy.get('.button-page-view').should('exist')

    // Grid view button should be active
    cy.get('.button-wrapper').last().should('have.class', 'active')
    cy.get('.button-wrapper').last().should('have.attr', 'aria-pressed', 'true')

    // List view button should not be active
    cy.get('.button-wrapper').first().should('not.have.class', 'active')
    cy.get('.button-wrapper').first().should('have.attr', 'aria-pressed', 'false')

    cy.percySnapshot('BUTTON / Page View: Grid Active')
  })

  it('No theme - renders without theme class', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--no-theme&args=&viewMode=story')
    cy.get('.button-page-view').should('exist')
    cy.get('.button-page-view').should('not.have.class', 'dlc')

    cy.percySnapshot('BUTTON / Page View: No Theme')
  })

  it('DLC theme - renders with dlc theme class', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')
    cy.get('.button-page-view').should('have.class', 'dlc')
  })

  it('List view button functionality', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--grid-active&args=&viewMode=story')

    // Start with grid view active
    cy.get('.button-wrapper').last().should('have.class', 'active')

    // Click list view button
    cy.get('.button-wrapper').first().click()

    // List view should now be active
    cy.get('.button-wrapper').first().should('have.class', 'active')
    cy.get('.button-wrapper').first().should('have.attr', 'aria-pressed', 'true')

    // Grid view should no longer be active
    cy.get('.button-wrapper').last().should('not.have.class', 'active')
    cy.get('.button-wrapper').last().should('have.attr', 'aria-pressed', 'false')
  })

  it('Grid view button functionality', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')

    // Start with list view active
    cy.get('.button-wrapper').first().should('have.class', 'active')

    // Click grid view button
    cy.get('.button-wrapper').last().click()

    // Grid view should now be active
    cy.get('.button-wrapper').last().should('have.class', 'active')
    cy.get('.button-wrapper').last().should('have.attr', 'aria-pressed', 'true')

    // List view should no longer be active
    cy.get('.button-wrapper').first().should('not.have.class', 'active')
    cy.get('.button-wrapper').first().should('have.attr', 'aria-pressed', 'false')
  })

  it('Accessibility - proper ARIA labels and roles', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')

    // List view button
    cy.get('.button-wrapper').first().should('have.attr', 'aria-label', 'List view')
    cy.get('.button-wrapper').first().should('have.attr', 'aria-pressed')

    // Grid view button
    cy.get('.button-wrapper').last().should('have.attr', 'aria-label', 'Grid view')
    cy.get('.button-wrapper').last().should('have.attr', 'aria-pressed')
  })

  it('Button types are set correctly', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')

    cy.get('.button-wrapper').each(($button) => {
      cy.wrap($button).should('have.attr', 'type', 'button')
    })
  })

  it('Icons are rendered correctly', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')

    // Check that SVG icons are present
    cy.get('.button-wrapper').first().find('.icon').should('exist')
    cy.get('.button-wrapper').last().find('.icon').should('exist')
  })

  it('No unnecessary updates when clicking active view', () => {
    cy.visit('/iframe.html?id=funkhaus-button-page-view--default&args=&viewMode=story')

    // List view is already active
    cy.get('.button-wrapper').first().should('have.class', 'active')

    // Click list view button again (should not change state)
    cy.get('.button-wrapper').first().click()

    // List view should still be active
    cy.get('.button-wrapper').first().should('have.class', 'active')
    cy.get('.button-wrapper').first().should('have.attr', 'aria-pressed', 'true')
  })
})
