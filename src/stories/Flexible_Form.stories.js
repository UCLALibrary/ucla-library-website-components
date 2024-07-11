import FlexibleForm from '@/lib-components/Flexible/Form'

export default {
  title: 'FLEXIBLE / Form',
  component: FlexibleForm,
}

const mock = {
  form: '<div id="form_95580ed5e8d04c56e4afbf9e91781b28"></div><script type="text/javascript" src="https://ucla.libwizard.com/form_loader.php?id=95580ed5e8d04c56e4afbf9e91781b28&noheader=0"></script>'
}

export function Default() {
  return {
    data() {
      return {
        block: mock,
      }
    },
    components: { FlexibleForm },
    template: `<flexible-form
        :block= "block"
    />`,
  }
}

const mock2 = {
  form: '<div id="form_95580ed5e8d04c56e4afbf9e91781b28"></div><script type="text/javascript" src="https://ucla.libwizard.com/form_loader.php?id=95580ed5e8d04c56e4afbf9e91781b28&noheader=0"></script>',
  sectionTitle: 'Section Title',
  sectionSummary: 'Section Summary',
}

export function WithSectionTitleAndSummary() {
  return {
    data() {
      return {
        block: mock2,
      }
    },
    components: { FlexibleForm },
    template: `<flexible-form
        :block= "block"
    />`,
  }
}
