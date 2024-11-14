import { computed } from 'vue'
import Date from '@/lib-components/Date'

// Storybook default settings
export default {
  title: 'Date',
  component: Date,
}

const mockDefault = {
  startDate: "2026-11-03T00:00:00",
  endDate: "2027-12-23T00:00:00",
  ongoing: false
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { data: mockDefault }
    },
    components: { Date },
    template: `
      <date
        :startDate="data.startDate"
        :endDate="data.endDate"
        :ongoing="data.ongoing"
      />
  `,
  }
}

const mockStartEndDateSame = {
  startDate: "2025-11-23T00:00:00",
  endDate: "2025-11-23T00:00:00",
  ongoing: false
}

export function StartEndDateSame() {
  return {
    data() {
      return { data: mockStartEndDateSame }
    },
    components: { Date },
    template: `
      <date
        :startDate="data.startDate"
        :endDate="data.endDate"
        :ongoing="data.ongoing"
      />
  `,
  }
}

const mockOngoing = {
  startDate: "2025-12-23T00:00:00",
  endDate: null,
  ongoing: true
}

export function Ongoing() {
  return {
    data() {
      return { data: mockOngoing }
    },
    components: { Date },
    template: `
      <date
        :startDate="data.startDate"
        :endDate="data.endDate"
        :ongoing="data.ongoing"
      />
  `,
  }
}
