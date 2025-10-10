describe('BentoPod', () => {
  it('renders Default story correctly', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bentopod--default&args=&viewMode=story'
    )
    cy.get('.bento-pod').should('exist')
    cy.contains('h4.title', 'Bento Pod Title').should('exist')
    cy.contains(
      '.description',
      'This is a description for the Bento Pod.'
    ).should('exist')
    cy.contains('.pod-button', 'Go to Link').should('exist')
    cy.get('.item').should('have.length.at.least', 3)
    cy.contains('.item-title', 'Item 1').should('exist')
    cy.contains('.item-title', 'Item 2').should('exist')
    cy.contains('.item-title', 'Item 3').should('exist')
    cy.contains('.item-title', 'Item 4').should('exist')
    cy.contains('.item-title', 'Item 5').should('exist')
    cy.percySnapshot('BentoPod: Default')
  })

  it('shows custom labels', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bentopod--custom-labels&args=&viewMode=story'
    )
    cy.get('.btn').should('exist')
    cy.contains('.label', 'Expand').should('exist')
    cy.get('.btn').click()
    cy.contains('.label', 'Collapse').should('exist')
  })

  it('renders with no items', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bentopod--no-items&args=&viewMode=story'
    )
    cy.get('.item').should('not.exist')
  })

  it('renders real content', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bentopod--real-content&args=&viewMode=story'
    )
    cy.get('.bento-pod').should('exist')
    cy.contains('h4.title', 'UCLA Library Special Collections').should(
      'exist'
    )
    cy.contains(
      '.description',
      'Explore a curated selection of rare books'
    ).should('exist')
    cy.get('.item').should('have.length.at.least', 6)
    cy.contains(
      '.item-title',
      'Los Angeles Times Photographic Archive'
    ).should('exist')
    cy.contains('.item-title', 'Charles E. Young Research Library').should(
      'exist'
    )
    cy.contains('.item-title', 'Oral History Collection').should('exist')
    cy.contains('.item-title', 'Medieval Manuscripts').should('exist')
    cy.contains('.item-title', 'LGBTQIA+ Activism Papers').should('exist')
    cy.contains(
      '.item-title',
      'Japanese American Incarceration Materials'
    ).should('exist')
    cy.percySnapshot('BentoPod: Real Content')
  })
})
