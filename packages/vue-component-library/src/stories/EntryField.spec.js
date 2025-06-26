describe("Funkhaus / EntryField", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=entry-field--default&args=&viewMode=story")
        cy.get(".entry-field").should("exist")
        cy.percySnapshot("Funkhaus / EntryField")
    })
})
