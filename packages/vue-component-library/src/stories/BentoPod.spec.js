describe('BentoPod', () => {
  it('renders Default story correctly', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bentopod--default&args=&viewMode=story'
    )
    cy.get('.bento-pod').should('exist')
  })
})
