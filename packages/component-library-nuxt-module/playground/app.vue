<template>
  <div>
    Nuxt module playground!
  </div>
  <div>
    <h2>RichText Component</h2>
    <RichText :rich-text-content="MOCK.richText" />
    <br>
    <hr>
    <br>
  </div>
  <div>
    <h2> SmartLink component</h2>
    <SmartLink
      to="http://www.ucla.edu"
      link-target="_blank"
    >
      This is a smart link which is external
    </SmartLink>
    <br>
    <hr>
    <br>
  </div>
  <div>
    <h2> BannerFeatured component</h2>
    <BannerFeatured
      :media="MOCK.mockdata.image"
      :to="MOCK.mockdata.toHelp"
      :title="MOCK.mockdata.title"
      :category="MOCK.mockdata.category"
      :breadcrumb="MOCK.mockdata.breadcrumb"
      :byline="MOCK.mockdata.byline"
      :prompt="MOCK.mockdata.prompt"
      :locations="MOCK.mockdata.locations"
      :section-handle="MOCK.mockdata.sectionHandle"
    />
    <br>
    <hr>
    <br>
  </div>
  <div>
    <h2> IconWithLink component</h2>
    <IconWithLink
      text="Powell"
      icon-name="svg-icon-location"
      to="/visit/library/powell"
    />
    <br>
    <hr>
    <br>
  </div>
  <div>
    <h2> Event Detail component</h2>
    <BlockEventDetail
      :start-date="mockFtvaEventDetailData.startDateWithTime"
      :time="mockFtvaEventDetailData.startDateWithTime"
      :locations="mockFtvaEventDetailData.location"
    />
    <br>
    <hr>
    <br>
  </div>
</template>

<script setup lang="ts">
const mockFtvaEventDetailData = {
  id: '2847944',
  typeHandle: 'ftvaEvent',
  title: 'La Région Centrale 03-08-24',
  startDateWithTime: '2024-03-09T03:30:00+00:00',
  location: [
    {
      title: 'Billy Wilder Theater',
      publicUrl: 'https://cinema.ucla.edu/billy-wilder-theater',
    },
    {
      title: 'Vidiots',
      publicUrl: 'https://vidiotsfoundation.org/',
    },
  ],
}

