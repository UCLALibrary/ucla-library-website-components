describe("FLEXIBLE / Grid Gallery Cards", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-grid-gallery-cards--default&args=&viewMode=story"
        )
        cy.get(".grid-gallery-cards").should("exist")

        cy.percySnapshot("FLEXIBLE / Grid Gallery Cards: Default")
    })
})
