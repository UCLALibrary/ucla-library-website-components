// Vuex to be replaced by Pinia
// import Vue from "vue"
// import Vuex from "vuex"
import BlockCallToAction from '@/lib-components/BlockCallToAction'

// Vue.use(Vuex)

export default {
  title: 'BLOCK / Call to Action',
  component: BlockCallToAction,
}

const mock = {
  svgName: 'svg-call-to-action-chat',
  title: 'Lorem ipsum dolor sit amet?',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  name: 'Lorem ipsum dolor',
  to: '/help/foo/bar/',
  isDark: false,
  isSmallSize: false,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            :svgName="svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :isDark=false
            :isSmallSize="isSmallSize"
        />
    `,
  }
}

export function DarkBlue() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            :svgName= "svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark=true
            :isSmallSize="isSmallSize"
        />
    `,
  }
}

export function SmallCTA() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            svgName= "svg-call-to-action-find"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark=false
            :isSmallSize=true
        />
    `,
  }
}

export function SmallCTADarkBlue() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            svg-name= "svg-call-to-action-money"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-small-size=true
            :is-dark=true
        />
    `,
  }
}


export const GlobalAskALibrarian = () => ({

  data() {
    return {
      ...mock,
    }
  },
  components: { BlockCallToAction },
  template: `
        <block-call-to-action
            :is-global="true"
        />
    `,
})

export const GlobalMeapCTA = () => ({

  data() {
    return {
      ...mock,
    }
  },
  components: { BlockCallToAction },
  template: `
        <block-call-to-action
            :is-meap-global="true"
        />
    `,
})
