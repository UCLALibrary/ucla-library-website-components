describe('GLOBAL / SiteNotificationBanner', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=global-site-notification-banner--default&args=&viewMode=story'
    )

    cy.get('.site-notification-banner').should('exist')

    cy.percySnapshot('GLOBAL / SiteNotificationBanner: Default')
  })
})
