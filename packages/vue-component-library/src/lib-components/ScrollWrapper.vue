<script lang="ts"setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// PROPS
// const { someProp } = defineProps({
//     someProp: {
//         type: String,
//         default: '',
//     },
// })

// THEME
const theme = useTheme()
const classes = computed(() => {
    return ['scroll-wrapper', theme?.value || '']
})
</script>
<template>
    <div :class="classes">
        <v-sheet class="mx-auto">
            <v-slide-group :show-arrows="true">
                <!-- v-for="n in 25" :key="n" v-slot="{ isSelected, toggle } -->
                <v-slide-group-item>
                    <slot></slot>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>
<style lang="scss" scoped>
</style>
