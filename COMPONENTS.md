# UCLA Components list 

## Buttons and Interface

[] ButtonText (Svebor)  
A minimal button with just text, possibly with variants like underline or subtle.

- label: string  
- variant?: 'default' | 'underline' | 'subtle'  
- onClick: Function

[] ButtonPageView (Svebor)
 A button that displayes items as a grid with more or less info

[] ButtonStacked  
A vertical stack of buttons, likely for grouped filter or action options.

- buttons: Array<{ label: string, isActive: boolean }>  
- onClick: Function(index: number)

[] ButtonDropdown (Luka)

Button paired with a dropdown menu indicator (carat or arrow).

- label: string  
- isOpen: boolean  
- onToggle: Function  
- options: string[]  
- onSelect: Function(option: string)

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

[] Breadcrumb  

[] BreadcrumbPill  
Pill-shaped breadcrumb element, possibly for filter chips or nav breadcrumbs.

- label: string  
- onRemove?: Function  
- to?: string

[] BreadcrumbBar  
Full breadcrumb bar with one or more breadcrumb items.

- crumbs: Array<{ label: string, to?: string }>  
- current: string

[] ButtonIconOnly  
Just an icon button, used for tooltips, mobile actions, etc.

- icon: string  
- ariaLabel: string  
- onClick: Function

[x] PaginationControl (svebor) 
Numbered pagination UI with previous/next arrows.

- currentPage: number  
- totalPages: number  
- onPageChange: Function(newPage: number)

[] SectionLabel   (austin)
Non-interactive text element that might be grouped with buttons (e.g. “RESEARCH”).

- text: string  
- tag?: string ('h2', 'span', etc.)

[] ButtonSubLink  
Secondary inline button or link, often used for minimal navigation or contextual actions.

- label: string  
- href: string  
- variant?: 'default' | 'subtle'  
- icon?: string

[] LibraryLogoButton (austin)
Branded button or label pairing logo with text.

- logoSrc: string  
- label: string  
- to?: string

[x] SectionPagination (svebor) 
Interactive pagination component with numbered buttons, previous/next navigation, and ellipsis for long ranges.

- currentPage: number  
- totalPages: number  
- showEdges?: boolean (e.g. show first/last page)  
- siblingCount?: number (how many pages around current to show)

[x] CTAHexButton (svebor) 
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

[] RefineSearchPanel  
Collapsible panel of dropdown filters for refining search results.

- filters: Array<{  
  label: string,  
  options: Array<string>,  
  selected: string | string[],  
  multi?: boolean  
}>  
- onFilterChange: Function(label: string, selected: string | string[])  
- defaultOpen?: string[] (filters to open by default)

[] FiltersDropdown  
Collapsible panel of dropdown filters for refining search results with multiple options

- name: string
-  searchField: string
- default: string
- options: string[]
- onFilterChange: Function(label: string, selected: string | string[])  
- defaultOpen?: string[] (filters to open by default)
[] ResultsList  
Displays a list of categories with associated result counts.

- items: Array<{ label: string, count: number, href?: string }>  
- highlight?: string[] (optional: bold or emphasize certain terms)  
- onClick?: Function(label: string)

[] AlphabeticalBrowseBy
Interactive list to sort results Alphabetically

- selectedLetterProp: String,
- displayAll: Boolean,

## Dropdowns

[] DropdownSingleSelect  
Reusable dropdown with configurable button label and menu options.

- label: string  
- options: Array<string>  
- selected: string  
- onSelect: Function(option: string)

[] SideMenuAccordionPod  
Expandable side menu category pod with grouped buttons and optional metadata (e.g. counts).

- categories: Array<{ label: string, buttons: Array<{ title: string, count: number }> }>  
- onSelect: Function(buttonTitle: string)

[] ButtonDropdownSearch
Set of dropdowns to filter/search content by fields like “Title” or “Subject.”

- label: string  
- options: Array<string>  
- selected: string  
- onSelect: Function(option: string)

[] ButtonSubCategoryPod  
Grouped buttons with category tags and close/removal options.

- items: Array<{ title: string, count: number, removable?: boolean }>  
- onRemove: Function(item: string)

[] ButtonUCLALibrariesDropdown  
Dropdown for selecting from multiple library collections. Appears in tag-chip format.

- label: string  
- libraries: Array<string>  
- onSelect: Function(library: string)

[] YearRangeFilter  or DateFilter
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

[] AssetFeaturedImage  
Responsive image grid for displaying key visuals of an asset. May allow selection or highlight.

- images: Array<string>  
- aspectRatio?: number  

