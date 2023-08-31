<script setup lang="ts">
import DividerGeneral from "../src/components/DividerGeneral.vue"
import DividerWayFinder from "../src/components/DividerWayFinder.vue"
</script>
<template>
    <div id="app" class="app">
        <h1>
            This page displays the components in the
            <a
                href="https://github.com/UCLALibrary/ucla-library-website-components"
            >
                ucla-library-website-components npm repo
            </a>
        </h1>
        <hr />
        <h2>DividerGeneral Component</h2>
        <divider-general :is-bold="true" />
        <hr />

        <h2>DividerWayFinder Component</h2>
        <divider-way-finder color="visit" />
        <hr />
    </div>
</template>
