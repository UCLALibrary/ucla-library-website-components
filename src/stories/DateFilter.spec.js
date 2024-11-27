import DateFilter from "@/lib-components/DateFilter.vue";
import { describe } from "node:test"

describe('DateFilter', () => {

  describe('Default', () => {
    before(() => {
      cy.visit('/iframe.html?id=datefilter--default')
      const spy = cy.spy()
      mount(DateFilter, {
        listeners: {
          'input-selected': spy
        }
      })
    });

    it('loads DateFilter component', () => {
      cy.get('.date-filter').should('exist')

      cy.percySnapshot('Date Filter: Default')
    })

    it('emits input-selected event on clear & done clicks', () => {
      cy.get('.clear-button').click()
      cy.get('.done-button').click()
      // expect(spy).to.be.calledOnce
      // expect(spy).to.be.calledWith(payload)
      // check emit was sent with formattedDateSelection computed method value twice
      
    })

    it('does not emit input-selected event on date selection change', () => {
      // change date selection a few times
      cy.get('.date-picker').click()
      cy.get('.date-option').first().click()
      cy.get('.date-option').last().click()
      // check no emit was sent
    })
  })
})

/*
const spy = cy.spy()
mount(HelloWorld, {
  listeners: {
    'the-event': spy
  }
})

.then(() => {
  expect(spy).to.be.calledOnce
})
  */