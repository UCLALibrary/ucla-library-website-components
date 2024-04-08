<script setup>
import { computed, defineAsyncComponent, inject, ref, watch } from 'vue'

import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'

const ButtonLink = defineAsyncComponent(() => import('@/lib-components/ButtonLink.vue'))

const eventId = inject('eventId')
const blockFormData = inject('blockFormData')
const registrationType = inject('registrationType')
const libcalWaitlist = inject('libcalWaitlist')
const libcalEndpoint = inject('libcalEndpoint')
console.log('BlockForm eventId', eventId.value)
console.log('BlockForm blockFormData', blockFormData.value)
console.log('BlockForm registrationType', registrationType.value)
console.log('BlockForm libcalWaitlist', libcalWaitlist.value)
console.log('BlockForm libcalEndpoint', libcalEndpoint)

const errors = ref([])
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const questionsRequired = ref({})
const formQuestions = ref({})
const countdown = ref(null)
const hasNotifications = ref(false)
const sent = ref(false)
const status = ref({})
const showForm = ref(false)
const registrationTypeInput = ref('')

const parseQuestions = computed(() => {
  if (!blockFormData.value.questions)
    return []
  return blockFormData.value.questions.map((obj) => {
    if (
      obj.type === 'string'
      || obj.type === 'radio'
      || obj.type === 'dropdown'
    )
      formQuestions.value[obj.id] = ''
    else
      formQuestions.value[obj.id] = []

    questionsRequired.value[obj.id] = obj.required
    return {
      ...obj,
      classes: `input-${obj.type}`,
    }
  })
})

function handleSubmit() {
  console.log('registrationTypeInput', registrationTypeInput.value, registrationType.value && registrationType === 'both')
  const data = {
    form: {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      questions: [],
    },
    registration_type:
      registrationType
        && registrationType.value !== 'both'
        && registrationType.value !== ''
        ? registrationType.value
        : registrationType.value
          && registrationType.value === 'both'
          ? registrationTypeInput.value
          : '',
    is_waitlist:
      libcalWaitlist.value && libcalWaitlist.value !== '' ? libcalWaitlist.value : '0',
  }

  data.form.questions = blockFormData.value.questions.map((obj) => {
    return {
      id: obj.id,
      answer: formQuestions.value[obj.id],
    }
  })
  console.log('data submitting', JSON.stringify(data))

  let url = ''
  console.log('eventId', eventId)
  if (libcalEndpoint) {
    url = `${libcalEndpoint}api/1.1/events/${eventId.value}/register`
  }
  else {
    url
      = `${process.env.VUE_APP_CALENDAR_LIBRARY_URL
      }${eventId}/register`
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      sent.value = true
      status.value = {
        code: 'success',
        text: 'One seat is sent to LibCal to be registered or will be on wait list',
      }
    })
    .catch((err) => {
      console.error(err)
      sent.value = true
      status.value = {
        code: 'error',
        text: err,
      }
    })
}

function checkForm() {
  let fullNameValid = false
  let emailValid = false
  let registrationTypeValid = false

  if (firstName.value && lastName.value)
    fullNameValid = true

  if (
    blockFormData.value.emailMethod.status === 'required'
    && email.value
  )
    emailValid = true

  if (
    registrationType
    && registrationType.value === 'both'
    && registrationTypeInput.value === ''
  )
    registrationTypeValid = false
  else if (
    registrationType
    && registrationType.value !== 'both'
  )
    registrationTypeValid = true
  else
    registrationTypeValid = true

  errors.value = []
  if (!fullNameValid)
    errors.value.push('Full Name 1 required.')

  if (!emailValid)
    errors.value.push('Email 2 required.')

  if (!registrationTypeValid)
    errors.value.push('Registration Type 3 required.')

  for (const question of blockFormData.value.questions) {
    if (
      questionsRequired.value[question.id]
      && !formQuestions.value[question.id]
    ) {
      question.type === 'string'
        ? errors.value.push(
          `${blockFormData.value.questions.label} 4a required.`
        )
        : errors.value.push(`${question.label} 4b required.`)
    }
    else if (
      questionsRequired.value[question.id]
      && question.type === 'checkbox'
      && formQuestions.value[question.id].length === 0
    ) {
      errors.value.push(`${question.label} 4c required.`)
    }
  }

  if (errors.value.length === 0)
    handleSubmit()
  else
    window.scrollTo(0, 0)
}

function showBlockEvent() {
  showForm.value = true
}

function closeBlockForm() {
  showForm.value = false
}

function removeNotification() {
  clearTimeout(countdown.value)
  hasNotifications.value = false
  showForm.value = false
}

watch(status, () => {
  hasNotifications.value = true
  countdown.value = setTimeout(removeNotification, 113000)
})
</script>

