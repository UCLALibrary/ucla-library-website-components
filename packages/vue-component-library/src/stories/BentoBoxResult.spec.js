describe('BentoBoxResult Storybook', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-result--default&viewMode=story')
    cy.get('.bento-box-result').should('exist')
    cy.contains('Default Results')
  })
})
