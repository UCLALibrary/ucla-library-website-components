import DateFilter from "@/lib-components/DateFilter.vue";

describe('DateFilter', () => {

  it('Default', () => {
    cy.visit('/iframe.html?id=datefilter--default')
    cy.get('.date-filter').should('exist')

    cy.percySnapshot('Date Filter: Default')
  })
})