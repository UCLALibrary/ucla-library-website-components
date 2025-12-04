import { computed, ref } from 'vue'
import PanelAnchorNav from '@/lib-components/PanelAnchorNav.vue'

/**
 * A panel component that displays anchor navigation with toggle functionality.
 *
 * Props:
 * - <b>sectionTitles</b>: An array of strings representing section titles for navigation
 * - <b>color</b>: Optional route color ('about' | 'help' | 'visit' | 'default' | '')
 * - <b>hasBackToTop</b>: Boolean to control whether to show "Back to Top" link
 * - <b>isOpened</b>: A boolean to control whether the panel is open or closed
 * - <b>showOpenIconAlways</b>: Boolean to control whether the open icon is always visible
 *
 * Events:
 * - <b>openPanel</b>: Emitted when the panel open button is clicked
 * - <b>closePanel</b>: Emitted when the panel close button is clicked
 */
export default {
  title: 'Funkhaus / Panel Anchor Nav',
  component: PanelAnchorNav,
  argTypes: {
    sectionTitles: {
      control: {
        type: 'array',
        separator: ', ',
      },
      description:
                'Array of section titles that create page anchor links',
    },
    color: {
      control: 'select',
      options: ['', 'about', 'help', 'visit', 'default'],
      description: 'Route color theme',
    },
    hasBackToTop: {
      control: 'boolean',
      description: 'Controls whether to show \'Back to Top\' link',
    },
    isOpened: {
      control: 'boolean',
      description: 'Controls whether the panel is open or closed',
    },
    showOpenIconAlways: {
      control: 'boolean',
      description:
                'Controls whether the open icon is always visible or only after scrolling 50vh',
    },
    openPanel: {
      action: 'openPanel',
      description: 'Emitted when the panel open button is clicked',
    },
    closePanel: {
      action: 'closePanel',
      description: 'Emitted when the panel close button is clicked',
    },
  },
  decorators: [
    () => ({
      template: '<story />',
      provide() {
        return {
          theme: computed(() => 'dlc'),
        }
      },
    }),
  ],
}

function Template(args) {
  return {
    setup() {
      const isOpened = ref(args.isOpened)

      const handleOpenPanel = () => {
        isOpened.value = true
        args.openPanel()
      }

      const handleClosePanel = () => {
        isOpened.value = false
        args.closePanel()
      }

      return {
        args,
        isOpened,
        handleOpenPanel,
        handleClosePanel,
      }
    },
    components: { PanelAnchorNav },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
            <div style="height: 300vh">
                <PanelAnchorNav v-bind="args" :isOpened="isOpened" @openPanel="handleOpenPanel" @closePanel="handleClosePanel" />
            </div>
            `,
  }
}

function RealPageTemplate(args) {
  return {
    setup() {
      const isOpened = ref(args.isOpened)

      const handleOpenPanel = () => {
        isOpened.value = true
        args.openPanel()
      }

      const handleClosePanel = () => {
        isOpened.value = false
        args.closePanel()
      }

      return {
        args,
        isOpened,
        handleOpenPanel,
        handleClosePanel,
      }
    },
    components: { PanelAnchorNav },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
            <div class="real-page-scenario">
                <!-- Header -->
                <header class="page-header" id="top"> 
                    <h1 >UCLA Library Documentation</h1>
                    <p>Complete guide to using the UCLA Library system</p>
                </header>

                <!-- Main Content -->
                <main class="page-content">
                    <section id="introduction" class="content-section">
                        <h2>Introduction</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </section>

                    <section id="getting-started" class="content-section">
                        <h2>Getting Started</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
                        <h3 id="account-setup">Account Setup</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <h3 id="first-steps">First Steps</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </section>

                    <section id="searching-the-library" class="content-section">
                        <h2>Searching the Library</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        <h3 id="basic-search">Basic Search</h3>
                        <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        <h3 id="advanced-search">Advanced Search</h3>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
                    </section>

                    <section id="databases-and-journals" class="content-section">
                        <h2>Databases and Journals</h2>
                        <p>Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                        <h3 id="popular-databases">Popular Databases</h3>
                        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        <h3 id="journal-access">Journal Access</h3>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                    </section>

                    <section id="special-collections" class="content-section">
                        <h2>Special Collections</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                        <h3 id="rare-books">Rare Books</h3>
                        <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        <h3 id="archives">Archives</h3>
                        <p>Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.</p>
                    </section>

                    <section id="library-services" class="content-section">
                        <h2>Library Services</h2>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
                        <h3 id="research-support">Research Support</h3>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        <h3 id="technology-services">Technology Services</h3>
                        <p>Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </section>

                    <section id="library-locations" class="content-section">
                        <h2>Library Locations</h2>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        <h3 id="powell-library">Powell Library</h3>
                        <p>Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        <h3 id="charles-e-young-research-library">Charles E. Young Research Library</h3>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </section>

                    <section id="getting-help" class="content-section">
                        <h2>Getting Help</h2>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
                        <h3 id="ask-a-librarian">Ask a Librarian</h3>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        <h3 id="research-guides">Research Guides</h3>
                        <p>Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </section>

                    <section id="contact-information" class="content-section">
                        <h2>Contact Information</h2>
                        <p>Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                        <h3 id="general-inquiries">General Inquiries</h3>
                        <p>Email: library@example.com | Phone: (123) 456-7890</p>
                        <h3 id="hours">Hours</h3>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </section>
                </main>

                <!-- PanelAnchorNav Component -->
                <PanelAnchorNav 
                    v-bind="args" 
                    :isOpened="isOpened" 
                    @openPanel="handleOpenPanel" 
                    @closePanel="handleClosePanel" 
                />
            </div>
        `,
  }
}

