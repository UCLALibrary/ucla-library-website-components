describe("NAV / Secondary", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=nav-secondary--default&args=&viewMode=story")
        cy.get(".nav-secondary").should("exist")

        // Opens local link in same tag
        cy.contains("a", "Locations & Hours").should(
            "not.have.attr",
            "target",
            "_blank"
        )
        // Opens external link in same tag
        cy.contains("a", "Ask a Librarian").should(
            "have.attr",
            "target",
            "_blank"
        )
        // Explicitly set to open in same tab
        cy.contains("a", "Support Us").should(
            "not.have.attr",
            "target",
            "_blank"
        )
        // Explicitly set to open in new tab
        cy.contains("a", "My Account").should("have.attr", "target", "_blank")

        cy.percySnapshot("NAV / Secondary: Default")
    })
})