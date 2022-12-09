describe("FLEXIBLE / Form", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=flexible-form--default&args=&viewMode=story")
        cy.get(".form", { timeout: 10000 }).should("exist")

        cy.percySnapshot("FLEXIBLE / Form: Default")
    })
})
