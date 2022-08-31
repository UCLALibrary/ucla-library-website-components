describe("BLOCK / Card With Illustration", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-card-with-illustration--default&args=&viewMode=story"
        )
        cy.get(".block-card-with-illustration ").should("exist")

        // Opens local link in same tag
        cy.contains("a.smart-link", "Quisque Volutpat").should("have.attr", "target", "")

        cy.percySnapshot("BLOCK / Card With Illustration: Default")
    })

    it("Opens external links in a new tab", () => {
        cy.visit("/iframe.html?id=block-card-with-illustration--external-link&args=&viewMode=story")
        cy.contains("a.smart-link", "Quisque Volutpat").should("have.attr", "target", "_blank")
    })
})
