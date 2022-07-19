describe("Impact Numbers Carousel", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=impact-numbers-carousel--default&args=&viewMode=story"
        )
        cy.get(".impact-numbers-carousel").should("exist")

        cy.percySnapshot("Impact Numbers Carousel: Default")
    })
})
