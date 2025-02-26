export const mockSecondary = [
  {
    id: '843',
    name: 'Locations & Hours',
    to: '/locations',
    classes: '',
    target: '',
  },
  {
    id: '844',
    name: 'Ask a Librarian',
    to: '/research-teaching-support/research-help',
    classes: null,
    target: '',
  },
  {
    id: '845',
    name: 'My Account',
    to: 'https://catalog.library.ucla.edu/vwebv/login;jsessionid=9D14C6523970C30728D965F6BD6B914D',
    classes: null,
    target: '1',
  },
]
export const mockPrimary = [
  {
    id: '835',
    name: 'Get help with...',
    to: null,
    classes: '',
    target: '',
    children: [
      {
        id: '833',
        name: 'Borrowing Books and Equipment',
        to: '/help/services-resources/borrowing-books-and-equipment',
        classes: '',
        target: '',
      },
      {
        id: '840',
        name: 'All Services & Resources',
        to: '/help/services-resources',
        classes: '',
        target: '',
      },
    ],
  },
  {
    id: '834',
    name: 'Visit',
    to: '/events-exhibits',
    classes: null,
    target: '',
    children: [
      {
        id: '841',
        name: 'Locations & Hours',
        to: '/visit/locations',
        classes: '',
        target: '',
      },
      {
        id: '837',
        name: 'Events & Exhibitions',
        to: '/visit/events-exhibits',
        classes: '',
        target: '',
      },
    ],
  },
  {
    id: '836',
    name: 'About',
    to: null,
    classes: null,
    target: '',
    children: [
      {
        id: '842',
        name: 'Library News',
        to: '/about/news',
        classes: '',
        target: '',
      },
      {
        id: '838',
        name: 'Staff Directory',
        to: '/about/staff',
        classes: '',
        target: '',
      },
    ],
  },
  {
    id: '839',
    name: 'Support us',
    to: 'https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463',
    classes: null,
    target: '1',
    children: [],
  },
]

export const mockFooterPrimary = {
  socialItems: [
    {
      id: '11777',
      name: 'Twitter',
      to: 'https://twitter.com/',
      classes: null,
      target: '1',
    },
    {
      id: '11778',
      name: 'Facebook',
      to: 'https://www.facebook.com/',
      classes: null,
      target: '1',
    },
    {
      id: '11779',
      name: 'Instagram',
      to: 'https://www.instagram.com/',
      classes: null,
      target: '1',
    },
    {
      id: '11780',
      name: 'YouTube',
      to: 'https://www.youtube.com/',
      classes: null,
      target: '1',
    },
  ],

  pressItems: [
    {
      id: '11781',
      name: 'Dress Doom',
      to: 'https://test-craft.library.ucla.edu/press-room',
      classes: null,
      target: '',
    },
    {
      id: '11782',
      name: 'Careers at USC',
      to: 'https://test-craft.library.ucla.edu/careers-at-ucla',
      classes: null,
      target: '',
    },
  ],
}

export const mockFooterSock = {
  nodes: [
    {
      id: '1628',
      name: 'EEEmergency',
      to: '/emergency',
      classes: null,
    },
    {
      id: '1627',
      name: 'AAAccessibility',
      to: 'https://external.url/accessibility',
      classes: null,
    },
    {
      id: '1629',
      name: 'PPPrivacy & Terms of Use',
      to: 'https://test-craft.library.ucla.edu/privacy-terms-of-use',
      classes: null,
      target: '0',
    },
    {
      id: '9511',
      name: 'CCCreative Commons Attribution 4.0',
      to: 'https://creativecommons.org/licenses/by/4.0/',
      classes: null,
      target: '1',
    },
  ],
}

export const mockFooterSponsor = {
  funders: [
    {
      id: '28231',
      funderLogo: [
        {
          id: '28636',
          src: 'https://static.library.ucla.edu/craftassetstest/logo-arcadia1.svg',
          height: 569,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-arcadia1.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-arcadia1.svg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/logo-arcadia1.svg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/logo-arcadia1.svg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/logo-arcadia1.svg 2560w',
          alt: 'Logo arcadia1',
          focalPoint: [0.5, 0.5],
        },
      ],
      funderName: 'Arcadiaaaaaa',
      funderUrl:
        'https://www.hostesscakes.com/produ        colate/',
    },
    {
      id: '28259',
      funderLogo: [
        {
          id: '28637',
          src: 'https://static.library.ucla.edu/craftassetstest/logo-library.svg',
          height: 490,
          width: 2560,
          srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-library.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-library.svg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/logo-library.svg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/logo-library.svg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/logo-library.svg 2560w',
          alt: 'Logo library',
          focalPoint: [0.5, 0.5],
        },
      ],
      funderName: 'Etch A Sketch',
      funderUrl: 'https://en.wikipedia.org/wiki/Etch_A_Sketch',
    },
  ],
}

// TODO add nodes? See footersock?
export const mockFooterLinks = {
  // links: [
  //   { title: 'About', links: mockFooterLinks.aboutLinks },
  // ]
  aboutLinks: [
    {
      id: '1623',
      name: 'About the Library',
      to: '/about',
      classes: null,
    },
    {
      id: '1624',
      name: 'Library News',
      to: '/about/news',
      classes: null,
    },
    {
      id: '1625',
      name: 'Staff Directory',
      to: '/about/staff',
      classes: null,
    },
    {
      id: '1626',
      name: 'Jobs',
      to: '/about/jobs',
      classes: null,
    },
  ],
  contactLinks: [
    {
      id: '1620',
      name: 'Contact Us',
      to: '/help',
      classes: null,
    },
    {
      id: '1621',
      name: 'Ask a Librarian',
      to: '/research-teaching-support/research-help',
      classes: null,
    },
    {
      id: '1622',
      name: 'Locations & Hours',
      to: '/locations',
      classes: null,
    },
  ],
  contributeLinks: [
    {
      id: '1617',
      name: 'Support the Library',
      to: 'https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463',
      classes: null,
    },
    {
      id: '1618',
      name: 'Volunteer',
      to: '/about/jobs/volunteer',
      classes: null,
    },
    {
      id: '1619',
      name: 'Give Feedback',
      to: '/help/feedback',
      classes: null,
    },
  ],
  resourcesLinks: [
    {
      id: '1614',
      name: 'Services & Resources',
      to: '/help/services-resources',
      classes: null,
    },
    {
      id: '1615',
      name: 'Research Guides',
      to: '/research-teaching-support/research-guides',
      classes: null,
    },
    {
      id: '1616',
      name: 'Digital Collections',
      to: '/collections/digital-collections',
      classes: null,
    },
  ],
}
