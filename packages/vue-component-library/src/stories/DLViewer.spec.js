describe('DLViewer', () => {
  it('renders the component', () => {
    cy.visit('/iframe.html?id=dlviewer-media-types--still-image')
    cy.get('.dl-viewer').should('exist')
  })
})