const MOCK = {
  richText: `<h3>FLEXIBLE RICH TEXT - ALL RICH TEXT OPTIONS</h3>\n<h3><a href="https://printinghistory.org/mission/" target="_blank" rel="noreferrer noopener">H3 - The American Printing History Association with External link</a></h3>\n<h4><a href="https://test-craft.library.ucla.edu/collecting-areas/arts-music">H4 - with internal link to APHA</a></h4>\n<h5><a href="https://static.library.ucla.edu/craftassetstest/images/1686698673.jpg" target="_blank" rel="noreferrer noopener">H5 History of printing - open in new tab</a></h5>\n<p><strong>Bold Text - The American Printing History Association</strong> <em>(APHA)</em> is a </p>\n<p><del>strikethrough membership</del> </p>\n<p>Unordered List <br /></p>\n<ul><li>calligraphy, </li><li>typefounding, </li><li>typography, </li></ul><div>Ordered List<br /></div>\n<ol><li>papermaking, </li><li>bookbinding, </li><li>illustration, and </li><li>publishing. </li></ol><h3><br />ALL THE KINDS OF LINKS</h3>\n<p><a href="https://test-craft.library.ucla.edu/about/news/testnews">LINK TO ENTRY IN CRAFT (Internal) (testnews)</a></p>\n<p><a title="Conference" href="https://static.library.ucla.edu/craftassetstest/Documents/giraffe_baby.jpg">LINK TO ASSEST IN CRAFT (Internal) (Baby Giraffe Image)</a></p>\n<p><a href="https://test-craft.library.ucla.edu/collecting-areas/arts-music">LINK TO CATEGORY (Arts &amp; Music)</a></p>\n<p><a href="https://printinghistory.org/programs/conference/" target="_blank" rel="noreferrer noopener">LINK (Insert Link External)</a></p>\n<h3>A PARAGRAPH</h3>\n<p><strong>The organization does this through</strong> <em>a wide variety of programs and services</em>: the <a title="Conference" href="http://printinghistory.org/programs/conference/">annual three-day conference</a> and <a title="Lieberman Lecture" href="http://printinghistory.org/programs/lieberman/">Lieberman Lecture series</a>; the <a title="Oral History" href="http://printinghistory.org/programs/oral-history/">oral history project</a>; the <a title="Fellowship" href="http://printinghistory.org/programs/fellowship/">fellowship program</a>; the scholarly journal <em><a title="Printing History" href="http://printinghistory.org/publications/printing-history/">Printing History</a></em> and other <a title="Special Publications" href="http://printinghistory.org/publications/special-publications/">special publications</a>; annual individual and institutional <a href="http://printinghistory.org/programs/awards/">awards</a> that honor <del>distinguished achievement</del> in the field of printing history. <br /></p>\n<table><tbody><tr><td>TABLE</td><td>two</td><td>three</td></tr><tr><td>four</td><td>five</td><td>six</td></tr></tbody></table><p><br /></p>\n<h3>Powell Cat Image Position: LEFT - Image-style: HALF WIDTH - Link: INTERNAL</h3>\n<figure class="image--left image--half"><a href="https://www.library.ucla.edu/about/news/in-memoriam-powell-cat/"><img src="https://static.library.ucla.edu/craftassetstest/images/powell-cat-sm.png" alt="Powell Cat" /></a><figcaption>Powell Cat - POSITION: LEFT IMAGE-STYLE: HALF WIDTH LINK: INTERNAL</figcaption></figure><p> Powell Cat, UCLA’s beloved stray, passed away peacefully on March 9. The black and white cat was first spotted in 2015 near their namesake Powell Library, and soon became the campus’ informal mascot, immortalized with their own Instagram account, on t-shirts, stickers, buttons and even a cameo in a UCLA Library holiday card! The friendly feline captured students’ hearts and they shared their love and thanks at a memorial held on the steps of Powell Library on March 16. Here are a few of the hundreds of messages:</p>\n<p>Thank you for being there for me in a time when I needed it. | You were my pet away from home. Truly my comfort animal after a rough day of classes. | You’re the only cat I’ll sneeze for ♥ | Thank you for sitting on my lap when I was having a rough time. | Your legend will live forever. | Rest in peace Powell Cat ♥ We love you so much, Fly high!</p>\n<h3>Baby Giraffe Image Position: CENTER - Image-style: FULL WIDTH - Link: LINK EXTERNAL (NewTab)</h3>\n<figure class="image--center image--full"><a href="https://www.animalfactsencyclopedia.com/Baby-Giraffe.html" target="_blank" rel="noreferrer noopener"><img src="https://static.library.ucla.edu/craftassetstest/Documents/giraffe_baby.jpg" alt="Baby Giraffe Center" /></a><figcaption>Baby Giraffe Position: CENTER - Image-style: FULL WIDTH - Link: LINK EXTERNAL (NewTab)</figcaption></figure><p>Giraffe babies are born with their eyes open, and look very much like miniature adults, but their little horns, called "ossicones" are folded flat against their head while they are inside the mother, and take a few hours to start to stand up straight.Both males and females have horns known as "occicones", which are formed from cartilage and covered with skin. Females have thinner occicones, that are tufted with longer hair on top. Males occicones are larger, have knobs on the ends, and become bald on top as they mature. </p>\n<h3>Baby Giraffe Image. Position: RIGHT - Image-style: HALF WIDTH - Link: NO LINK</h3>\n<figure class="image--right image--half"><img src="https://static.library.ucla.edu/craftassetstest/Documents/giraffe_baby.jpg" alt="Baby Giraffe" /><figcaption>Baby Giraffe Position: RIGHT - Image-style: HALF WIDTH - Link: NO LINK</figcaption></figure><p>A baby giraffe is a sight to behold! Just imagine a "newborn" that is 6 feet tall and weighs 150 pounds!<br /><br />Giraffe mothers are pregnant for 15 months, giving the embryo time to develop to such a large size, and when ready to come out, the baby comes front feet first, with the neck and head stretched out over the front knees in a sort of "superman" position.<br /></p>\n<p><br /></p>\n<h3 dir="rtl"><br /></h3>\n<h3><br /></h3>\n<h3>VIDEO - Four Leaf Clover Hunt by Jen Diamond</h3>\n<figure><iframe style="width:500px;height:281px;" src="//www.youtube.com/embed/RdAp0_iB7iU" frameborder="0"></iframe></figure><h3><br /></h3>\n<h3><a href="https://static.library.ucla.edu/craftassetstest/Documents/Peace-Guide.pdf" target="_blank" rel="noreferrer noopener">LINKED FILE (Open in new page)</a> - Peace Guide</h3>\n<p lang="ar" xml:lang="ar">LANGUAGE TEST - Arabic</p>\n<p lang="zh" xml:lang="zh">LANGUAGE TEST - Chinese</p>\n<p>LANGUAGE TEST - English</p>\n<p lang="ja" xml:lang="ja">LANGUAGE TEST - Japanese</p>\n<p lang="ko" xml:lang="ko">LANGUAGE TEST - Korean</p>\n<p lang="es" xml:lang="es">LANGUAGE TEST - Spanish</p>\n<h3 dir="rtl"><br /></h3><h3 dir="rtl">TEXT DIRECTION - RIGHT TO LEFT</h3>\n<p dir="rtl">لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>`,
  mockdata: {
    alternativeFullName: '陳餘敏卿纪念基金',
    attribution: 'Lady Gaga',
    breadcrumb: 'mock-breadcrumb',
    buttonText: 'button-text',
    byline: ['mock byline1 excepteur sint occaecat', 'mock byline2 non proident'],
    category: 'mock category',
    color: 'help',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    endDate: '2022-12-11T00:00',
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
    image: {
      src: 'https://via.placeholder.com/1920x1080',
      srcset: 'https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w',
      sizes: '100vw',
      alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      title: 'Lorem ipsum',
      caption: 'Lorem ipsum',
      height: 1080,
      width: 1920,
      focalPoint: [0.5, 0.5],
    },
    impactNumber: '3,958,321',
    language: 'zh',
    location: 'Fast Lane Building',
    locations: [
      {
        id: '523',
        title: 'Powell Library',
        to: 'visit/locations/powell-library',
      },
      {
        id: '801',
        title: 'YRL',
        to: 'visit/locations/yrl',
      },
      {
        id: '3062',
        title: 'Online',
        to: 'visit/locations/online',
      },
    ],
    name: 'Ipsum dolor amet',
    prompt: 'mock prompt',
    sectionHandle: 'event',
    sectionSummary: '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
    sectionSummary2: '<p>Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey.</p> <h3>Learn how to</h3><ul><li>Find the Cafeteria</li><li>Create a Study Group</li><li>Navigate the Libraries</li></ul>',
    sectionTitle: 'Section Title',
    startDate: '2022-12-09T00:00',
    svgName: 'svg-call-to-action-chat',
    text: 'Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.',
    textShort: 'Litora torquent per conubia nostra, per inceptos himenaeos',
    textLong:
      'Greplin prezi zillow zoosk orkut, zoosk gooru. Kiko xobni joukuu ideeli bitly joukuu, squidoo heroku hulu sifteo, zooomr jumo dropio chumby. Qeyno wikia oooooc jajah, ebay qeyno lala, jajah lijit. Etsy wufoo flickr movity sclipo heroku, oooooc etsy oooooc. Vimeo foodzie zoosk ebay, wesabe. Ebay doostang vuvox, xobni. Mozy joyent dropio gooru kippt, greplin skype. Kiko napster geni dogster yoono yammer disqus, hipmunk xobni odeo zynga loopt. Groupon klout divvyshot zinch elgg yoono airbnb, orkut zinch chartly squidoo.',
    textSemantic:
      'Napster mozy sococo orkut <a href=\'http://google.com/\'>convore scribd napster</a>, twones diigo joukuu weebly. <i>Sclipo jibjab scribd</i>.',
    title: 'mock title',
    to: '/default/foo/bar',
    toVisit: '/visit/foo/bar',
    toAbout: '/about/foo/bar',
    toHelp: '/help/foo/bar',
    toExt: 'https://www.google.com/',
  },
}
</script>
