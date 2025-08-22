describe("Funkhaus / NotesAccordion", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=funkhaus-notesaccordion--default&args=&viewMode=story"
        )
        cy.get(".notes-accordion").should("exist")
        cy.get(".notes-accordion .btn").should("exist")
        cy.get(".notes-accordion .label").should("exist")
        cy.percySnapshot("Funkhaus / NotesAccordion: Default")
    })

    it("Toggles open/close label on button click", () => {
        cy.visit(
            "/iframe.html?id=funkhaus-notesaccordion--default&args=&viewMode=story"
        )
        cy.get(".notes-accordion .btn").click()
        cy.get(".notes-accordion").should("have.class", "is-open")
        cy.get(".notes-accordion .label").should("exist")
    })
})
