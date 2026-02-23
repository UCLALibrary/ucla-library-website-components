// Mock data matching server format: array of content blocks.
// Each block has: id, typeHandle, sectionTitle, and type-specific fields.
//
// typeHandle values:
// - richText: { richText: "<p>...</p>" } — HTML with figures, images, lists, steps, etc.
// - dlViewer: { manifestUrl: "https://...", caption?: "<p>...</p>" } — IIIF Universal Viewer
//
// Optional: hasOutline: true — wraps block in .outlined-container for visual outline/border

export const mockPageUsingDigitalCollections = {
  pageTitle: 'Using Digital Collections Content with IIIF',

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

  // Server response format: flat array of blocks. Group by sectionTitle for rendering.
  contentBlocks: [
    {
      id: '9715725',
      typeHandle: 'richText',
      sectionTitle: 'A Rich Viewing Experience',
      richText: `<p>The UCLA Library Digital Collections uses <a href="https://universalviewer.io/">Universal Viewer</a> (UV) for displaying images and playing streaming audio and video. Universal Viewer is a IIIF-compliant viewer which supports deep zoom of high-resolution images and allows you to pan, zoom, or rotate images, as well as navigate paginated resources, such as books, manuscripts, or pamphlets.</p>
<p>Zoom, pan, and rotate: Zoom and rotate buttons are located in the top left of the viewer. You can zoom in (+) or out (-) and rotate the image (⟳) in 90-degree increments. If you zoom in closer than 100%, you can click in the viewing area and use your cursor to move the image and pan horizontally and vertically.</p>`,
    },
    {
      id: '9715725b',
      typeHandle: 'dlViewer',
      sectionTitle: 'A Rich Viewing Experience',
      manifestUrl:
                'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002267k/manifest',
      caption:
                '<p><a href="#">Autograph album no. 4</a>, from <a href="#">Five autograph albums belonging to nurse E.F. Raynes Plante</a> and signed by soldiers recuperating at the <a href="#">Red Cross Hospital at 6 Third Avenue, Hove, Sussex, England, 1914-1943, bulk 1914-1918</a>, UCLA Library Digital Collections.</p>',
    },
    {
      id: '9715725c',
      typeHandle: 'richText',
      sectionTitle: 'A Rich Viewing Experience',
      richText:
                '<p>Viewing mode: The view mode icons in the upper right-hand corner of the viewer allow you to toggle between viewing modes: a single image, a book view with facing pages (for paginated items), or a gallery view (when there are multiple images).</p>',
    },
    {
      id: '9715726',
      typeHandle: 'richText',
      sectionTitle: 'Compare Images',
      hasOutline: true,
      richText: `<p>Since IIIF content is interoperable and portable, you can easily compare images from different collections, or even from different institutions, by importing images into a IIIF-enabled viewer that supports comparison, such as the web-based <a href="https://projectmirador.org/">Mirador viewer</a>.</p>
<p>In order to import IIIF resources into other IIIF-enabled viewers or tools, you'll need the item's <a href="https://iiif.io/guides/using_iiif_resources/#what-is-a-iiif-manifest">IIIF Manifest</a>. A IIIF Manifest is a JSON-formatted document that contains all the information about the image (or images in the case of paginated objects) along with information on how the image(s) should be presented inside a viewer. To use the IIIF Manifest, you first need to locate the IIIF Manifest URL for the resources that you wish to compare. For resources in the UCLA Library Digital Collections portal, you will find the IIIF Manifest URL in the "Find this Item" section of the resource's item page.</p>
<p>To copy the IIIF Manifest URL, right click the IIIF logo and select "Copy Link." Clicking on the IIIF logo will open the IIIF Manifest in a new tab in your browser.</p>
<p>A IIIF Manifest URL from our collections will look something like this: <a href="https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0025q3sx/manifest" target="_blank" rel="noreferrer noopener">https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0025q3sx/manifest</a></p>
<p>Once you have your IIIF Manifest URLs, you can import the IIIF-enabled content to Mirador or other IIIF-friendly viewers and tools. Try it out with UCLA Library's <a href="https://iiif.library.ucla.edu/viewers/mirador/">Mirador</a> viewer following these steps:</p>
<ul>
<li>Step 1: Open the UCLA Library <a href="https://iiif.library.ucla.edu/viewers/mirador/">Mirador</a> viewer. Copy the IIIF Manifest URL for one of the resources that you would like to compare.</li>
<li>Step 2: Click on the blue "+ Start Here" button in the top left corner.</li>
<li>Step 3: Click on the blue "+ Add Resource" button at the bottom right corner of the page and paste the IIIF Manifest URL into the text box. Click "Add." The item should now appear in the list of available IIIF resources.</li>
<li>Step 4: Copy the IIIF Manifest URL for the second resource that you would like to compare. Select the blue "+" button in the top left corner. Click the "+ Add Resource" button to import this IIIF resource.</li>
</ul>`,
    },
    {
      id: '9715727',
      typeHandle: 'richText',
      sectionTitle: 'Discover and Collect IIIF Resources',
      richText: `<p>There is no unified search for IIIF resources, but many institutions across the globe have guides for finding IIIF resources within their digital collections. For a list of these resources, visit the IIIF's <a href="https://iiif.io/guides/finding_resources/" target="_blank" rel="noreferrer noopener">Guides to finding IIIF resources</a> page.</p>
<p><a href="https://seige.digital/en/detektiiif/">detektIIIF</a> is a browser extension for Chrome and Firefox that detects IIIF resources (manifests, images, and collections) in websites. It allows you to collect IIIF manifests in a basket and send them to any compatible IIIF application.</p>`,
    },
    {
      id: '9715728',
      typeHandle: 'richText',
      sectionTitle: 'Build Your Own Digital Exhibit',
      richText: `<p>With IIIF Manifests, you can also build your own digital exhibits using items from the <a href="https://digital.library.ucla.edu">UCLA Library Digital Collections</a>. Exhibits can be used to create a narrative around digital resources, recontextualize items in the collections, or highlight a particular history or experience using primary sources from one or more institutional digital collections.</p>
<p>Thanks to the efforts of the IIIF community, there are a number of IIIF-friendly tools that allow you to create exhibits using IIIF, such as <a href="https://minicomp.github.io/wax/">Wax</a>, <a href="https://exhibit.so/">Exhibit.so</a>, <a href="https://www.cogapp.com/storiiies">Storiiies</a>, and <a href="https://collectionbuilder.github.io">Collection Builder</a>.</p>`,
    },
    {
      id: '9715729',
      typeHandle: 'richText',
      sectionTitle: 'Annotate Images',
      richText: '<p>IIIF also supports web annotation of images using the W3C Web Annotation Model. Annotating images requires connecting a dedicated annotation server to a viewing interface, however there are a few IIIF-friendly tools that support annotation through a built-in annotation environment, such as <a href="https://annonatate.herokuapp.com">Annonatate</a> or <a href="https://recogito.pelagios.org/">Recogito</a>. The Mirador viewer has an Annotation plugin, which does require a dedicated annotation server to store annotations, but you can try out the annotation feature using the <a href="https://mirador-annotations.netlify.app/">Mirador Annotations demo</a>.</p>',
    },
    {
      id: '9715730',
      typeHandle: 'richText',
      sectionTitle: 'More IIIF-Friendly Tools and Viewers',
      richText: `<p>There are a variety of IIIF-enabled tools that you can use to work with IIIF resources in addition to the tools mentioned above. Listed here are just a few, but you can explore more options through <a href="https://github.com/IIIF/awesome-iiif">IIIF Awesome's</a> lists of <a href="https://github.com/IIIF/awesome-iiif#image-viewers">Image Viewers</a> and <a href="https://github.com/IIIF/awesome-iiif#exhibition-and-guided-viewing-tools">Exhibition and Guided Viewing Tools</a>.</p>
<ul>
<li><a href="https://readcoop.eu/transkribus/">Transkribus</a> is a comprehensive platform for the digitisation, AI-powered text recognition, transcription and searching of historical documents.</li>
<li><a href="https://recogito.pelagios.org/">Recogito</a> supports annotation of entities such as people, places, and relationships in text and image documents.</li>
<li><a href="https://storiiies.cogapp.com/">Storiiies</a> is a web platform for creating digital stories around a single IIIF resource.</li>
</ul>`,
    },
    {
      id: '9715731',
      typeHandle: 'richText',
      sectionTitle: 'Use and Transform IIIF Images',
      richText:
                '<p>IIIF also supports transformation and embedding of image resources without the use of a IIIF Manifest in a dedicated viewer. A IIIF-enabled image, or even regions of that image, can be embedded in numerous contexts such as web pages, presentation slides, social media, and teaching and learning materials.</p>',
    },
    {
      id: '9715732',
      typeHandle: 'richText',
      sectionTitle: 'The IIIF Image URL',
      richText:
                '<p>Using or transforming a IIIF image resource requires the image\'s IIIF image URL. IIIF image URLs are used in IIIF Manifests to reference the image files that make up the IIIF resource represented by the Manifest, such as a photograph or the individual page images of a book. IIIF image URLs follow a standard syntax and contain parameters at the end that can be edited to transform an image.</p>',
    },
    {
      id: '9715733',
      typeHandle: 'richText',
      sectionTitle: 'Crop Images with the IIIF Image URL',
      richText:
                '<p>IIIF images can be cropped by adjusting the region parameter of a IIIF image URL. The default value of a region is "full" – meaning the full image. You can change this value directly in the URL to a specific pixel region defined by x, y, height, and width.</p>',
    },
    {
      id: '9715734',
      typeHandle: 'richText',
      sectionTitle: 'Resize and Rotate Images with the IIIF URL',
      richText:
                '<p>Images can also be resized and rotated by editing the IIIF image URL size and rotation parameters. When an image is not scaled (resized) the parameter value is "full." An image can be resized by changing the value in the URL to the desired width or height in pixels.</p>',
    },
    {
      id: '9715735',
      typeHandle: 'richText',
      sectionTitle: 'Adjust the Image Quality with the IIIF Image URL',
      richText:
                '<p>IIIF also allows you to change the image "quality" using the IIIF image parameters. The quality parameter determines whether the image is delivered in color, grayscale, or black and white. For example, to render a color image in black and white, change the quality parameter from "default" or "color" to "bitonal".</p>',
    },
    {
      id: '9715736',
      typeHandle: 'richText',
      sectionTitle: 'Embed Images in New Contexts',
      richText:
                '<p>Once you have a IIIF image URL and have transformed it to meet your needs, you can share or embed the resulting image just like you would any other image where you can use a direct image URL. For example: Add the image to a Google slide using the "Insert image from web" option; Include the image in a web page using the HTML img tag; Share the image URL on social media, via email, etc.</p>',
    },
  ],
}

// Helper: group contentBlocks by sectionTitle for rendering
export function groupedSections(
  blocks: Array<{ sectionTitle: string; [key: string]: unknown }>
) {
  const groups = new Map<string, typeof blocks>()
  for (const block of blocks) {
    const key = block.sectionTitle
    if (!groups.has(key))
      groups.set(key, [])
    groups.get(key)!.push(block)
  }
  return Array.from(groups.entries()).map(([title, blocks]) => ({
    title,
    blocks,
  }))
}
