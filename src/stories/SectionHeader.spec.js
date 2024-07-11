describe('SectionHeader', () => {
  it('defaults to <h1>', () => {
    cy.visit('/iframe.html?id=section-header--default&args=&viewMode=story')
      .get('h1.section-header')
      .should('exist')
      .and('have.class', 'section-header1')
  })

  it('can be set to <h4>', () => {
    cy.visit(
      '/iframe.html?id=section-header--default&args=level:4&viewMode=story'
    )
      .get('h4.section-header')
      .should('exist')
      .and('have.class', 'section-header4')
  })

  it('uses <h6> for level 7 and higher', () => {
    cy.visit(
      '/iframe.html?id=section-header--default&args=level:7&viewMode=story'
    )
      .get('h6.section-header')
      .should('exist')
      .and('have.class', 'section-header7')
  })

  it('uses header levels from enclosing <SectionWrapper>s', () => {
    cy.visit('/iframe.html?id=section-header--default&args=&viewMode=story')
      .get('.section-header')
      .each((element, index) => {
        cy.wrap(element).should(
          'have.class',
                    `section-header${index + 1}`
        )
      })
  })
})
