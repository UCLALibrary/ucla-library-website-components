<template>
    <!--div-->
    <!--h4>Got fORM dATA</h4>
        {{ blockFormData }}
        <br /-->
    <button-link
        v-if="!showForm"
        @click.native.prevent="showBlockEvent()"
        label="Register"
        iconName="none"
        :is-secondary="true"
        class="register-button"
    >
    </button-link>
    <div
        class="block-form"
        :class="{
            'form-error': errors.length,
            'form-success': hasNotifications,
        }"
        v-else
    >
        <!--h4>Hello form data again</h4>
            {{ blockFormData }} -->
        <div class="success-message" v-if="hasNotifications">
            <h3>Registration complete</h3>
            <p>Please check your email to view your booking.</p>

            <button
                type="button"
                class="notification--remove"
                @click="removeNotification()"
            >
                <svg-glyph-close class="svg-glyph-close" />
            </button>
        </div>
        <form id="app" method="post" class="form" v-else>
            <div class="formTitleWrapper">
                <h3 class="formTitle">Registration</h3>

                <button type="button" @click="closeBlockForm()">
                    <svg-glyph-close class="svg-glyph-close" />
                </button>
            </div>

            <div v-if="errors.length" class="form-errors">
                <p>
                    Please complete the required fields to complete registration
                </p>
            </div>

            <br v-if="errors.length" />

            <div class="registrationInfo">
                <p>Registration is required for this event.</p>
            </div>

            <div
                class="input-wrapper input-radio"
                v-if="this.registrationType === 'both'"
            >
                <legend>
                    Registration Type <span class="required">(required)</span>
                </legend>

                <label for="in-person">
                    <input
                        type="radio"
                        v-model="registrationTypeInput"
                        value="in-person"
                        required
                        id="in-person"
                    />in-person</label
                >

                <label for="online">
                    <input
                        type="radio"
                        v-model="registrationTypeInput"
                        value="online"
                        id="online"
                    />
                    online</label
                >
            </div>

            <div class="input-wrapper">
                <label
                    >Full Name <span class="required">(required)</span></label
                >
                <div class="input-container">
                    <input
                        id="firstName"
                        v-model="firstName"
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name"
                    />
                    <input
                        id="lastName"
                        v-model="lastName"
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div v-if="blockFormData.emailMethod" class="input-wrapper">
                <label for="email">
                    <span v-if="blockFormData.emailMethod.status == 'required'">
                        Email <span class="required">(required)</span>
                    </span>
                    <span v-else>Email</span>
                </label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    :required="blockFormData.emailMethod.status"
                    v-bind="{}"
                />
            </div>

            <div
                :key="question.id"
                v-for="question in parseQuestions"
                class="input-wrapper parsedQuestionsLabelWrapper"
            >
                <label
                    :for="question.id"
                    v-if="question.type !== 'string'"
                    :class="question.required ? 'questionRequired' : ''"
                >
                    {{ question.label }}
                    <span class="required" v-if="question.required">
                        (required)
                    </span>
                </label>

                <div v-if="question.type == 'string'" class="textareaWrapper">
                    <label
                        :for="question.id"
                        :class="question.required ? 'questionRequired' : ''"
                    >
                        {{ question.label }}
                        <span class="required" v-if="question.required"
                            >(required)</span
                        >
                    </label>
                    <textarea
                        v-model="formQuestions[question.id]"
                        placeholder="Add multiple lines"
                    />
                </div>

                <div class="radio-wrapper" v-if="question.type == 'radio'">
                    <div
                        :key="index"
                        v-for="(option, index) in question.options"
                        class="radioWrapper"
                    >
                        <label :for="option">
                            <input
                                type="radio"
                                :value="option"
                                v-model="formQuestions[question.id]"
                                :name="question.id"
                                :id="option"
                            />
                            {{ option }}
                        </label>
                    </div>
                </div>
                <div
                    class="checkbox-wrapper"
                    v-if="question.type == 'checkbox'"
                >
                    <div
                        :key="index"
                        v-for="(option, index) in question.options"
                        class="checkboxWrapper"
                    >
                        <input
                            type="checkbox"
                            :id="option"
                            v-model="formQuestions[question.id]"
                            :true-value="option"
                            :value="option"
                        />
                        <label :for="option">{{ option }}</label>
                    </div>
                </div>

                <select
                    v-if="question.type == 'dropdown'"
                    :id="question.id"
                    v-model="formQuestions[question.id]"
                    :name="question.id"
                    class="input-dropdown"
                    :class="question.classes"
                >
                    <option disabled value="">Please select one</option>
                    <option
                        :key="index"
                        v-for="(option, index) in question.options"
                        v-bind:value="option"
                    >
                        {{ option }}
                    </option>
                </select>
            </div>

            <button-link
                type="submit"
                label="Register"
                iconName="none"
                :is-secondary="true"
                @click.native.prevent="checkForm"
            />
        </form>
    </div>
    <!--/div-->

    <!-- TODO  do we need to add required to checkbox and radio and select inout elements -->
</template>

