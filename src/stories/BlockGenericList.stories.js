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
}

const mock2 = {
    title: "Maintain chessboard tables",
    summary:
        "<p>Maintain the chess tables in all outdoor areas. Keep the tables clean and free from debris.</p>",
    jobType: [
        {
            title: "Student",
        },
    ],
    jobRequisitionNumber: "176834",
    jobPostingURL: "https://www.studio-job.com/news/chess",
    payRate: "$5.45/hour",
    department: [
        {
            title: "Business Services",
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

export const PayRate = () => ({
    data() {
        return { ...mock2 }
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
        :payRate="payRate"
      />
  `,
})