[] AssetPod  
Vertical media block representing a digital library asset. Contains metadata, linked collection name, and optional image gallery.

- title: string  
- date: string  
- resourceType: string  
- description: string  
- collection: [{ name: string, href: string }]  
- thumbnails: Array<string>  
- isCondensed?: boolean

[] BlockAsset (austin)
Card for an individual digital library asset.

- image: string  
- title: string  
- date: string  
- description: string  
- href: string

[] SearchResult  
Horizontal row layout for a single digital asset, including image, metadata fields, and links.

- title: string  
- description: string  
- date: string  
- resourceType: string  
- collection: { name: string, href: string }  
- image: string  
- onClick?: Function


[] BlockCollection
Visual card for a digital collection or category.

- image: string  
- title: string  
- description: string  
- href: string

[] MetadataTable  
Tabular list of metadata key-value pairs (e.g. Rights Contact, Rights Holder).

- items: Array<{ label: string, value: string | string[] }>  
- title?: string

[] BlockMediaViewer  
Embeds an IIIF viewer, image, or video with optional caption.

- title?: string  
- type: 'iiif' | 'image' | 'video'  
- src: string  
- caption?: string  
- alt?: string  
- fullscreen?: boolean  
- zoomable?: boolean

[] BlockRichText  
(Already defined previously — reused here for body copy.)

- content: string (HTML or PortableText)  
- align?: 'left' | 'center'

[] SectionHeader  
Reused section heading (also already defined under `BlockTitle`).

- text: string  
- level?: 'h2' | 'h3'  
- id?: string (used for anchor targets)

[] BlockButtonList  
Vertical or horizontal list of buttons linking to specific tools or resources.

- buttons: Array<{ label: string, href: string, variant?: string }>


## Grids

[] GridAssets (austin)
- items: [BlockAsset]

[] GridCollections
- items: [BlockCollection]

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

[] Flash  
Placeholder or quick-access UI element — possibly for suggestions or previous searches.

- content?: string | slot  
- onClick?: Function


## Bento Box

[] BentoBoxResult  
Horizontal scrollable container of `BentoPod` items, grouped under a title like "More search results." Includes optional draggable scrollbar.

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


[] Dragger  
A draggable horizontal scrollbar component. Should be synced with scroll container state and optionally labeled with a property.

- trackWidth: number  
- thumbWidth: number  
- position: number  
- label?: string  
- onDrag: Function(newPosition: number)


## Header

[] Banner  
Universal top banner with UCLA branding. Often pinned to the top of all pages, may contain global notices or links.

- label: string  
- link?: string  
- backgroundColor?: string  
- textColor?: string  
- isSticky?: boolean


[] Header        
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

[x] Footer
Main site footer for UCLA Library, assembling social links, navigation, and newsletter signup.

- socialLinks: Array<{ label: string, href: string }>  
- legalLinks: Array<{ label: string, href: string }>  
- copyright?: string
- newsletter

[x] NewsletterSignup  
Standalone newsletter form for email subscription.

- headline: string  
- description: string  
- placeholder: string  
- buttonLabel: string  
- onSubmit: Function(email: string)  
- status?: 'idle' | 'success' | 'error'


# Detail Pages

[] DetailHeader  
Top navigation bar for asset pages, including pagination, collection name, and back-to-search link.

- currentIndex: number  
- totalResults: number  
- collection: { name: string, href: string }  
- onBack: Function  
- onNext: Function  
- onPrev: Function

[] DetailMedia  
Large asset viewer for images or media, with zoom/download/fullscreen buttons.

- title: string  
- imageSrc: string  
- caption?: string  
- allowDownload?: boolean  
- allowFullscreen?: boolean

[] DetailOverview  
Two-column layout for structured metadata. Used for "Item Overview" and "Find this Item."

- left: Array<{ label: string, value: string | VNode }>  
- right: Array<{ label: string, value: string | VNode }>

[] SectionKeywords  
Displays a list of linked subjects, genres, and related tags.

- title?: string  
- keywords: Array<{ label: string, href?: string }>


[] CollectionOverview
Introductory section for a collection page with title, summary text, and preview image.

- title: string  
- itemCount: number  
- description: string  
- image: string  
- ctaLabel: string  
- ctaHref: string

[] CollectionFind
Displays linked metadata for locating a collection, including identifiers and URLs.

- title?: string (default: "Find this Collection")  
- repository: { label: string, href: string }  
- localId: string  
- ark: string  
- opacUrl?: string  
- findingAidUrl?: string  
- manifestUrl?: { icon?: string, href: string, copyButtonLabel?: string }

# Pages

