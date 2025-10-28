# UCLA Components list 

## Buttons and Interface
[] ButtonIIIf (Svebor)
- need to add this svg to The UCLA svg repo
A single svg button, changes the color of letter svgs on hover

[] Button(Luka)

- label: string  
- variant?: 'primary' | 'secondary'
- outline?: true/false  
- onClick: Function

[] ButtonPageView (Svebor)
 A button that displayes items as a grid or list

[] DividerGeneral (Exists)
 This component already exists

[] ButtonTag (Luka)

Used as labeled categories or tags, possibly dismissible.

- label: string  
- isActive: boolean  
- onClick: Function  
- onRemove?: Function

[] ButtonRemoveSearchFilter (Luka)

Wraps ButtonTag, adds X icon on the right which invokes onRemove

- title: string  
- isSelected: boolean  
- iconName: string;
- onRemove?: Function
  

[] BreadcrumbPill (Luka)

Pill-shaped breadcrumb element, possibly for filter chips or nav breadcrumbs.

- label: string  
- onRemove?: Function  
- to?: string

[] BreadcrumbBar (Luka)

Full breadcrumb bar with one or more breadcrumb items.

- crumbs: Array<{ label: string, to?: string }>  
- current: string

[] SectionLabel   ()
Non-interactive text element that might be grouped with buttons (e.g. “RESEARCH”).

- text: string  
- tag?: string ('h2', 'span', etc.)


[] LibraryLogoButton (austin)
Branded button or label pairing logo with text.

- logoSrc: string  
- label: string  
- to?: string

[x] CTAHexButton (Exists - ButtonMore)

Prominent hex-shaped call-to-action button with icon and label.

- label: string  
- icon?: string  
- to: string  
- variant?: 'primary' | 'secondary'

[] SearchResultsCount  (svebor)
Displays the number of results returned in a search.

- count: number  
- label?: string (default: "Results")  
- prefix?: string (e.g. "Catalog")  
- animate?: boolean

[] RefineSearchPanel (Svebor)

Collapsible panel of dropdown filters for refining search results.

- filters: Array<{  
  label: string,  
  options: Array<string>,  
  selected: string | string[],  
  multi?: boolean  
}>  
- onFilterChange: Function(label: string, selected: string | string[])  
- defaultOpen?: string[] (filters to open by default)

[] FiltersDropdown (Svebor)

Collapsible panel of dropdown filters for refining search results with multiple options

- name: string
- searchField: string
- default: string
- options: string[]
- onFilterChange: Function(label: string, selected: string | string[])  
- defaultOpen?: string[] (filters to open by default)
  

[x] AlphabeticalBrowseBy (Exists)

Interactive list to sort results Alphabetically

- selectedLetterProp: String,
- displayAll: Boolean,

## Dropdowns

[] DropdownSingleSelect(Svebor)

Reusable dropdown with configurable button label and menu options.

- label: string  
- options: Array<string>  
- selected: string  
- onSelect: Function(option: string)


[] ButtonDropdownSearch (Svebor)

Set of dropdowns to filter/search content by fields like “Title” or “Subject.”

- label: string  
- options: Array<string>  
- selected: string  
- onSelect: Function(option: string)


[] YearRangeFilter or DateFilter (Svebor)

Range selector with start and end year inputs and a confirm button.

- minYear: number  
- maxYear: number  
- selectedRange: { start: number, end: number }  
- onConfirm: Function(range: { start: number, end: number })

## Accordions

[] BentoPod (Svebor)
Displays a summary of a library or collection and a list of associated assets. Includes a collapsible "More/Less Results" toggle.

- title: string  
- description: string  
- buttonLabel: string  
- items: Array<{  
  title: string,  
  type: string,  
  date: string,  
  program: string  
}>  
- showMoreLabel: string  
- showLessLabel: string  
- isExpanded: boolean  
- onToggle: Function

[] NotesAccordion(svebor)  
Expandable section for showing grouped text content like notes and captions. Can optionally display an excerpt pod.

- sections: Array<{  
  label: string,  
  content: string | ExcerptPod  
}>  
- isExpanded: boolean  
- onToggle: Function

[] ExcerptPod (Svebor)

Highlighted or emphasized snippet of text content within another component (like Notes). Often includes links and formatted text.

- content: string (HTML or rich text)  
- label?: string  
- background?: boolean  

## Blocks

[] BlockAssetPod (Luka)

Horizontal row layout for a single digital asset, including image, metadata fields, and links.

- title: string  
- description: string  
- date: string  
- resourceType: string  
- collection: { name: string, href: string }  
- image: string  
- onClick?: Function

[] BlockAsset (Svebor)
Card for an individual digital library asset.

- image: string  
- title: string  
- date: string  
- description: string  
- href: string

[] BlockCollection (Svebor)
Visual card for a digital collection or category.

