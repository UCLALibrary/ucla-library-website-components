<template>
    <div class="block-form">
        <div class="success-message" v-if="hasNotifications">
            <h3>Registration complete</h3>
            <p>
                You can view your booking at calendar.library.ucla.edu or check
                your email.
            </p>

            <div><p v-text="status.text"></p></div>
            <button
                type="button"
                class="notification--remove"
                @click="removeNotification()"
            >
                <svg-glyph-close class="svg-glyph-close" />
            </button>

            <br />
            <br />
        </div>

        <form
            id="app"
            @submit.prevent="checkForm"
            method="post"
            class="form"
            v-else
        >
            <div v-if="errors.length" class="form-errors">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li
                        :key="index"
                        v-for="(error, index) in errors"
                        v-html="error"
                    />
                </ul>
                <br />
                <br />
            </div>
            <p class="formTitle">Registration (8 seats left)</p>
            <div class="labelInputWrapper">
                <label>Full Name *</label>
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

            <div v-if="block.emailMethod" class="emailLabelWrapper">
                <label for="email">
                    Email
                    <span v-if="block.emailMethod.status == 'required'"
                        >*
                    </span>
                </label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    :required="block.emailMethod.status"
                    :aria-required="block.emailMethod.status == 'required'"
                    v-bind="{}"
                />
            </div>

            <br />

            <div
                :key="question.id"
                v-for="question in parseQuestions"
                class="parsedQuestionsLabelWrapper"
            >
                <label :for="question.id">
                    {{ question.label }}
                    <span v-if="question.required">*</span>
                </label>

                <textarea
                    v-if="question.type == 'string'"
                    v-model="formQuestions[question.id]"
                    placeholder="Add multiple lines"
                />

                <!-- TODO  do we need to add required to checkbox and radio and select inout elements -->
                <div v-if="question.type == 'radio'">
                    Picked: {{ formQuestions[question.id] }}
                    <div
                        :key="index"
                        v-for="(option, index) in question.options"
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
                    checked names: {{ formQuestions[question.id] }}
                    <div
                        :key="index"
                        v-for="(option, index) in question.options"
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

            <p>
                <input type="submit" value="Register" />
            </p>
        </form>
    </div>
</template>

<script>
import SvgGlyphClose from "ucla-library-design-tokens/assets/svgs/icon-close.svg"
import SvgIconCheckbox from "ucla-library-design-tokens/assets/svgs/icon-checkbox.svg"

