describe('Funkhaus / Bento Filter Menu', () => {
  it('Default story: renders with theme and all filter items', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bento-filter-menu--default&viewMode=story'
    )
    cy.get('.bento-filter-menu').should('exist')
    cy.get('.bento-filter-menu').should('have.class', 'dlc')
    cy.get('.bento-filter-menu-item').should('have.length', 7)
    cy.get('.bento-filter-menu-link').should('have.length', 7)

    // Check specific items
    cy.get('.bento-filter-menu-link').first().should('contain.text', 'Everything')
    cy.get('.bento-filter-menu-link').eq(1).should('contain.text', 'Images')
    cy.get('.bento-filter-menu-link').eq(2).should('contain.text', 'Videos')
    cy.get('.bento-filter-menu-link').eq(3).should('contain.text', 'Manuscripts')
    cy.get('.bento-filter-menu-link').eq(4).should('contain.text', 'Books')
    cy.get('.bento-filter-menu-link').eq(5).should('contain.text', 'Audio')
    cy.get('.bento-filter-menu-link').last().should('contain.text', '3D Art')
  })

  it('NoTheme story: renders without theme class', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bento-filter-menu--no-theme&viewMode=story'
    )
    cy.get('.bento-filter-menu').should('exist')
    cy.get('.bento-filter-menu').should('not.have.class', 'dlc')
    cy.get('.bento-filter-menu-item').should('have.length', 7)
    cy.get('.bento-filter-menu-link').should('have.length', 7)
  })

  it('Component structure: proper list and list item elements', () => {
    cy.visit(
      '/iframe.html?id=funkhaus-bento-filter-menu--default&viewMode=story'
    )
    cy.get('.bento-filter-menu').should('be.visible')
    cy.get('.bento-filter-menu').should('have.prop', 'tagName', 'UL')
    cy.get('.bento-filter-menu-item').should('have.prop', 'tagName', 'LI')
    cy.get('.bento-filter-menu-link').should('be.visible')
  })
})
