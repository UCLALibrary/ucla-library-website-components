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
        <v-sheet class="mx-auto" max-width="600">
            <v-slide-group :show-arrows="true">
                <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle }">
                    <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" rounded @click="toggle">
                        Options {{ n }}
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>
<style lang="scss" scoped>
</style>
