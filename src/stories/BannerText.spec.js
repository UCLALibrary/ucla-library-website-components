describe("BannerText", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=banner-text--default&args=&viewMode=story")
        cy.get(".banner-text").should("exist")

        // Opens local link in same tag
        cy.contains("a.smart-link", "Curabitur").should(
            "not.have.attr",
            "target",
            "_blank"
        )

        cy.percySnapshot("Banner Text: Default")
    })

    it("Opens external links in a new tab", () => {
        cy.visit(
            "/iframe.html?id=banner-text--external-link&args=&viewMode=story"
        )
        cy.contains("a.smart-link", "Curabitur").should(
            "have.attr",
            "target",
            "_blank"
        )
    })
})
