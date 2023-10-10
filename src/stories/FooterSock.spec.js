describe("FOOTER / Sock", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=footer-sock--default&args=&viewMode=story")
        cy.get(".footer-sock").should("exist")

        // Opens local link in same tag
        cy.contains("a", "EEEmergency").should(
            "not.have.attr",
            "target",
            "_blank"
        )
        // Opens external link in same tag
        cy.contains("a", "AAAccessibility").should(
            "have.attr",
            "target",
            "_blank"
        )
        // Explicitly set to open in same tab
        cy.contains("a", "PPPrivacy & Terms of Use").should(
            "not.have.attr",
            "target",
            "_blank"
        )
        // Explicitly set to open in new tab
        cy.contains("a", "CCCreative Commons Attribution 4.0").should(
            "have.attr",
            "target",
            "_blank"
        )

        cy.percySnapshot("FOOTER / Sock: Default")
    })
})