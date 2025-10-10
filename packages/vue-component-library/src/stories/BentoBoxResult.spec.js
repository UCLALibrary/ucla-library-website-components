describe('BentoBoxResult Storybook', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--default&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('Default Results')
  })

  it('No Items', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--no-items&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('No Results')
  })

  it('One Item', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--one-item&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('One Result')
  })

  it('Long Text', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--long-text&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('Long Text Result')
  })

  it('Missing Image', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--missing-image&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('Missing Image')
  })

  it('Missing Count', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--missing-count&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('Missing Count')
  })

  it('All Edge Cases', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--all-edge-cases&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('All Edge Cases')
  })
})
