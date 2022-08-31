describe("BannerHeader", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=banner-header--default&args=&viewMode=story")
        cy.get(".banner-header").should("exist")

        // Opens local link in same tag
        cy.contains("a.smart-link", "Cursus Quis").should("have.attr", "target", "")

        cy.percySnapshot("Banner Header: Default")
    })

    it("Opens external links in a new tab", () => {
        cy.visit("/iframe.html?id=banner-header--external-link&args=&viewMode=story")
        cy.contains("a.smart-link", "Cursus Quis").should("have.attr", "target", "_blank")
    })
})
