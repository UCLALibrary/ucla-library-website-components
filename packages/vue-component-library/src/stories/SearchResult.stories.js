import SearchResult from '@/lib-components/SearchResult'

export default {
  title: 'SEARCH / Search Result',
  component: SearchResult,
}

const mock = {
  category: 'Article',
  to: '/about/news/article',
  title: 'Lacus Luctus',
  summary:
        'Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.',
}

export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { SearchResult },
    template: `
        <search-result
            :category="category"
            :title="title"
            :summary="summary"
            :to="to"
        />
    `,
  }
}

const mockEvent = {
  category: 'Event',
  to: '/visit/events-exhibitions/event1',
  title: 'Back From the Ink: Restored Animated Shorts',
  summary:
      'Nine animated pictures from Max and Dave Fleischer, who created Betty Boop and Koko the Clown, are among the pieces that have been restored. MacFarlane is a jazz music aficionado, so the Fleischer brothers’ noted use of jazz in their soundtracks, including collaborations with Cab Calloway, Louis Armstrong and Don Redman, are a big reason why the Fleischers’ work is represented in this restoration collection. Also restored were two stop-motion animation shorts directed by George Pal, known for his charming “Puppetoons,” and a Terrytoon, The Three Bears, produced by Paul Terry..',
}

export function EventItem() {
  return {
    data() {
      return {
        ...mockEvent,
      }
    },
    components: { SearchResult },
    template: `
    <component is="style" type="text/css">
        .date-time {
          display: flex;
          flex-direction: column;
          font-family: Karbon, Adjusted Tahoma Fallback, Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-size: 20px;
          letter-spacing: .01em;
          line-height: 1.6;
          color: #434343;
          // margin: 4px 0 0 16px;
        }
      </component>
        <search-result
            :category="category"
            :title="title"
            :summary="summary"
            :to="to"
        >
          <template #mid>
            <div class="date-time">
              <time class="schedule-item" data-v-3a64bf88="">April 11, 2025</time>
              <time class="schedule-item" data-v-3a64bf88="">7:30 pm - 9:00 pm</time>
            </div>
          </template>
        </search-result>
    `,
  }
}

const mockEventSeriesOnGoing = {
  category: 'Event Series',
  to: '/visit/events-exhibitions/series1',
  title: 'Legacy Project Screening Series',
  summary:
      '<p>The <a href="https://cinema.ucla.edu/collections/outfest-ucla-legacy-project" target="_blank" rel="noreferrer noopener">Outfest UCLA Legacy Project<span class="visually-hidden">(opens in a new tab)</span></a> is a collaborative effort bringing together the UCLA Film &amp; Television Archive and Outfest to collect, restore and showcase queer film and video</p>'
}

export function EventSeriesOngoing() {
  return {
    data() {
      return {
        ...mockEventSeriesOnGoing,
      }
    },
    components: { SearchResult },
    template: `
    <component is="style" type="text/css">
        .date-time {
          display: flex;
          flex-direction: column;
          font-family: Karbon, Adjusted Tahoma Fallback, Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-size: 20px;
          letter-spacing: .01em;
          line-height: 1.6;
          color: #434343;
          // margin: 4px 0 0 16px;
        }
      </component>
        <search-result
            :category="category"
            :title="title"
            :summary="summary"
            :to="to"
        >
          <template #mid>
          <div class="date-time">
            <div data-v-c4720861="" class="ongoing-item"> Ongoing </div>
          </div>
            </template>
        </search-result>
    `,
  }
}


const mockEventSeries = {
  category: 'Event Series',
  to: '/visit/events-exhibitions/series2',
  title: 'Food and Film',
  summary:
      'Dinner and a movie. It’s a combination, a social custom, perhaps, almost as old as the movies themselves. But where the public fascination with how movies get made still drives an entire media industry, we’ve been less willing, by comparison, to learn as much about how a meal comes together, how the food on our plate gets there. Few people have been more instrumental in changing that than Alice Waters. The co-founder with film producer Paul Aratow of the award-winning Chez Panisse in 1971, the legendary Bay Area chef and restaurateur has been a central, passionate advocate of the farm-to-table movement which promotes seasonal, organic and locally sourced ingredients for restaurants, schools and in the home.'
}

export function EventSeries() {
  return {
    data() {
      return {
        ...mockEventSeries,
      }
    },
    components: { SearchResult },
    template: `
        <component is="style" type="text/css">
        .date-time {
          display: flex;
          flex-direction: column;
          font-family: Karbon, Adjusted Tahoma Fallback, Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-size: 20px;
          letter-spacing: .01em;
          line-height: 1.6;
          color: #434343;
          // margin: 4px 0 0 16px;
        }
      </component>
        <search-result
            :category="category"
            :title="title"
            :summary="summary"
            :to="to"
        >
          <template #mid>
            <div class="date-time">
              <time class="schedule-item" data-v-3a64bf88="">January 17, 2025 - January 19, 2025</time>
            </div>
          </template>
        </search-result>
    `,
  }
}