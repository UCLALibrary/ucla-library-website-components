<script setup>
import { computed } from 'vue'

import BlockMediaWithText from './lib-components/BlockMediaWithText.vue'
import SiteBrandBar from './lib-components/SiteBrandBar.vue'
import BlockShowHide from './lib-components/BlockShowHide.vue'
import BlockStaffSubjectLibrarian from './lib-components/BlockStaffSubjectLibrarian.vue'
import AlphabeticalBrowseBy from '@/lib-components/AlphabeticalBrowseBy.vue'
import BlockAmenities from '@/lib-components/BlockAmenities.vue'
import BlockCallToAction from '@/lib-components/BlockCallToAction.vue'
import BlockCallToActionTwoUp from '@/lib-components/BlockCallToActionTwoUp.vue'
import BlockCardWithIllustration from '@/lib-components/BlockCardWithIllustration.vue'
import BlockDate from '@/lib-components/BlockDate.vue'
import BlockEvent from '@/lib-components/BlockEvent.vue'
import BlockGenericList from '@/lib-components/BlockGenericList.vue'
import BlockSimpleCard from '@/lib-components/BlockSimpleCard.vue'
import BlockSpaces from '@/lib-components/BlockSpaces.vue'
import BlockSponsor from '@/lib-components/BlockSponsor.vue'
import ButtonHide from '@/lib-components/ButtonHide.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import ButtonMore from '@/lib-components/ButtonMore.vue'
import ButtonShow from '@/lib-components/ButtonShow.vue'
import DividerGeneral from '@/lib-components/DividerGeneral.vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'
import FooterMain from '@/lib-components/FooterMain.vue'
import FooterPrimary from '@/lib-components/FooterPrimary.vue'
import FooterSock from '@/lib-components/FooterSock.vue'
import FooterSponsor from '@/lib-components/FooterSponsor.vue'
import HeadingArrow from '@/lib-components/HeadingArrow.vue'
import HelloWorld from '@/lib-components/HelloWorld.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import NavBreadcrumb from '@/lib-components/NavBreadcrumb.vue'
import NavSecondary from '@/lib-components/NavSecondary.vue'
import PullQuote from '@/lib-components/PullQuote.vue'
import RichText from '@/lib-components/RichText.vue'
import SearchResult from '@/lib-components/SearchResult.vue'
import SectionStaffOrcidPublications from '@/lib-components/SectionStaffOrcidPublications.vue'
import SingleCheckbox from '@/lib-components/SingleCheckbox.vue'
import SiteNotificationAlert from '@/lib-components/SiteNotificationAlert.vue'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'
import { mock as mockMediaWithText } from '@/stories/mock/BlockMediaWithText.js'
import * as MEDIA from '@/stories/mock/Media'

const richTextContent = computed(() => {
  return '<h3>Here is a title</h3><figure class="figure image-right"><img src="https://static.library.ucla.edu/craftassetstest/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3><a href="http://google.com/" target="_blank" rel="noreferrer noopener">This is an <strong>EXTERNAL link</strong></a></h3><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw" target="_blank">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n <p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>'
})

const mock = {
  attribution: 'Lady Gaga',
  category: 'Article',
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
      altText: null,
    },
  ],
  location: 'Fast Lane Building',
  name: 'Ipsum dolor amet',
  svgName: 'svg-call-to-action-chat',
  startDate: '2022-12-09T00:00',
  text: 'Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.',
  textLong:
    'Greplin prezi zillow zoosk orkut, zoosk gooru. Kiko xobni joukuu ideeli bitly joukuu, squidoo heroku hulu sifteo, zooomr jumo dropio chumby. Qeyno wikia oooooc jajah, ebay qeyno lala, jajah lijit. Etsy wufoo flickr movity sclipo heroku, oooooc etsy oooooc. Vimeo foodzie zoosk ebay, wesabe. Ebay doostang vuvox, xobni. Mozy joyent dropio gooru kippt, greplin skype. Kiko napster geni dogster yoono yammer disqus, hipmunk xobni odeo zynga loopt. Groupon klout divvyshot zinch elgg yoono airbnb, orkut zinch chartly squidoo.',
  textSemantic:
    'Napster mozy sococo orkut <a href=\'http://google.com/\'>convore scribd napster</a>, twones diigo joukuu weebly. <i>Sclipo jibjab scribd</i>.',
  title: 'Dropio Heroku',
  to: '/about/news/article',
}

