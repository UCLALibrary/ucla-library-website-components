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

    describe("Nested Sections", () => {
        before(function () {
            cy.visit(
                "/iframe.html?id=section-wrapper--nested&args=&viewMode=story"
            )
        })

        it("has level 2", () => {
            cy.contains("h2.section-header", "level 2")
                .should("be.visible")
                .and("have.class", "section-header2")

            cy.contains(".section-wrapper", "level 2")
                .should("be.visible")
                .and("have.class", "section-wrapper2")
                .and("have.class", "top-level")
        })

        it("has level 3", () => {
            cy.contains("h3.section-header", "level 3")
                .should("be.visible")
                .and("have.class", "section-header3")

            cy.contains(".section-wrapper", "level 3")
                .should("be.visible")
                .and("have.class", "section-wrapper3")
                .and("not.have.class", "top-level")
        })

        it("has level 6", () => {
            cy.contains("h6.section-header", "level 6")
                .should("be.visible")
                .and("have.class", "section-header6")

            cy.contains(".section-wrapper", "level 6")
                .should("be.visible")
                .and("have.class", "section-wrapper6")
                .and("not.have.class", "top-level")
        })

        it("has level 7", () => {
            cy.contains("h6.section-header", "level 7") // level 7 and higher uses h6
                .should("be.visible")
                .and("have.class", "section-header7")

            cy.contains(".section-wrapper", "level 7")
                .should("be.visible")
                .and("have.class", "section-wrapper7")
                .and("not.have.class", "top-level")
        })
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
