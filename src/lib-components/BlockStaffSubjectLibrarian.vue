<template>
    <li class="block-staff-subject-librarian">
        <!-- SUBJECT AREA -->
        <div class="academic-department">
            <h3 class="staff-name" v-html="subjectArea" />
        </div>

        <!-- NAME -->
        <div class="librarian-block">
            <h3 class="staff-name">
                <smart-link :to="to">
                    {{ staffName }}
                    <span
                        v-if="alternativeFullName"
                        :lang="language"
                        v-html="alternativeFullName"
                    />
                </smart-link>
            </h3>

            <div class="job-title" v-html="jobTitle" />

            <ul v-if="departments.length" class="departments">
                <li class="department" v-html="lastDepartment" />
            </ul>
        </div>

        <!-- CONTACT INFO -->
        <div class="contact-info">
            <div class="email">
                <icon-with-link
                    :text="email"
                    icon-name="svg-icon-email"
                    :to="`mailto:/${email}`"
                />
            </div>

            <div v-if="phone" class="phone">
                <icon-with-link
                    :text="phone"
                    icon-name="svg-icon-phone"
                    :to="`mailto:/${phone}`"
                />
            </div>

            <div v-if="consultation" class="consultation">
                <icon-with-link
                    :text="`Book a consultation`"
                    icon-name="svg-icon-consultation"
                    :to="consultation"
                />
            </div>
        </div>
    </li>
</template>

<script>
import _isEmpty from "lodash/isEmpty"

export default {
    name: "BlockStaffList",
    components: {
        IconWithLink: () =>
            import("@/lib-components/IconWithLink.vue").then((d) => d.default),
    },
    props: {
        subjectArea: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        staffName: {
            type: String,
            default: "",
        },
        nameLast: {
            type: String,
            default: "",
        },
        nameFirst: {
            type: String,
            default: "",
        },
        jobTitle: {
            type: String,
            default: "",
        },
        departments: {
            type: Array,
            default: () => [],
        },
        academicDepartments: {
            type: Array,
            default: () => [],
        },
        locations: {
            type: Array,
            default: () => [],
        },
        alternativeName: {
            type: Array,
            default: () => [],
        },
        uri: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        consultation: {
            type: String,
            default: "",
        },
    },
    computed: {
        lastDepartment() {
            return this.departments[this.departments.length - 1].title
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-subject-librarian {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: var(--space-xl);

    line-height: $line-height--1;
    border: 1px solid var(--color-white);

    padding: var(--space-xl);

    .academic-department {
        border: 1px solid aqua;
        @include step-1;
        padding: var(--space-s);
        color: var(--color-primary-blue-0);

        display: flex;
        flex: 1 1 0px;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
    }

    .librarian-block {
        border: 1px solid coral;
        @include step-1;
        padding: var(--space-s);

        display: flex;
        flex: 1 1 0px;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;

        .name-title {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
        }

        .staff-name {
            @include step-1;
            color: var(--color-primary-blue-03);

            a::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }
        }
        .job-title {
            color: var(--color-black);
        }
        .departments {
            display: flex;
            flex-direction: column;

            list-style: none;
        }
        .department {
            color: var(--color-secondary-grey-04);
        }
    }

    .contact-info {
        border: 1px solid darkgoldenrod;
        padding: var(--space-s);

        display: flex;
        flex: 1 1 0px;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
    }
    .contact-info a {
        @include button;
        z-index: 10;
    }

    .email,
    .phone,
    .consultation {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space-xs);

        color: var(--color-primary-blue-03);

        .icon {
            flex-shrink: 0;
        }
    }

    // Hover states
    @media #{$has-hover} {
        .staff-name a:hover,
        .is-link:hover {
            @include link-hover;
        }

        &:hover {
            @include card-horizontal-hover;
            border-color: var(--color-about-purple-01);
        }
    }

    // Breakpoints
    @media #{$medium} {
        align-items: flex-start;

        .image,
        .no-image {
            --image-size: 220px;
            flex-shrink: 0;
        }

        .job-title,
        .department,
        .contact-info {
            font-size: 18px;
        }

        .contact-info .icon {
            width: 28px;
            height: 28px;
        }
    }
    @media #{$small} {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;

        border: 0;

        &.block-staff-list-item {
            border-bottom: 2px dotted var(--color-secondary-grey-02);
            padding-left: 0;
            padding-right: 0;

            &:last-child {
                border-bottom: 0;
            }
        }

        .image,
        .no-image {
            display: none;
        }

        .meta {
            width: 100%;
        }
    }
}
</style>
