describe("SEARCH / Search Result", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=ssearch-search-result--default&viewMode=story#"
        )
        cy.get(".search-result-item").should("exist")

        cy.percySnapshot("SEARCH / Search Result: Default")
    })
})
