describe("SECTION / Staff / SubjectLibrarian", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=section-staff-subjectlibrarian--default&args=&viewMode=story"
        )
        cy.get(".section-staff-subject-librarian").should("exist")

        cy.percySnapshot("SECTION / Staff / SubjectLibrarian: Default")
    })
})
