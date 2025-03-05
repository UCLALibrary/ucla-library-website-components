describe('SEARCH / Dropdown /BaseRadioGroup', () => {
  it('Default', () => {
    cy.visit(
      '/iframe.html?id=search-dropdown-baseradiogroup--default&args=&viewMode=story'
    )
    cy.get('.base-radio-group').should('exist')

    cy.percySnapshot('SEARCH / Dropdown /BaseRadioGroup: Default')
  })
})
