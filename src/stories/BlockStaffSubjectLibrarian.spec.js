describe("BLOCK / Staff / SubjectLibrarian", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-staff-subjectlibrarian--default&args=&viewMode=story"
        )
        cy.get(".block-staff-subject-librarian").should("exist")

        cy.percySnapshot("BLOCK / Staff / SubjectLibrarian: Default")
    })
})
