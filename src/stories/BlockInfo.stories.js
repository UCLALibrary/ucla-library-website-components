import { computed } from 'vue'
import BlockInfo from '@/lib-components/BlockInfo'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import RichText from '@/lib-components/RichText.vue'

/**
 * A generic block component that can be used to display simple informational content.
 *
 * Slots:
 * - block-info-header
 * - block-info-text
 * - block-info-list
 * - block-info-button
 * - block-info-footer
 *
 * Props:
 * - colorScheme:
 *  - default (white)
 *  - 'paleblue' (FTVA)
 */

// Storybook default settings
export default {
  title: 'BLOCK / Info',
  components: BlockInfo,
}

const mockFTVABlockInfo = {
  ftvaTicketInformation: [
    {
      title: 'Admission is free',
    },
    {
      title: 'Seats are assigned on a first come, first served basis',
    },
    {
      title: 'The box office opens one hour before the event',
    },
  ],
}

const parsedBlockInfo = computed(() => {
  return mockFTVABlockInfo.ftvaTicketInformation.map(obj => obj.title)
})

export function Default() {
  return {
    data() {
      return { parsedBlockInfo }
    },
    components: { BlockInfo, ButtonLink, RichText },
    template:
      `<component is="style" type="text/css">
      </component>
      <block-info :blockList="parsedBlockInfo">
        <template #block-info-header>
          <h3>RichText Header</h3>
        </template>

        <template #block-info-list>
        </template>

        <template #block-info-btn>
          <ButtonLink
            label="Button"
            class="button"
            icon-name="none"
          />
        </template>
      </block-info>`
  }
}

export function FTVABlockInfo() {
  return {
    data() {
      return { parsedBlockInfo }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockInfo, ButtonLink },
    template:
      `<component is="style" type="text/css">
        .ftva.block-info {
          padding: 20px;
        }
        .block-info-btn-wrapper {
          margin: 0 auto;
        }
      </component>
      <block-info colorScheme="paleblue" :blockList="parsedBlockInfo">
        <template #block-info-header>
          <h3 class="block-info-header">Ticket Info</h3>
        </template>

        <template #block-info-list>
        </template>

        <template #block-info-btn>
          <ButtonLink
            label="Plan Your Visit"
            to="https://library.ucla.edu"
            class="button"
            :is-secondary="true"
            icon-name="none"
          />
        </template>
      </block-info>`
  }
}

export function FTVAContactInfo() {
  return {
    data() {
      return { parsedBlockInfo }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockInfo, ButtonLink },
    template:
      `<component is="style" type="text/css">
        .ftva.block-info {
          padding: 20px;
        }
        .block-info-footer-wrapper {
          margin: 0 auto;
        }
      </component>
      <block-info colorScheme="paleblue" :blockList="parsedBlockInfo">
        <template #block-info-header>
          <h3 class="block-info-header">Ticket Info</h3>
        </template>

        <template #block-info-list>
        </template>

        <template #block-info-footer>
          <ButtonLink
            label="Plan Your Visit"
            to="https://library.ucla.edu"
            class="button"
            :is-secondary="true"
            icon-name="none"
          />
        </template>
      </block-info>`
  }
}
