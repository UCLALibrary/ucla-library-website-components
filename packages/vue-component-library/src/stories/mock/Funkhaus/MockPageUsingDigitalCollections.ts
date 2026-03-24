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
      needsDivider: true,
      sectionTitle: 'A Rich Viewing Experience',
      richText: `<p>The UCLA Library Digital Collections uses <a href="https://universalviewer.io/">Universal Viewer</a> (UV) for displaying images and playing streaming audio and video. Universal Viewer is a IIIF-compliant viewer which supports deep zoom of high-resolution images and allows you to pan, zoom, or rotate images, as well as navigate paginated resources, such as books, manuscripts, or pamphlets.</p>
<p>Zoom, pan, and rotate: Zoom and rotate buttons are located in the top left of the viewer. You can zoom in (+) or out (-) and rotate the image (⟳) in 90-degree increments. If you zoom in closer than 100%, you can click in the viewing area and use your cursor to move the image and pan horizontally and vertically.</p>`,
    },
    {
      id: '9715725b',
      typeHandle: 'dlViewer',
      needsDivider: false,
      manifestUrl:
                'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002267k/manifest',
      caption:
                '<p><a href="#">Autograph album no. 4</a>, from <a href="#">Five autograph albums belonging to nurse E.F. Raynes Plante</a> and signed by soldiers recuperating at the <a href="#">Red Cross Hospital at 6 Third Avenue, Hove, Sussex, England, 1914-1943, bulk 1914-1918</a>, UCLA Library Digital Collections.</p>',
    },
    {
      id: '9715725c',
      typeHandle: 'richText',
      needsDivider: false,
      richText:
                '<p>Viewing mode: The view mode icons in the upper right-hand corner of the viewer allow you to toggle between viewing modes: a single image, a book view with facing pages (for paginated items), or a gallery view (when there are multiple images).</p>',
    },
    {
      id: '9715726',
      typeHandle: 'richText',
      sectionTitle: 'Compare Images',
      needsDivider: true,
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
      needsDivider: true,
      sectionTitle: 'Discover and Collect IIIF Resources',
      richText: `<p>There is no unified search for IIIF resources, but many institutions across the globe have guides for finding IIIF resources within their digital collections. For a list of these resources, visit the IIIF's <a href="https://iiif.io/guides/finding_resources/" target="_blank" rel="noreferrer noopener">Guides to finding IIIF resources</a> page.</p>
<p><a href="https://seige.digital/en/detektiiif/">detektIIIF</a> is a browser extension for Chrome and Firefox that detects IIIF resources (manifests, images, and collections) in websites. It allows you to collect IIIF manifests in a basket and send them to any compatible IIIF application.</p>`,
    },
    {
      id: '9715728',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'Build Your Own Digital Exhibit',
      richText: `<p>With IIIF Manifests, you can also build your own digital exhibits using items from the <a href="https://digital.library.ucla.edu">UCLA Library Digital Collections</a>. Exhibits can be used to create a narrative around digital resources, recontextualize items in the collections, or highlight a particular history or experience using primary sources from one or more institutional digital collections.</p>
<p>Thanks to the efforts of the IIIF community, there are a number of IIIF-friendly tools that allow you to create exhibits using IIIF, such as <a href="https://minicomp.github.io/wax/">Wax</a>, <a href="https://exhibit.so/">Exhibit.so</a>, <a href="https://www.cogapp.com/storiiies">Storiiies</a>, and <a href="https://collectionbuilder.github.io">Collection Builder</a>.</p>`,
    },
    {
      id: '9715729',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'Annotate Images',
      richText:
                '<p>IIIF also supports web annotation of images using the W3C Web Annotation Model. Annotating images requires connecting a dedicated annotation server to a viewing interface, however there are a few IIIF-friendly tools that support annotation through a built-in annotation environment, such as <a href="https://annonatate.herokuapp.com">Annonatate</a> or <a href="https://recogito.pelagios.org/">Recogito</a>. The Mirador viewer has an Annotation plugin, which does require a dedicated annotation server to store annotations, but you can try out the annotation feature using the <a href="https://mirador-annotations.netlify.app/">Mirador Annotations demo</a>.</p>',
    },
    {
      id: '9715730',
      typeHandle: 'richText',
      needsDivider: true,
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
      needsDivider: true,
      sectionTitle: 'Use and Transform IIIF Images',
      richText:
                '<p>IIIF also supports transformation and embedding of image resources without the use of a IIIF Manifest in a dedicated viewer. A IIIF-enabled image, or even regions of that image, can be embedded in numerous contexts such as web pages, presentation slides, social media, and teaching and learning materials.</p>',
    },
    {
      id: '9715732',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'The IIIF Image URL',
      richText:
                '<p>Using or transforming a IIIF image resource requires the image\'s IIIF image URL. IIIF image URLs are used in IIIF Manifests to reference the image files that make up the IIIF resource represented by the Manifest, such as a photograph or the individual page images of a book. IIIF image URLs follow a standard syntax and contain parameters at the end that can be edited to transform an image.</p>',
    },
    {
      id: '9715733',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'Crop Images with the IIIF Image URL',
      richText:
                '<p>IIIF images can be cropped by adjusting the region parameter of a IIIF image URL. The default value of a region is "full" – meaning the full image. You can change this value directly in the URL to a specific pixel region defined by x, y, height, and width.</p>',
    },
    {
      id: '9715734',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'Resize and Rotate Images with the IIIF URL',
      richText:
                '<p>Images can also be resized and rotated by editing the IIIF image URL size and rotation parameters. When an image is not scaled (resized) the parameter value is "full." An image can be resized by changing the value in the URL to the desired width or height in pixels.</p>',
    },
    {
      id: '9715735',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'Adjust the Image Quality with the IIIF Image URL',
      richText:
                '<p>IIIF also allows you to change the image "quality" using the IIIF image parameters. The quality parameter determines whether the image is delivered in color, grayscale, or black and white. For example, to render a color image in black and white, change the quality parameter from "default" or "color" to "bitonal".</p>',
    },
    {
      id: '9715736',
      typeHandle: 'richText',
      needsDivider: true,
      sectionTitle: 'Embed Images in New Contexts',
      richText:
                '<p>Once you have a IIIF image URL and have transformed it to meet your needs, you can share or embed the resulting image just like you would any other image where you can use a direct image URL. For example: Add the image to a Google slide using the "Insert image from web" option; Include the image in a web page using the HTML img tag; Share the image URL on social media, via email, etc.</p>',
    },
  ],
}

