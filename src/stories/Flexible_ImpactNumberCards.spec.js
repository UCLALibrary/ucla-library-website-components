describe("FLEXIBLE / Impact Number Cards", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-impact-number-cards--default&args=&viewMode=story"
        )
        cy.get(".impact-number-cards").should("exist")

        cy.percySnapshot("FLEXIBLE / Impact Number Cards: Default")
    })
})
