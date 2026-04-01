describe('DLViewer', () => {
  it('renders the component', () => {
    cy.visit('/iframe.html?id=funkhaus-dlviewer--still-image')
    cy.get('.dl-viewer').should('exist')
  })
})
