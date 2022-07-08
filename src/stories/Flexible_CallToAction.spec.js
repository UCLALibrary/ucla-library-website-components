describe("FLEXIBLE / Call To Action", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-call-to-action--default&args=&viewMode=story"
        )
        cy.get(".cta-block-content-width").should("exist")

        cy.percySnapshot("FLEXIBLE / Call To Action: Default")
    })
})
