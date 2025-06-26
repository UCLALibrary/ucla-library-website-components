import ButtonPageView from '@/lib-components/ButtonPageView'


export default {
  title: 'Funkhaus / PageView',
  component: ButtonPageView,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        pageView: 'list',
      }
    },
    components: { ButtonPageView },
    template: '<div>Active page view: <b>{{pageView}}</b> <button-page-view :page-view="pageView" @update:page-view="onUpdate" /> </div>',
    methods: {
      onUpdate(value) {
        this.pageView = value.toUpperCase()
      },
    },
  }
}

