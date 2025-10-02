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
      },
      {
        to: '/guide/research-methods-2024',
        title: 'Research Methods and Digital Humanities: A Comprehensive Guide',
        meta: {
          'Resource Type': 'Research Guide',
          'Date': 'March 15, 2024',
          'Program': 'UCLA Library Site Search'
        }
      },
      {
        to: '/news/ai-literacy-initiative',
        title: 'UCLA Library Launches AI Literacy Initiative for Students',
        meta: {
          'Resource Type': 'News Article',
          'Date': 'February 8, 2024',
          'Program': 'UCLA Library Site Search'
        }
      },
      {
        to: '/tutorial/database-search',
        title: 'How to Search Academic Databases Effectively',
        meta: {
          'Resource Type': 'Tutorial',
          'Date': 'January 22, 2024',
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
      },
      {
        to: '/audio/ucla-oral-history-1960s',
        title: 'UCLA Student Life in the 1960s: Oral History Interview with Maria Rodriguez',
        meta: {
          'Resource Type': 'Oral History',
          'Date': 'March 12, 2023',
          'Program': 'UCLA Oral History Program'
        }
      },
      {
        to: '/audio/jazz-archive-session-1985',
        title: 'Jazz Archive Session: Thelonious Monk Tribute Concert, Royce Hall 1985',
        meta: {
          'Resource Type': 'Concert Recording',
          'Date': 'November 15, 1985',
          'Program': 'UCLA Jazz Archive'
        }
      },
      {
        to: '/audio/lecture-series-ai-ethics',
        title: 'AI Ethics in Higher Education: A Panel Discussion',
        meta: {
          'Resource Type': 'Lecture Recording',
          'Date': 'February 28, 2024',
          'Program': 'UCLA Library Events'
        }
      },
      {
        to: '/audio/podcast-digital-humanities',
        title: 'Digital Humanities Podcast: Episode 47 - Data Visualization in Research',
        meta: {
          'Resource Type': 'Podcast',
          'Date': 'January 15, 2024',
          'Program': 'UCLA Digital Humanities'
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
      },
      {
        to: '/article/machine-learning-libraries',
        title: 'Machine Learning Applications in Academic Library Collections',
        meta: {
          'Resource Type': 'Journal Article',
          'Date': 'December 2023',
          'Program': 'UCLA Digital Library'
        }
      },
      {
        to: '/article/archival-preservation-methods',
        title: 'Digital Preservation Methods for Historical Photographs: A Case Study',
        meta: {
          'Resource Type': 'Research Paper',
          'Date': 'November 2023',
          'Program': 'UCLA Conservation Center'
        }
      },
      {
        to: '/article/student-research-practices',
        title: 'Information Literacy and Student Research Practices in the Digital Age',
        meta: {
          'Resource Type': 'Conference Paper',
          'Date': 'September 2023',
          'Program': 'UCLA Library Research'
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
      },
      {
        to: '/artwork/student-exhibition-2024',
        title: 'Digital Art Exhibition: Student Works from UCLA Design Media Arts',
        meta: {
          'Resource Type': 'Exhibition',
          'Date': 'March 2024',
          'Program': 'UCLA Arts Library'
        }
      },
      {
        to: '/artwork/architectural-drawings-1960s',
        title: 'UCLA Campus Architecture: Original Drawings and Blueprints, 1960s',
        meta: {
          'Resource Type': 'Architectural Drawing',
          'Date': '1960-1969',
          'Program': 'UCLA Architecture Archive'
        }
      },
      {
        to: '/artwork/illustrated-manuscripts',
        title: 'Medieval Illuminated Manuscripts from the UCLA Special Collections',
        meta: {
          'Resource Type': 'Manuscript',
          'Date': '1400-1500',
          'Program': 'UCLA Special Collections'
        }
      },
      {
        to: '/artwork/contemporary-art-acquisition',
        title: 'Contemporary Art Acquisition: Works by Emerging Los Angeles Artists',
        meta: {
          'Resource Type': 'Contemporary Art',
          'Date': '2023',
          'Program': 'UCLA Art Collection'
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
      },
      {
        to: '/uc-library/library-renovation-2023',
        title: 'UCLA Library Renovation Project: Modernizing Study Spaces for the 21st Century',
        meta: {
          'Resource Type': 'Project Documentation',
          'Date': '2023',
          'Program': 'UCLA Library Administration'
        }
      },
      {
        to: '/uc-library/digital-scholarship-center',
        title: 'Digital Scholarship Center: Supporting Faculty Research with Technology',
        meta: {
          'Resource Type': 'Program Information',
          'Date': '2024',
          'Program': 'UCLA Digital Library'
        }
      },
      {
        to: '/uc-library/rare-books-acquisition',
        title: 'Rare Books Acquisition: 15th Century Incunabula Collection',
        meta: {
          'Resource Type': 'Collection Development',
          'Date': 'February 2024',
          'Program': 'UCLA Special Collections'
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
      },
      {
        to: '/book/artificial-intelligence-libraries',
        title: 'Artificial Intelligence in Academic Libraries: A Comprehensive Guide',
        meta: {
          'Resource Type': 'E-Book',
          'Date': '2024',
          'Program': 'UCLA Digital Library'
        }
      },
      {
        to: '/book/digital-humanities-methods',
        title: 'Digital Humanities Research Methods: Tools and Techniques for Scholars',
        meta: {
          'Resource Type': 'Textbook',
          'Date': '2023',
          'Program': 'UCLA Digital Humanities'
        }
      },
      {
        to: '/book/archival-science-principles',
        title: 'Principles of Archival Science: Theory and Practice in the Digital Age',
        meta: {
          'Resource Type': 'Reference Book',
          'Date': '2023',
          'Program': 'UCLA Conservation Center'
        }
      },
      {
        to: '/book/student-success-research',
        title: 'Student Success in Academic Research: Information Literacy and Critical Thinking',
        meta: {
          'Resource Type': 'Guide',
          'Date': '2024',
          'Program': 'UCLA Library Instruction'
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
      },
      {
        to: '/photo/library-construction-1960s',
        title: 'UCLA Library Construction Progress: Powell Library Building, 1960s',
        meta: {
          'Resource Type': 'Construction Photo',
          'Date': '1960-1969',
          'Program': 'UCLA Campus History'
        }
      },
      {
        to: '/photo/student-study-session-2024',
        title: 'Students in Collaborative Study Session at the Research Library',
        meta: {
          'Resource Type': 'Campus Life Photo',
          'Date': 'March 2024',
          'Program': 'UCLA Student Life'
        }
      },
      {
        to: '/photo/digital-archive-setup',
        title: 'Digital Archive Setup: Scanning Historical Documents in Special Collections',
        meta: {
          'Resource Type': 'Process Documentation',
          'Date': 'February 2024',
          'Program': 'UCLA Digital Collections'
        }
      },
      {
        to: '/photo/library-event-lecture',
        title: 'Author Lecture Series: Contemporary Writers at UCLA Library',
        meta: {
          'Resource Type': 'Event Photo',
          'Date': 'January 2024',
          'Program': 'UCLA Library Events'
        }
      }
    ],
    hasMoreResults: true,
    moreResultsLink: {
      text: 'More Results',
      href: '/search?q=photos&page=2'
    }
  },
  {
    id: 'videos',
    title: 'Videos',
    description: 'Video recordings and multimedia content',
    viewAllLink: {
      text: 'View 23 Results',
      href: '/search?q=videos'
    },
    items: [
      {
        to: '/video/ucla-library-tour-2024',
        title: 'Virtual Tour of UCLA Library: A Complete Guide to Research Resources',
        meta: {
          'Resource Type': 'Educational Video',
          'Date': 'March 2024',
          'Program': 'UCLA Library Instruction'
        }
      }
    ],
    hasMoreResults: false
  }
]

export default bentoBoxResultsData