// Full IIIF Guide content blocks (with figures, images, detailed rich text)
export const mockPageUsingDigitalCollectionsIIIFGuide = {
  pageTitle: 'Using Digital Collections Content with IIIF',
  textIntroduction: mockPageUsingDigitalCollections.textIntroduction,
  contentBlocks: [
    {
      id: '4699475',
      typeHandle: 'richText',
      richText: `<p>
 The UCLA Library Digital Collections uses <a href="https://universalviewer.io/">Universal Viewer</a>
 (UV) for displaying images and playing streaming audio and video. 
Universal Viewer is a IIIF-compliant viewer which supports deep zoom of 
high-resolution images and allows you to pan, zoom, or rotate images, as
 well as navigate paginated resources, such as books, manuscripts, or 
pamphlets.
 </p>
<p>Zoom, pan, and rotate: Zoom and rotate buttons are located in the top left of the viewer. You can zoom in (+) or out (-)
 and rotate the image (⟳) in 90-degree increments. If you zoom in closer
 than 100%, you can click in the viewing area and use your cursor to 
move the image and pan horizontally and vertically.</p>
<figure>
 <img alt="A GIF demonstrating the zoom, rotate, and pan functions on a page image from an autograph album" class="static-page__image static-page__image--ursus" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_uv-zoom-35c05b49ad8cfcc2da22e4afa25289bdff90b2ee8aaace1dd578f8a31f17a720.gif" /><figcaption class="static-page_fig-caption--ursus"><a href="https://digital.library.ucla.edu/catalog/ark:/21198/n12k6g" class="ur-link">Autograph album no. 4</a>, from <a href="https://digital.library.ucla.edu/catalog/ark:/21198/n1t31k" class="ur-link">Five
 autograph albums belonging to nurse E.F. Raynes Plante and signed by 
soldiers recuperating at the Red Cross Hospital at 6 Third Avenue, Hove,
 Sussex, England, 1914-1943, bulk 1914-1918</a>, UCLA Library Digital Collections.</figcaption>
 </figure>
<p>Viewing mode: The view mode
 icons in the upper right-hand corner of the viewer allow you to toggle 
between viewing modes: a single image, a book view with facing pages 
(for paginated items), or a gallery view (when there are multiple 
images).</p>
<figure><img alt="A GIF demonstrating the different view modes." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_uv-views-d7c6c0167b2743201e26db39a2cf3dc230c7641f01bf8029d0784a4eb89742dd.gif" /></figure>
<p>Navigation of paginated objects: The Contents
 panel (on the left side of the viewer) displays thumbnail images of 
each image in sequence. You can browse the thumbnails to select specific
 pages of a resource. You can minimize the Contents panel using the double arrow (&lt;&lt;) on the panel's top right side. The page navigation
 icons located in the center of the top bar of the viewer also allow you
 to page through an item, jump to the first or last image, or choose a 
specific image in the sequence.</p>
<figure><img alt="A GIF demonstrating navigation of autograph album pages via thumbnail images in the UV "Contents" panel." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_uv-contents-e26d75cdcec513d56db0922b0a10e2810106307b17adeb0ada28c11c66a570f1.gif" /></figure>
<p>Full screen: Clicking on the frame icon in the lower right-hand corner will pop the viewer out of the webpage for a full screen viewing experience.</p>
<figure><img alt="Screenshot of an album displayed on Universal Viewer frame icon circled in red on the lower righhand corner of the screen." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_uv-fullscreen-5cc0c030d3a7866bc4dad50344fdce52db6d0a8a4686a4890e6cf84efb535122.png" /></figure>
<p>Download images:
 The download icon in the lower left-hand corner gives you the option to
 download the image displayed in the main viewing area. After clicking 
on the download icon, a white download menu will appear. Click on the 
"Download" button to open the image in a new tab in your web browser. 
You can then download the image using your browser's Save command. The 
URL for the image can also be copied and used in new contexts, which is 
covered in the "Reusing IIIF Images" section below.</p>
<figure><img alt="Left screenshot displays an album page displayed on Universal Viewer with the download icon circled in red at the bottom left of the screen. Right screenshot displays the download menu that appears after clicking on the icon." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_download-images-32df7f7351097c3565afb320116fac7a19aa31f5389a14eabe49f72bfde200bc.png" /></figure>`,
      sectionTitle: 'A Rich Viewing Experience',
    },
    {
      id: '4699476',
      typeHandle: 'richText',
      richText: `<p>Since IIIF 
content is interoperable and portable, you can easily compare images 
from different collections, or even from different institutions, by 
importing images into a IIIF-enabled viewer that supports comparison, 
such as the web-based <a href="https://projectmirador.org/">Mirador viewer</a>.</p>
<p>In order to import IIIF resources into other IIIF-enabled viewers or tools, you'll need the item's <a href="https://iiif.io/guides/using_iiif_resources/#what-is-a-iiif-manifest">IIIF Manifest</a>.
 A IIIF Manifest is a JSON-formatted document that contains all the 
information about the image (or images in the case of paginated objects)
 along with information on how the image(s) should be presented inside a
 viewer. Luckily, you do not need to be able to read or understand a IIIF Manifest
 to make use of it! Each IIIF Manifest represents a discrete resource, 
such as a photograph or a newspaper issue with multiple pages.</p>
<p>To use the IIIF Manifest, you first need to locate the IIIF Manifest URL
 for the resources that you wish to compare. For resources in the UCLA 
Library Digital Collections portal, you will find the IIIF Manifest URL 
in the "Find this Item" section of the resource's item page.</p>
<figure><img alt="Screenshot of the - Find This Item - section from the item record for the mural Our People." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_manifest-url-f68b66fd346ba5ac8168f711a88c007edfd42939226331e46cce08a5e2e2786b.png" /></figure>
<p> To copy the IIIF Manifest URL, right click the IIIF logo </p><figure><img alt="iiif logo icon" width="20" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_logo-e1dadb54901efd6d8b7486330ccb3d3f6fba48b6831f4709c8c883024c1d1417.png" /></figure>
<p> and select "Copy Link." Clicking on the IIIF logo will open the IIIF Manifest in a new tab in your browser.</p>
<p>A IIIF Manifest URL from our collections will look something like this: <a href="https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0025q3sx/manifest" target="_blank" rel="noreferrer noopener">https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0025q3sx/manifest</a></p>
<p>Once you 
have your IIIF Manifest URLs, you can import the IIIF-enabled content to
 Mirador or other IIIF-friendly viewers and tools. Try it out with UCLA 
Library's <a href="https://iiif.library.ucla.edu/viewers/mirador/">Mirador</a> viewer following these steps:</p>
<p> </p>
<ul>
 <li>
 Step 1: Open the UCLA Library <a href="https://iiif.library.ucla.edu/viewers/mirador/">Mirador</a> viewer. Copy the IIIF Manifest URL for one of the resources that you would like to compare, for example <a href="https://digital.library.ucla.edu/catalog/ark:/21198/zz0025q3sx">the mural "Our People"</a> from the <a href="https://digital.library.ucla.edu/catalog/ark:/21198/zz001ndq5p">Nancy Tovar Murals of East LA Collection</a>.
 </li>

 <li>
 Step 2: Click on the blue " + Start Here " button in the top left corner.
 </li>

 <li>
 Step 3: Click on the blue
 " + Add Resource " button at the bottom right corner of the page and 
paste the IIIF Manifest URL into the text box. Click "Add." The item 
should now appear in the list of available IIIF resources. Click on the 
resource you just added to open it in Mirador.
 </li>

 <li><img alt="A GIF demonstrating how to import a IIIF Manifest into Mirador." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_import-manifest-0d738e91e2356f15258ec49408ab83f20fb6688be14d57a1883d3f03a30aa319.gif" /></li>

 <li>
 Step 4: Copy the IIIF Manifest URL for the second resource that you would like to compare, for example a <a href="https://digital.library.ucla.edu/catalog/ark:/21198/zz0025nnnp">the mural "Untitled" by El Congreso de Artistas Cosmicos de las Americas de San Diego</a>
 from the same collection. Select the blue " + " button in the top left 
corner. Click the " + Add Resource " button to import this IIIF 
resource. You can add more items to the list of resources and compare 
multiple images side-by-side in the Mirador viewer.
 </li>

 <li><img alt="A GIF demonstrating how to open two different images in the Mirador viewer." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_open-2-images-5781dd022cf3a9596f3648619456835026474b77609295a5389da74effd7e394.gif" /></li>
 </ul>`,
      sectionTitle: 'Compare Images',
    },
    {
      id: '4699477',
      typeHandle: 'richText',
      richText: `<p>There is no 
unified search for IIIF resources, but many institutions across the 
globe have guides for finding IIIF resources within their digital 
collections. For a list of these resources, visit the IIIF's <a href="https://iiif.io/guides/finding_resources/" target="_blank" rel="noreferrer noopener">Guides to finding IIIF resources</a> page.</p>
<p><a href="https://seige.digital/en/detektiiif/">detektIIIF</a>
 is a browser extension for Chrome and Firefox that detects IIIF 
resources (manifests, images, and collections) in websites. It allows 
you to collect IIIF manifests in a basket and send them to any 
compatible IIIF application.</p>
<figure><img alt="Screenshot of detekt iiif selecting a basket" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_detektiiif-0452505f2b9ca516d5a3125f52430cb3b5403255b710998a7824f1c60d29ff06.jpg" /></figure>`,
      sectionTitle: 'Discover and Collect IIIF Resources',
    },
    {
      id: '4699478',
      typeHandle: 'richText',
      richText: `<p>With IIIF Manifests, you can also build your own digital exhibits using items from the <a href="https://digital.library.ucla.edu">UCLA Library Digital Collections</a>.
 Exhibits can be used to create a narrative around digital resources, 
recontextualize items in the collections, or highlight a particular 
history or experience using primary sources from one or more 
institutional digital collections. Thanks to the efforts of the IIIF 
community, there are a number of IIIF-friendly tools that allow you to 
create exhibits using IIIF, such as <a href="https://minicomp.github.io/wax/">Wax</a>, <a href="https://exhibit.so/">Exhibit.so</a>, <a href="https://www.cogapp.com/storiiies">Storiiies</a>, and <a href="https://collectionbuilder.github.io">Collection Builder</a>.</p>
<p><a href="https://exhibit.so/">Exhibit.so</a>,
 a browser-based IIIF storytelling application, allows you to build 
exhibits using IIIF Manifests with just a few clicks. Exhibits made with
 Exhibit.so can be shared via a URL or can be embedded into any web page
 using HTML. See the exhibit <a href="https://www.exhibit.so/exhibits/zgUYUqaUgin5g7oHnhic">"Eadweard Muybridge's Animal Locomotion."</a> To create your own exhibit, follow the Exhibit.so's <a href="https://exhibit.so/docs/creating-an-exhibit">Creating an Exhibit guide</a>.</p>`,
      sectionTitle: 'Build Your Own Digital Exhibit',
    },
    {
      id: '4699479',
      typeHandle: 'richText',
      richText: `<p>IIIF also 
supports web annotation of images using the W3C Web Annotation Model. 
Annotating images requires connecting a dedicated annotation server to a
 viewing interface, however there are a few IIIF-friendly tools that 
support annotation through a built-in annotation environment, such as <a href="https://annonatate.herokuapp.com">Annonatate</a> or <a href="https://recogito.pelagios.org/">Recogito</a>.
 The Mirador viewer has an Annotation plugin, which does require a 
dedicated annotation server to store annotations, but you can try out 
the annotation feature using the <a href="https://mirador-annotations.netlify.app/">Mirador Annotations demo</a>.
 Try importing a resource into the Annotations demo using a IIIF 
Manifest URL and annotate some images using the annotation tools 
provided.</p>
<figure><img src="https://digital.library.ucla.edu/assets/static/ucla_iiif_annotation-701f242ed56bd303e4a95f3877ab74bc3ac2216df35ecbb6655e202894def3e6.png" /></figure>`,
      sectionTitle: 'Annotate Images',
    },
    {
      id: '4699480',
      typeHandle: 'richText',
      richText: `<p>There are a
 variety of IIIF-enabled tools that you can use to work with IIIF 
resources in addition to the tools mentioned above. Listed here are just
 a few, but you can explore more options through <a href="https://github.com/IIIF/awesome-iiif">IIIF Awesome's</a> lists of <a href="https://github.com/IIIF/awesome-iiif#image-viewers">Image Viewers</a> and <a href="https://github.com/IIIF/awesome-iiif#exhibition-and-guided-viewing-tools">Exhibition and Guided Viewing Tools</a>, or on the IIIF website's <a href="https://iiif.io/get-started/#end-users">"Resources for end users"</a>.</p>
<ul>
 <li><a href="https://readcoop.eu/transkribus/">Tranksribus</a>
 is a comprehensive platform for the digitisation, AI-powered text 
recognition, transcription and searching of historical documents – from 
any place, any time, and in any language.</li>

 <li><a href="https://recogito.pelagios.org/">Recogito</a>
 supports annotation of entities such as people, places, and 
relationships in text and image documents that can be exported for use 
in other data applications.</li>

 <li><a href="https://storiiies.cogapp.com/">Storiiies</a> is a web platform for creating digital stories around a single IIIF resource.</li>

 <li><a href="http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/">IIIF Curation Viewer</a>
 is an image viewer compliant with IIIF standards. In addition to zoom 
and page-view capabilities, it offers a light box feature that allows 
users to cut and curate parts of images from multiple IIIF objects.</li>
 </ul>`,
      sectionTitle: 'More IIIF-Friendly Tools and Viewers',
    },
    {
      id: '4699481',
      typeHandle: 'richText',
      richText:
                '<p>IIIF also supports transformation and embedding of image resources without the use of a IIIF Manifest in a dedicated viewer. A IIIF-enabled image, or even regions of that image, can be embedded in numerous contexts such as web pages, presentation slides, social media, and teaching and learning materials. In this way, you can easily share curated and transformed content in new contexts across the web using the IIIF image URL.</p>',
      sectionTitle: 'Use and Transform IIIF Images',
    },
    {
      id: '4699482',
      typeHandle: 'richText',
      richText: `<p>Using or transforming a IIIF image resource requires the image's IIIF image URL.
 IIIF image URLs are used in IIIF Manifests to reference the image files
 that make up the IIIF resource represented by the Manifest, such as a 
photograph or the individual page images of a book. Finding the IIIF 
image URLs for a resource once required a deeper look within a IIIF 
Manifest, but now there are tools, such as the <a href="https://seige.digital/en/detektiiif/" target="_blank" rel="noreferrer noopener">detekIIIF</a>
 browser plugin mentioned above and the Universal Viewer's download 
option, that will allow you to find the IIIF image URL for an image in 
order to embed or transform an image. </p>
<p>IIIF image URLs follow a standard syntax and contain parameters at the end that can be edited to transform an image:<br />{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}</p>
<p> Here is an example IIIF image URL for a <a href="https://digital.library.ucla.edu/catalog/ark:/13030/hb300005c2">photograph of the political activist and philosopher, Angela Davis</a>:<br /></p><figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F13030%2Fhb300005c2/full/3072,/0/default.jpg" alt="" /></figure>
<p>Let's take a look at a IIIF image URL in a IIIF Manifest. The <a href="https://ingest.iiif.library.ucla.edu/ark%3A%2F13030%2Fhb300005c2/manifest?_ga=2.43933285.1578987917.1661118954-1130329856.1655829556">IIIF Manifest for the Angela Davis image</a> contains the IIIF image URL in the "resource.@id" property (circled in red).</p>
<figure><img alt="Screenshot of the IIIF image URL in the resource at id property" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_manifest-properties-10631d30338af49dfc09085b513956a2e59c123159658e3050ef5d3f7876fb81.png" /></figure>
<p>There is a lot of information in a IIIF Manifest, so the image URL can be tricky to find. Tip: Use your browser's "Find" or "Search page" function (Ctrl + F, etc.) to look for ".jpg" in the Manifest when you are viewing a IIIF Manifest.</p>
<p>Of course,
 if you are looking at a Manifest with a lot of images, such as for a 
book with tens or hundreds of page images, it can be difficult to find 
the IIIF image URL for a specific image. Luckily, the IIIF Community has
 developed some wonderful tools to help you locate IIIF image URLs 
easily. The easiest way to find a IIIF image URL in the UCLA Library 
Digital Collections is to use the "Download" option for the image you 
would like to use. See the "Download images" section above for details.</p>
<p>Another useful tool is the <a href="https://www.lizmfischer.com/iiif-tools/manifest" target="_blank" rel="noreferrer noopener">IIIF Manifest Explorer</a>
 by Liz Fischer. This tool will display all of the images from a IIIF 
Manifest and their corresponding IIIF image URLs as a browsable list. 
Just input a IIIF Manifest URL to generate the list of images. From the 
links available, choose the "Direct image URL" option for the IIIF image
 URL as highlighted in the screenshot below.</p>
<figure><img alt="Screenshot of the IIIF image URL in the resource at id property" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_manifest-explorer-ac24df665668593f73eeb1e67334eb5e09bf50a3d6627cfb7372412893eaac57.png" /></figure>
<p>The 
detektIIIF browser plugin discussed above is also an easy way to find 
IIIF images URLs that are present on your current web page.</p>
<p>Now that 
you can find your IIIF image URLs, you are ready to transform your 
images. Some of the transformations you can achieve using only the IIIF 
image URL include adjusting the region (cropping), adjusting the size or
 rotation, and adjusting the image quality.</p>`,
      sectionTitle: 'The IIIF Image URL',
    },
    {
      id: '4699483',
      typeHandle: 'richText',
      richText: `<p>IIIF images can be cropped by adjusting the region parameter of a IIIF image URL:<br />{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}</p>
<p>The 
default value of a region is "full" – meaning the full image. You can 
change this value directly in the URL to a specific pixel region defined
 by x, y, height, and width.</p>
<figure><img alt="" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_image-region-8ed03dcfc3336a091094be1a226724abd005d137f8b78bbb1328a687247322a0.gif" /></figure>
<p>Guessing at and inputting the pixel dimension for a cropped region isn't ideal, but you can use tools such as the <a href="https://ncsu-libraries.github.io/iiif-crop-tool/" target="_blank" rel="noreferrer noopener">NCSU Libraries Cropping Tool</a> to crop your images. You will need to provide a IIIF image URL, such as this one from <a href="https://digital.library.ucla.edu/catalog/ark:/21198/n12k6g">E.F. Raynes Plante Autograph album No. 4</a>,
 and drag the cropping box to enclose the region you need. The Cropping 
Tool will generate an updated IIIF image URL that you copy for use in 
another context. Note that as you change the selected area and zoom in 
and out, the URL in the left-hand column also changes. If you paste this
 new URL into your browser, you will see the cropped version of your 
image.</p>
<figure><img alt="" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_crop-tool-9b494d8635cf3ccb01c1651281146fba3587c79266fd1433ea97def4e98b0713.png" /></figure>`,
      sectionTitle: 'Crop Images with the IIIF Image URL',
    },
    {
      id: '4699484',
      typeHandle: 'richText',
      richText: `<p>Images can also be resized and rotated by editing the IIIF image URL size and rotation parameters:<br />{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}</p>
<p>For example:<br /></p>
<figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/default.jpg" alt="" /></figure>
<ul class="outlined-container">
 <li>
 <p>When an 
image is not scaled (resized) the parameter value is "full." An image 
can be resized by changing the value in the URL to the desired width 
(w,) or height (,h) in pixels, for example:</p>

 <p>Setting the exact width of the image to 300 px:<br />.../full/300,/0/default.jpg</p>

 <p>Or setting the exact height of the image to 500 px:<br />.../full/,500/0/default.jpg</p>

 <p>The size can also be expressed as a percentage, for example 50% of the original size:<br />.../full/pct:50/0/default.jpg</p>

 <p>For more information on resizing IIIF images using the URL parameters, see the <a href="https://iiif.io/api/image/2.0/#size" target="_blank" rel="noreferrer noopener">IIIF Image API Size Parameter documentation</a>.</p>

 <p>You can 
rotate the image by changing the rotation value anywhere from 0 to 360 
degrees. For example, an image rotated 180 degrees (halfway):<br />.../full/&gt;180/default.jpg</p>

 <p>For more information on rotating IIIF images using the URL parameters, see the <a href="https://iiif.io/api/image/2.0/#rotation" target="_blank" rel="noreferrer noopener">IIIF Image API Rotation Parameter documentation</a>.</p>

 <img alt="Screenshot of image shown upsidedown" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_rotated-image-39558fafd8a3e258f1029ed32f7e8f3ff56df968cee2b30b352a4e3b48228a0c.png" />
 </li>
 </ul>`,
      sectionTitle: 'Resize and Rotate Images with the IIIF URL',
    },
    {
      id: '4699485',
      typeHandle: 'richText',
      richText: `<p>IIIF also allows you to change the image "quality" using the IIIF image parameters. The quality parameter determines whether the image is delivered in color, grayscale, or black and white. For example, to render a color image in black and white, change the quality parameter from "default" or "color" to "bitonal". Note that images originally in greyscale and black and white cannot be rendered in color.<br /></p>





<figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/bitonal.jpg" alt="" /></figure>
<p> To generate an image in grayscale, set the parameter to "gray":<br /></p><figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/gray.jpg" alt="" /></figure>
<figure><img alt="Screenshot of image shown in grayscale" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_grayscale-image-48c59d2aa761deb967e66b03bd666c996850d2fdba515ff7ef496840f85cd179.png" /></figure>
<p>If you want to experiment with adjusting the IIIF image URL parameters, try the <a href="https://www.learniiif.org/image-api/playground.html" target="_blank" rel="noreferrer noopener">IIIF Image API Playground</a>.</p>`,
      sectionTitle: 'Adjust the Image Quality with the IIIF Image URL',
    },
    {
      id: '4699486',
      typeHandle: 'richText',
      richText: `<p>Once you 
have a IIIF image URL and have transformed it to meet your needs, you 
can share or embed the resulting image just like you would any other 
image where you can use a direct image URL. For example:</p>
<ul>
 <li>Add the image to a Google slide using the "Insert image from web" option</li>
 <li>Include the image in a web page using the HTML &lt;img&gt; tag</li>
 <li>Share the image URL on social media, via email, etc.</li>
 </ul>`,
      sectionTitle: 'Embed Images in New Contexts',
    },
  ],
}

