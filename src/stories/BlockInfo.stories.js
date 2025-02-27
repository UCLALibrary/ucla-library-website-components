import { computed } from 'vue'
import BlockInfo from '@/lib-components/BlockInfo'
import ButtonLink from '@/lib-components/ButtonLink.vue'

// Storybook default settings
export default {
  title: 'BLOCK / Info',
  components: BlockInfo,
}

const mockBlockInfo = {
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

const parsedTicketInfo = computed(() => {
  return mockBlockInfo.ftvaTicketInformation.map(obj => obj.title)
})

export function Default() {
  return {
    data() {
      return { ...mockBlockInfo }
    },
    components: { BlockInfo },
    template:
            '<block-info />',
  }
}

export function FTVABlockInfo() {
  return {
    data() {
      return { parsedTicketInfo }
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
      <block-info colorScheme="paleblue">
        <template #block-info-header>
          <h3 class="block-info-header">Ticket Info</h3>
        </template>

        <template #block-info-list>
          <ul class="block-info-list">
            <li
              v-for="(item, index) in parsedTicketInfo"
              :key="item + '-' + index"
            >
              {{ item }}
            </li>
          </ul>
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
