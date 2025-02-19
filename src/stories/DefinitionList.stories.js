import { computed } from 'vue'
import DefinitionList from '@/lib-components/DefinitionList.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import BlockTag from '@/lib-components/BlockTag.vue'

/**
 * Displays data in a Definition list format using `<dl>, <dt>, and <dd>` HTML elements.
 *
 * Props:
 * - metaDataObject: An array of strings representing the table headers. Also used to infer the # of columns in the table.
 * - orientation: Either 'vertical' or 'horizontal'. Default is 'vertical'.
 */

export default {
  title: 'Definition List',
  component: DefinitionList,
}

const mockDefinitions = {
  ftvaDate: 'January 16, 1980',
  releaseDate: 'January 16, 1981',
  episodeAirDate: 'April 1, 1981',
  episodeTitle: 'Déjà Vu All Over Again',
  episodeSeason: '2',
  episodeNumber: '5',
  year: '1980',
  country: 'USA',
  runtime: '1 hour 3 mins',
  ftvaCollectionGroup: [
    {
      id: '3286584',
      title: 'National and Local Politics',
    },
  ],
  ftvaCollectionTags: [
    {
      id: '3696671',
      title: 'comedy',
    },
    {
      id: '3696746',
      title: 'legacy',
    },
  ],
  director: [
    {
      nameFirst: 'Pamela Cohen',
      nameLast: null,
    },
    {
      nameFirst: 'Patricia Bentley King',
      nameLast: null,
    }
  ]
}
export function Default() {
  return {
    components: { DefinitionList },
    data() {
      return { mockDefinitions }
    },
    template: '<DefinitionList :metaDataObject="mockDefinitions" />',
  }
}

export function Horizontal() {
  return {
    components: { DefinitionList },
    data() {
      return { mockDefinitions }
    },
    template: '<DefinitionList :metaDataObject="mockDefinitions" orientation="horizontal"/>',
  }
}

// Sample method to remove the 'ftva' prefix from the keys
const newDefinitions = Object.entries(mockDefinitions).reduce((acc, item) => ({
  ...acc,
  [item[0].replace(/ftva/g, '')]: item[1]
}), {})

export function FTVAWithCustomMetaDataAndButton() {
  return {
    components: { DefinitionList, ButtonLink, BlockTag },
    data() {
      return { newDefinitions }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `<component is="style" type="text/css">
    .collection-tags {
      margin: 8px;
      display: inline;
    }
    .collection-tags-wrapper {
      display: flex;
      flex-wrap
    }
    .centered-button {
      margin: 0 auto;
    }
    </component>
    <DefinitionList :metaDataObject="newDefinitions">
      <template v-slot:definition-CollectionTags>
        <div class="collection-tags-wrapper">
          <template v-for="tag in newDefinitions.CollectionTags">
            <BlockTag :key="tag.id" class="collection-tags">{{ tag.title }}</BlockTag>
          </template>
        </div>
      </template>
      <template #list-bottom>
        <ButtonLink label="View Catalog Record" to="https://search.library.ucla.edu/permalink/01UCS_LAL/17p22dp/alma99734033506533" :isSecondary="true" icon-name="none" class="centered-button"/>
      </template>
    </DefinitionList>`
  }
}
