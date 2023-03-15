describe("BlockFloatingHighlight", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-floating-highlight-default&args=&viewMode=story"
        )
        cy.get(".block-floating-highlight").should("exist")

        cy.percySnapshot("BLOCK / Floating Highlight: Default")
    })
})
