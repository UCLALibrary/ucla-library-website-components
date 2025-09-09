import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import GridCollections from '../lib-components/GridCollections.vue'
import ButtonLink from '../lib-components/ButtonLink.vue'
import HeaderCollection from '../lib-components/HeaderCollection.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import {
  mockGridItems,
  mockHeaderCollection,
} from './mock/Funkhaus/MockMainLandingPage'

// Import styles
import './MainLandingPage.scss'

export default {
  title: 'Funkhaus / Pages / Main Landing Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A complete landing page layout with header, main content area, and footer. This serves as a template for main landing pages with a grid-based content layout.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'dlc'],
      description: 'Theme variant for the page',
    },
  },
}

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      HeaderSticky,
      FooterPrimary,
      GridCollections,
      HeaderCollection,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      console.log('mockHeaderCollection', mockHeaderCollection)

      return {
        args,
        primaryItems,
        secondaryItems,
        mockGridItems,
        mockHeaderCollection,
      }
    },
    template: `
       <div class="main-landing-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />


         <!-- Main Content Area -->
         <main class="main-content">
            <HeaderCollection 
                :subtitle="mockHeaderCollection.subtitle"
                :title="mockHeaderCollection.title"
                :text="mockHeaderCollection.text"
                :buttons="mockHeaderCollection.buttons"
            />
            
            <GridCollections :items="mockGridItems" class="grid-collections" />
         </main>
         
         <!-- Footer -->
         <FooterPrimary />
       </div>
     `,
  }
}

// Default story
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
}

// Interactive Pokemon API story with controls
export function InteractivePokemonAPI(args) {
  return {
    components: {
      HeaderSticky,
      FooterPrimary,
      GridCollections,
      ButtonLink,
      HeaderCollection,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      const pokemonData = ref([])
      const loading = ref(false)
      const error = ref(null)
      const pokemonCount = ref(6)

      // Available Pokemon for selection
      const availablePokemon = ref([
        'ditto',
        'pikachu',
        'charizard',
        'blastoise',
        'venusaur',
        'mewtwo',
        'mew',
        'lucario',
        'garchomp',
        'salamence',
        'dragonite',
        'tyranitar',
        'metagross',
        'gengar',
        'alakazam',
      ])

      // Function to fetch Pokemon data
      const fetchPokemonData = async () => {
        try {
          loading.value = true
          error.value = null

          // Get random Pokemon based on count
          const shuffled = [...availablePokemon.value].sort(
            () => 0.5 - Math.random()
          )
          const selectedNames = shuffled.slice(0, pokemonCount.value)

          const promises = selectedNames.map(async (name) => {
            const response = await fetch(
                            `https://pokeapi.co/api/v2/pokemon/${name}`
            )

            // Simulate a delay
            await new Promise(resolve =>
              setTimeout(resolve, 1000)
            )

            if (!response.ok)
              throw new Error(`Failed to fetch ${name}`)

            return response.json()
          })

          const results = await Promise.all(promises)

          // Transform Pokemon data to match our grid format
          pokemonData.value = results.map(pokemon => ({
            id: `pokemon-${pokemon.id}`,
            href: `https://www.pokemon.com/us/pokedex/${pokemon.name}`,
            image: {
              id: pokemon.id.toString(),
              src:
                                pokemon.sprites.other['official-artwork']
                                  .front_default
                                || pokemon.sprites.front_default,
              height: 200,
              width: 200,
              alt: pokemon.name,
              focalPoint: [0.5, 0.5],
            },
            title:
                            pokemon.name.charAt(0).toUpperCase()
                            + pokemon.name.slice(1),
            description: `A ${pokemon.types
                            .map(t => t.type.name)
                            .join('/')} type Pokemon. Height: ${
                            pokemon.height / 10
                        }m, Weight: ${pokemon.weight / 10}kg.`,
          }))
        }
        catch (err) {
          error.value = err.message
          console.error('Error fetching Pokemon data:', err)
        }
        finally {
          loading.value = false
        }
      }

      const mockHeaderPokemon = {
        subtitle: 'Welcome to the',
        title: 'Pokemon Collection',
        text: 'New to Pokemon? Get started with our quick start guide. ',
        buttons: [
          {
            label: 'Fetch Pokemon Data',
            onClick: () => {
              fetchPokemonData()
            },
          },
        ],
      }

      return {
        args,
        primaryItems,
        secondaryItems,
        pokemonData,
        loading,
        error,
        pokemonCount,
        availablePokemon,
        fetchPokemonData,
        mockHeaderPokemon,
      }
    },
    template: `
            <div class="main-landing-page">
                <!-- Header -->
                <HeaderSticky
                    :primary-items="primaryItems"
                    :secondary-items="secondaryItems"
                />
                
                <!-- Main Content Area -->
                <main class="main-content">
                    <div class="content-wrapper">

                        <HeaderCollection 
                            :subtitle="mockHeaderPokemon.subtitle"
                            :title="mockHeaderPokemon.title"
                            :text="mockHeaderPokemon.text"
                            :buttons="mockHeaderPokemon.buttons"
                        />



                        <GridCollections v-if="!loading" :items="pokemonData" />
                        <div v-else>Loading...</div>

             
                    </div>
                </main>
                
                <!-- Footer -->
                <FooterPrimary />
            </div>
        `,
  }
}

InteractivePokemonAPI.args = {
  theme: 'dlc',
}