const blockCTAitems = [
  {
    ...mock,
    isDark: false,
    isSmallSize: true,
  },
  {
    ...mock,
    isDark: true,
    isSmallSize: true,
  },
]

const sectionTitle = 'Section Title'

const sectionSummary = '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'

const propsForMediaWithText = {
  sectionHeader: mockMediaWithText.mediaWithText[0].titleLink,
  shortDescription: mockMediaWithText.mediaWithText[0].description,
  buttonText: mockMediaWithText.mediaWithText[0].buttonText,
  buttonUrl: mockMediaWithText.mediaWithText[0].buttonUrl,
  mediaLink: mockMediaWithText.mediaWithText[0].linkToMedia,
  item: mockMediaWithText.mediaWithText[0].coverImage,
  typeMedia: mockMediaWithText.mediaWithText[0].typeMedia,
}

const itemVideo = MEDIA.VideoFile

const coverImage = MEDIA.VideoFileCoverImage

const mockStaff = {
  subjectArea: 'African American Studies',
  nameFirst: 'Ariane',
  nameLast: 'Bicho',
  to: '/about/staff/ariane-bicho',
  staffName: 'Ariane Bicho 娘の洋子より',
  image: null,

  jobTitle: 'Director of Communications and Marketing',
  departments: [
    {
      id: '7272',
      title: 'Communications',
    },
    {
      id: '7373',
      title: 'Marketing',
    },
  ],
  alternativeName: [
    {
      fullName: '娘の洋子より',
      languageAltName: 'zh',
    },
  ],
  uri: 'about/staff/ariane-bicho',
  phone: '(222) 444-5555',
  email: 'abicho@library.ucla.edu',
  consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies',
    },
    {
      id: '11955',
      title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
    },
  ],
  locations: [
    {
      title: 'DIIT',
      to: 'location/bar',
    },
  ],
}

const mockStaff2 = {
  title: 'Humanities and Social Sciences Librarian',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  text:
    '<p><span>The UCLA Library seeks a highly collaborative, user-focused professional for the position of Humanities and Social Sciences Librarian. The incumbent will join a multi-location, cross disciplinary team that supports teaching and all levels of research in the humanities and social sciences. </span><span>Note: Two positions are being filled.</span><br /></p>',
  jobType: [
    {
      title: 'Academic Librarian',
    },
  ],
  jobRequisitionNumber: 'JPF08053',
  jobPostingURL: 'https://recruit.apo.ucla.edu/JPF08053',
  department: [
    {
      title: 'User Engagement',
    },
    {
      title: 'Human Resources',
    },
  ],
  associatedLocations: [
    {
      title: 'UCLA Film & Television Archive',
      uri: 'visit/locations/film-television-archive',
    },
    {
      title: 'Powell Library',
      uri: 'visit/locations/powell-library',
    },
  ],
}

