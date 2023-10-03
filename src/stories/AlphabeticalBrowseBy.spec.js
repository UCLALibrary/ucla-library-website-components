describe("GENERAL / AlphabeticalBrowseBy", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=search-alphabeticalbrowseby--default&args=&viewMode=story"
        )
        cy.get(".alphabetical-browse-by").should("exist")

        cy.percySnapshot("GENERAL / AlphabeticalBrowseBy: Default")
    })
})