[] BannerFeatured  
Displays a full-width or responsive image, possibly with optional alt text or caption.
Has a la

- src: string  
- alt?: string  
- layout?: 'full' | 'constrained'  
- direction?: 'left' | 'right'
- decoration?: boolean (e.g. angled stripes or shapes)

[] BlockTitle  
Standalone heading block.

- text: string  
- level?: 'h1' | 'h2' | 'h3'  
- color?: string  
- align?: 'left' | 'center'


[] BlockButtons  
One or more call-to-action buttons in a horizontal or vertical stack.

- buttons: Array<{ label: string, href: string, variant?: 'primary' | 'secondary' }>
- align?: 'left' | 'center'

[] ContentSection  
Flexible container that wraps image, title, text, and buttons in various arrangements.

- image?: BannerFeatured  
- title?: BlockTitle  
- text?: BlockRichText  
- buttons?: BlockButtons  
- reverse?: boolean  
- backgroundColor?: string


[] BlockAnchorNav  
Sidebar or inline nav with jump links to sections on the same page.

- title?: string (e.g. "Topics Covered")  
- items: Array<{ label: string, href: string }>  
- sticky?: boolean



# Missing: 
Filters
ButtonCTA
HeaderMainResponsive
MediaItem
MediaGallery
TableWithHeader
TabToggle


[] SearchFilterButtons  
A component that renders a list of toggle buttons for filter categories, and conditionally includes a single checkbox. Emits events on interaction.

- items: Item[]  
  Array of filter items. Each item should have `inputType`, `label`, `esFieldName`, `isVisible`, and optional `class`.

- singleCheckboxState: boolean  
  Controls the checked state of the optional single checkbox filter.

- toggle(index: number): void  
  Emitted when a toggleable item is clicked.

- update:single-checkbox-state(state: boolean): void  
  Syncs the single checkbox's state with external state.

- single-checkbox-checked(esFieldName: string): void  
  Emitted when the single checkbox is checked or unchecked.

[] SingleCheckbox  
A stylized checkbox component with internal state syncing and emit behavior for two-way binding and tracking user input.

- label: string  
  The visible label displayed next to the checkbox.

- selected: boolean  
  Controls the checked state of the checkbox (v-model compatible).

- update:selected(state: boolean): void  
  Emitted when the checkbox is toggled, for two-way binding.

- input-selected(): void  
  Emitted on user interaction with the checkbox, useful for analytics or additional logic.



[] SectionRemoveSearchFilters  
Displays a list of active search filters with an option to remove them. Filters are parsed from a keyed object of arrays and rendered using `BlockRemoveSearchFilter`.

- filters: { [key: string]: string[] }  
  Object of active filters, where each key maps to an array of selected values.

- update:filters(filters: object): void  
  Emitted when a filter is removed, passing the updated filters object.

- remove-selected(): void  
  Emitted when any filter is removed, useful for triggering external updates.

[] TabList  
A tabbed navigation component with animated glider, keyboard support, dynamic icons, and slot-based content. Active tab state syncs with the route query param `view`.

- alignment: 'left' | 'center' | 'right'  
  Controls alignment of the tab buttons. Default is `'left'`.

- initialTab: number  
  Sets the initially active tab index. Default is `0`.

- <slot name="filters">  
  Optional slot for rendering filter controls above the tab list.

- <slot>  
  Default slot for tab panel content. Each tab is determined by the slot’s `title`, `icon`, and `content` props.

- Tab Items (passed via default slot) must define:
  - title: string – Label for the tab button and used in `aria` attributes.
  - icon: 'icon-calendar' | 'icon-list' – Optional. Maps to a predefined icon.
  - content: VNode – Displayed when the tab is active.

🔁 Behavior:
- Supports keyboard navigation with `ArrowLeft` and `ArrowRight`.
- Clicking a tab updates the `view` query param in the URL.
- The animated glider adapts to tab size and window resizing.
- The component uses the `useTheme` composable to style tabs.
- Provides `activeTabTitle` via Vue `provide`.



[] BlockEventDetail  
Displays date, time, and location details for an event. Supports theming logic and formatting utilities for flexible display.

- startDate?: string  
  The event's start date. Used in formatted display.

- endDate?: string  
  The event's end date. If provided, creates a date range.

- time?: string  
  The event start time (e.g., '13:00'). Formatted for display.

- ongoing: boolean  
  If true, shows 'Ongoing' instead of a specific date.

- locations: BlockEventDetailLocation[]  
  A list of event locations. Each location may include `title`, `url`, `uri`, or `publicUrl`.

 BlockEventDetailLocation object:
  - title: string – Required display label.
  - url/publicUrl/uri?: string – Destination URL for SmartLink.

