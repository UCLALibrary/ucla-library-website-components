<script setup lang="ts">
import HelloWorld from "@/lib-components/HelloWorld.vue"
import DividerGeneral from "@/lib-components/DividerGeneral.vue"
import DividerWayFinder from "@/lib-components/DividerWayFinder.vue"
import RichText from "@/lib-components/RichText.vue"
import SiteNotificationAlert from "@/lib-components/SiteNotificationAlert.vue"

import ButtonLink from "@/lib-components/ButtonLink.vue"
import ButtonHide from "@/lib-components/ButtonHide.vue"
import ButtonShow from "@/lib-components/ButtonShow.vue"
import ButtonMore from "@/lib-components/ButtonMore.vue"

import { computed } from "vue"

const richTextContent = computed(() => {
    return '<h3>Here is a title</h3><figure class="figure image-right"><img src="https://static.library.ucla.edu/craftassetstest/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3><a href="http://google.com/" target="_blank" rel="noreferrer noopener">This is an <strong>EXTERNAL link</strong></a></h3><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw" target="_blank">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n <p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>'
})
const title = "Dropio, heroku"
const text =
    "Napster mozy sococo orkut <a href='http://google.com/'>convore scribd napster</a>, twones diigo joukuu weebly. <i>Sclipo jibjab scribd</i>."
const textLong =
    "Greplin prezi zillow zoosk orkut, zoosk gooru. Kiko xobni joukuu ideeli bitly joukuu, squidoo heroku hulu sifteo, zooomr jumo dropio chumby. Qeyno wikia oooooc jajah, ebay qeyno lala, jajah lijit. Etsy wufoo flickr movity sclipo heroku, oooooc etsy oooooc. Vimeo foodzie zoosk ebay, wesabe. Ebay doostang vuvox, xobni. Mozy joyent dropio gooru kippt, greplin skype. Kiko napster geni dogster yoono yammer disqus, hipmunk xobni odeo zynga loopt. Groupon klout divvyshot zinch elgg yoono airbnb, orkut zinch chartly squidoo."
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <divider-general />
    <divider-way-finder color="help" />
    <br />
    <br />
    <rich-text :rich-text-content="richTextContent" />
    <br />
    <br />
    <site-notification-alert :title="title" :text="text" />
    <site-notification-alert :title="title" :text="textLong" />
    <br />
    <br />
    <button-link label="Egest perl Conub" to="/help/more" />
    <br />
    <br />
    <button-link
        label="Etiam et Ultrices"
        :is-secondary="true"
        to="/help/more"
    />
    <br />
    <br />

    <button-link
        label="Etiam et Ultrices"
        :is-secondary="true"
        to="https://calendar.library.ucla.edu/"
    />
    <br />
    <br />
    <button-link
        label="Etiam et Ultrices"
        :is-secondary="true"
        to="https://www.google.com/"
    />
    <br />
    <br />
    <button-link
        label="Proin sodales dolor sit amet."
        icon-name="svg-arrow-right"
        to="/help/more"
    />
    <br />
    <br />
    <button-link
        label="Aug id Dignissim"
        :is-secondary="true"
        icon-name="svg-arrow-right"
        to="/help/more"
    />
    <br />
    <br />
    <button-link
        label="Aug id Dignissim"
        :is-secondary="true"
        icon-name="svg-arrow-diagonal"
        to="www.google.com"
    />
    <br />
    <br />
    <button-link
        label="Aug id Dignissim"
        :is-secondary="true"
        icon-name="none"
        to="www.google.com"
    />
    <br />
    <br />
    <button-hide />
    <br />
    <br />
    <button-show />
    <br />
    <br />
    <button-more />
    <br />
    <br />
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
