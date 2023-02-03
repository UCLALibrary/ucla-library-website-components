describe("FLEXIBLE / Media Gallery", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-media-gallery--default&args=&viewMode=story"
        )
        cy.get(".media-gallery").should("exist")

        cy.get(".banner-image").click()

        cy.contains(".thumbnail-card", "Pine needles")
            .should("contain", "View catalog record")
            .and("not.contain", "photo by someone")
            .click()
        cy.get(".caption-block")
            .should("contain", "View catalog record")
            .and("contain", "photo by someone")
        cy.get(".button-close").click()

        cy.contains(".thumbnail-card", "Edison Studios in credit field").should(
            "be.visible"
        )

        cy.contains("Embedded Video").click()
        cy.get(".button-close").click()
        cy.get(".banner-image").click()
    })
})
