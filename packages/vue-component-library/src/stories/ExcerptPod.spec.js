describe('Funkhaus / ExcerptPod', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-excerptpod--default&args=&viewMode=story'
    )
    cy.get('.excerpt-pod').should('exist')
    cy.percySnapshot('Funkhaus / ExcerptPod: Default')
  })
})
