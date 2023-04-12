describe("Page Anchor", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=pull-quote--default&args=&viewMode=story")
        cy.get(".pull-quote").should("exist")

        cy.percySnapshot("Page Anchor: Default")
    })
})
