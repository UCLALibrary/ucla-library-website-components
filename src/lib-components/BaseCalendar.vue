<script>
export default {
  data: () => ({
    type: 'month',
    weekday: [0, 1, 2, 3, 4, 5, 6],
    value: [new Date()],
    events: [],
  }),
  mounted() {},
  methods: {},
}
</script>

<template>
  <h2>Tinu's Calendar</h2>
  <div>
    <v-sheet>
      <v-calendar
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
      />
    </v-sheet>
  </div>
</template>
