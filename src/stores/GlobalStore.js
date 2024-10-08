import { defineStore } from 'pinia'
import { mockFooterLinks, mockFooterPrimary, mockFooterSock, mockFooterSponsor, mockPrimary, mockSecondary } from '@/stores/mock.js'

export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    winHeight: 0,
    winWidth: 824,
    sTop: 0,
    globals: {
      askALibrarian: {
        id: '7322',
        askALibrarianTitle: 'Have further questions?',
        askALibrarianText:
          '<p>We\'re here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.</p>',
        buttonUrl: [
          {
            buttonText: 'Contact us',
            buttonUrl: '/help/',
          },
        ],
      },
      meapCallToAction: {
        id: '28646',
        name: 'MEAP Call to Action',
        titleGeneral: 'Get in Touch',
        summary: '<p>Have further questions?</p>',
        button: [
          {
            buttonText: 'Contact Us',
            buttonUrl: 'mailto:meap@library.ucla.edu',
          },
        ],
      },
      ftvaViewingInformation: {
        title: 'View information',
        text: '<p>For more information, or to arrange on-site research viewing, please contact the <a href="https://www.cinema.ucla.edu/archive-research-study-center" target="_blank" rel="noreferrer noopener">Archive Research and Study Center (ARSC)</a></p>'
      }
    },
    header: {
      primary: mockPrimary,
      secondary: mockSecondary
    },
    footerPrimary: {
      nodes: [
        {
          children: mockFooterPrimary.socialItems,
        },
        {
          children: mockFooterPrimary.pressItems,
        },
      ],
    },
    footerSock: {
      nodes: mockFooterSock.nodes
    },
    footerSponsor: {
      funders: mockFooterSponsor.funders
    },
    footerLinks: {
      nodes: [
        {
          category: 'About',
          children: mockFooterLinks.aboutLinks,
        },
        {
          category: 'Contact',
          children: mockFooterLinks.contactLinks,
        },
        {
          category: 'Contribute',
          children: mockFooterLinks.contributeLinks,
        },
        {
          category: 'Resources',
          children: mockFooterLinks.resourcesLinks,
        },
      ],
    },
  }),
  getters: {

  },
})