- image: string  
- title: string  
- description: string  
- href: string

[] MetadataTable (Svebor) 

Tabular list of metadata key-value pairs (e.g. Rights Contact, Rights Holder).

- items: Array<{ label: string, value: string | string[] }>  
- title?: string

[] BlockRichText (Exists - needs changes?)
(Already defined previously — reused here for body copy.)

- content: string (HTML or PortableText)  
- align?: 'left' | 'center'

[] SectionHeader  
Reused section heading (also already defined under `BlockTitle`).

- text: string  
- level?: 'h2' | 'h3'  
- id?: string (used for anchor targets)

## Grids

[] GridAssets (Svebor)
- items: [BlockAsset]

[] GridCollections (svebor)
- items: [BlockCollection]

[] GridAssetPod (Luka)

- items: [BlockAssetPod]

## Search

[] SearchField (Luka)

Composed search input and submit button. Likely wraps `EntryField` and `ButtonSubmit`.

- modelValue: string  
- placeholder: string  
- onSearch: Function(value: string)  
- autoFocus?: boolean

[] EntryField(Luka)

Basic labeled input field for user entry. Can be reused for search or other forms.

- label: string  
- modelValue: string  
- placeholder?: string  
- onInput: Function(value: string)

[] ButtonSubmit(Luka)

Search submit button, typically displayed as a magnifying glass icon.

- onClick: Function  
- icon?: string (defaults to magnifying glass)

## Bento Box

[] BentoBoxBlock (Svebor)
A block type component, lives inside the `BentoBoxResult`.
  - image: string,  
  - count: number,  
  - title: string,  
  - description: string,  
  - to: string
    
[] BentoBoxResult (Svebor) 
Horizontal scrollable container of `BentoPod`(Aka: BentoBoxBlock - new addition to he list) items, grouped under a title like "More search results." Includes optional draggable scrollbar.

- title: string  
- items: Array<{  
  image: string,  
  count: number,  
  title: string,  
  description: string,  
  to: string  
}>  
- showDragger: boolean  
- onScroll?: Function


## Header

[] Banner (SiteBrandBar - Already exists, should we refactor it + introduce TS?)

Universal top banner with UCLA branding. Often pinned to the top of all pages, may contain global notices or links.

- label: string  
- link?: string  
- backgroundColor?: string  
- textColor?: string  
- isSticky?: boolean

[] Header ()

NOTE - Something similar exists, but it needs some tweaks.

Primary site navigation including logo, main links, and utility search bar.

- logo: { label: string, href: string }  
- navLinks: Array<{ label: string, href: string }>  
- searchPlaceholder: string  
- searchModel: string  
- onSearch: Function  
- searchFilters?: Array<string>  
- selectedFilter?: string  
- onFilterChange?: Function

## Footer 

[x] Footer (FooterPrimary - Already exists, should we refactor it + introduce TS?)

Main site footer for UCLA Library, assembling social links, navigation, and newsletter signup.

- socialLinks: Array<{ label: string, href: string }>  
- legalLinks: Array<{ label: string, href: string }>  
- copyright?: string
- newsletter

[x] NewsletterSignup (Already exists as a part of the FooterPrimary)

Standalone newsletter form for email subscription.

- headline: string  
- description: string  
- placeholder: string  
- buttonLabel: string  
- onSubmit: Function(email: string)  
- status?: 'idle' | 'success' | 'error'


# Detail Pages

[] DetailHeader (Luka)

Top navigation bar for asset pages, including pagination, collection name, and back-to-search link.

- currentIndex: number  
- totalResults: number  
- collection: { name: string, href: string }  
- onBack: Function  
- onNext: Function  
- onPrev: Function

[] DetailMedia (Svebor)

Large asset viewer for images or media, with zoom/download/fullscreen buttons.

- title: string  
- imageSrc: string  
- caption?: string  
- allowDownload?: boolean  
- allowFullscreen?: boolean


[] CollectionOverview (Luka)

Introductory section for a collection page with title, summary text, and preview image.

- title: string  
- itemCount: number  
- description: string  
- image: string  
- ctaLabel: string  
- ctaHref: string

# Pages

[] BannerFeatured (Luka)

Displays a full-width or responsive image, possibly with optional alt text or caption.
Has a la

- src: string  
- alt?: string  
- layout?: 'full' | 'constrained'  
- direction?: 'left' | 'right'
- decoration?: boolean (e.g. angled stripes or shapes)

[] BlockTitle (Luka)

Standalone heading block.

- text: string  
- level?: 'h1' | 'h2' | 'h3'  
- color?: string  
- align?: 'left' | 'center'

[] BlockButtons (Luka)

One or more call-to-action buttons in a horizontal or vertical stack.

- buttons: Array<{ label: string, href: string, variant?: 'primary' | 'secondary' }>
- align?: 'left' | 'center'

