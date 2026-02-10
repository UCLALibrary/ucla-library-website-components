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

  // Sections: one entry per sectionTitles; each section gets an id (kebab-case of title) and content.
  // First section uses DLViewer (manifest URL from DLViewer.stories.ts — Text / paginated item).
  sections: [
    {
      title: 'A Rich Viewing Experience',
      dlViewerManifestUrl: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002267k/manifest',
      introRichText: `<p>The UCLA Library Digital Collections uses Universal Viewer (UV) for displaying images and playing streaming audio and video. Universal Viewer is a IIIF-compliant viewer which supports deep zoom of high-resolution images and allows you to pan, zoom, or rotate images, as well as navigate paginated resources, such as books, manuscripts, or pamphlets.</p>
<p>Zoom, pan, and rotate: Zoom and rotate buttons are located in the top left of the viewer. You can zoom in (+) or out (-) and rotate the image (↻) in 90-degree increments. If you zoom in closer than 100%, you can click in the viewing area and use your cursor to move the image and pan horizontally and vertically.</p>`,
      captionRichText: '<p><a href="#">Autograph album no. 4</a>, from <a href="#">Five autograph albums belonging to nurse E.F. Raynes Plante</a> and signed by soldiers recuperating at the <a href="#">Red Cross Hospital at 6 Third Avenue, Hove, Sussex, England, 1914-1943, bulk 1914-1918</a>, UCLA Library Digital Collections.</p>',
      afterRichText: '<p>Viewing mode: The view mode icons in the upper right-hand corner of the viewer allow you to toggle between viewing modes: a single image, a book view with facing pages (for paginated items), or a gallery view (when there are multiple images).</p>',
    },
    {
      title: 'Compare Images',
      richText: '<p>IIIF enables side-by-side comparison of images from different collections and institutions. Use IIIF-compliant viewers such as Mirador to open multiple manifests and compare items across repositories.</p>',
    },
    {
      title: 'Discover and Collect IIIF Resources',
      richText: '<p>Discover IIIF resources through the UCLA Library Digital Collections and other IIIF-enabled repositories. You can collect manifest URLs to reuse in exhibits, presentations, or custom viewers.</p>',
    },
    {
      title: 'Build Your Own Digital Exhibit',
      richText: '<p>Build custom digital exhibits by embedding IIIF images and viewers in your own sites. Many exhibit platforms and static site generators support IIIF manifests and image APIs.</p>',
    },
    {
      title: 'Annotate Images',
      richText: '<p>IIIF supports annotations that link regions of images to text, other media, or external resources. Annotations can be created and shared using the IIIF Presentation API.</p>',
    },
    {
      title: 'More IIIF-Friendly Tools And Viewers',
      richText: '<p>Beyond Universal Viewer, many tools support IIIF: Mirador for comparison and annotation, Tify for manuscripts, and various image servers and clients. Check the <a href="https://iiif.io/apps-demos/">IIIF community apps</a> for more options.</p>',
    },
    {
      title: 'Use And Transform IIIF Images',
      richText: '<p>The IIIF Image API allows you to request images at different sizes, regions, and rotations. Use the image URL parameters to crop, resize, and adjust quality without downloading the full source file.</p>',
    },
    {
      title: 'The IIIF Image Url',
      richText: '<p>IIIF image URLs follow a standard pattern: base URL plus parameters for region, size, rotation, quality, and format. This allows any IIIF-compliant server to deliver tailored image derivatives on demand.</p>',
    },
    {
      title: 'Crop Images With The IIIF Image Url',
      richText: '<p>Request a specific region of an image using the region parameter (e.g., full, square, or pixel/percentage coordinates). This is useful for thumbnails, detail views, or focusing on a portion of a large image.</p>',
    },
    {
      title: 'Resize & Rotate Images With The IIIF Image Url',
      richText: '<p>Use the size parameter to request width, height, or both; use the rotation parameter to request rotation in degrees. The server returns the image at the requested dimensions and orientation.</p>',
    },
    {
      title: 'Adjust The Image Quality Using The IIIF Image Url',
      richText: '<p>Control output quality and format with the quality parameter (e.g., color, gray, bitonal) and the format parameter (e.g., jpg, png, webp). This helps balance file size and appearance for your use case.</p>',
    },
    {
      title: 'Embed Images in New Contexts',
      richText: '<p>Embed IIIF images in websites, exhibits, or applications by using the image URL or an IIIF viewer. Many content management systems and static generators support IIIF embedding via iframe or native integration.</p>',
    },
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