// Normal usage stories
export const Default = Template.bind({})
Default.args = {
  sectionTitles: ['Overview', 'Features', 'Documentation', 'Contact'],
  color: 'default',
  hasBackToTop: true,
  isOpened: false,
}

export const Opened = Template.bind({})
Opened.args = {
  sectionTitles: ['Overview', 'Features', 'Documentation', 'Contact'],
  color: 'default',
  hasBackToTop: true,
  isOpened: true,
}

// Open icon behavior variations
export const OpenIconAlwaysVisible = Template.bind({})
OpenIconAlwaysVisible.args = {
  sectionTitles: ['Overview', 'Features', 'Documentation', 'Contact'],
  color: 'default',
  hasBackToTop: true,
  isOpened: false,
  showOpenIconAlways: true,
}

export const OpenIconOnScroll = Template.bind({})
OpenIconOnScroll.args = {
  sectionTitles: ['Overview', 'Features', 'Documentation', 'Contact'],
  color: 'default',
  hasBackToTop: true,
  isOpened: false,
  showOpenIconAlways: false,
}

export const RealPageWithManySections = RealPageTemplate.bind({})
RealPageWithManySections.args = {
  sectionTitles: [
    'Introduction',
    'Getting Started',
    'Account Setup',
    'First Steps',
    'Searching the Library',
    'Basic Search',
    'Advanced Search',
    'Databases and Journals',
    'Popular Databases',
    'Journal Access',
    'Special Collections',
    'Rare Books',
    'Archives',
    'Library Services',
    'Research Support',
    'Technology Services',
    'Library Locations',
    'Powell Library',
    'Charles E. Young Research Library',
    'Getting Help',
    'Ask a Librarian',
    'Research Guides',
    'Contact Information',
    'General Inquiries',
    'Hours',
  ],
  color: 'default',
  hasBackToTop: true,
  isOpened: false,
  showOpenIconAlways: false,
}

// Add CSS for real page scenario
const style = document.createElement('style')
style.textContent = `
.real-page-scenario {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.page-header {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    padding: 60px 40px;
    margin: -20px -20px 40px -20px;
    border-radius: 0 0 20px 20px;
    text-align: center;
}

.page-header h1 {
    font-size: 2.5rem;
    margin: 0 0 10px 0;
    font-weight: 700;
}

.page-header p {
    font-size: 1.2rem;
    margin: 0;
    opacity: 0.9;
}

.page-content {
    display: grid;
    gap: 40px;
}

.content-section {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
}

.content-section h2 {
    font-size: 2rem;
    color: #1f2937;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    border-bottom: 3px solid #3b82f6;
    font-weight: 600;
}

.content-section h3 {
    font-size: 1.3rem;
    color: #374151;
    margin: 30px 0 15px 0;
    font-weight: 600;
}

.content-section p {
    font-size: 1rem;
    margin: 0 0 15px 0;
    color: #4b5563;
}

.content-section p:last-child {
    margin-bottom: 0;
}

/* Responsive design */
@media (max-width: 768px) {
    .real-page-scenario {
        padding: 15px;
    }
    
    .page-header {
        padding: 40px 20px;
        margin: -15px -15px 30px -15px;
    }
    
    .page-header h1 {
        font-size: 2rem;
    }
    
    .content-section {
        padding: 30px 20px;
    }
    
    .content-section h2 {
        font-size: 1.5rem;
    }
}
`
document.head.appendChild(style)