// Modified content blocks for the IIIF Guide story
export const mockPageUsingDigitalCollectionsIIIFGuideModified = {
  pageTitle: 'Using Digital Collections Content with IIIF - Modified',
  textIntroduction: mockPageUsingDigitalCollections.textIntroduction,
  contentBlocks: [
    {
      id: '4699475',
      typeHandle: 'richText',
      richText: `<p>
 The UCLA Library Digital Collections uses <a href="https://universalviewer.io/">Universal Viewer</a>
 (UV) for displaying images and playing streaming audio and video. 
Universal Viewer is a IIIF-compliant viewer which supports deep zoom of 
high-resolution images and allows you to pan, zoom, or rotate images, as
 well as navigate paginated resources, such as books, manuscripts, or 
pamphlets.
 </p>
<p>Zoom, pan, and rotate: Zoom and rotate buttons are located in the top left of the viewer. You can zoom in (+) or out (-)
 and rotate the image (⟳) in 90-degree increments. If you zoom in closer
 than 100%, you can click in the viewing area and use your cursor to 
move the image and pan horizontally and vertically.</p>
<figure class="full-width">
 <img alt="A GIF demonstrating the zoom, rotate, and pan functions on a page image from an autograph album" class="static-page__image static-page__image--ursus" src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/gray.jpg" /><figcaption class="static-page_fig-caption--ursus"><a href="https://digital.library.ucla.edu/catalog/ark:/21198/n12k6g" class="ur-link">Autograph album no. 4</a>, from <a href="https://digital.library.ucla.edu/catalog/ark:/21198/n1t31k" class="ur-link">Five
 autograph albums belonging to nurse E.F. Raynes Plante and signed by 
soldiers recuperating at the Red Cross Hospital at 6 Third Avenue, Hove,
 Sussex, England, 1914-1943, bulk 1914-1918</a>, UCLA Library Digital Collections.</figcaption>
 </figure>
<p>Viewing mode: The view mode
 icons in the upper right-hand corner of the viewer allow you to toggle 
between viewing modes: a single image, a book view with facing pages 
(for paginated items), or a gallery view (when there are multiple 
images).</p>
<figure class="full-width"><img alt="A GIF demonstrating the different view modes." src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/gray.jpg" /></figure>
<p>Navigation of paginated objects: The Contents
 panel (on the left side of the viewer) displays thumbnail images of 
each image in sequence. You can browse the thumbnails to select specific
 pages of a resource. You can minimize the Contents panel using the double arrow (&lt;&lt;) on the panel's top right side. The page navigation
 icons located in the center of the top bar of the viewer also allow you
 to page through an item, jump to the first or last image, or choose a 
specific image in the sequence.</p>
<figure><img alt="A GIF demonstrating navigation of autograph album pages via thumbnail images in the UV "Contents" panel." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_uv-contents-e26d75cdcec513d56db0922b0a10e2810106307b17adeb0ada28c11c66a570f1.gif" /></figure>
<p>Full screen: Clicking on the frame icon in the lower right-hand corner will pop the viewer out of the webpage for a full screen viewing experience.</p>
<figure><img alt="Screenshot of an album displayed on Universal Viewer frame icon circled in red on the lower righhand corner of the screen." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_uv-fullscreen-5cc0c030d3a7866bc4dad50344fdce52db6d0a8a4686a4890e6cf84efb535122.png" /></figure>
<p>Download images:
 The download icon in the lower left-hand corner gives you the option to
 download the image displayed in the main viewing area. After clicking 
on the download icon, a white download menu will appear. Click on the 
"Download" button to open the image in a new tab in your web browser. 
You can then download the image using your browser's Save command. The 
URL for the image can also be copied and used in new contexts, which is 
covered in the "Reusing IIIF Images" section below.</p>
<figure><img alt="Left screenshot displays an album page displayed on Universal Viewer with the download icon circled in red at the bottom left of the screen. Right screenshot displays the download menu that appears after clicking on the icon." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_download-images-32df7f7351097c3565afb320116fac7a19aa31f5389a14eabe49f72bfde200bc.png" /></figure>`,
      sectionTitle: 'A Rich Viewing Experience',
    },
    {
      id: '4699476',
      typeHandle: 'richText',
      hasOutline: true,
      richText: `<p>Since IIIF 
content is interoperable and portable, you can easily compare images 
from different collections, or even from different institutions, by 
importing images into a IIIF-enabled viewer that supports comparison, 
such as the web-based <a href="https://projectmirador.org/">Mirador viewer</a>.</p>
<p>In order to import IIIF resources into other IIIF-enabled viewers or tools, you'll need the item's <a href="https://iiif.io/guides/using_iiif_resources/#what-is-a-iiif-manifest">IIIF Manifest</a>.
 A IIIF Manifest is a JSON-formatted document that contains all the 
information about the image (or images in the case of paginated objects)
 along with information on how the image(s) should be presented inside a
 viewer. Luckily, you do not need to be able to read or understand a IIIF Manifest
 to make use of it! Each IIIF Manifest represents a discrete resource, 
such as a photograph or a newspaper issue with multiple pages.</p>
<p>To use the IIIF Manifest, you first need to locate the IIIF Manifest URL
 for the resources that you wish to compare. For resources in the UCLA 
Library Digital Collections portal, you will find the IIIF Manifest URL 
in the "Find this Item" section of the resource's item page.</p>
<figure><img alt="Screenshot of the - Find This Item - section from the item record for the mural Our People." src="https://digital.library.ucla.edu/assets/static/ucla_iiif_manifest-url-f68b66fd346ba5ac8168f711a88c007edfd42939226331e46cce08a5e2e2786b.png" /></figure>
<p> To copy the IIIF Manifest URL, right click the IIIF logo </p><figure><img alt="iiif logo icon" width="20" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_logo-e1dadb54901efd6d8b7486330ccb3d3f6fba48b6831f4709c8c883024c1d1417.png" /></figure>
<p> and select "Copy Link." Clicking on the IIIF logo will open the IIIF Manifest in a new tab in your browser.</p>
<p>A IIIF Manifest URL from our collections will look something like this: <a href="https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0025q3sx/manifest" target="_blank" rel="noreferrer noopener">https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0025q3sx/manifest</a></p>
<p>Once you 
have your IIIF Manifest URLs, you can import the IIIF-enabled content to
 Mirador or other IIIF-friendly viewers and tools. Try it out with UCLA 
Library's <a href="https://iiif.library.ucla.edu/viewers/mirador/">Mirador</a> viewer following these steps:</p>
<p> </p>
<ul>
 <li>
 Step 1: Open the UCLA Library <a href="https://iiif.library.ucla.edu/viewers/mirador/">Mirador</a> viewer. Copy the IIIF Manifest URL for one of the resources that you would like to compare, for example <a href="https://digital.library.ucla.edu/catalog/ark:/21198/zz0025q3sx">the mural "Our People"</a> from the <a href="https://digital.library.ucla.edu/catalog/ark:/21198/zz001ndq5p">Nancy Tovar Murals of East LA Collection</a>.
 </li>

 <li>
 Step 2: Click on the blue " + Start Here " button in the top left corner.
 </li>

 <li>
 Step 3: Click on the blue
 " + Add Resource " button at the bottom right corner of the page and 
paste the IIIF Manifest URL into the text box. Click "Add." The item 
should now appear in the list of available IIIF resources. Click on the 
resource you just added to open it in Mirador.
 </li>

 <li class="full-width"><img alt="A GIF demonstrating how to import a IIIF Manifest into Mirador." src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/gray.jpg" /></li>

 <li>
 Step 4: Copy the IIIF Manifest URL for the second resource that you would like to compare, for example a <a href="https://digital.library.ucla.edu/catalog/ark:/21198/zz0025nnnp">the mural "Untitled" by El Congreso de Artistas Cosmicos de las Americas de San Diego</a>
 from the same collection. Select the blue " + " button in the top left 
corner. Click the " + Add Resource " button to import this IIIF 
resource. You can add more items to the list of resources and compare 
multiple images side-by-side in the Mirador viewer.
 </li>

 <li class="full-width"><img alt="A GIF demonstrating how to open two different images in the Mirador viewer." src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/gray.jpg" /></li>
 </ul>`,
      sectionTitle: 'Compare Images',
    },
    {
      id: '4699477',
      typeHandle: 'richText',
      richText: `<p>There is no 
unified search for IIIF resources, but many institutions across the 
globe have guides for finding IIIF resources within their digital 
collections. For a list of these resources, visit the IIIF's <a href="https://iiif.io/guides/finding_resources/" target="_blank" rel="noreferrer noopener">Guides to finding IIIF resources</a> page.</p>
<p><a href="https://seige.digital/en/detektiiif/">detektIIIF</a>
 is a browser extension for Chrome and Firefox that detects IIIF 
resources (manifests, images, and collections) in websites. It allows 
you to collect IIIF manifests in a basket and send them to any 
compatible IIIF application.</p>
<figure><img alt="Screenshot of detekt iiif selecting a basket" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_detektiiif-0452505f2b9ca516d5a3125f52430cb3b5403255b710998a7824f1c60d29ff06.jpg" /></figure>`,
      sectionTitle: 'Discover and Collect IIIF Resources',
    },
    {
      id: '4699478',
      typeHandle: 'richText',
      richText: `<p>With IIIF Manifests, you can also build your own digital exhibits using items from the <a href="https://digital.library.ucla.edu">UCLA Library Digital Collections</a>.
 Exhibits can be used to create a narrative around digital resources, 
recontextualize items in the collections, or highlight a particular 
history or experience using primary sources from one or more 
institutional digital collections. Thanks to the efforts of the IIIF 
community, there are a number of IIIF-friendly tools that allow you to 
create exhibits using IIIF, such as <a href="https://minicomp.github.io/wax/">Wax</a>, <a href="https://exhibit.so/">Exhibit.so</a>, <a href="https://www.cogapp.com/storiiies">Storiiies</a>, and <a href="https://collectionbuilder.github.io">Collection Builder</a>.</p>
<p><a href="https://exhibit.so/">Exhibit.so</a>,
 a browser-based IIIF storytelling application, allows you to build 
exhibits using IIIF Manifests with just a few clicks. Exhibits made with
 Exhibit.so can be shared via a URL or can be embedded into any web page
 using HTML. See the exhibit <a href="https://www.exhibit.so/exhibits/zgUYUqaUgin5g7oHnhic">"Eadweard Muybridge's Animal Locomotion."</a> To create your own exhibit, follow the Exhibit.so's <a href="https://exhibit.so/docs/creating-an-exhibit">Creating an Exhibit guide</a>.</p>`,
      sectionTitle: 'Build Your Own Digital Exhibit',
    },
    {
      id: '4699479',
      typeHandle: 'richText',
      richText: `<p>IIIF also 
supports web annotation of images using the W3C Web Annotation Model. 
Annotating images requires connecting a dedicated annotation server to a
 viewing interface, however there are a few IIIF-friendly tools that 
support annotation through a built-in annotation environment, such as <a href="https://annonatate.herokuapp.com">Annonatate</a> or <a href="https://recogito.pelagios.org/">Recogito</a>.
 The Mirador viewer has an Annotation plugin, which does require a 
dedicated annotation server to store annotations, but you can try out 
the annotation feature using the <a href="https://mirador-annotations.netlify.app/">Mirador Annotations demo</a>.
 Try importing a resource into the Annotations demo using a IIIF 
Manifest URL and annotate some images using the annotation tools 
provided.</p>
<figure><img src="https://digital.library.ucla.edu/assets/static/ucla_iiif_annotation-701f242ed56bd303e4a95f3877ab74bc3ac2216df35ecbb6655e202894def3e6.png" /></figure>`,
      sectionTitle: 'Annotate Images',
    },
    {
      id: '4699480',
      typeHandle: 'richText',
      richText: `<p>There are a
 variety of IIIF-enabled tools that you can use to work with IIIF 
resources in addition to the tools mentioned above. Listed here are just
 a few, but you can explore more options through <a href="https://github.com/IIIF/awesome-iiif">IIIF Awesome's</a> lists of <a href="https://github.com/IIIF/awesome-iiif#image-viewers">Image Viewers</a> and <a href="https://github.com/IIIF/awesome-iiif#exhibition-and-guided-viewing-tools">Exhibition and Guided Viewing Tools</a>, or on the IIIF website's <a href="https://iiif.io/get-started/#end-users">"Resources for end users"</a>.</p>
<ul>
 <li><a href="https://readcoop.eu/transkribus/">Tranksribus</a>
 is a comprehensive platform for the digitisation, AI-powered text 
recognition, transcription and searching of historical documents – from 
any place, any time, and in any language.</li>

 <li><a href="https://recogito.pelagios.org/">Recogito</a>
 supports annotation of entities such as people, places, and 
relationships in text and image documents that can be exported for use 
in other data applications.</li>

 <li><a href="https://storiiies.cogapp.com/">Storiiies</a> is a web platform for creating digital stories around a single IIIF resource.</li>

 <li><a href="http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/">IIIF Curation Viewer</a>
 is an image viewer compliant with IIIF standards. In addition to zoom 
and page-view capabilities, it offers a light box feature that allows 
users to cut and curate parts of images from multiple IIIF objects.</li>
 </ul>`,
      sectionTitle: 'More IIIF-Friendly Tools and Viewers',
    },
    {
      id: '4699481',
      typeHandle: 'richText',
      richText:
                '<p>IIIF also supports transformation and embedding of image resources without the use of a IIIF Manifest in a dedicated viewer. A IIIF-enabled image, or even regions of that image, can be embedded in numerous contexts such as web pages, presentation slides, social media, and teaching and learning materials. In this way, you can easily share curated and transformed content in new contexts across the web using the IIIF image URL.</p>',
      sectionTitle: 'Use and Transform IIIF Images',
    },
    {
      id: '4699482',
      typeHandle: 'richText',
      richText: `<p>Using or transforming a IIIF image resource requires the image's IIIF image URL.
 IIIF image URLs are used in IIIF Manifests to reference the image files
 that make up the IIIF resource represented by the Manifest, such as a 
photograph or the individual page images of a book. Finding the IIIF 
image URLs for a resource once required a deeper look within a IIIF 
Manifest, but now there are tools, such as the <a href="https://seige.digital/en/detektiiif/" target="_blank" rel="noreferrer noopener">detekIIIF</a>
 browser plugin mentioned above and the Universal Viewer's download 
option, that will allow you to find the IIIF image URL for an image in 
order to embed or transform an image. </p>
<p>IIIF image URLs follow a standard syntax and contain parameters at the end that can be edited to transform an image:<br />{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}</p>
<p> Here is an example IIIF image URL for a <a href="https://digital.library.ucla.edu/catalog/ark:/13030/hb300005c2">photograph of the political activist and philosopher, Angela Davis</a>:<br /></p><figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F13030%2Fhb300005c2/full/3072,/0/default.jpg" alt="" /></figure>
<p>Let's take a look at a IIIF image URL in a IIIF Manifest. The <a href="https://ingest.iiif.library.ucla.edu/ark%3A%2F13030%2Fhb300005c2/manifest?_ga=2.43933285.1578987917.1661118954-1130329856.1655829556">IIIF Manifest for the Angela Davis image</a> contains the IIIF image URL in the "resource.@id" property (circled in red).</p>
<figure><img alt="Screenshot of the IIIF image URL in the resource at id property" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_manifest-properties-10631d30338af49dfc09085b513956a2e59c123159658e3050ef5d3f7876fb81.png" /></figure>
<p>There is a lot of information in a IIIF Manifest, so the image URL can be tricky to find. Tip: Use your browser's "Find" or "Search page" function (Ctrl + F, etc.) to look for ".jpg" in the Manifest when you are viewing a IIIF Manifest.</p>
<p>Of course,
 if you are looking at a Manifest with a lot of images, such as for a 
book with tens or hundreds of page images, it can be difficult to find 
the IIIF image URL for a specific image. Luckily, the IIIF Community has
 developed some wonderful tools to help you locate IIIF image URLs 
easily. The easiest way to find a IIIF image URL in the UCLA Library 
Digital Collections is to use the "Download" option for the image you 
would like to use. See the "Download images" section above for details.</p>
<p>Another useful tool is the <a href="https://www.lizmfischer.com/iiif-tools/manifest" target="_blank" rel="noreferrer noopener">IIIF Manifest Explorer</a>
 by Liz Fischer. This tool will display all of the images from a IIIF 
Manifest and their corresponding IIIF image URLs as a browsable list. 
Just input a IIIF Manifest URL to generate the list of images. From the 
links available, choose the "Direct image URL" option for the IIIF image
 URL as highlighted in the screenshot below.</p>
<figure><img alt="Screenshot of the IIIF image URL in the resource at id property" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_manifest-explorer-ac24df665668593f73eeb1e67334eb5e09bf50a3d6627cfb7372412893eaac57.png" /></figure>
<p>The 
detektIIIF browser plugin discussed above is also an easy way to find 
IIIF images URLs that are present on your current web page.</p>
<p>Now that 
you can find your IIIF image URLs, you are ready to transform your 
images. Some of the transformations you can achieve using only the IIIF 
image URL include adjusting the region (cropping), adjusting the size or
 rotation, and adjusting the image quality.</p>`,
      sectionTitle: 'The IIIF Image URL',
    },
    {
      id: '4699483',
      typeHandle: 'richText',
      richText: `<p>IIIF images can be cropped by adjusting the region parameter of a IIIF image URL:<br />{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}</p>
<p>The 
default value of a region is "full" – meaning the full image. You can 
change this value directly in the URL to a specific pixel region defined
 by x, y, height, and width.</p>
<figure><img alt="" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_image-region-8ed03dcfc3336a091094be1a226724abd005d137f8b78bbb1328a687247322a0.gif" /></figure>
<p>Guessing at and inputting the pixel dimension for a cropped region isn't ideal, but you can use tools such as the <a href="https://ncsu-libraries.github.io/iiif-crop-tool/" target="_blank" rel="noreferrer noopener">NCSU Libraries Cropping Tool</a> to crop your images. You will need to provide a IIIF image URL, such as this one from <a href="https://digital.library.ucla.edu/catalog/ark:/21198/n12k6g">E.F. Raynes Plante Autograph album No. 4</a>,
 and drag the cropping box to enclose the region you need. The Cropping 
Tool will generate an updated IIIF image URL that you copy for use in 
another context. Note that as you change the selected area and zoom in 
and out, the URL in the left-hand column also changes. If you paste this
 new URL into your browser, you will see the cropped version of your 
image.</p>
<figure><img alt="" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_crop-tool-9b494d8635cf3ccb01c1651281146fba3587c79266fd1433ea97def4e98b0713.png" /></figure>`,
      sectionTitle: 'Crop Images with the IIIF Image URL',
    },
    {
      id: '4699484',
      typeHandle: 'richText',
      richText: `<p>Images can also be resized and rotated by editing the IIIF image URL size and rotation parameters:<br />{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}</p>
<p>For example:<br /></p>
<figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/default.jpg" alt="" /></figure>
<ul class="outlined-container">
 <li>
 <p>When an 
image is not scaled (resized) the parameter value is "full." An image 
can be resized by changing the value in the URL to the desired width 
(w,) or height (,h) in pixels, for example:</p>

 <p>Setting the exact width of the image to 300 px:<br />.../full/300,/0/default.jpg</p>

 <p>Or setting the exact height of the image to 500 px:<br />.../full/,500/0/default.jpg</p>

 <p>The size can also be expressed as a percentage, for example 50% of the original size:<br />.../full/pct:50/0/default.jpg</p>

 <p>For more information on resizing IIIF images using the URL parameters, see the <a href="https://iiif.io/api/image/2.0/#size" target="_blank" rel="noreferrer noopener">IIIF Image API Size Parameter documentation</a>.</p>

 <p>You can 
rotate the image by changing the rotation value anywhere from 0 to 360 
degrees. For example, an image rotated 180 degrees (halfway):<br />.../full/&gt;180/default.jpg</p>

 <p>For more information on rotating IIIF images using the URL parameters, see the <a href="https://iiif.io/api/image/2.0/#rotation" target="_blank" rel="noreferrer noopener">IIIF Image API Rotation Parameter documentation</a>.</p>

 <img alt="Screenshot of image shown upsidedown" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_rotated-image-39558fafd8a3e258f1029ed32f7e8f3ff56df968cee2b30b352a4e3b48228a0c.png" />
 </li>
 </ul>`,
      sectionTitle: 'Resize and Rotate Images with the IIIF URL',
    },
    {
      id: '4699485',
      typeHandle: 'richText',
      richText: `<p>IIIF also allows you to change the image "quality" using the IIIF image parameters. The quality parameter determines whether the image is delivered in color, grayscale, or black and white. For example, to render a color image in black and white, change the quality parameter from "default" or "color" to "bitonal". Note that images originally in greyscale and black and white cannot be rendered in color.<br /></p>





<figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/bitonal.jpg" alt="" /></figure>
<p> To generate an image in grayscale, set the parameter to "gray":<br /></p><figure><img src="https://iiif.library.ucla.edu/iiif/2/ark%3A%2F21198%2Fn12k6g%2F5x359j7r/full/full/0/gray.jpg" alt="" /></figure>
<figure><img alt="Screenshot of image shown in grayscale" src="https://digital.library.ucla.edu/assets/static/ucla_iiif_grayscale-image-48c59d2aa761deb967e66b03bd666c996850d2fdba515ff7ef496840f85cd179.png" /></figure>
<p>If you want to experiment with adjusting the IIIF image URL parameters, try the <a href="https://www.learniiif.org/image-api/playground.html" target="_blank" rel="noreferrer noopener">IIIF Image API Playground</a>.</p>`,
      sectionTitle: 'Adjust the Image Quality with the IIIF Image URL',
    },
    {
      id: '4699486',
      typeHandle: 'richText',
      richText: `<p>Once you 
have a IIIF image URL and have transformed it to meet your needs, you 
can share or embed the resulting image just like you would any other 
image where you can use a direct image URL. For example:</p>
<ul>
 <li>Add the image to a Google slide using the "Insert image from web" option</li>
 <li>Include the image in a web page using the HTML &lt;img&gt; tag</li>
 <li>Share the image URL on social media, via email, etc.</li>
 </ul>`,
      sectionTitle: 'Embed Images in New Contexts',
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
