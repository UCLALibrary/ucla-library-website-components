describe("Funkhaus / Block Buttons", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=block-buttons--default&args=&viewMode=story")
        cy.get(".block-buttons").should("exist")

        cy.percySnapshot("Funkhaus / Block Buttons")
    })
})
