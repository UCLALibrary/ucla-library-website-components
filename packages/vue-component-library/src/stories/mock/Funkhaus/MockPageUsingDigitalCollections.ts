// Mock data for Using Digital Collections Content page (IIIF)
// Structure: intro (title + paragraphs), sectionTitles for PageAnchor/PanelAnchorNav, mainContentHtml (rich text with section ids)

export const mockPageUsingDigitalCollections = {
  pageTitle: 'Using Digital Collections Content with IIIF',

  introContent: `
    <p>The UCLA Digital Library Program works collaboratively within the UCLA Library and with partners to preserve and provide enhanced access to cultural heritage materials. This guide explains how to use the <a href="#">International Image Interoperability Framework (IIIF)</a> with <a href="#">UCLA Library Digital Collections</a>.</p>
    <p>IIIF provides a standard way to view, compare, annotate, and embed high-resolution images across different platforms and tools. For questions, contact <a href="mailto:dlp@library.ucla.edu">dlp@library.ucla.edu</a> or see our <a href="#">copyright policies</a>.</p>
  `,

  // Section titles for "Topics covered" / jump links. IDs are derived as kebab-case (PageAnchor logic).
  sectionTitles: [
    'A Rich Viewing Experience',
    'Compare Images',
    'Discover and Collect IIIF Resources',
    'Build Your Own Digital Exhibit',
    'Annotate Images',
    'More IIIF-Friendly Tools And Viewers',
    'Use And Transform IIIF Images',
    'The IIIF Image Url',
    'Crop Images With The IIIF Image Url',
    'Resize & Rotate Images With The IIIF Image Url',
    'Adjust The Image Quality Using The IIIF Image Url',
    'Embed Images in New Contexts',
  ],

  // Main body: rich text (paragraphs, links, lists) — IIIF / Digital Collections intro
  textIntroduction: `<p>The UCLA Digital Library Program preserves and provides access to local and global cultural heritage materials. We are committed to inclusive digital collections and adopt technologies for sharing and reusing content. A key technology we use is the <a href="https://iiif.io/" target="_blank" rel="noreferrer noopener">International Image Interoperability Framework (IIIF)</a>.</p>
<p>IIIF (pronounced "triple-eye-eff") is a set of open standards for publishing image and audiovisual content on the web as interoperable and portable resources. With IIIF, resources can be reused in new contexts and integrated into IIIF-friendly tools. You can leverage IIIF when using the <a href="#">UCLA Library Digital Collections</a>, including:</p>
<ul>
<li>Navigating rich viewing experiences for photographs, books and manuscripts, archival materials, and other image-based content</li>
<li>Comparing images across collections and institutions</li>
<li>Building digital exhibits</li>
<li>Annotating images</li>
<li>Embedding images in new contexts on the web</li>
</ul>
<p>If you have any questions about or would like more information on reusing UCLA Library Digital Collections materials or IIIF, please contact <a href="mailto:dlp@library.ucla.edu">dlp@library.ucla.edu</a>.</p>
<p><strong>Note:</strong> Copyright laws may apply to materials within our collections, so remember to consult the <a href="#">UCLA Library copyright policies</a> when reusing images.</p>`,
}
