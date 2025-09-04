describe('YearRangeFilter', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--default')
    })

    it('renders the component', () => {
      cy.get('.year-range-filter').should('exist')
      cy.percySnapshot('YearRangeFilter: Default')
    })

    it('displays the correct initial values', () => {
      cy.get('.range-input--min').should('have.value', '20')
      cy.get('.range-input--max').should('have.value', '80')
    })

    it('has the correct min and max attributes on inputs', () => {
      cy.get('.range-input--min').should('have.attr', 'min', '0')
      cy.get('.range-input--min').should('have.attr', 'max', '100')
      cy.get('.range-input--max').should('have.attr', 'min', '0')
      cy.get('.range-input--max').should('have.attr', 'max', '100')
    })

    it('has the correct step attribute on inputs', () => {
      cy.get('.range-input--min').should('have.attr', 'step', '1')
      cy.get('.range-input--max').should('have.attr', 'step', '1')
    })

    it('has the correct range slider values', () => {
      cy.get('.range-slider--min').should('have.value', '20')
      cy.get('.range-slider--max').should('have.value', '80')
    })

    it('has the correct range slider min and max attributes', () => {
      cy.get('.range-slider--min').should('have.attr', 'min', '0')
      cy.get('.range-slider--min').should('have.attr', 'max', '100')
      cy.get('.range-slider--max').should('have.attr', 'min', '0')
      cy.get('.range-slider--max').should('have.attr', 'max', '100')
    })

    it('has the correct step attribute on sliders', () => {
      cy.get('.range-slider--min').should('have.attr', 'step', '1')
      cy.get('.range-slider--max').should('have.attr', 'step', '1')
    })

    it('has a limit button', () => {
      cy.get('.limit-button').should('exist')
      cy.get('.limit-button').should('contain', 'Limit')
    })

    it('has a range separator', () => {
      cy.get('.range-separator').should('exist')
    })
  })

  describe('YearRange', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--year-range')
    })

    it('renders the component', () => {
      cy.get('.year-range-filter').should('exist')
      cy.percySnapshot('YearRangeFilter: YearRange')
    })

    it('displays the correct year range values', () => {
      cy.get('.range-input--min').should('have.value', '1950')
      cy.get('.range-input--max').should('have.value', '2000')
    })

    it('has the correct year range attributes', () => {
      cy.get('.range-input--min').should('have.attr', 'min', '1900')
      cy.get('.range-input--min').should('have.attr', 'max', '2024')
      cy.get('.range-input--max').should('have.attr', 'min', '1900')
      cy.get('.range-input--max').should('have.attr', 'max', '2024')
    })
  })

  describe('Disabled', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--disabled')
    })

    it('renders the component', () => {
      cy.get('.year-range-filter').should('exist')
      cy.percySnapshot('YearRangeFilter: Disabled')
    })

    it('has disabled inputs', () => {
      cy.get('.range-input--min').should('be.disabled')
      cy.get('.range-input--max').should('be.disabled')
    })

    it('has disabled sliders', () => {
      cy.get('.range-slider--min').should('be.disabled')
      cy.get('.range-slider--max').should('be.disabled')
    })

    it('has disabled limit button', () => {
      cy.get('.limit-button').should('be.disabled')
    })
  })

  describe('SmallRange', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--small-range')
    })

    it('renders the component', () => {
      cy.get('.year-range-filter').should('exist')
      cy.percySnapshot('YearRangeFilter: SmallRange')
    })

    it('displays the correct small range values', () => {
      cy.get('.range-input--min').should('have.value', '3')
      cy.get('.range-input--max').should('have.value', '7')
    })

    it('has the correct step size for small range', () => {
      cy.get('.range-input--min').should('have.attr', 'step', '0.5')
      cy.get('.range-input--max').should('have.attr', 'step', '0.5')
      cy.get('.range-slider--min').should('have.attr', 'step', '0.5')
      cy.get('.range-slider--max').should('have.attr', 'step', '0.5')
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--default')
    })

    it('has proper focus states', () => {
      cy.get('.range-input--min').focus()
      cy.get('.range-input--min').should('have.focus')

      cy.get('.range-input--max').focus()
      cy.get('.range-input--max').should('have.focus')

      cy.get('.limit-button').focus()
      cy.get('.limit-button').should('have.focus')
    })

    it('has proper disabled states', () => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--disabled')

      cy.get('.range-input--min').should('have.attr', 'disabled')
      cy.get('.range-input--max').should('have.attr', 'disabled')
      cy.get('.range-slider--min').should('have.attr', 'disabled')
      cy.get('.range-slider--max').should('have.attr', 'disabled')
      cy.get('.limit-button').should('have.attr', 'disabled')
    })

    it('has proper number input attributes', () => {
      cy.get('.range-input--min').should('have.attr', 'type', 'number')
      cy.get('.range-input--max').should('have.attr', 'type', 'number')
    })

    it('has proper range input attributes', () => {
      cy.get('.range-slider--min').should('have.attr', 'type', 'range')
      cy.get('.range-slider--max').should('have.attr', 'type', 'range')
    })
  })

  describe('Visual Elements', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=funkhaus-yearrangefilter--default')
    })

    it('has a range track with proper styling', () => {
      cy.get('.range-track').should('exist')
      cy.get('.range-track').should('be.visible')
    })

    it('has range slider container', () => {
      cy.get('.range-slider-container').should('exist')
      cy.get('.range-slider-container').should('be.visible')
    })

    it('has range inputs container', () => {
      cy.get('.range-inputs').should('exist')
      cy.get('.range-inputs').should('be.visible')
    })

    it('has proper button styling', () => {
      cy.get('.limit-button').should('be.visible')
      cy.get('.limit-button').should('have.css', 'border-radius', '30px')
    })
  })
})