Behavior:
- Uses `formatDates` and `formatTimes` utility functions.
- Supports themed conditional logic (e.g., showing "Multiple Locations" under the `ftva` theme).
- Opens links in new tabs for `ftva` theme.
- Integrates with `SmartLink` for routing compatibility.

🔌 Slots:
- `<slot>` — Optional slot to render additional content under the main layout.


[] BlockTag  
A compact label or pill-style tag component that optionally displays an icon and supports primary/secondary and highlighted visual states.

- label: string  
  Text displayed within the tag. Defaults to an empty string.

- iconName?: string  
  Optional key for one of the predefined FTVA icons. Maps to an internal icon lookup table.

- isSecondary: boolean  
  Applies secondary styling when true. Defaults to false (primary style).

- isHighlighted: boolean  
  Applies a "highlighted" visual treatment when true. Defaults to false.

Behavior:
- Uses the current theme via `useTheme` to apply scoped styling classes.
- Supports a fixed set of icons (e.g., `SvgIconFilm`, `SvgIconTV`, etc.) mapped via `iconName`.


[] ButtonHide  
A vertically-stacked button that displays an icon above a label. Commonly used for "See Less" or collapse actions. Styled with theme colors and hover transitions.

- text: string  
  Label text displayed under the icon. Defaults to `'See Less'`.

Behavior:
- Renders a decorative molecule stroke behind a centered collapse icon.
- Uses scoped `scss` for positioning, transitions, and hover color changes.
- Built-in hover state transitions icon stroke color and text color.

[] ButtonLink  
A styled anchor/button component that renders a labeled link with optional icons, styling variants, and download behavior. Built on top of SmartLink for internal/external routing.

- to: string  
  The destination URL or route.

- label: string  
  The button's visible text label.

- iconName?: string  
  Used to specify a particular icon. Ignored for internal links. Supports values like `'svg-external-link'`, `'svg-download'`, `'icon-close'`.

- isSecondary: boolean  
  Applies secondary button styling. Default is false.

- isTertiary: boolean  
  Applies tertiary button styling. Default is false.

- isQuaternary: boolean  
  Applies quaternary button styling. Default is false.

- isDownload: boolean  
  If true, adds a `download` attribute to the link and uses a download icon.

- linkTarget?: string  
  Optional target for the link (e.g. `_blank`).

Behavior:
- Icon selection is determined automatically based on link type (`internal`, `external`, `download`) and `iconName`.
- Shows different icon types:
  - `SvgArrowRight` for internal links
  - `SvgExternalLink` for external links
  - `SvgArrowDownload` if `isDownload` is true
  - `IconClose` if `iconName` is `'icon-close'`
- Applies themed classes from `useTheme`.
- Contains a `.hover` span to manage animated or transition-based hover states.

Slots:
- `<slot>` — Optional custom content inside the link (e.g. additional icon or badge).

[] ButtonMore  
A compact call-to-action button with a right arrow icon and decorative background. Commonly used for "See More" interactions.

- text: string  
  Text label for the button. Defaults to `'See More'`.

- to: string  
  Destination URL or route for the `SmartLink`.

Behavior:
- Wraps a `SmartLink` for internal or external routing.
- Displays a molecule stroke graphic and a right arrow icon.
- Designed for compact, centered layouts.

[x] DividerGeneral  
A horizontal divider element with optional style modifiers.

- isBold: boolean  
  Adds a thicker or more prominent visual weight to the divider. Defaults to false.

- isTertiary: boolean  
  Applies an alternate tertiary style variant. Defaults to false.

Behavior:
- Applies dynamic class names based on props: `is-bold`, `is-tertiary`.
- Renders as a styled `<div>` with no content.

[] BlockDivider  
A conditional wrapper that renders a `DividerWayFinder` component based on `block.horizontalDivider`.

- block: FlexibleHorizontalDividerBlock  
  A content block object. If `block.horizontalDivider` is truthy, the divider will render.

Behavior:
- Delegates rendering to the `DividerWayFinder` component.
- Commonly used in page builders or dynamic content regions where dividers are optional.

[] DividerWayFinder  
A themed horizontal divider that adjusts color and style based on either a passed prop or the current route path.

- color?: string  
  Optional section identifier (e.g., `'visit'`, `'about'`, `'help'`, `'ftva'`). If not provided, the section is inferred from the current route path using `getSectionName`.

Behavior:
- Dynamically assigns a class like `color-[section]` to theme the divider.
- Reactively updates when the route changes.
- Uses `useTheme` for additional contextual styling.
- Renders two nested divs: one solid, one dotted, for visual layering.

