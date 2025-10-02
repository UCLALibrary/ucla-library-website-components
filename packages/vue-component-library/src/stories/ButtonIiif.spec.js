describe('BUTTON / IIIF', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=funkhaus-buttoniiif--default&args=&viewMode=story')
    cy.get('.button-iiif').should('exist')
    cy.percySnapshot('BUTTON / IIIF: Default')
  })
})
