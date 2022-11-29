describe("BLOCK / BlockSearchFilter", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-search-filter--default&args=&viewMode=story"
        )
        cy.get(".block-search-filter").should("exist")

        cy.percySnapshot("BLOCK / Block Search Filter: Default")
    })
})
