describe('FTVA add to calendar button', () => {
  const atcb = () => cy.get('add-to-calendar-button').should('have.length', 1)
  const trigger = () => atcb().shadow().find('[part="atcb-button"]')

  beforeEach(() => {
    cy.visit('/iframe.html?id=button-dropdown--ftva-add-to-calendar')
  })

  it('does not add styles when the trigger is toggled by mouse or keyboard', () => {
    atcb().then(($atcb) => {
      cy.wrap($atcb[0].shadowRoot.querySelectorAll('style').length).as('initialStyleCount')
    })

    trigger().click().should('have.attr', 'aria-expanded', 'true')
    trigger().click().should('have.attr', 'aria-expanded', 'false')
    trigger().focus().type('{enter}').should('have.attr', 'aria-expanded', 'true')
    trigger().type('{enter}').should('have.attr', 'aria-expanded', 'false')

    atcb().then(($atcb) => {
      cy.get('@initialStyleCount').then((initialStyleCount) => {
        expect($atcb[0].shadowRoot.querySelectorAll('style')).to.have.length(initialStyleCount)
      })
    })
  })

  it('uses native v3 dropdown styling without UCLA compatibility hooks', () => {
    cy.readFile('src/lib-components/ButtonDropdown.vue')
      .should('not.contain', 'customCss')
      .and('not.contain', 'handleActbExpandedStyle')
      .and('not.contain', 'shadowRoot')
      .and('not.contain', 'appendChild')

    cy.readFile('src/styles/ftva/_button-dropdown.scss')
      .should('not.contain', 'atcb-button-text)::after')
      .and('not.contain', 'icon-ftva-drop-triangle')
  })
})
