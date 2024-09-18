<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

// PROPS?

onMounted(() => {
    // Watch for changes in window width only after the component is mounted
    const { width } = useWindowSize()
    watch(width, (newWidth) => {
        // console.log("window width changes on client side")
        isMobile.value = newWidth <= 1200
    }, { immediate: true })
})

// Track height of sidebar and ensure main content as at least as tall
const isMobile: Ref<Boolean> = ref(false)
const sidebar: Ref<HTMLDivElement | null> = ref(null)
const primaryCol: Ref<HTMLDivElement | null> = ref(null)

// TODO move to onMounted?
// '!' indicates to typescript that we are certain 
// the element is defined when the watcher executes
watch([isMobile, sidebar], ([newValIsMobile, newValSidebar]) => {
    if (newValIsMobile === true) {
        primaryCol!.value!.style!.minHeight = 'auto' // on mobile, reset height
    } else {
        primaryCol!.value!.style!.minHeight = `${newValSidebar!.clientHeight + 125}px`
    }
}, { deep: true }) // TEST: may not need deep watch

//THEME
</script>

<template>
    <!-- series page template -->
    <div class="two-column">
        <div
            ref="primaryCol"
            class="primary-column top">
            <!--- <SectionWrapper>
          <CardMeta
            category="Series"
            :title="page?.title"
            :text="page?.eventDescription"
            :introduction="page?.ftvaEventIntroduction"
            :guest-speaker="page?.guestSpeaker"
          />
          <RichText
            v-if="page?.richText"
            :rich-text-content="page?.richText"
          />
        </SectionWrapper> -->
        </div>
        <div class="sidebar-column">
            <div
                ref="sidebar"
                class="sidebar-content-wrapper">
                <BlockEventDetail
                    data-test="event-details"
                    :start-date="page?.startDate"
                    :end-date="page?.endDate"
                    :ongoing="page?.ongoing"
                    :locations="page?.location" />
                <BlockInfo
                    v-if="page?.ftvaTicketInformation && page?.ftvaTicketInformation.length > 0"
                    data-test="ticket-info"
                    :ftva-ticket-information="page?.ftvaTicketInformation" />
            </div>
        </div>
    </div>

    <!-- events page template -->
    <div class="two-column">
        <div class="primary-column top">
            <!--<SectionWrapper>
              /*   DOCUMENT WHAT SLOTS IN WHERE ON WHICH LAYOUTS, BREAK THIS DOWN INTO PROPS?
             EX: SOME LAYOUTS everything into slot 1, some layouts top sidebar into slot 1,
             bottom sidebar into slot #2, etc */
                <CardMeta
                    data-test="text-block"
                    :category="series[0]?.title"
                    :title="page?.title"
                    :guest-speaker="page?.guestSpeaker"
                    :tag-labels="page?.tagLabels"
                    :introduction="page?.introduction" />
                <RichText
                    v-if="page?.eventDescription"
                    data-test="event-description"
                    class="eventDescription"
                    :rich-text-content="page?.eventDescription" />

                <RichText
                    v-if="page?.acknowledements"
                    data-test="acknowledgements"
                    class="acknowledgements"
                    :rich-text-content="page?.acknowledements" />
            </SectionWrapper> -->
        </div>

        <!-- sidebar slots in here on mobile -->
        <!-- on desktop sidebar is stickied to the side with css -->
        <div class="sidebar-column">
            <div class="sidebar-content-wrapper">
                <!-- <BlockEventDetail
                    data-test="event-details"
                    :start-date="page?.startDateWithTime"
                    :time="page?.startDateWithTime"
                    :locations="page?.location" />
                <ButtonDropdown
                    data-test="calendar-dropdown"
                    :title="parsedCalendarData?.title"
                    :event-description="parsedCalendarData?.eventDescription"
                    :start-date-with-time="parsedCalendarData?.startDateWithTime"
                    :location="parsedCalendarData?.location"
                    :is-event="true"
                    :debug-mode-enabled="false" />
                <BlockInfo
                    v-if="page?.ftvaTicketInformation && page?.ftvaTicketInformation.length > 0"
                    data-test="ticket-info"
                    :ftva-ticket-information="page?.ftvaTicketInformation" /> -->
            </div>
        </div>

        <div class="primary-column bottom">
            <!--<SectionWrapper>
          <DividerWayFinder />
        </SectionWrapper>

        <SectionWrapper>
          <SectionScreeningDetails
            v-if="parsedFTVAEventScreeningDetails"
            data-test="screening-details"
            :items="parsedFTVAEventScreeningDetails"
          />
        </SectionWrapper> -->
            <slot name="primary-col-bottom" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>