[] ContentSection (Luka)

Flexible container that wraps image, title, text, and buttons in various arrangements.

- image?: BannerFeatured  
- title?: BlockTitle  
- text?: BlockRichText  
- buttons?: BlockButtons  
- reverse?: boolean  
- backgroundColor?: string

[] BlockAnchorNav (Luka)

Sidebar or inline nav with jump links to sections on the same page.

- title?: string (e.g. "Topics Covered")  
- items: Array<{ label: string, href: string }>  


[] PanelAnchorNav (Luka)

A floating anchor navigation panel that appears after the user scrolls one full viewport height (100vh).
An icon is shown on the right side of the screen; clicking it opens a side panel with jump links to sections on the same page.

- title?: string (e.g. "Topics Covered")  
- items: Array<{ label: string, href: string }>  




# Checklist: 

# 📋 Component Checklist

| Component Name             | Developer | Status      | exists? | Notes                          |
|----------------------------|-----------|-------------|---------|--------------------------------|
| ButtonIIIF                 |Svebor     | ☐ Complete  |   [ ]   |                                |
| Button                     |Luka       | ☐ Complete  |   [ ]   |                                |
| DividerGeneral             |Exists     | ☐ Complete  |   [x]   |                                |
| ButtonPageView             |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| ButtonTag                  |Luka       | ☐ Complete  |   [x]   | aka: BlockTag                  |
| ButtonRemoveSearchFilter   |Luka       | ☐ Complete  |   [x]   | aka: BlockRemoveSearchFilter   |
| BreadcrumbPill             |Luka       | ☐ Complete  |   [ ]   |                                |
| BreadcrumbBar              |Luka       | ☐ Complete  |   [ ]   |                                |
| SectionLabel               |           | ☐ Complete  |   [ ]   |                                |
| LibraryLogoButton          |Austin     | ☐ Complete  |   [ ]   |                                |
| CTAHexButton               |Svebor     | ☐ Complete  |   [ ]   |Exists, ready to use            |
| SearchResultsCount         |Svebor     | ☐ Complete  |   [ ]   |Made a PR                       |
| RefineSearchPanel          |Svebor     | ☐ Complete  |   [ ]   |                                |
| FiltersDropdown            |Svebor     | ☐ Complete  |   [ ]   |                                |
| AlphabeticalBrowseBy       |Exists     | ☐ Complete  |   [x]   |                                | 
| DropdownSingleSelect       |Svebor     | ☐ Complete  |   [ ]   |                                |
| ButtonDropdownSearch       |Svebor     | ☐ Complete  |   [ ]   |                                |
| YearRangeFilter            |Svebor     | ☐ Complete  |   [x]   |                                |
| BentoPod                   |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| NotesAccordion             |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| ExcerptPod                 |Svebor     | ☐ Complete  |   [ ]   | In the notes-accordion PR      |
| BlockAssetPod              |Luka       | ☐ Complete  |   [ ]   |                                |
| BlockAsset                 |Svebor     | ☐ Complete  |   [ ]   |                                |
| BlockCollection            |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| MetadataTable              |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| SectionHeader              |           | ☐ Complete  |   [x]   |                                |
| GridAssets                 |Svebor     | ☐ Complete  |   [ ]   |                                |
| GridCollections            |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| GridAssetPod               |Luka       | ☐ Complete  |   [ ]   |                                |
| SearchField                |Luka       | ☐ Complete  |   [x]   |                                |
| EntryField                 |Luka       | ☐ Complete  |   [ ]   |                                |
| ButtonSubmit               |Luka       | ☐ Complete  |   [ ]   |                                |
| BentoBoxBlock              |Svebor     | ☐ Complete  |   [ ]   |Made a PR                       |
| BentoBoxResult             |Svebor     | ☐ Complete  |   [ ]   |Made a PR                       |
| Banner                     |           | ☐ Complete  |   [ ]   |                                |
| Header                     |           | ☐ Complete  |   [x]   | aka: HeaderSite                |
| NewsletterSignup           |Exists     | ☐ Complete  |   [x]   | Exists in footer-primary       |
| DetailHeader               |Luka       | ☐ Complete  |   [ ]   | aka: ItemHeaderBar             |
| DetailMedia                |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| CollectionOverview         |Luka       | ☐ Complete  |   [ ]   |                                |
| BannerFeatured             |Luka       | ☐ Complete  |   [x]   |                                |
| BlockTitle                 |Luka       | ☐ Complete  |   [ ]   |                                |
| BlockButtons               |Luka       | ☐ Complete  |   [ ]   |                                |
| ContentSection             |Luka       | ☐ Complete  |   [ ]   |                                |
| BlockAnchorNav             |Luka       | ☐ Complete  |   [ ]   |                                |
| PanelAnchorNav             |Luka       | ☐ Complete  |   [ ]   |                                |
