describe("Page Anchor", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=page-anchor--default&args=&viewMode=story")
        cy.get(".page-anchor").should("exist")

        cy.percySnapshot("Page Anchor: Default")
    })
})
