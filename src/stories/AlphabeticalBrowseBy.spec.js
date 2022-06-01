describe("GENERAL / AlphabeticalBrowseBy", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=alphabetical-browse-by--default&args=&viewMode=story"
        )
        cy.get(".alphabetical-browse-by").should("exist")

        cy.percySnapshot("GENERAL / AlphabeticalBrowseBy: Default")
    })
})
