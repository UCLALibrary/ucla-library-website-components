describe('DateFilter', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=datefilter--default')
    })

    it('renders the component', () => {
      cy.get('.date-filter').should('exist')
      cy.percySnapshot('Date Filter: Default')
    })

    it('emits new selected date on done click and not before', () => {
      // check contents of data-test:selected-date before
      cy.get('[data-test=selected-date]').should('contain', '')

      // open date picker & select date
      cy.get('input.dp__input').click()
      cy.get('.dp__calendar_item').eq(5).click()
      cy.get('.dp__calendar_item').eq(7).click()

      // check that contents havent changed yet
      cy.get('[data-test=selected-date]').should('contain', '')
      // click done button
      cy.get('.select-button').click()

      // check contents of data-test:selected-date after
      cy.get('[data-test=selected-date]').contains('{ "startDate":')
    })
  })
})
