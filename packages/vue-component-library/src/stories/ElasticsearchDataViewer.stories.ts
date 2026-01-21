import ElasticsearchDataViewer from '@/lib-components/ElasticsearchDataViewer.vue'

export default {
  title: 'Examples / Elasticsearch Data Viewer',
  component: ElasticsearchDataViewer,
  parameters: {
    docs: {
      description: {
        component: 'Simple component that displays Elasticsearch API response data as key-value pairs. Automatically fetches 10 sample documents on mount.',
      },
    },
  },
}

export const Default = () => ({
  components: { ElasticsearchDataViewer },
  template: '<elasticsearch-data-viewer />',
})
Default.parameters = {
  docs: {
    description: {
      story: 'Displays Elasticsearch data in a simple key-value format. Shows all fields from the _source object for each document.',
    },
  },
}