[] MastheadPrimary  
A branded header section featuring the UCLA Library logo and a search interface.

- linkItems: SearchLinkItemType[]  
  List of quick search links passed to the `SearchHome` component.

- advancedSearchLink: SearchLinkItemType  
  Link configuration for the advanced search option, also passed to `SearchHome`.

Behavior:
- Renders the UCLA Library underline logo using an async SVG import.
- Delegates search functionality to the `SearchHome` child component.
- Typically used as the top section of a homepage or landing page.

[] MastheadSecondary  
A flexible masthead component that supports optional hero imagery, title, rich text content, and visual theming.

- hasMolecules: boolean  
  Controls whether a background molecule graphic is shown (only if no hero image). Default is true.

- title: string (required)  
  The main heading text, rendered as HTML inside an `<h1>` tag.

- text?: string  
  Optional rich text content displayed below the title.

- theme?: string  
  Used to apply specific visual variants (e.g., `'meap'` applies the `theme-meap` class).

- heroImage?: MediaItemType  
  Optional image object to render as a responsive hero image.

Behavior:
- Adds class `has-molecule` when `hasMolecules` is true and no hero image is present.
- Adds class `has-slot` if default slot content is injected (currently tracked but not used in the template).
- Adds `theme-meap` class if `theme` is `'meap'`.
- Renders child components: `ResponsiveImage` for media and `RichText` for description content.

[] HeaderSmart  
A responsive header wrapper that dynamically loads the appropriate header component based on screen width, and syncs navigation data from the global store.

- title: string  
  Optional title passed down to the rendered header component.

Behavior:
- Displays the `SiteBrandBar` at the top.
- Dynamically chooses between `HeaderMain` (desktop) and `HeaderMainResponsive` (mobile) using screen width.
- Reads primary and secondary navigation menus from the global Pinia store (`GlobalStore`).
- Reacts to store updates and screen size changes in real-time.
- Applies `mobile-header` or `desktop-header` class based on layout.

Child components:
- `SiteBrandBar`
- `HeaderMain` or `HeaderMainResponsive`

[] HeaderMain  
The primary desktop header layout, including navigation, search, and optional themed actions like a Donate button.

- primaryItems: NavPrimaryItemType[]  
  List of items for the primary navigation menu, passed to `NavPrimary`.

- secondaryItems: NavSecondaryItemType[]  
  List of items for the secondary navigation menu, passed to `NavSecondary`.

Behavior:
- Uses `useTheme` to determine whether to show optional features:
  - If theme is `'ftva'`, search (`NavSearch`) and a "Donate" button (`ButtonLink`) are shown.
- Passes themed class to the root `<header>`.
- Injects `NavSearch` into the `#additional-menu` slot of `NavPrimary`.
- Injects a "Donate" link into the `#additional-mobile-menu-items` slot if applicable.
- Displays `NavSecondary` only when `secondaryItems` are provided.

Child components:
- `NavPrimary`
- `NavSecondary`
- `NavSearch` (conditional)
- `ButtonLink` (conditional)


[] SiteBrandBar  
A compact branded header strip that displays either the UCLA logo or theme-specific text, with optional call-to-action button support.

Behavior:
- Uses `useTheme` to determine rendering logic and appearance.
  - For theme `'ftva'`:
    - Displays `'UCLA Film & Television Archive'` text instead of the logo.
    - Adds a "Donate" button linking to `/donate`.
  - For other themes:
    - Defaults to rendering the UCLA logo.

- Always links to the UCLA homepage (`https://www.ucla.edu`) in a new tab.
- Includes visually hidden text for accessibility.

Child components:
- `SvgLogoUcla` (conditionally rendered)
- `ButtonLink` (conditionally rendered)

[] FooterLinks  
A themed footer section that renders grouped navigation links fetched from global store state.

Behavior:
- Retrieves `footerLinks` data from the global Pinia store (`GlobalStore.footerLinks.nodes`).
- Expects each node to have:
  - `category`: string – Section heading.
  - `children`: array of links with `name` and `to` values.

- Renders a heading (`<h4>`) for each category and a list of links underneath.
- Falls back to an empty list and logs a warning if no footer data is available.
- Applies theme-based styling classes from `useTheme`.

Child components:
- `SmartLink` – Used for all link rendering.

[x] FooterMain  
The primary footer container that conditionally renders sponsor sections, link groups, subscription forms, and legal text based on theme context.

