import SectionHeader from '@/lib-components/SectionHeader'
import SectionWrapper from '@/lib-components/SectionWrapper'

export default {
  title: 'Section Header',
  component: SectionHeader,
}

function Template(args) {
  return {
    components: { SectionHeader },
    setup() {
      return { args }
    },
    template: '<SectionHeader v-bind="args">Header goes here</SectionHeader>',
  }
}

export const Default = Template.bind({})
Default.args = {
  level: 0,
}

export function InsideSectionWrapper() {
  return {
    components: { SectionHeader, SectionWrapper },
    template: `
    <SectionWrapper level="1">
      <SectionHeader>Level 1</SectionHeader>
      <SectionWrapper>
        <SectionHeader>Level 2</SectionHeader>
        <SectionWrapper>
          <SectionHeader>Level 3</SectionHeader>
          <SectionWrapper>
            <SectionHeader>Level 4</SectionHeader>
            <SectionWrapper>
              <SectionHeader>Level 5</SectionHeader>
              <SectionWrapper>
                <SectionHeader>Level 6</SectionHeader>
              </SectionWrapper>
            </SectionWrapper>
          </SectionWrapper>
        </SectionWrapper>
      </SectionWrapper>
    </SectionWrapper>
  `,
  }
}
