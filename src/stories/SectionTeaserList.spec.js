describe("SECTION / Teaser / List", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=section-teaser-list--default&args=&viewMode=story"
        )
        cy.get(".section-teaser-list").should("exist")

        cy.percySnapshot("SECTION / Teaser / List: Default")
    })

    it("Expandable", () => {
        cy.visit(
            "/iframe.html?id=section-teaser-list--expandable&args=&viewMode=story"
        )
        cy.get(".section-teaser-list").should("exist")
        cy.contains("At varius vel pharetra vel turpis").should(
            "not.be.visible"
        )
        cy.get(".button-toggle").should("be.visible").click()
        cy.contains("At varius vel pharetra vel turpis").should("be.visible")
    })
})
