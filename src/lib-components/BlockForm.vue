<template>
    <form id="app" @submit.prevent="checkForm" method="post" class="block-form">
        <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li
                    :key="index"
                    v-for="(error, index) in errors"
                    v-html="error"
                />
            </ul>
        </div>
        <p>Full Name</p>
        <p>
            <label for="firstName">First Name *</label>
            <input
                id="firstName"
                v-model="firstName"
                type="text"
                name="firstName"
                required
            />
        </p>

        <p>
            <label for="lastName">Last Name *</label>
            <input
                id="lastName"
                v-model="lastName"
                type="text"
                name="lastName"
                required
            />
        </p>

        <p v-if="block.emailMethod">
            <label for="email">
                Email
                <span v-if="block.emailMethod.status == 'required'">* </span>
            </label>
            <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                v-bind="{}"
            />
        </p>

        <div :key="question.id" v-for="question in parseQuestions">
            <br />
            <label :for="question.id">
                {{ question.label }}
                <span v-if="question.required">*</span>
            </label>

            <textarea
                v-if="question.type == 'string'"
                v-model="formQuestions[question.id]"
                placeholder="add multiple lines"
            />

            <!-- TODO  do we need to add required to checkbox and radio and select inout elements -->
            <div v-if="question.type == 'radio'">
                Picked: {{ formQuestions[question.id] }}
                <div :key="index" v-for="(option, index) in question.options">
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
                <div :key="index" v-for="(option, index) in question.options">
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
</template>

<script>
export default {
    name: "BlockForm",

    props: {
        block: {
            type: Object,
            default: () => {},
        },
        registration_type: {
            type: String,
            default: "online",
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
        }
    },
    computed: {
        parseQuestions() {
            return this.block.questions.map((obj) => {
                console.log(obj.id)
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

                return {
                    ...obj,
                    classes: `input-${obj.type}`,
                }
            })
        },
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key]
                        )}`
                )
                .join("&")
        },
        handleSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
                registration_type: this.registration_type,
            }
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: this.encode(data),
            })
                .then((data) => console.log(data))
                .catch((err) => console.error(err))
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
            for (let key of Object.keys(this.formQuestions)) {
                // TODO refactor this into a switch case statement

                if (
                    this.questionsRequired[key] &&
                    this.block.questions[key].type == "string" &&
                    !this.formQuestions[key]
                ) {
                    this.errors.push(
                        this.block.questions[key].label + " required."
                    )
                }
                if (
                    this.questionsRequired[key] &&
                    this.block.questions[key].type == "radio" &&
                    !this.formQuestions[key]
                ) {
                    this.errors.push(
                        this.block.questions[key].label + " required."
                    )
                }
                if (
                    this.questionsRequired[key] &&
                    this.block.questions[key].type == "dropdown" &&
                    !this.formQuestions[key]
                ) {
                    this.errors.push(
                        this.block.questions[key].label + " required."
                    )
                }
                if (
                    this.questionsRequired[key] &&
                    this.block.questions[key].type == "checkbox" &&
                    this.formQuestions[key].length == 0
                ) {
                    this.errors.push(
                        this.block.questions[key].label + " required."
                    )
                }
            }

            if (this.errors.length == 0) {
                this.handleSubmit()
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.block-form {
}
</style>
