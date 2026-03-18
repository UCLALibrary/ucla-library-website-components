import * as API from '../../mock-api.json'

// Mock data for About Page
export const mockPageAbout = {
  missionData: {
    image: API.image,
    title: 'Our Mission',
    description:
            'The UCLA Digital Library Program works collaboratively within the UCLA Library, across campus, and with a broad range of partners to preserve and provide enhanced access to local and global cultural heritage materials in support of the University\'s teaching, learning, research and service mission. UCLA Digital Library Collections follow ethical and inclusive approaches to descriptive practices as outlined in Toward Ethical and Inclusive Descriptive Practices in UCLA Library Special Collections.',
    alignRight: true,
  },
  aboutData: {
    image: API.image,
    title: 'About UCLA Library',
    description:
            'The UCLA Library system is among the top academic research libraries in the United States, with a collection of more than 12 million volumes and 100,000 serials. The library system consists of 12 libraries and 11 other units, serving more than 50,000 students and faculty. With an annual budget of more than $50 million, the UCLA Library is one of the largest academic research libraries in the world and serves as a depository library for federal and state government documents.',
    alignRight: false,
  },
  questionsData: {
    image: API.image,
    title: 'Have Other Questions?',
    description:
            'We\'re here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.',
    secondaryButtons: [
      {
        label: 'Click Here for UCLA Library Locations',
        to: '/visit/locations/',
      },
      {
        label: 'Contact Us',
        to: '/contact/',
      },
    ],
    alignRight: true,
  },
}

export function getMockPageAboutBlocks() {
  const { missionData, aboutData, questionsData } = mockPageAbout

  return [
    {
      id: 'page-about-mission',
      typeHandle: 'bannerFeatured',
      sectionTitle: '',
      sectionSummary: '',
      content: [
        {
          id: 'mission-1',
          image: [missionData.image],
          title: missionData.title,
          summary: missionData.description,
          alignment: missionData.alignRight ? 'right' : 'left',
          sectionHandle: 'about',
          to: '/help/',
        },
      ],
    },
    {
      id: 'page-about-ucla',
      typeHandle: 'bannerFeatured',
      sectionTitle: '',
      sectionSummary: '',
      content: [
        {
          id: 'about-1',
          image: [aboutData.image],
          title: aboutData.title,
          summary: aboutData.description,
          alignment: aboutData.alignRight ? 'right' : 'left',
          sectionHandle: 'about',
          to: '/visit/',
        },
      ],
    },
    {
      id: 'page-about-questions',
      typeHandle: 'bannerFeatured',
      sectionTitle: '',
      sectionSummary: '',
      content: [
        {
          id: 'questions-1',
          image: [questionsData.image],
          title: questionsData.title,
          summary: questionsData.description,
          alignment: questionsData.alignRight ? 'right' : 'left',
          sectionHandle: 'about',
          secondaryButtons: questionsData.secondaryButtons || [],
          to: '/',
        },
      ],
    },
  ]
}
