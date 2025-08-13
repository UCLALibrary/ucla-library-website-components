<script setup lang="ts">
// Imports
import SmartLink from "@/lib-components/SmartLink.vue"
import SvgIconArrowRight from "ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg"
import Button from "./Button.vue"
import { ButtonColor } from "@/types/components/button.types"
import { pluralizeWithCount } from "@/utils/pluralize"

// Types
interface DetailHeaderProps {
    totalResults?: number
    tag: {
        name: string
        value: {
            label: string
            to: string
        }
    }
    previousTo?: string
    nextTo?: string
    backTo?: string
}

// Props
const props = defineProps<DetailHeaderProps>()
</script>

<template>
    <div class="detail-header">
        <div class="left">
            <div class="prev-next-container">
                <SmartLink v-if="previousTo" :to="previousTo" class="previous">
                    <SvgIconArrowRight class="previous-svg" />
                    <div class="underline-hover">Previous</div>
                </SmartLink>

                <div v-if="previousTo && nextTo" class="divider-vertical" />

                <SmartLink v-if="nextTo" :to="nextTo" class="next">
                    <div class="underline-hover">Next</div>
                    <SvgIconArrowRight class="next-svg" />
                </SmartLink>

                <div v-if="totalResults" class="results-number">
                    {{ pluralizeWithCount(totalResults, "result") }}
                </div>
            </div>

            <div class="tag" v-if="tag.name">
                <span class="tag-name">{{ tag.name }}:</span>
                <SmartLink :to="tag.value.to" class="tag-value"
                    >{{ tag.value.label }}
                </SmartLink>
            </div>
        </div>

        <div class="right">
            <Button
                v-if="props.backTo"
                :to="props.backTo"
                class="back-button"
                :color="ButtonColor.Grey"
                text="Back to Search Results"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detail-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px 14px;

    .left {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        gap: 16px;
    }

    .prev-next-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .divider-vertical {
        width: 1px;
        height: 30px;
        background-color: var(--color-secondary-grey-02);
        margin: 0 12px;
    }
    .next,
    .previous {
        display: flex;
        flex-direction: row;
        align-items: center;

        font-family: var(--font-secondary);
        font-size: 18px;
        font-weight: 400;
        line-height: 1;
    }
    .previous-svg {
        transform: scaleX(-1);
        margin-right: 5px;
    }
    .next-svg {
        margin-left: 5px;
    }
    .underline-hover::before {
        background-color: var(--color-default-cyan-03);
    }
    .results-number {
        font-family: var(--font-secondary);
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        color: var(--color-secondary-blue-03);
        margin-left: 16px;
    }

    .tag {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;

        font-weight: 600;
        line-height: 1;
    }
    .tag-name {
        font-size: 16px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
    }
    .tag-value {
        font-size: 18px;
        text-decoration-line: underline;
        color: var(--color-secondary-blue-03);

        transition: color 0.3s ease-in-out;
    }

    // Hovers
    @media #{$has-hover} {
        .previous:hover,
        .next:hover {
            .underline-hover::before {
                width: 100%;
                opacity: 1;
            }
        }
        .tag-value:hover {
            color: var(--color-default-cyan-03);
        }
    }
    // Breakpoints
    @media #{$extra-large} {
    }
    @media #{$medium} {
    }
    @media #{$small} {
        column-gap: 24px;

        .prev-next-container {
            margin: 0 auto;
        }
    }
}
</style>
