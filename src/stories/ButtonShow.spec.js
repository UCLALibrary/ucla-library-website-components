describe("BUTTON / Show", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=button-show--default&args=&viewMode=story")
        cy.get(".button-show").should("exist")
    })
})
