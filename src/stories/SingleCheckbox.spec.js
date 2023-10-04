describe("SEARCH / SingleCheckbox", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=search-singlecheckbox--default&args=&viewMode=story"
        )
        cy.get(".single-checkbox").should("exist")

        cy.percySnapshot("SEARCH / SingleCheckbox: Default")
    })
})
