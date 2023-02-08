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
    <div class="block-form" v-else>
        <!--h4>Hello form data again</h4>
            {{ blockFormData }} -->
        <div class="success-message" v-if="hasNotifications">
            <h3>Registration complete</h3>
            <p>
                You can view your booking at calendar.library.ucla.edu or check
                your email.
            </p>

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
                <p class="formTitle">Registration</p>

                <button type="button" @click="closeBlockForm()">
                    <svg-glyph-close class="svg-glyph-close" />
                </button>
            </div>

            <br />
            <div v-if="errors.length" class="form-errors">
                <p>
                    Please complete the required fields to complete registration
                </p>
            </div>

            <br v-if="errors.length" />

            <div class="registrationInfo">
                <p>Registration is required for this event.</p>
                <p class="requiredField">* Required Field</p>
            </div>

            <br />
            <div
                class="registration-type"
                v-if="this.registrationType === 'both'"
            >
                <div>Registration Type*</div>

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
            <br />

            <div class="fullNameWrapper">
                <label>Full Name*</label>
                <div>
                    <input
                        id="firstName"
                        v-model="firstName"
                        type="text"
                        name="firstName"
                        required
                        aria-required="true"
                        placeholder="First Name"
                    />
                    <input
                        id="lastName"
                        v-model="lastName"
                        type="text"
                        name="lastName"
                        required
                        aria-required="true"
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <br />
            <div v-if="blockFormData.emailMethod" class="emailLabelWrapper">
                <label for="email">
                    <span v-if="blockFormData.emailMethod.status == 'required'">
                        Email*
                    </span>
                    <span v-else>Email</span>
                </label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    :required="blockFormData.emailMethod.status"
                    :aria-required="
                        blockFormData.emailMethod.status == 'required'
                    "
                    v-bind="{}"
                />
            </div>

            <br />
            <div
                :key="question.id"
                v-for="question in parseQuestions"
                class="parsedQuestionsLabelWrapper"
            >
                <label
                    :for="question.id"
                    v-if="question.type !== 'string'"
                    :class="question.required ? 'questionRequired' : ''"
                >
                    <span v-if="question.required">{{ question.label }}*</span>
                    <span v-else>{{ question.label }}</span>
                </label>

                <div v-if="question.type == 'string'" class="textareaWrapper">
                    <label
                        :for="question.id"
                        :class="question.required ? 'questionRequired' : ''"
                    >
                        <span v-if="question.required"
                            >{{ question.label }}*</span
                        >
                        <span v-else>{{ question.label }}</span>
                    </label>
                    <textarea
                        v-model="formQuestions[question.id]"
                        placeholder="Add multiple lines"
                    />
                </div>

                <div v-if="question.type == 'radio'">
                    <div
                        :key="index"
                        v-for="(option, index) in question.options"
                        class="radioWrappper"
                    >
                        <input
                            type="radio"
                            :value="option"
                            v-model="formQuestions[question.id]"
                            :name="question.id"
                        />
                        <label :for="option">{{ option }}</label>
                    </div>
                </div>
                <div v-if="question.type == 'checkbox'">
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

            <br />

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
    margin-bottom: var(--space-l);
    width: $container-l-main + px;
    padding: var(--space-xl);

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
        border-bottom: 1px solid var(--color-secondary-grey-02);
    }

    .formTitle {
        @include step-1;
    }

    label {
        @include step-0;
        display: flex;
        flex-direction: row;
        width: 148px;
        gap: var(--space-s);
        margin-right: 16px;

        @media #{$medium} {
            width: 100%;
            align-items: flex-start;
        }
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

    .parsedQuestionsLabelWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1em;

        label {
            align-self: flex-start;
        }

        input {
            flex: auto;
        }

        @media #{$medium} {
            flex-direction: column;
            width: 100%;
            align-items: flex-start;
        }
    }

    .checkboxWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 16px;

        input {
            margin-right: 14px;
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
        @include shadow-state-change;

        @include step--1;
        color: var(--color-secondary-grey-05);

        &:hover {
            border-color: var(--color-default-cyan-03);
        }

        &:focus {
            border-color: var(--color-default-cyan-03);
            font {
                color: var(--color-secondary-grey-04);
                @include shadow-state-change;
            }
        }

        &:active {
            border-color: var(--color-default-cyan-03);
            font {
                color: var(--color-secondary-grey-05);
            }
            background-color: var(--color-primary-blue-01);
        }

        // &:invalid {
        //     border-color: var(--color-status-error-02);
        //     font {
        //         color: var(--color-secondary-grey-05);
        //     }
        // }
    }

    select {
        padding: 11.5px 16px;
        flex: auto;
        border-radius: var(--rounded-slightly-all);
        width: 100%;
        background: white;
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

    .radioWrappper {
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;

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

    .questionRequired {
        font-weight: $font-weight-semibold;
    }

    .success-message {
        position: relative;
        z-index: 5;
        box-sizing: border-box;
        // top: 10px;
        // right: 1%;
        width: 100%;
        padding: 20px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: var(--rounded-slightly-all);
        background: white;

        border: 2px solid #64b587;

        h3 {
            @include step-1;
            padding-bottom: 9px;
            border-bottom: 1px solid var(--color-secondary-grey-01);
        }

        .notification--remove {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 15px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .form-errors {
        background-color: var(--color-status-error-01);
        box-sizing: border-box;
        padding: 20px;
        border-radius: var(--rounded-slightly-all);
    }
}
</style>
