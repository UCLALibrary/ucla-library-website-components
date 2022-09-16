describe("BLOCK / SocialShare", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=social-share--default&args=&viewMode=story")
        cy.get(".social-share").should("exist")

        cy.percySnapshot("BLOCK / SocialShare: Default")
    })
})