export default {
    name: "BlockForm",
    components: {
        SvgGlyphClose,
    },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
        registrationType: {
            type: String,
            default: "online",
        },
        eventId: {
            type: String,
            default: "9383207",
            required: true,
        },
    },
    data() {
        return {
            errors: [],
            firstName: "",
            lastName: "",
            email: "",
            emailRequired:
                this.block.emailMethod.status == "required" ? true : false,
            questionsRequired: {},
            formQuestions: {},
            countdown: null,
            hasNotifications: false,
            sent: false,
            status: {},
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
            switch (this.status.code) {
                case "success":
                    return "fa-check"
                case "error":
                    return "fa-exclamation"
            }
            return ""
        },
        parseQuestions() {
            return this.block.questions.map((obj) => {
                // console.log(obj.id)
                switch (obj.type) {
                    case "string":
                        this.formQuestions[obj.id] = ""
                        this.questionsRequired[obj.id] = obj.required
                        break
                    case "radio":
                        this.formQuestions[obj.id] = ""
                        this.questionsRequired[obj.id] = obj.required
                        break
                    case "dropdown":
                        this.formQuestions[obj.id] = ""
                        this.questionsRequired[obj.id] = obj.required
                        break
                    case "checkbox":
                        this.formQuestions[obj.id] = []
                        this.questionsRequired[obj.id] = obj.required
                        break
                }
                // console.log(this.questionsRequired)
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
                    // phone: "",
                    // barcode: "2348238709662234",

                    questions: [],
                },
                registration_type: this.registrationType,
            }
            data.form.questions = this.block.questions.map((obj) => {
                return {
                    id: obj.id,
                    answer: this.formQuestions[obj.id],
                }
            })
            //console.log(data.form.questions)
            // console.log(this.encode(data))
            console.log(JSON.stringify(data))
            let url = `https://test.proxy.calendar.library.ucla.edu/api/1.1/events/${this.eventId}/register`
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(data),
            })
                .then((data) => {
                    console.log(data)
                    this.sent = true
                    this.status = {
                        code: "success",
                        text: "One seat is sent to LibCal to be registered or will be on waitlist",
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
            if (this.firstName && this.lastName) {
                fullNameValid = true
            }
            if (this.emailRequired && this.email) {
                emailValid = true
            }
            this.errors = []
            if (!fullNameValid) {
                this.errors.push("Full Name required.")
            }
            if (!emailValid) {
                this.errors.push("Email required.")
            }
            for (let question of this.block.questions) {
                // TODO refactor this into a switch case statement
                /* console.log(
                    this.questionsRequired[question.id] +
                        " is the question required" +
                        question.id
                )
                console.log(
                    question.type + " what is the type" + question.required
                )
                console.log(
                    this.formQuestions[question.id] +
                        " what is the value in the form field" +
                        question.label
                )*/
                if (
                    this.questionsRequired[question.id] &&
                    question.type == "string" &&
                    !this.formQuestions[question.id]
                ) {
                    this.errors.push(this.block.questions.label + " required.")
                }
                if (
                    this.questionsRequired[question.id] &&
                    question.type == "radio" &&
                    !this.formQuestions[question.id]
                ) {
                    this.errors.push(question.label + " required.")
                }
                if (
                    this.questionsRequired[question.id] &&
                    question.type == "dropdown" &&
                    !this.formQuestions[question.id]
                ) {
                    this.errors.push(question.label + " required.")
                }
                if (
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
    },
}
</script>

<style lang="scss" scoped>
.block-form {
    border-radius: var(--rounded-slightly-all);
    border-color: var(--color-primary-blue-03);
    margin-bottom: var(--space-l);
    max-width: $container-l-text + px;
    padding: var(--space-xl);

    @media #{$medium} {
        max-width: 100%;
        min-width: 600px;
    }

    @media #{$small} {
        max-width: 100%;
        min-width: 320px;
    }

    .formTitle {
        @include step-1;
        padding-bottom: 9px;
        border-bottom: 1px solid var(--color-secondary-grey-01);
    }

    label {
        @include step-0;
        display: flex;
        flex-direction: row;
        width: 148px;
        gap: var(--space-s);
        margin-right: 16px;

        @media #{$medium} {
            flex-direction: column;
            max-width: 100%;
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

    .labelInputWrapper {
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
            }
        }
    }

    .emailLabelWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        // margin: 32px 0;
        label {
            font-weight: $font-weight-semibold;
        }
        input {
            padding: 8px 16px;
            flex: auto;
        }
    }

    .parsedQuestionsLabelWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1em;

        input {
            flex: auto;
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

        &:invalid {
            border-color: var(--color-status-error-02);
            font {
                color: var(--color-secondary-grey-05);
            }
        }
    }

    input[type="checkbox"] {
        margin-bottom: 16px;
    }

    select {
        padding: 11.5px 16px;
        flex: auto;
        border-radius: var(--rounded-slightly-all);

        background: white;
    }

    .success-message {
        background-color: yellow;
        position: fixed;
        z-index: 5;
        box-sizing: border-box;
        top: 10px;
        right: 10px;
        width: 179px;
        padding: 20px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 3px;

        color: #64b587;
        border-bottom: 5px solid #64b587;

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

    button {
        border: none;
    }
    .form-errors {
        background-color: cyan;
    }
}
</style>
