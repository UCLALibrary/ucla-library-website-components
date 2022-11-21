describe("SECTION / SectionSearchFilter", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=section-search-filter--default&args=&viewMode=story"
        )
        cy.get(".section-search-filter").should("exist")

        cy.percySnapshot("SECTION / Section Search Filter: Default")
    })
})