<template>
  <ButtonLink
    v-if="!showForm"
    label="Register"
    icon-name="none"
    :is-secondary="true"
    class="register-button"
    @click.prevent="showBlockEvent()"
  />
  <div
    v-else
    class="block-form"
    :class="{
      'form-error': errors.length,
      'form-success': hasNotifications,
    }"
  >
    <div
      v-if="hasNotifications"
      class="success-message"
    >
      <h3>Registration complete</h3>
      <p>Please check your email to view your booking.</p>

      <button
        type="button"
        class="notification--remove"
        @click="removeNotification()"
      >
        <SvgGlyphClose class="svg-glyph-close" />
      </button>
    </div>
    <form
      v-else
      id="app"
      method="post"
      class="form"
    >
      <div class="formTitleWrapper">
        <h3 class="formTitle">
          Registration
        </h3>

        <button
          type="button"
          @click="closeBlockForm()"
        >
          <SvgGlyphClose class="svg-glyph-close" />
        </button>
      </div>

      <div
        v-if="errors.length"
        class="form-errors"
      >
        <p>
          Please complete the required fields to complete registration
        </p>
      </div>

      <br v-if="errors.length">

      <div class="registrationInfo">
        <p>Registration is required for this event.</p>
      </div>

      <div
        v-if="registrationType === 'both'"
        class="input-wrapper input-radio"
      >
        <legend>
          Registration Type <span class="required">(required)</span>
        </legend>

        <label for="in-person">
          <input
            id="in-person"
            v-model="registrationTypeInput"
            type="radio"
            value="in-person"
            required
          >in-person</label>

        <label for="online">
          <input
            id="online"
            v-model="registrationTypeInput"
            type="radio"
            value="online"
          >
          online</label>
      </div>

      <div class="input-wrapper">
        <label>Full Name <span class="required">(required)</span></label>
        <div class="input-container">
          <input
            id="firstName"
            v-model="firstName"
            type="text"
            name="firstName"
            required
            placeholder="First Name"
          >
          <input
            id="lastName"
            v-model="lastName"
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
          >
        </div>
      </div>

      <div
        v-if="blockFormData.emailMethod"
        class="input-wrapper"
      >
        <label for="email">
          <span v-if="blockFormData.emailMethod.status === 'required'">
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
        >
      </div>
      <!--pre>
        {{ parseQuestions }}
      </pre-->
      <div
        v-for="question in parseQuestions"
        :key="question.id"
        class="input-wrapper parsedQuestionsLabelWrapper"
      >
        <label
          v-if="question.type !== 'string'"
          :for="question.id"
          :class="question.required ? 'questionRequired' : ''"
        >
          {{ question.label }}
          <span
            v-if="question.required"
            class="required"
          >
            (required)
          </span>
        </label>

        <div
          v-if="question.type === 'string'"
          class="textareaWrapper"
        >
          <label
            :for="question.id"
            :class="question.required ? 'questionRequired' : ''"
          >
            {{ question.label }}
            <span
              v-if="question.required"
              class="required"
            >(required)</span>
          </label>
          <textarea
            v-model="formQuestions[question.id]"
            placeholder="Add multiple lines"
          />
        </div>

        <div
          v-if="question.type === 'radio'"
          class="radio-wrapper"
        >
          <div
            v-for="(option, index) in question.options"
            :key="index"
            class="radioWrapper"
          >
            <label :for="option">
              <input
                :id="option"
                v-model="formQuestions[question.id]"
                type="radio"
                :value="option"
                :name="question.id"
              >
              {{ option }}
            </label>
          </div>
        </div>
        <div
          v-if="question.type === 'checkbox'"
          class="checkbox-wrapper"
        >
          <div
            v-for="(option, index) in question.options"
            :key="index"
            class="checkboxWrapper"
          >
            <input
              :id="option"
              v-model="formQuestions[question.id]"
              type="checkbox"
              :true-value="option"
              :value="option"
            >
            <label :for="option">{{ option }}</label>
          </div>
        </div>

        <select
          v-if="question.type === 'dropdown'"
          :id="question.id"
          v-model="formQuestions[question.id]"
          :name="question.id"
          class="input-dropdown"
          :class="question.classes"
        >
          <option
            disabled
            value=""
          >
            Please select one
          </option>
          <option
            v-for="(option, index) in question.options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <ButtonLink
        type="submit"
        label="Register"
        icon-name="none"
        :is-secondary="true"
        @click.prevent="checkForm"
      />
    </form>
  </div>

  <!-- TODO  do we need to add required to checkbox and radio and select inout elements -->
</template>

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

    :deep(.svg__fill--secondary-grey-01) {
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

    >input {
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

      :deep(.svg__fill--secondary-grey-01) {
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