Behavior:
- Applies a theme-based class via `useTheme`.
- Renders subcomponents based on theme:
  - `FooterSponsor` is shown if no theme is set.
  - `FooterLinks` is shown only if a theme is present.
  - `FooterPrimary` always renders; receives `form` and `isMicrosite` props.
    - `form` is true if the theme is `'ftva'`, enabling a newsletter signup form.
  - `FooterSock` always renders as the final section (e.g. copyright).

Child components:
- `FooterSponsor` (optional)
- `FooterPrimary`
- `FooterLinks` (optional)
- `FooterSock`

[x] FooterSponsor  
Displays a sponsor acknowledgment message and a list of supporting organizations, pulled from global store data.

Behavior:
- Pulls `footerSponsor` data from the Pinia `GlobalStore`.
- Expects `footerSponsor.funders` to be an array of funder objects with:
  - funderName: string
  - funderLogo: object (media asset)
  - funderUrl: string

- If no sponsor data is present, logs a message and renders nothing.
- Always displays static supporting text:
  "The UCLA Library Modern Endangered Archives Program is supported by Arcadia."

Child components:
- `BlockSponsor` – Rendered once per funder in the list.

[x] FooterPrimary  
The primary content area of the site footer. Displays a logo, social media links, press links, and a Mailchimp-powered newsletter signup form. Appearance and content vary by theme.

- form: boolean  
  Controls whether the newsletter subscription form is displayed. Defaults to true.

- isMicrosite: boolean  
  If true, links the logo to the external UCLA Library homepage. If false, links internally to the root path. Defaults to false.

Behavior:
- Pulls social and press links from `footerPrimary` in the Pinia `GlobalStore`.
- Adjusts UI based on theme from `useTheme`. For `ftva`:
  - Displays custom label and message in form.
  - Uses `caretRight` as the submit button icon.
  - Displays branded social media icons (YouTube, Instagram, X/Twitter, Facebook).
- Uses default UCLA Library logo unless theme is `ftva`, in which case a custom logo is rendered.
- Includes invisible spam-trap input for bot protection.

Child components:
- `SmartLink` – Used for internal routing.
- `component :is` – Dynamically renders SVG icons for logos and buttons.

[x] FooterSock  
The bottom-most section of the site footer, displaying copyright and 
additional legal or policy-related links.

Behavior:
- Displays the current year dynamically using JavaScript's `Date` API.
- Pulls footer sock links from the Pinia `GlobalStore` (`footerSock.nodes`).
- Applies theme-based classes via `useTheme`.
- Logs a warning if footer data is missing from the store.

Child components:
- `SmartLink` – Used to render each link with support for external or internal navigation.

[] BlockRichText  
A flexible content block that displays an optional section title and a block of rich text content.

- block: FlexibleRichText  
  Object containing the content and optional title. Should include:
  - sectionTitle?: string – Optional HTML-rendered heading.
  - richText: string – Rich text content to render.

Behavior:
- If `block.sectionTitle` is provided, it is rendered as a styled `<h2>` using `v-html`.
- Delegates rendering of `block.richText` to the `RichText` component.

Child components:
- `RichText`


[] BlockPullQuote  
A stylized block for displaying a quoted passage with optional attribution. Styled according to the current theme.

- text: string  
  Rich text content representing the quote body. Rendered via the `RichText` component.

- attribution?: string  
  Optional attribution text (e.g., author or source). Rendered with a preceding em dash.

Behavior:
- Applies a theme-based class using `useTheme`.
- Renders a wrapper with two sections:
  - `.quote` for the main quoted content.
  - `.attribution-block` for optional attribution text.

Child components:
- `RichText`

[] BlockMediaViewer  
An interactive lightbox-style carousel for displaying a gallery of media items with optional captions, credits, and links. Can render inline or as an overlay modal.

- items: MediaGalleryItemType[] (required)  
  Array of media items. Each item can include:
  - item: media source (image, video, embed)
  - captionTitle?: string
  - captionText?: string
  - credit?: string
  - linkText?: string
  - linkUrl?: string
  - coverImage?: object
  - embedCode?: string

- selectedItem?: number  
  Index of the initially selected slide. Defaults to `0`.

- inline?: boolean  
  If true, the component is rendered inline; otherwise it appears as a modal overlay. Defaults to false.

Emits:
- `closeModal` – Triggered when the user closes the modal.

Behavior:
- Uses `vue3-carousel` for slide navigation and `MediaItem` for individual media rendering.
- Includes custom next/prev controls and a pagination bullet indicator.
- Renders a `SmartLink` button if a media item includes `linkUrl` and `linkText`.
- Applies theming and `object-fit` styling based on the current theme (`cover` for `ftva`, otherwise `contain`).
- Allows additional content injection via a default `<slot>` scoped with `selectionIndex`.