const mockAmenities = {
  amenities: [
    'icon-clock',
    'icon-accessible',
    'icon-chair',
    'icon-virtual',
    'icon-laptop',
    'icon-locker',
    'icon-light',
    'icon-share-printer',
    'icon-book',
  ],
}
const navSecondaryLinks = {
  items: [
    {
      id: '843',
      name: 'Locations & Hours',
      to: '/locations',
      classes: '',
    },
    {
      id: '844',
      name: 'Ask a Librarian',
      to: 'https://external.url/research-teaching-support/research-help',
      classes: null,
    },
    {
      id: '25315',
      name: 'Support Us',
      to: 'https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463',
      classes: 'support-link',
      target: '0',
    },
    {
      id: '845',
      name: 'My Account',
      to: 'https://search.library.ucla.edu/discovery/login?vid=01UCS_LAL:UCLA',
      classes: 'account-button',
      target: '1',
    },
  ],
}
const parsedItems = computed(() => {
  // Restructuring item to support text key
  return navSecondaryLinks.items.map((obj) => {
    return {
      ...obj,
      text: obj.name,
    }
  })
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <br>
  <hr>
  <br>
  <h2>SiteBrandBar Component</h2>
  <br>
  <SiteBrandBar />
  <br>
  <hr>
  <br>
  <h2>Divider Component</h2>
  <DividerGeneral />
  <hr>
  <br>
  <h2>DividerWayFinder Component</h2>
  <DividerWayFinder color="help" />
  <hr>
  <br>
  <h2>RichText Component</h2>
  <RichText :rich-text-content="richTextContent" />
  <br>
  <hr>
  <br>
  <h2>SiteNotificationAlert Component</h2>
  <br>
  <SiteNotificationAlert :title="mock.title" :text="mock.text" />
  <SiteNotificationAlert :title="mock.title" :text="mock.textLong" />
  <br>
  <hr>
  <br>
  <h2>ButtonLink Component</h2>
  <br>
  <ButtonLink label="Egest perl Conub" to="/help/more" />
  <br>
  <br>
  <ButtonLink label="Etiam et Ultrices" :is-secondary="true" to="/help/more" />
  <br>
  <br>
  <ButtonLink label="Etiam et Ultrices" :is-secondary="true" to="https://calendar.library.ucla.edu/" />
  <br>
  <br>
  <ButtonLink label="Etiam et Ultrices" :is-secondary="true" to="https://www.google.com/" />
  <br>
  <br>
  <ButtonLink label="Proin sodales dolor sit amet." icon-name="svg-arrow-right" to="/help/more" />
  <br>
  <br>
  <ButtonLink label="Aug id Dignissim" :is-secondary="true" icon-name="svg-arrow-right" to="/help/more" />
  <br>
  <br>
  <ButtonLink label="Aug id Dignissim" :is-secondary="true" icon-name="svg-arrow-diagonal" to="www.google.com" />
  <br>
  <br>
  <ButtonLink label="Aug id Dignissim" :is-secondary="true" icon-name="none" to="www.google.com" />
  <br>
  <br>
  <hr>
  <br>
  <h2>Button Component</h2>
  <br>
  <ButtonHide />
  <br>
  <ButtonShow />
  <br>
  <ButtonMore />
  <br>
  <hr>
  <br>
  <h2>HeadingArrow Component</h2>
  <br>
  <HeadingArrow text="Default" />
  <br>
  <HeadingArrow text="About Us" to="/about/" />
  <br>
  <HeadingArrow text="Visit Us" to="/visit/" />
  <br>
  <HeadingArrow text="Get Help" to="/help" />
  <br>
  <hr>
  <br>
  <h2>PullQuote Component</h2>
  <br>
  <PullQuote :text="mock.text" />
  <br>
  <PullQuote :text="mock.text" :attribution="mock.attribution" />
  <br>
  <hr>
  <br>
  <h2>BlockDate Component</h2>
  <br>
  <BlockDate date="10" day="Digniss" />
  <br>
  <hr>
  <br>
  <h2>IconWithLink Component</h2>
  <br>
  <IconWithLink text="Powell" icon-name="svg-icon-location" to="/visit/library/powell" />
  <br>
  <IconWithLink text="See More" icon-name="svg-icon-search" to="https://www.google.com/" />
  <br>
  <hr>
  <br>
  <h2>SectionWrapper Component</h2>
  <SectionWrapper :section-title="sectionTitle" :section-summary="sectionSummary">
    <BlockMediaWithText v-bind="propsForMediaWithText" />
  </SectionWrapper>
  <hr>
  <br>
  <h2>BlockMediaWithText Component</h2>
  <br>
  <BlockMediaWithText :section-header="mockMediaWithText.mediaWithText[0].titleLink"
    :short-description="mockMediaWithText.mediaWithText[0].description"
    :button-text="mockMediaWithText.mediaWithText[0].buttonText"
    :button-url="mockMediaWithText.mediaWithText[0].buttonUrl" :item="itemVideo" :cover-image="coverImage"
    type-media="video" />
  <br>
  <hr>
  <br>
  <h2>AlphabeticalBrowseBy Component</h2>
  <br>
  <AlphabeticalBrowseBy />
  <br>
  <AlphabeticalBrowseBy selected-letter-prop="A" />
  <br>
  <hr>
  <br>
  <h2>SearchResult Component</h2>
  <br>
  <SearchResult :category="mock.category" :title="mock.title" :summary="mock.text" :to="mock.to" />
  <br>
  <hr>
  <br>
  <h2>SingleCheckbox Component</h2>
  <br>
  <SingleCheckbox />
  <br>
  <hr>
  <br>
  <h2>BlockCallToAction Component</h2>
  <br>
  <BlockCallToAction :svg-name="mock.svgName" :title="mock.title" :text="mock.text" :name="mock.name" :to="mock.to"
    :is-dark="false" :is-small-size="false" />
  <br>
  <BlockCallToAction svg-name="svg-call-to-action-money" :title="mock.title" :text="mock.text" :name="mock.name"
    :to="mock.to" :is-small-size="true" :is-dark="true" />
  <br>
  <hr>
  <br>
  <h2>BlockCallToActionTwoUp Component</h2>
  <BlockCallToActionTwoUp :items="blockCTAitems" />
  <hr>
  <br>
  <h2>BlockSpace Component</h2>
  <br>
  <BlockSpaces :to="mock.to" :title="mock.title" :location="mock.location" :text="mock.text" />
  <br>
  <hr>
  <br>
  <h2>BlockSimpleCard Component</h2>
  <br>
  <BlockSimpleCard :title="mock.title" :text="mock.text" :to="mock.to" />
  <br>
  <hr>
  <br>
  <h2>BlockEvent Component</h2>
  <br>
  <BlockEvent :category="mock.category" :title="mock.title" :prompt="mock.title" :start-date="mock.startDate"
    :end-date="mock.endDate" :to="mock.to" :section-handle="mock.title" />
  <br>
  <hr>
  <br>
  <h2>BlockSponsor Component</h2>
  <br>
  <BlockSponsor :funder-logo="mock.funderLogo" funder-name="Hostess Cupcakes"
    funder-url="https://www.hostesscakes.com/products/cupcakes/chocolate/" />
  <br>
  <hr>
  <br>
  <h2>BlockCardWithIllustration Component</h2>
  <br>
  <BlockCardWithIllustration :to="mock.to" :title="mock.title" :text="mock.text" />
  <br>
  <hr>
  <br>
  <h2>FooterMain Component</h2>
  <br>
  <FooterMain />
  <hr>
  <br>
  <h2>FooterPrimary Component</h2>
  <br>
  <FooterPrimary />
  <hr>
  <br>
  <h2>FooterSock Component</h2>
  <FooterSock />
  <hr>
  <br>
  <h2>FooterSponsor Component</h2>
  <br>
  <FooterSponsor />
  <br>
  <hr>
  <br>
  <h2>BlockShowHide Component</h2>
  <br>
  <BlockShowHide style="width: 100%; padding: 0 48px;">
    <div style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted" data-cy="main">
      Main content is passed via a slot and will be visible by default.
    </div>
    <div class="show-hide-hideable" style="width: 100%; padding: 0 12px 18px; border: 2px grey dotted" data-cy="extra">
      To make content "expandable" it should be passed in the slot along with the main content, but add the class
      "show-hide-hideable" to any items that should be hidden.
    </div>
  </BlockShowHide>
  <br>
  <hr>
  <br>
  <h2>SectionStaffOrcidPublications Component</h2>
  <br>
  <SectionStaffOrcidPublications class="staff-orcid-publications" orcid="https://orcid.org/0000-0002-6391-2088"
    publications="<ul><li><strong>Johnson, M. W.</strong>, Abumeeiz, S. &amp; McAulay, E. (2021). 'Teaching in the Digital Library: A Partnership Between Teaching Librarians and Digital Library Staff.' College &amp; Research Libraries News. 82(7). <a href='https://crln.acrl.org/index.php/crlnews/article/view/25033/32921'>https://crln.acrl.org/index.php/crlnews/article/view/25033/32921</a></li></ul>" />
  <br>
  <hr>
  <br>
  <h2>NavBreadcrumb Component</h2>
  <NavBreadcrumb title="jane-doe" to="/about/news" parent-title="parent" />
  <br>
  <hr>
  <br>
  <h2>BlockStaffSubjectLibrarian Component</h2>
  <table>
    <tbody>
      <BlockStaffSubjectLibrarian v-bind="mockStaff" />
    </tbody>
  </table>
  <br>
  <hr>
  <br>
  <h2>BlockGenericList Component</h2>
  <br>
  <ul>
    <BlockGenericList v-bind="mockStaff2" />
  </ul>
  <br>
  <hr>
  <br>
  <h2>BlockAmenities Component</h2>
  <br>
  <BlockAmenities v-bind="mockAmenities" />
  <br>
  <hr>
  <br>
  <h2>NavSecondary Component</h2>
  <br>
  <br>
  <NavSecondary :items="parsedItems" />
  <br>
  <br>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
