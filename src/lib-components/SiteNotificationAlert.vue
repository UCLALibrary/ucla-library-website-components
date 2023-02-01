<template>
    <section :class="classes" role="alert">
        <button class="alert" @click="toggleAlert()">
            <div class="alert-box-icon">
                <svg-alert-circle class="svg-alert-circle" />
            </div>
            <div class="alert-text" v-html="title" />
        </button>

        <div class="message">
            <div class="message-text">
                <rich-text v-if="text" class="text" :rich-text-content="text" />
            </div>
            <button-link
                class="button-dismiss"
                label="Dismiss"
                icon-name="icon-close"
                is-quaternary
                @click.native="toggleAlert"
            />
        </div>
    </section>
</template>

<script>
import ButtonLink from "./ButtonLink.vue"

export default {
    name: "SiteNotificationAlert",
    components: {
        ButtonLink,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        time: {
            type: Number,
            default: 13500,
        },
    },
    data() {
        return {
            isOpened: true,
        }
    },
    computed: {
        classes() {
            return [
                "site-notification-alert",
                this.isOpened ? "is-opened" : "is-closed",
            ]
        },
    },
    mounted() {
        this.delayedClose()
    },
    methods: {
        toggleAlert() {
            this.isOpened = !this.isOpened
        },
        delayedClose() {
            setTimeout(() => {
                this.isOpened = false
            }, this.time)
        },
    },
}
</script>

<style lang="scss" scoped>
.site-notification-alert {
    width: 410px;

    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex-wrap: nowrap;

    .alert {
        position: relative;
        z-index: 10;

        display: flex;
        justify-content: center;
        user-select: none;

        background-color: var(--color-primary-yellow-01);
        border-radius: var(--rounded-slightly-all);
        transition: border-radius 400ms ease-in-out;
        height: 48px;
        max-width: 196px;

        &:hover {
            cursor: pointer;
        }

        .alert-box-icon {
            align-self: center;
            padding: 0 0 0 20px;

            .svg-alert-circle {
                path {
                    stroke: var(--color-black);
                }
            }
        }

        .alert-text {
            align-self: center;
            flex-wrap: nowrap;

            color: var(--color-black);
            font-family: var(--font-primary);
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.01em;
            line-height: 14px;
            overflow: hidden;
            padding: 0 20px 3px 4px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background-color: #{$white};
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04),
            0px 6px 32px rgba(0, 0, 0, 0.08);
        border-radius: var(--rounded-slightly-all);
        border-top-right-radius: 0;

        transition-property: clip-path opacity border-radius;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;

        .message-text {
            margin: 24px 32px 12px;
            max-height: 128px;
            overflow: auto;

            color: var(--color-black);
            font-family: var(--font-primary);
            .text {
                padding: 0;
                ::v-deep p {
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 0.01em;
                    line-height: 22px; 
                }
            }
        }

        .button-dismiss {
            margin: 0 24px 24px;
            width: min-content;
        }
    }

    // States
    &.is-opened {
        .alert {
            border-radius: var(--rounded-slightly-top);
        }

        .message {
            opacity: 1;
            clip-path: inset(-30% -30% -30% -30%); //space for drop shadow
        }
    }

    &.is-closed {
        .message {
            opacity: 0;
            clip-path: inset(0% 0% 100% 70%);
        }
    }

    // Breakpoints
    @media #{$small} {
        width: 300px;
        .message {
            width: 300px;
        }
    }
}
</style>