Child components:
- `MediaItem`
- `SmartLink`
- Carousel & Slide (from `vue3-carousel`)
- Various SVG icons (navigation, close, external link, etc.)


[] NavBreadcrumb
A flexible, responsive breadcrumb component that supports both a legacy prop-based pattern and a dynamic route-based pattern. Supports truncation, theming, and mobile optimization.

- to?: string  
  Optional legacy-mode parent route link. Used in conjunction with `parentTitle`.

- parentTitle?: string  
  Optional legacy-mode parent breadcrumb title. Used in conjunction with `to`.

- title?: string  
  Optional final breadcrumb label. Used as the current page label if no route-based title is available.

Behavior:
- Legacy pattern: if all three props (`to`, `parentTitle`, `title`) are provided, it renders a two-item breadcrumb using only those values.
- Dynamic pattern: parses the current route path into individual breadcrumb segments.
- On mobile, displays only the parent breadcrumb.
- On desktop, collapses breadcrumbs if there are more than 4 segments, showing only the first and last 2 with an expandable `...` button.
- Breadcrumb items are normalized (e.g., `hyphenated-path` becomes `hyphenated path`) and decoded.
- Automatically strips trailing date segments (e.g., `00-00-00`) from URLs.
- Emits a link click handler to prevent parent titles from being overridden by the final route-based title.
- Applies theme-based styling from `useTheme`.

Child components:
- `SmartLink` – Used for navigable breadcrumb segments.
- `SvgIconCaretRight` – Shown between breadcrumb segments.

[x] SectionPagination (svebor)  
A responsive, theme-aware pagination component that supports legacy navigation links or dynamically generated page buttons. Works with route query parameters and can be customized with a callback.

- nextTo?: string  
  Optional static link for the "Next" button. If provided, disables dynamic logic.

- previousTo?: string  
  Optional static link for the "Previous" button. If provided, disables dynamic logic.

- pages?: number  
  Total number of pages.

- initialCurrentPage?: number  
  The current active page. Defaults to 1 if not specified.

- generateLinkCallback?: Function  
  Optional callback for generating the `to` link for each page number. Receives `(pageNumber, queryParams)` as arguments.

Emits:
- `changePage(pageNumber: number)` – Triggered when a new page is selected dynamically.

Behavior:
- Calculates how many page buttons fit in the container based on button width and available space.
- If too many pages to show at once, it truncates with `...` and ensures the current page is centered.
- In mobile or constrained views, trims to show minimal buttons.
- Applies `first-page` or `last-page` classes when relevant.
- Handles `SmartLink` routing with fallbacks for legacy props.
- Supports slotless operation with full internal state control.

Child components:
- `SmartLink` – For dynamic and static navigation.
- `SvgIconArrowRight` – Used for navigation arrows.

[] TableRow  
A dynamic and theme-aware table row component that renders a specified number of columns using named slots.

- numCells: number  
  The number of `<td>` cells to render in the row. Defaults to `0`.

Slots:
- `<slot name="column1" />`, `<slot name="column2" />`, etc.  
  Provide content for each column based on its index. The number of columns is defined by `numCells`.

Behavior:
- Applies a theme-based class using `useTheme`.
- Each cell receives a class name like `column-1`, `column-2`, etc., for styling and layout control.
- Does not render cells if `numCells` is `0`.






# Checklist: 

# 📋 Component Checklist

