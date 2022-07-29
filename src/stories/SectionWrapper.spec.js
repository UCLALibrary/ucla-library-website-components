describe("SectionWrapper", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=section-wrapper--default&args=&viewMode=story"
        )
        cy.get(".section-wrapper").should("exist")
        cy.get("h2.section-title").should("contain", "Whatever content.")
        cy.get(".section-summary").should("contain", "Lorem ipsum dolor")
        cy.get(".media-with-text")
            .should("exist")
            .and("contain", "A media Link")
        cy.get(".section-wrapper").should(
            "have.css",
            "background-color",
            "rgb(255, 255, 255)"
        )

        cy.percySnapshot("SectionWrapper: Default")
    })

    it("No Meta", () => {
        cy.visit(
            "/iframe.html?id=section-wrapper--no-meta&args=&viewMode=story"
        )
        cy.get(".section-wrapper").should("exist")
        cy.get("h2.section-title").should("not.exist")
        cy.get(".section-summary").should("not.exist")
        cy.get(".media-with-text")
            .should("exist")
            .and("contain", "A media Link")
    })

    it("Gray Theme", () => {
        cy.visit(
            "/iframe.html?id=section-wrapper--gray-theme&args=&viewMode=story"
        )
        cy.get(".section-wrapper").should(
            "have.css",
            "background-color",
            "rgb(242, 242, 242)"
        )

        cy.percySnapshot("SectionWrapper: Gray Theme")
    })
})
