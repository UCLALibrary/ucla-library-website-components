describe("SEARCH / Block Remove Search Filter", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=search-block-remove-search-filter--default&args=&viewMode=story"
        )
        cy.get(".block-remove-search-filter").should("exist")

        cy.percySnapshot("SEARCH / Block Remove Search Filter: Default")
    })
})
