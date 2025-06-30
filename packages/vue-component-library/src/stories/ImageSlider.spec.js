describe('ImageSlider', () => {
  it('Default', () => {
    cy.visit('/iframe.html?id=image-slider--default&args=&viewMode=story')
    cy.get('.image-slider').should('exist')

    cy.percySnapshot('ImageSlider: Default')
  })
})
