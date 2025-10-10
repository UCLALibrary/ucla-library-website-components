describe('BentoBoxBlock Storybook', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--default&viewMode=story')
    cy.get('.bento-box-block').should('exist')
    cy.contains('Default Bento Block')
  })

  it('No Image', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--no-image&viewMode=story')
    cy.get('.bento-box-block').should('exist')
    cy.contains('No Image Bento Block')
  })

  it('Long Text', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--long-text&viewMode=story')
    cy.get('.bento-box-block').should('exist')
    cy.contains('Bento Block With Very Long Title')
  })

  it('No Title', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--no-title&viewMode=story')
    cy.get('.bento-box-block').should('exist')
    cy.contains('Bento block with no title.')
  })

  it('No Summary', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--no-summary&viewMode=story')
    cy.get('.bento-box-block').should('exist')
    cy.contains('No Summary Bento Block')
  })

  it('No Link', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--no-link&viewMode=story')
    cy.get('.bento-box-block').should('exist')
    cy.contains('No Link Bento Block')
  })
})
