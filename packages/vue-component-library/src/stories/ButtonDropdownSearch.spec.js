describe("Button Dropdown Search", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=funkhaus-buttondropdownsearch--&viewMode=story"
        )

        cy.get(".button-dropdown-search").should("exist")

        cy.percySnapshot("Button Dropdown Search: Default")
    })

    it("Opens dropdown and shows options", () => {
        cy.visit(
            "/iframe.html?id=funkhaus-buttondropdownsearch--&viewMode=story"
        )
        cy.get(".dropdown-field").first().click()
        cy.get(".dropdown-options").should("be.visible")
        cy.get(".dropdown-option").should("have.length.at.least", 2)
        cy.percySnapshot("Button Dropdown Search: Dropdown Open")
    })

    it("Selects an option", () => {
        cy.visit(
            "/iframe.html?id=funkhaus-buttondropdownsearch--&viewMode=story"
        )
        cy.get(".dropdown-field").first().click()
        cy.get(".dropdown-option").first().click()
        cy.get(".selected-option").should("exist")
        cy.percySnapshot("Button Dropdown Search: Option Selected")
    })
})
