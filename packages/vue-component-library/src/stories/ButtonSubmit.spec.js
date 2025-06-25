describe('FUNKHAUS / ButtonSubmit', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=button-submit--default&args=&viewMode=story')
    cy.get('.button-submit').should('exist')

    cy.percySnapshot('BUTTON / Submit: Default')
  })
})
