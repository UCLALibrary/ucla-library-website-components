import BlockGenericList from "@/lib-components/BlockGenericList.vue"

// Storybook default settings
export default {
    title: "BLOCK / Generic List",
    component: BlockGenericList,
}

const mock = {
    title: "Humanities and Social Sciences Librarian",
    summary:
        "<p><span>The UCLA Library seeks a highly collaborative, user-focused professional for the position of Humanities and Social Sciences Librarian. The incumbent will join a multi-location, cross disciplinary team that supports teaching and all levels of research in the humanities and social sciences. </span><span>Note: Two positions are being filled.</span><br /></p>",
    jobType: [
        {
            title: "Academic Librarian",
        },
    ],
    jobRequisitionNumber: "JPF08053",
    jobPostingURL: "https://recruit.apo.ucla.edu/JPF08053",
    department: [
        {
            title: "User Engagement",
        },
        {
            title: "Human Resources",
        },
    ],
    associatedLocations: [
        {
            title: "UCLA Film & Television Archive",
            uri: "visit/locations/film-television-archive",
        },
        {
            title: "Powell Library",
            uri: "visit/locations/powell-library",
        },
    ],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockGenericList },
    template: `
      <block-generic-list
        sectionTitle="Academic Librarian Jobs"
        :title="title"
        :text="summary"
        :jobType="jobType"
        :jobRequisitionNumber="jobRequisitionNumber"
        :jobPostingURL="jobPostingURL"
        :department="department"
        :associatedLocations="associatedLocations"
      />
  `,
})
