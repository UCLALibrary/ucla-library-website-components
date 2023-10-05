<script setup>
import { computed } from 'vue'
import SiteBrandBar from './lib-components/SiteBrandBar.vue'
import BlockMediaWithText from './lib-components/BlockMediaWithText.vue'
import AlphabeticalBrowseBy from '@/lib-components/AlphabeticalBrowseBy.vue'
import BlockDate from '@/lib-components/BlockDate.vue'
import ButtonHide from '@/lib-components/ButtonHide.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import ButtonMore from '@/lib-components/ButtonMore.vue'
import ButtonShow from '@/lib-components/ButtonShow.vue'
import DividerGeneral from '@/lib-components/DividerGeneral.vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'
import HeadingArrow from '@/lib-components/HeadingArrow.vue'
import HelloWorld from '@/lib-components/HelloWorld.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import PullQuote from '@/lib-components/PullQuote.vue'
import RichText from '@/lib-components/RichText.vue'
import SiteNotificationAlert from '@/lib-components/SiteNotificationAlert.vue'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'
import { mock as mockMediaWithText } from '@/stories/mock/BlockMediaWithText.js'
import * as MEDIA from '@/stories/mock/Media'
import SearchResult from '@/lib-components/SearchResult.vue'
import SingleCheckbox from '@/lib-components/SingleCheckbox.vue'
import BlockCallToAction from '@/lib-components/BlockCallToAction.vue'
import BlockCallToActionTwoUp from '@/lib-components/BlockCallToActionTwoUp.vue'

const richTextContent = computed(() => {
  return '<h3>Here is a title</h3><figure class="figure image-right"><img src="https://static.library.ucla.edu/craftassetstest/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3><a href="http://google.com/" target="_blank" rel="noreferrer noopener">This is an <strong>EXTERNAL link</strong></a></h3><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw" target="_blank">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n <p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>'
})

const mock = {
  attribution: 'Lady Gaga',
  category: 'Article',
  name: 'Ipsum dolor amet',
  svgName: 'svg-call-to-action-chat',
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
  <br>
  <BlockMediaWithText
    :section-header="mockMediaWithText.mediaWithText[0].titleLink"
    :short-description="mockMediaWithText.mediaWithText[0].description"
    :button-text="mockMediaWithText.mediaWithText[0].buttonText"
    :button-url="mockMediaWithText.mediaWithText[0].buttonUrl" :item="itemVideo" :cover-image="coverImage"
    type-media="video"
  />
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
  <SearchResult
    :category="mock.category"
    :title="mock.title"
    :summary="mock.text"
    :to="mock.to"
  />
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
  <BlockCallToAction
    :svg-name="mock.svgName"
    :title="mock.title"
    :text="mock.text"
    :name="mock.name"
    :to="mock.to"
    :is-dark="false"
    :is-small-size="false"
  />
  <br>
  <BlockCallToAction
    svg-name="svg-call-to-action-money"
    :title="mock.title"
    :text="mock.text"
    :name="mock.name"
    :to="mock.to"
    :is-small-size="true"
    :is-dark="true"
  />
  <br>
  <hr>
  <br>
  <h2>BlockCallToActionTwoUp Component</h2>
  <BlockCallToActionTwoUp :items="blockCTAitems" />
  <hr>
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
