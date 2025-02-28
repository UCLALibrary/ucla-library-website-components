import { computed } from 'vue'

import BlockInfo from '@/lib-components/BlockInfo'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import RichText from '@/lib-components/RichText.vue'

/**
 * A generic block component that can be used to display simple, short informational content.
 *
 * For long text, complex data, content with images, consider using a different component.
 *
 * Slots:
 * - block-info-top
 * - block-info-mid
 * - block-info-end
 * - block-info-contact
 *
 * Props:
 * - contactInfo (object)
 *  - passes phone, email, (rich text) address to `block-info-contact` slot
 * - colorScheme: (string)
 *  - default (white)
 *  - 'paleblue' (FTVA)
 */

// Storybook default settings
export default {
  title: 'BLOCK / Info',
  components: BlockInfo,
}

const mockBlockInfo = {
  title: '<h2>Rich Text Heading</h2>',
  text: 'The winning poster design will be on display in the <strong>Billy Wilder Theater</strong> lobby, and every audience memeber in attendance will receive a poster to take home.',
  list: ['SciFi', 'Thriller', 'Suspense', 'Drama']

}

const mockContactInfo = {
  email: 'archive@email.com',
  phone: '+1 323-555-1234',
  address: '<p translate="no">\n<span class="address-line1">722 California Ave</span><br>\n<span class="locality">Glendale</span>, <span class="administrative-area">CA</span> <span class="postal-code">90210</span><br>\n<span class="country">United States</span>\n</p>'
}

export function DefaultInfo() {
  return {
    data() {
      return { ...mockBlockInfo }
    },
    components: { BlockInfo, ButtonLink, RichText },
    template:
      `<component is="style" type="text/css">
        .block-info {
          .rich-text {
            max-width: unset;
            .parsed-content { margin-bottom: 0;}
          };
        }
      </component>
      <block-info :blockList="list">
        <template #block-info-top>
          <RichText :rich-text-content="title" />
        </template>
        <template #block-info-mid>
          <RichText :rich-text-content="text" />
        </template>
        <template #block-info-end>
          <ButtonLink
            label="Button Text"
            to="https://library.ucla.edu"
            class="button"
            icon-name="none"
          />
        </template>
      </block-info>`
  }
}

export function DefaultInfoList() {
  return {
    data() {
      return { ...mockBlockInfo }
    },
    components: { BlockInfo, ButtonLink, RichText },
    template:
      `<component is="style" type="text/css">
        .block-info {
          .rich-text {
            max-width: unset;
            .parsed-content { margin-bottom: 0;}
          };
        }
      </component>
      <block-info :blockList="list">
        <template #block-info-top>
          <RichText :rich-text-content="title" />
        </template>
        <template #block-info-mid>
          <ul>
            <li
              v-for="(item, index) in list"
              :key="item + '-' + index"
            >
              {{ item }}
            </li>
          </ul>
        </template>
        <template #block-info-end>
          <br>
          <ButtonLink
            label="Button Text"
            to="https://library.ucla.edu"
            class="button"
            icon-name="none"
          />
        </template>
      </block-info>`
  }
}

export function DefaultContact() {
  return {
    data() {
      return { mockContactInfo }
    },
    components: { BlockInfo, ButtonLink, RichText },
    template:
      `<block-info :blockList="list" :contactInfo="mockContactInfo">
        <template #block-info-contact />
      </block-info>`
  }
}

const mockFTVAInfo = {
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

const parsedInfoList = computed(() => {
  return mockFTVAInfo.ftvaTicketInformation.map(obj => obj.title)
})

export function FTVAInfo() {
  return {
    data() {
      return { parsedInfoList }
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
        .block-info-end-wrapper {
          margin: 0 auto;
        }
      </component>
      <block-info colorScheme="paleblue">
        <template #block-info-top>
          <h3 class="block-info-header">Ticket Info</h3>
        </template>

        <template #block-info-mid>
          <ul class="block-info-list">
          <li
            v-for="(item, index) in parsedInfoList"
            :key="item + '-' + index"
          >
            {{ item }}
          </li>
        </ul>
        </template>

        <template #block-info-end>
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
