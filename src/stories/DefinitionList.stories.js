import { computed } from 'vue'
import DefinitionList from '@/lib-components/DefinitionList.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'
import BlockTag from '@/lib-components/BlockTag.vue'

/**
 * Displays data in a Definition list format using `<dl>, <dt>, and <dd>` HTML elements.
 *
 * Props:
 * - metaDataObject: The object to extract terms and defintions from. Object keys will become terms, and object values will become definitions.
 *  - Example: { term1: 'definition1', term2: 'definition2' } becomes `<dt>term1</dt><dd>definition1</dd><dt>term2</dt><dd>definition2</dd>`
 *  - A pair of slots is created for each term, `term-<term>` and `definition-<term>`, where <term> is the key of the object. This allows for custom rendering of each term and definition.
 * - orientation: Either 'vertical', displays the definition underneath the term, or 'horizontal', displays the definition next to the term. Default is 'vertical'.
 *
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
  ],
  associatedIndividuals: [
    {
      individual: [
        {
          id: '3604578',
          nameFirst: 'Leslie',
          nameLast: 'Jones',
        },
      ],
      roles: 'Producer',
    },
    {
      individual: [
        {
          id: '3474871',
          nameFirst: 'Anita Clearfield',
          nameLast: null,
        },
      ],
      roles: 'Executive Producer, Writer',
    },
  ],
  testField: undefined, // should not render
  anotherTestField: null, // should not render
  emptyArray: [], // should not render
  emptyObject: {}, // should not render
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
          <template v-for="tag in newDefinitions.CollectionTags" :key="tag.id">
            <BlockTag class="collection-tags">{{ tag.title }}</BlockTag>
          </template>
        </div>
      </template>
      <template #list-bottom>
        <ButtonLink label="View Catalog Record" to="https://search.library.ucla.edu/permalink/01UCS_LAL/17p22dp/alma99734033506533" :isSecondary="true" icon-name="none" class="centered-button"/>
      </template>
    </DefinitionList>`
  }
}