| Component Name             | Developer | Status      | exists? | Notes                          |
|----------------------------|-----------|-------------|---------|--------------------------------|
| ButtonText                 |Svebor     | ☐ Complete  |   [x]   | Needs a font change            |
| DividerGeneral             |Svebor     | ☐ Complete  |   [x]   |                                |
| ButtonStacked              |           | ☐ Complete  |   [ ]   |                                |
| ButtonPageView             |Svebor     | ☐ Complete  |   [ ]   | Made a PR                      |
| ButtonDropdown             |Luka       | ☐ Complete  |   [ ]   |                                |
| ButtonTag                  |Luka       | ☐ Complete  |   [x]   | aka: BlockTag                  |
| ButtonRemoveSearchFilter   |Luka       | ☐ Complete  |   [x]   | aka: BlockRemoveSearchFilter   |
| BreadcrumbPill             |           | ☐ Complete  |   [ ]   |                                |
| BreadcrumbBar              |           | ☐ Complete  |   [ ]   |                                |
| ButtonIconOnly             |           | ☐ Complete  |   [ ]   |                                |
| PaginationControl          |Svebor     | ☐ Complete  |   [x]   | Needs a slight style/functionlity change |
| SectionLabel               |Austin     | ☐ Complete  |   [ ]   |                                |
| ButtonSubLink              |           | ☐ Complete  |   [ ]   |                                |
| LibraryLogoButton          |Austin     | ☐ Complete  |   [ ]   |                                |
| SectionPagination              |Svebor     | ☐ Complete  |   [x]   |Adjusted the styles and a little bit of logic |
| CTAHexButton               |Svebor     | ☐ Complete  |   [x]   |Exists, ready to use            |
| SearchResultsCount         |Svebor     | ☐ Complete  |   [ ]   |Made a PR                       |
| RefineSearchPanel          |           | ☐ Complete  |   [ ]   |                                |
| FiltersDropdown            |           | ☐ Complete  |   [x]   |                                |
| ResultsList                |           | ☐ Complete  |   [ ]   | aka: CategoryList              |
| DropdownSingleSelect       |           | ☐ Complete  |   [x]   |                                |
| SideMenuAccordionPod       |           | ☐ Complete  |   [ ]   |                                |
| ButtonDropdownSearch       |           | ☐ Complete  |   [ ]   |                                |
| ButtonSubCategoryPod       |           | ☐ Complete  |   [ ]   |                                |
| ButtonUCLALibrariesDropdown|           | ☐ Complete  |   [ ]   |                                |
| YearRangeFilter            |           | ☐ Complete  |   [x]   | aka DateFilter?                |
| BentoPod                   |Svebor     | ☐ Complete  |   [ ]   | WIP                            |
| NotesAccordion             |Svebor     | ☐ Complete  |   [ ]   | in a PR                        |
| ExcerptPod                 |           | ☐ Complete  |   [ ]   |                                |
| AssetFeaturedImage         |           | ☐ Complete  |   [ ]   |                                |
| AssetPod                   |           | ☐ Complete  |   [ ]   |                                |
| BlockAsset                 |Austin     | ☐ Complete  |   [ ]   |                                |
| SearchResult               |           | ☐ Complete  |   [x]   |                                |
| BlockCollection            |           | ☐ Complete  |   [ ]   |                                |
| MetadataTable              |           | ☐ Complete  |   [ ]   |                                |
| BlockMediaViewer           |           | ☐ Complete  |   [ ]   |                                |
| BlockRichText              |           | ☐ Complete  |   [ ]   |                                |
| SectionHeader              |           | ☐ Complete  |   [x]   |                                |
| BlockButtonList            |           | ☐ Complete  |   [ ]   |                                |
| GridAssets                 |Austin     | ☐ Complete  |   [ ]   |                                |
| GridCollections            |           | ☐ Complete  |   [ ]   |                                |
| SearchField                |Luka       | ☐ Complete  |   [x]   |                                |
| EntryField                 |Luka       | ☐ Complete  |   [ ]   |                                |
| ButtonSubmit               |Luka       | ☐ Complete  |   [ ]   |                                |
| Flash                      |           | ☐ Complete  |   [ ]   |                                |
| BentoBoxResult             |           | ☐ Complete  |   [ ]   |                                |
| Dragger                    |           | ☐ Complete  |   [ ]   |                                |
| Banner                     |           | ☐ Complete  |   [ ]   |                                |
| Header                     |           | ☐ Complete  |   [x]   | aka: HeaderSite                |
| Footer                     |           | ☐ Complete  |   [x]   |                                |
| NewsletterSignup           |           | ☐ Complete  |   [ ]   |                                |
| DetailHeader               |           | ☐ Complete  |   [ ]   | aka: ItemHeaderBar             |
| DetailMedia                |           | ☐ Complete  |   [ ]   | aka: ViewerMedia               |
| DetailOverview             |           | ☐ Complete  |   [ ]   | aka: MetadataSplitPanel        |
| SectionKeywords            |           | ☐ Complete  |   [ ]   |                                |
| CollectionOverview         |           | ☐ Complete  |   [ ]   |                                |
| CollectionFind             |           | ☐ Complete  |   [ ]   | aka: CollectionReferencePanel  |
| BannerFeatured             |           | ☐ Complete  |   [x]   |                                |
| BlockTitle                 |           | ☐ Complete  |   [ ]   |                                |
| BlockButtons               |           | ☐ Complete  |   [ ]   |                                |
| ContentSection             |           | ☐ Complete  |   [ ]   |                                |
| BlockAnchorNav             |           | ☐ Complete  |   [ ]   | aka: In-page TOC               |
|AlphabeticalBrowseBy        |           | ☐ Complete  |   [x]   |                                | 
