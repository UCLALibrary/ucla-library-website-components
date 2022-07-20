import SectionStaffOrcidPublications from "@/lib-components/SectionStaffOrcidPublications"

// Storybook default settings
export default {
    title: "SECTION / Orcid Publications",
    component: SectionStaffOrcidPublications,
}

export const Default = () => ({
    components: { SectionStaffOrcidPublications },
    template: `
        <section-staff-orcid-publications
            class= "staff-orcid-publications"
            orcid="https://orcid.org/0000-0002-6391-2088"
            publications="<ul><li><strong>Johnson, M. W.</strong>, Abumeeiz, S. &amp; McAulay, E. (2021). 'Teaching in the Digital Library: A Partnership Between Teaching Librarians and Digital Library Staff.' College &amp; Research Libraries News. 82(7). <a href='https://crln.acrl.org/index.php/crlnews/article/view/25033/32921'>https://crln.acrl.org/index.php/crlnews/article/view/25033/32921</a></li></ul>"
        />`,
})
