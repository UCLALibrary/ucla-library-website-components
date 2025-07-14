import BentoBoxBlock from '@/lib-components/BentoBoxBlock.vue'

export default {
  title: 'Funkhaus / Bento Box Block',
  component: BentoBoxBlock,
}

// MOCK DATA
const baseImage = {
  id: '26089',
  src: 'https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg',
  height: 2074,
  width: 2560,
  srcset: 'https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w',
  alt: 'Albino Fox',
  focalPoint: [0.5, 0.5],
}

const mockDefault = {
  id: 'bento-1',
  title: 'Default Bento Block',
  summary: '<p>This is a default bento block with all fields filled.</p>',
  image: baseImage,
  link: 'https://www.example.com',
  count: 345
}

const mockNoImage = {
  id: 'bento-2',
  title: 'No Image Bento Block',
  summary: '<p>This bento block has no image.</p>',
  image: [],
  link: 'https://www.example.com',
}

const mockLongText = {
  id: 'bento-3',
  title: 'Bento Block With Very Long Title That Should Wrap Or Truncate Properly In The UI To Avoid Layout Breaking',
  summary: '<p>' + 'This is a very long summary. '.repeat(20) + '</p>',
  image: baseImage,
  link: 'https://www.example.com',
}

const mockNoTitle = {
  id: 'bento-4',
  title: '',
  summary: '<p>Bento block with no title.</p>',
  image: baseImage,
  link: 'https://www.example.com',
}

const mockNoSummary = {
  id: 'bento-5',
  title: 'No Summary Bento Block',
  summary: '',
  image: baseImage,
  link: 'https://www.example.com',
}

const mockNoLink = {
  id: 'bento-6',
  title: 'No Link Bento Block',
  summary: '<p>Bento block with no link.</p>',
  image: baseImage,
  link: '',
}

// STORIES
export function Default() {
  return {
    data() {
      return { ...mockDefault }
    },
    components: { BentoBoxBlock },
    template: `<bento-box-block :to="link" :image="image" :title="title" :text="summary" :count="count" />`,
  }
}

export function NoImage() {
  return {
    data() {
      return { ...mockNoImage }
    },
    components: { BentoBoxBlock },
    template: `<bento-box-block :to="link" :image="image" :title="title" :text="summary" :count="count" />`,
  }
}

export function LongText() {
  return {
    data() {
      return { ...mockLongText }
    },
    components: { BentoBoxBlock },
    template: `<bento-box-block :to="link" :image="image" :title="title" :text="summary" :count="count" />`,
  }
}

export function NoTitle() {
  return {
    data() {
      return { ...mockNoTitle }
    },
    components: { BentoBoxBlock },
    template: `<bento-box-block :to="link" :image="image" :title="title" :text="summary" :count="count" />`,
  }
}

export function NoSummary() {
  return {
    data() {
      return { ...mockNoSummary }
    },
    components: { BentoBoxBlock },
    template: `<bento-box-block :to="link" :image="image" :title="title" :text="summary" :count="count" />`,
  }
}

export function NoLink() {
  return {
    data() {
      return { ...mockNoLink }
    },
    components: { BentoBoxBlock },
    template: `<bento-box-block :to="link" :image="image" :title="title" :text="summary" :count="count" />`,
  }
}
