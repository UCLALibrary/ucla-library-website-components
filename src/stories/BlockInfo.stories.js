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
 * - blockList: An array of strings to pass as default content for the `block-info-list` slot
 * - colorScheme:
 *  - default (white)
 *  - 'paleblue' (FTVA)
 */

// Storybook default settings
export default {
  title: 'BLOCK / Info',
  components: BlockInfo,
}

const mockBlockInfo = {
  title: '<h2>Rich Text Title</h2>',
  text: 'The winning poster design will be on display in the <em>Billy Wilder Theater</em> lobby, and every audience memeber in attendance will receive a poster to take home.',
  list: ['SciFi', 'Thriller', 'Suspense', 'Drama']

}

export function Default() {
  return {
    data() {
      return { ...mockBlockInfo }
    },
    components: { BlockInfo, ButtonLink, RichText },
    template:
      `<component is="style" type="text/css">
        .block-info .rich-text {max-width: unset};
      </component>
      <block-info :blockList="list">
        <template #block-info-header>
          <RichText :rich-text-content="title" />
        </template>

        <template #block-info-text>
          <RichText :rich-text-content="text" />
        </template>

        <template #block-info-list>
        </template>

        <template #block-info-btn>
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

// export function FTVAContactInfo() {
//   return {
//     data() {
//       return { parsedBlockInfo }
//     },
//     provide() {
//       return {
//         theme: computed(() => 'ftva'),
//       }
//     },
//     components: { BlockInfo, ButtonLink },
//     template:
//       `<component is="style" type="text/css">
//         .ftva.block-info {
//           padding: 20px;
//         }
//         .block-info-footer-wrapper {
//           margin: 0 auto;
//         }
//       </component>
//       <block-info colorScheme="paleblue" :blockList="parsedBlockInfo">
//         <template #block-info-header>
//           <h3 class="block-info-header">Ticket Info</h3>
//         </template>

//         <template #block-info-list>
//         </template>

//         <template #block-info-footer>
//           <ButtonLink
//             label="Plan Your Visit"
//             to="https://library.ucla.edu"
//             class="button"
//             :is-secondary="true"
//             icon-name="none"
//           />
//         </template>
//       </block-info>`
//   }
// }