<script>
import SvgGlyphClose from "ucla-library-design-tokens/assets/svgs/icon-close.svg"
import SvgIconCheckbox from "ucla-library-design-tokens/assets/svgs/icon-checkbox.svg"

export default {
    name: "BlockForm",
    inject: [
        "eventId",
        "blockFormData",
        "registrationType",
        "libcalWaitlist",
        "libcalEndpoint",
    ],
    components: {
        SvgGlyphClose,
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
    },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            errors: [],
            firstName: "",
            lastName: "",
            email: "",
            emailRequired: false,
            questionsRequired: {},
            formQuestions: {},
            countdown: null,
            hasNotifications: false,
            sent: false,
            status: {},
            showForm: false,
            registrationTypeInput: "",
        }
    },
    watch: {
        status() {
            this.hasNotifications = true
            this.countdown = setTimeout(this.removeNotification, 113000)
        },
    },
    computed: {
        iconClass() {
            console.log(this.eventId)
            switch (this.status.code) {
                case "success":
                    return "fa-check"
                case "error":
                    return "fa-exclamation"
            }
            return ""
        },
        parseQuestions() {
            console.log(
                "what is the value :" + JSON.stringify(this.blockFormData)
            )
            if (!this.blockFormData.questions) return []
            return this.blockFormData.questions.map((obj) => {
                if (
                    obj.type === "string" ||
                    obj.type === "radio" ||
                    obj.type === "dropdown"
                ) {
                    this.formQuestions[obj.id] = ""
                } else {
                    this.formQuestions[obj.id] = []
                }
                this.questionsRequired[obj.id] = obj.required
                return {
                    ...obj,
                    classes: `input-${obj.type}`,
                }
            })
        },
    },
    methods: {
        removeNotification() {
            clearTimeout(this.countdown)
            this.hasNotifications = false
            this.showForm = false
        },
        /*encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key]
                        )}`
                )
                .join("&")
        },*/
        handleSubmit() {
            const data = {
                form: {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    questions: [],
                },
                registration_type:
                    this.registrationType &&
                    this.registrationType !== "both" &&
                    this.registrationType !== ""
                        ? this.registrationType
                        : this.registrationType &&
                          this.registrationType === "both"
                        ? this.registrationTypeInput
                        : "",
                is_waitlist:
                    this.libcalWaitlist && this.libcalWaitlist !== ""
                        ? this.libcalWaitlist
                        : "0",
            }

            data.form.questions = this.blockFormData.questions.map((obj) => {
                return {
                    id: obj.id,
                    answer: this.formQuestions[obj.id],
                }
            })

            let url = ""
            if (this.libcalEndpoint) {
                url = `${this.libcalEndpoint}api/1.1/events/${this.eventId}/register`
            } else {
                url =
                    process.env.VUE_APP_CALENDAR_LIBRARY_URL +
                    `${this.eventId}/register`
            }

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(data),
            })
                .then((data) => {
                    this.sent = true
                    this.status = {
                        code: "success",
                        text: "One seat is sent to LibCal to be registered or will be on wait list",
                    }
                })
                .catch((err) => {
                    console.error(err)
                    this.sent = true
                    this.status = {
                        code: "error",
                        text: err,
                    }
                })
        },

        checkForm(e) {
            let fullNameValid = false
            let emailValid = false
            let registrationTypeValid = false

            if (this.firstName && this.lastName) {
                fullNameValid = true
            }
            if (
                this.blockFormData.emailMethod.status === "required" &&
                this.email
            ) {
                emailValid = true
            }

            if (
                this.registrationType &&
                this.registrationType === "both" &&
                this.registrationTypeInput === ""
            ) {
                registrationTypeValid = false
            } else if (
                this.registrationType &&
                this.registrationType !== "both"
            ) {
                registrationTypeValid = true
            } else {
                registrationTypeValid = true
            }

            this.errors = []
            if (!fullNameValid) {
                this.errors.push("Full Name required.")
            }
            if (!emailValid) {
                this.errors.push("Email required.")
            }
            if (!registrationTypeValid) {
                this.errors.push("Registration Type required.")
            }

            for (let question of this.blockFormData.questions) {
                if (
                    this.questionsRequired[question.id] &&
                    !this.formQuestions[question.id]
                ) {
                    question.type === "string"
                        ? this.errors.push(
                              this.blockFormData.questions.label + " required."
                          )
                        : this.errors.push(question.label + " required.")
                } else if (
                    this.questionsRequired[question.id] &&
                    question.type == "checkbox" &&
                    this.formQuestions[question.id].length == 0
                ) {
                    this.errors.push(question.label + " required.")
                }
            }

            if (this.errors.length == 0) {
                this.handleSubmit()
            } else {
                window.scrollTo(0, 0)
            }
        },

        closeBlockForm() {
            this.showForm = false
        },
        showBlockEvent() {
            this.showForm = true
        },
    },
}
</script>

