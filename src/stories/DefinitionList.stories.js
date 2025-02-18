import DefinitionList from '@/lib-components/DefinitionList.vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

export default {
  title: 'Definition List',
  component: DefinitionList,
}

const mockDefinitions = [
  { term: 'Term 1', definition: 'Definition 1' },
  { term: 'Term 2', definition: 'Definition 2' },
]

export function Default() {
  return {
    components: { DefinitionList },
    data() {
      return { mockDefinitions }
    },
    template: '<DefinitionList :definitions="mockDefinitions" />',
  }
}

export function FTVAWithMetaDataAndButton() {
  return {
    components: { DefinitionList, ButtonLink },
    data() {
      return { mockDefinitions }
    },
    template: `<DefinitionList :numItems="2">
        <template v-for="(item, index) in mockDefinitions" :key="'item-' + term" v-slot:[\`term\${index}\`]>
            {{ item.term }}
        </template>
        <template #list-bottom>
            <ButtonLink label="View Catalog Record" to="https://search.library.ucla.edu/permalink/01UCS_LAL/17p22dp/alma99734033506533" :is-secondary="true">Learn More</ButtonLink>
        </template>
    </DefinitionList>`
  }
}


            // <template v-slot:[\`term\${index}\`]>
            //         {{ item.term }}
            // </template>
            // <template v-slot:[\`definition\${index}\`]>
            //         {{ item.definition }}
            // </template>