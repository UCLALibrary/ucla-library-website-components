<template>
    <tr class="block-staff-subject-librarian">
        <!-- SUBJECT AREA -->
        <td class="academic-department" v-html="subjectArea" />

        <!-- NAME -->
        <td class="librarian-block">

            <smart-link 
                id="block-staff-subject-librarian"
                :to="to"
                class="staff-name"
            >
                {{ staffName }}
                <span
                    v-if="alternativeFullName"
                    :lang="language"
                    v-html="alternativeFullName"
                />
            </smart-link>

            <div class="job-title" v-html="jobTitle" />

            <ul v-if="departments.length" class="departments">
                <li class="department" v-html="lastDepartment" />
            </ul>

            <div v-if="locations.length" class="locations">
                <icon-with-link
                    v-for="(location, index) in locations"
                    :key="`${index}`"
                    :text="location.title"
                    icon-name="svg-icon-location"
                    :to="location.uri"
                />
            </div>
        </td>

        <!-- CONTACT INFO -->
        <td class="contact-info">
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
        </td>
    </tr>
</template>

<script>
// UTILITY FUNCTIONS
import _isEmpty from "lodash/isEmpty"

// COMPONENTS
import SmartLink from "@/lib-components/SmartLink.vue"
import IconWithLink from "@/lib-components/IconWithLink.vue"

export default {
    name: "BlockStaffList",
    components: {
        SmartLink,
        IconWithLink
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
        alternativeFullName: {
            ttype: String,
            default: "",
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
    padding: 10px 0;

    .academic-department {
        color: var(--color-primary-blue-05);
        @include step-0;
        font-weight: 500;

        display: flex;
        flex: 1 1 0px;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
    }

    .librarian-block {
        @include step-0;

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
            color: var(--color-primary-blue-03);
            font-weight: 500;

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

    &.subject-librarian-item {
        border-bottom: 2px dotted var(--color-secondary-grey-02);
        padding-left: 0;
        padding-right: 0;

        &:last-child {
            border-bottom: 0;
        }
    }

    // Hover states
    @media #{$has-hover} {
        .staff-name:hover,
        .is-link:hover {
            @include link-hover;
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
        gap: 0px;

        border: 0;
        margin: unset;

        .academic-department {
            margin-bottom: 4px;
        }

        &.subject-librarian-item {
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