<style lang="scss" scoped>
.block-form {
    border-radius: var(--rounded-slightly-all);
    border: 2px solid var(--color-primary-blue-03);
    width: 100%;
    max-width: $container-l-main + px;
    padding: var(--space-xl);

    &.form-error {
        border-color: var(--color-status-error-02);
    }

    &.form-success {
        border-color: var(--color-status-success-02);
    }

    @media #{$medium} {
        max-width: 100%;
        min-width: 600px;
    }

    @media #{$small} {
        max-width: 100%;
        min-width: 320px;
    }

    .formTitleWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--color-secondary-grey-01);
        margin-bottom: 8px;

        ::v-deep .svg__fill--secondary-grey-01 {
            fill: none;
        }
    }

    .formTitle {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin-bottom: 8px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: var(--space-m);

        .required {
            font-size: var(--step--1);
            color: var(--color-status-error-02);
            vertical-align: baseline;
            align-self: baseline;
            margin-left: 8px;
        }

        .input-container {
            display: flex;
            flex: auto;
            justify-content: space-between;

            input {
                padding: 8px 16px;
                width: 100%;
            }

            &:has(:nth-child(n + 1)) input:first-child {
                margin-right: 8px;
            }
        }

        legend {
            @include step-0;
        }

        > input {
            padding: 8px 16px;
            width: 100%;
        }
    }

    .input-radio {
        label {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: var(--space-xs);
        }
    }

    label {
        @include step-0;
        width: 100%;
    }

    label:required {
        @include step-0;
        font-weight: $font-weight-medium;
    }

    ::placeholder {
        @include step--1;
        color: var(--color-secondary-grey-04);
    }

    .registrationInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @include step-0;
        margin-bottom: var(--space-l);

        @media #{$small} {
            flex-direction: column;
            gap: 8px;
        }

        .requiredField {
            font-weight: $font-weight-medium;
        }
    }
    .registration-type {
        font-weight: 600;
    }

    .fullNameWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;

        label {
            font-weight: $font-weight-semibold;
            text-align: end;
        }

        div {
            display: flex;
            flex: auto;
            justify-content: space-between;

            input {
                padding: 8px 16px;
                width: 49%;
            }
        }

        @media #{$medium} {
            flex-direction: column;
            max-width: 100%;
            align-items: flex-start;
            div {
                width: 100%;
            }
        }
    }

    .emailLabelWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        label {
            font-weight: $font-weight-semibold;
        }
        input {
            padding: 8px 16px;
            flex: auto;
        }

        @media #{$medium} {
            flex-direction: column;
            max-width: 100%;
            align-items: flex-start;

            input {
                width: 100%;
            }
        }
    }

    .checkboxWrapper {
        display: flex;
        flex-direction: row;

        input {
            margin-right: 14px;
            width: auto;
        }
    }

    textarea {
        padding: 8px 16px;
        border-radius: var(--rounded-slightly-all);
    }

    input {
        border: 1px solid;
        border-color: var(--color-secondary-grey-03);
        border-radius: var(--rounded-slightly-all);
        font: {
            color: var(--color-secondary-grey-04);
        }

        @include step--1;
        color: var(--color-secondary-grey-05);

        &:hover {
            border-color: var(--color-default-cyan-03);
        }

        &:focus {
            border-color: var(--color-default-cyan-03);
            font {
                color: var(--color-secondary-grey-04);
            }
        }

        &:active {
            border-color: var(--color-default-cyan-03);
            font {
                color: var(--color-secondary-grey-05);
            }
            background-color: var(--color-primary-blue-01);
        }
    }

    .input-dropdown {
        padding: 12px 16px;
        flex: auto;
        border-radius: var(--rounded-slightly-all);
        width: 100%;
        background: white;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' class='svg__icon-caret-down'%3E%3Cpath d='m10 14.729 6 6 6-6' stroke='%23999999' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round' class='svg__stroke--primary-blue-03' /%3E%3C/svg%3E") !important;
        background-size: initial !important;
        background-repeat: no-repeat;
        background-position: center right calc(0.375em + 0.1875rem);
        @include step--1;
    }

    .textareaWrapper {
        display: flex;
        flex-direction: column;
        flex: auto;

        label {
            width: auto;
            margin-bottom: 10px;
        }
        @media #{$medium} {
            width: 100%;
        }
    }

    .radioWrapper {
        display: flex;
        flex-direction: row;

        label {
            align-self: flex-start;
            @media #{$medium} {
                align-self: flex-start;
                width: 100%;
            }
        }

        input {
            margin-right: 16px;
        }
    }

    .success-message {
        position: relative;
        z-index: 5;
        box-sizing: border-box;
        width: 100%;

        h3 {
            @include step-1;
            padding-bottom: 8px;
            margin-bottom: 8px;
            border-bottom: 1px solid var(--color-secondary-grey-01);
        }

        p {
            @include step-0;
        }

        .notification--remove {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 15px;
            &:hover {
                cursor: pointer;
            }

            ::v-deep .svg__fill--secondary-grey-01 {
                fill: none;
            }
        }
    }
    .form-errors {
        background-color: var(--color-status-error-01);
        box-sizing: border-box;
        padding: 20px;
        border-radius: var(--rounded-slightly-all);
        @include step-0;
    }
}
</style>
