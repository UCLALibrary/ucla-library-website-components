import * as API from '../../mock-api.json'

// Mock data for About Page
export const mockAboutPage = {
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
