<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'

// COMPONENTS
import BlockPostSmall from '@/lib-components/BlockPostSmall.vue'
import ButtonMore from '@/lib-components/ButtonMore.vue'

// TYPES
interface PostSmallItemType {
  image: MediaItemType
  categoryName: string
  author: string
  title: string
  to: string
}

const { items } = defineProps({
  items: {
    type: Array as PropType<PostSmallItemType[]>,
    default: () => [],
  },
  to: {
    type: string,
    default: '',
  },
})
</script>

<template>
  <section class="section-post-small">
    <div class="grid">
      <BlockPostSmall
        v-for="item in items"
        :key="`block-post-${item.title}`"
        :category-name="item.categoryName"
        :author="item.author"
        :title="item.title"
        :image="item.image"
        :to="item.to"
        class="block"
      />
    </div>

    <smart-link
      v-if="to"
      class="more"
      :to="to"
    >
      <ButtonMore />
    </smart-link>
  </section>
</template>

<style
  lang="scss"
  scoped
>
.section-post-small {
  background-color: var(--color-white);
  padding: 0 var(--unit-gutter);

  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    max-width: var(--unit-content-width);
    margin: 0 auto;
  }

  .block {
    margin-bottom: 10px;
  }

  .more {
    display: block;
    padding: 30px 40px;
    margin: 0 auto;
    width: max-content;
  }
}
</style>
