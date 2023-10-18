describe("NAV / Primary", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=nav-primary--default&args=&viewMode=story")
        cy.get(".nav-primary").should("exist")

        cy.percySnapshot("NAV / Primary: Default")
    })

    it("Microsite", () => {
        cy.visit(
            "/iframe.html?id=nav-primary--with-microsite-title&args=&viewMode=story"
        )
        cy.get(".nav-primary").should("exist")
        cy.contains("a", "Browse Collections").should(
            "have.attr",
            "target",
            "_blank"
        )
    })
})