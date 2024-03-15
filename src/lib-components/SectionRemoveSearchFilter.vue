<script setup>
import BlockRemoveSearchFilter from "@/lib-components/BlockRemoveSearchFilter.vue"
import { computed, ref, watch } from 'vue'

const filteredFilters = ref({})

const { filters } = defineProps({
  filters: {
    type: Object,
    default: () => { },
  },
})

watch(filters, (newVal, oldVal) => {
  console.log('filters changed from', JSON.stringify(oldVal), JSON.stringify(newVal))
  filteredFilters.value = { ...newValue }
}, { deep: true, immediate: true })

// watch: {
//   filters: {
//     handler(newValue) {
//       console.log("deep watch activated:" + JSON.stringify(newValue))
//       this.filteredFilters = { ...newValue }
//     },
//     deep: true,
//       immediate: true,
//     },
// }


const hasFilters = computed(() => {
  for (let property in filteredFilters.value) {
    if (
      typeof filteredFilters.value[property] === "string" &&
      filteredFilters.value[property] !== ""
    ) {
      return true
    } else if (
      Array.isArray(filteredFilters.value[property]) &&
      filteredFilters.value[property].length > 0
    ) {
      return true
    }
  }
  return false
})
const parsedFilters = computed(() => {
  let parseFilters = []
  for (let property in filteredFilters.value) {
    let obj = {}
    console.log("type of :" + typeof filteredFilters.value[property])
    if (
      typeof filteredFilters.value[property] === "string" &&
      filteredFilters.value[property] !== ""
    ) {
      obj[property] =
        {
          past: "Include Past Events",
          "subjectLibrarian.keyword": "Subject Librarian",
        }[property] || filteredFilters.value[property]
      console.log("what is in obj:" + obj[property])
      parseFilters.push(obj)
    } else if (
      Array.isArray(filteredFilters.value[property]) &&
      filteredFilters.value[property].length > 0
    ) {
      filteredFilters.value[property].forEach((item) => {
        let obj = {}
        obj[property] = item
        parseFilters.push(obj)
      })
    }
  }

  return parseFilters
})

const emit = defineEmits(['update:selected', 'remove-selected'])

function closeBlockFilter(esfieldName, label, indexVal) {
  if (
    typeof filteredFilters.value[esfieldName] === "string" &&
    filteredFilters.value[esfieldName] !== ""
  ) {
    filteredFilters.value[esfieldName] = ""
  } else if (
    Array.isArray(this.filteredFilters[esfieldName]) &&
    filteredFilters.value[esfieldName].length > 0
  ) {
    filteredFilters.value[esfieldName] = filteredFilters.value[
      esfieldName
    ].filter((el, index) => {
      return el !== label
    })
  }
  emit('update:selected', filteredFilters.value)
  emit('remove-selected')
}


</script>

<template>
  <div
    class="section-remove-search-filter"
    v-show="hasFilters"
  >
    <div
      v-for="(filter, index) in parsedFilters"
      :key="`filter-${Object.keys(filter)[0]}-${index}`"
    >
      <block-remove-search-filter
        :title="filter[Object.keys(filter)[0]]"
        :filterType="Object.keys(filter)[0]"
        @removeBlockFilter="
      closeBlockFilter(
        Object.keys(filter)[0],
        filter[Object.keys(filter)[0]],
        index
      )
      "
      />
    </div>
  </div>
</template>


<style
  scoped
  lang="scss"
>
.section-remove-search-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}
</style>