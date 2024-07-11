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
