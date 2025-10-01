// Mock data for BentoBoxResultsPage based on screenshot - formatted for BentoPod component
export const bentoBoxResultsData = [
  {
    id: 'yourUclaSiteSearchResults',
    title: 'Your UCLA Site Search Results',
    description: 'Search results from UCLA Library site',
    viewAllLink: {
      text: 'View 1,290 Results',
      href: '/search?q=ucla&scope=site'
    },
    items: [
      {
        to: '/article/ucla-site-result-1',
        title: 'Aerial view of tanks, one painted as a jack-o-lantern, at Union Oil Co. refinery Wilmington, Calif., 1965',
        meta: {
          'Resource Type': 'Article',
          'Date': 'October 26, 1965',
          'Program': 'UCLA Library Site Search'
        }
      },
      {
        to: '/transcript/ucla-site-result-2',
        title: 'Attendees at a horse show in the city park on Halloween, Anaheim, 1935',
        meta: {
          'Resource Type': 'Transcript',
          'Date': 'October 31, 1935',
          'Program': 'UCLA Library Site Search'
        }
      },
      {
        to: '/blog/ucla-site-result-3',
        title: 'Children at a Halloween Party, Los Angeles, 1935',
        meta: {
          'Resource Type': 'Blog Post',
          'Date': 'October 31, 1935',
          'Program': 'UCLA Library Site Search'
        }
      },
      {
        to: '/article/ucla-site-result-4',
        title: 'Halloween decorations in downtown Los Angeles, 1940',
        meta: {
          'Resource Type': 'Article',
          'Date': 'October 31, 1940',
          'Program': 'UCLA Library Site Search'
        }
      },
      {
        to: '/article/ucla-site-result-5',
        title: 'Costume party at UCLA campus, 1960',
        meta: {
          'Resource Type': 'Article',
          'Date': 'October 31, 1960',
          'Program': 'UCLA Library Site Search'
        }
      }
    ],
    hasMoreResults: true,
    moreResultsLink: {
      text: 'More Results',
      href: '/search?q=ucla&scope=site&page=2'
    }
  },
  {
    id: 'audio',
    title: 'Audio',
    description: 'Audio recordings and sound collections',
    viewAllLink: {
      text: 'View 651 Results',
      href: '/search?q=audio'
    },
    items: [
      {
        to: '/audio/artist-biography-rumel-fuentes',
        title: 'Artist Biography: Rumel Fuentes - Corridos, Chicano Politics, and the Birth of the Frontera Collection',
        meta: {
          'Resource Type': 'Blog',
          'Date': '2014',
          'Program': 'AVALON'
        }
      },
      {
        to: '/audio/chavela-vargas',
        title: 'Chavela Vargas',
        meta: {
          'Resource Type': 'Audio Recording',
          'Date': 'October 3rd, 1967',
          'Program': 'Frontera'
        }
      },
      {
        to: '/audio/macorina-by-chavela-vargas',
        title: 'Macorina by Chavela Vargas',
        meta: {
          'Resource Type': 'Audio',
          'Date': 'October 3rd, 2014',
          'Program': 'AVALON'
        }
      }
    ],
    hasMoreResults: false
  },
  {
    id: 'articles',
    title: 'Articles',
    description: 'Academic articles and journal publications',
    viewAllLink: {
      text: 'View 1,290 Results',
      href: '/search?q=articles'
    },
    items: [
      {
        to: '/article/aerial-view-tanks',
        title: 'Aerial view of tanks, one painted as a jack-o-lantern, at Union Oil Co. refinery in Wilmington, Calif., 1965',
        meta: {
          'Resource Type': 'Article',
          'Date': 'October 26, 1965',
          'Program': 'Modern Endangered Archives Program'
        }
      },
      {
        to: '/article/horse-show-halloween',
        title: 'Attendees at a horse show in the city park on Halloween, Anaheim, 1935',
        meta: {
          'Resource Type': 'Transcript',
          'Date': 'October 31, 1935',
          'Program': 'Modern Endangered Archives Program'
        }
      },
      {
        to: '/article/children-halloween-party',
        title: 'Children at a Halloween Party, Los Angeles, 1935',
        meta: {
          'Resource Type': 'Blog Post',
          'Date': 'October 31, 1935',
          'Program': 'Visual History of UCLA'
        }
      },
      {
        to: '/article/halloween-traditions',
        title: 'Halloween Traditions in Early 20th Century Los Angeles',
        meta: {
          'Resource Type': 'Article',
          'Date': 'October 15, 1930',
          'Program': 'Modern Endangered Archives Program'
        }
      }
    ],
    hasMoreResults: true,
    moreResultsLink: {
      text: 'More Results',
      href: '/search?q=articles&page=2'
    }
  },
  {
    id: 'artwork',
    title: 'Artwork',
    description: 'Visual art and creative works',
    viewAllLink: {
      text: 'View 91 Results',
      href: '/search?q=artwork'
    },
    items: [
      {
        to: '/artwork/painted-skin',
        title: 'Painted Skin: The Resurrection',
        meta: {
          'Resource Type': 'Artwork',
          'Date': 'Unknown',
          'Program': 'Digital Collections'
        }
      }
    ],
    hasMoreResults: false
  },
  {
    id: 'ucLibrary',
    title: 'UC Library',
    description: 'UC Library collections and resources',
    viewAllLink: {
      text: 'View 54 Results',
      href: '/search?q=uc-library'
    },
    items: [
      {
        to: '/uc-library/students-picnic',
        title: 'Students playing at the Geography Department Fall Picnic',
        meta: {
          'Resource Type': 'Still Image',
          'Date': '1955',
          'Program': 'Modern Endangered Archives Program'
        }
      },
      {
        to: '/uc-library/founding-members',
        title: 'Founding members of Friends of the UCLA Library, Fall',
        meta: {
          'Resource Type': 'Still Image',
          'Date': '1951',
          'Program': 'History of UCLA'
        }
      },
      {
        to: '/uc-library/recording-arts-panel',
        title: 'Recording Arts Panel with Carmen Dragon, Kay Starr, Alan Livingston, Bob Newhart, and Randy Sparks',
        meta: {
          'Resource Type': 'Still Image',
          'Date': '1963',
          'Program': 'Film & Television Archive'
        }
      }
    ],
    hasMoreResults: true,
    moreResultsLink: {
      text: 'More Results',
      href: '/search?q=uc-library&page=2'
    }
  },
  {
    id: 'books',
    title: 'Books',
    description: 'Books, e-books, and publications',
    viewAllLink: {
      text: 'View 2,300 Results',
      href: '/search?q=books'
    },
    items: [
      {
        to: '/book/halloween-patterson',
        title: 'Halloween / by Lillie Patterson, illustrated by Gil Miret.',
        meta: {
          'Resource Type': 'Book',
          'Date': '1963',
          'Program': 'UCLA Site Search'
        }
      },
      {
        to: '/book/halloween-carpenter',
        title: 'Halloween / Compass International Pictures ; Falcon International Productions ; screenplay by John Carpenter and Debra Hill ; director, John Carpenter.',
        meta: {
          'Resource Type': 'Audio Book',
          'Date': '1978+',
          'Program': 'AVALON'
        }
      },
      {
        to: '/book/leeder-buzzard',
        title: 'Leeder, Murray, 1982-; Leighton Buzzard : Auteur Publishing',
        meta: {
          'Resource Type': 'Book',
          'Date': '2014',
          'Program': 'Modern Endangered Archives Program'
        }
      },
      {
        to: '/book/halloween-history',
        title: 'The History of Halloween: From Ancient Rituals to Modern Celebrations',
        meta: {
          'Resource Type': 'Book',
          'Date': '2010',
          'Program': 'UCLA Site Search'
        }
      }
    ],
    hasMoreResults: true,
    moreResultsLink: {
      text: 'More Results',
      href: '/search?q=books&page=2'
    }
  },
  {
    id: 'photos',
    title: 'Photos',
    description: 'Photographic collections and images',
    viewAllLink: {
      text: 'View 54 Results',
      href: '/search?q=photos'
    },
    items: [
      {
        to: '/photo/students-picnic',
        title: 'Students playing at the Geography Department Fall Picnic',
        meta: {
          'Resource Type': 'Still Image',
          'Date': '1955',
          'Program': 'Modern Endangered Archives Program'
        }
      },
      {
        to: '/photo/founding-members',
        title: 'Founding members of Friends of the UCLA Library, Fall',
        meta: {
          'Resource Type': 'Still Image',
          'Date': '1951',
          'Program': 'History of UCLA'
        }
      },
      {
        to: '/photo/recording-arts-panel',
        title: 'Recording Arts Panel with Carmen Dragon, Kay Starr, Alan Livingston, Bob Newhart, and Randy Sparks',
        meta: {
          'Resource Type': 'Still Image',
          'Date': '1963',
          'Program': 'Film & Television Archive'
        }
      }
    ],
    hasMoreResults: true,
    moreResultsLink: {
      text: 'More Results',
      href: '/search?q=photos&page=2'
    }
  }
]

export default bentoBoxResultsData