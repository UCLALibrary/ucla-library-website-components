describe('GridBentoPod', () => {
  it('renders Default story correctly', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-gridbentopod--default&args=&viewMode=story'
    )
    cy.get('.grid-bento-pod').should('exist')
  })
})
