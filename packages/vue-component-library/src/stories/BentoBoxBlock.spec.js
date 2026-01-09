describe('BentoBoxBlock Storybook', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-bento-box-block--default&viewMode=story')
    cy.get('.bento-box-block').should('exist')

    cy.percySnapshot('FUNKHAUS / Bento Box Block: Default')
  })
})
