describe("SEARCH / SingleCheckbox", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=single-checkbox--default&args=&viewMode=story"
        )
        cy.get(".single-checkbox").should("exist")

        cy.percySnapshot("SEARCH / SingleCheckbox: Default")
    })
})
