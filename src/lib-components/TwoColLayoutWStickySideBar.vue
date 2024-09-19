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

    <div class="two-column">
        <!-- main column -->
        <div
            ref="primaryCol"
            class="primary-column top">
            <!-- card meta in a slot or hardcoded? -->
            <slot name="primary-top"></slot>
            <!-- cardmeta, richtext in a slot or hardcoded? -->
            <!-- TODO do we even need a second one? -->
            <slot name="primary-bottom"></slot>
        </div>

        <!-- sidebar column -->
        <div class="sidebar-column">
            <div
                ref="sidebar"
                class="sidebar-content-wrapper">
                <!-- block event detail, sharebutton, blockInfo in a slot or hardcoded? -->
                <slot name="sidebar"></slot>
            </div>
        </div>

        <!-- bottom of main column??? -->
        <!-- TODO keep this seperate or combine into main column and change styles for sticky sidebar ?-->
    </div>

    <!-- TODO remove commented out reference code from pages below when done -->
    <!-- series page template -->
    <!-- <div class="two-column">
        <div
            ref="primaryCol"
            class="primary-column top">
            <SectionWrapper>
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
        </SectionWrapper>
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
    </div> -->

    <!-- events page template -->
    <!-- <div class="two-column">
        <div class="primary-column top">
            <SectionWrapper>
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
            </SectionWrapper>
        </div>

        // sidebar slots in here on mobile
        <div class="sidebar-column">
            <div class="sidebar-content-wrapper">
                <BlockEventDetail
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
                    :ftva-ticket-information="page?.ftvaTicketInformation" />
            </div>
        </div>

        <div class="primary-column bottom">
            <SectionWrapper>
          <DividerWayFinder />
        </SectionWrapper>

        <SectionWrapper>
          <SectionScreeningDetails
            v-if="parsedFTVAEventScreeningDetails"
            data-test="screening-details"
            :items="parsedFTVAEventScreeningDetails"
          />
        </SectionWrapper>
        </div>
    </div> -->
</template>

<style lang="scss" scoped>
//TODO move styles to theme file? these are for FTVA
.two-column {
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .primary-column {
        margin-bottom: 0px;
        width: 67%;

        .section-wrapper {
            padding-left: 0px;
        }

        &.bottom {
            margin-top: -30px;
        }
    }
    // TODO refactor to put space between generic child components instead of targeting specific ones
    // .ftva.block-info {
    //     margin-top: 48px;
    // }

    .sidebar-column {
        min-width: 314px;
        width: 30%;
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        padding-top: var(--space-2xl);
        padding-bottom: 40px;

        .sidebar-content-wrapper {
            position: sticky;
            top: 85px;
            will-change: top;
        }
    }   
}
  // MEDIUM DEVICE STYLES
  @media (max-width: 1200px) {
      .two-column {
          padding-left: var(--unit-gutter);
          padding-right: var(--unit-gutter);
        .sidebar-column {
            padding-right: var(--unit-gutter);
        }
      }

      .two-column>.primary-column {
          width: 62%;
      }
  }

  // MOBILE STYLES
  @media #{$small} {
      .two-column {
          display: grid;
          grid-template-columns: 1fr;

          .primary-column {
              width: auto;
              grid-column: 1;

              .section-wrapper {
                  padding-left: var(--unit-gutter);
              }

              &.bottom {
                  margin-top: auto;
              }
          }

          .sidebar-column {
              width: auto;
              position: relative;
              grid-column: 1;
              margin: auto var(--unit-gutter);
              padding-top: 0px;
              height: auto; // let content determine height on mobile
          }
      }
  }
</style>