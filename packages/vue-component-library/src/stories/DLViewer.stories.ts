import type { Meta, StoryObj } from '@storybook/vue3'
import DLViewer from '@/lib-components/DLViewer.vue'

const meta: Meta<typeof DLViewer> = {
  title: 'Funkhaus / DLViewer',
  component: DLViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    iiif_manifest_url: {
      control: 'text',
      description: 'The IIIF manifest URL to display',
    },
    site: {
      control: 'text',
      description: 'Optional site identifier (e.g., "sinai")',
    },
  },
}

export default meta
type Story = StoryObj<typeof DLViewer>

// Helper function to create a story template
function createStory(manifestUrl: string, title: string, description?: string) {
  return {
    args: {
      iiif_manifest_url: manifestUrl,
    },
    parameters: {
      docs: {
        description: {
          story: description || `Displays ${title.toLowerCase()} content using the DLViewer component.`,
        },
      },
    },
  }
}

// Still Image - ark:/21198/zz00090qx5
export const StillImage: Story = createStory(
  'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz00090qx5/manifest',
  'Still Image',
  'A still image item from the Digital Library. This example demonstrates how images are displayed with IIIF support.',
)

// Sound Recording - ark:/21198/zz000952mk
export const SoundRecording: Story = createStory(
  'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz000952mk/manifest',
  'Sound Recording',
  'An audio item from the Digital Library. Sound recordings use Universal Viewer 3 for playback.',
)

// Moving Image - ark:/21198/zz002k50k5
export const MovingImage: Story = createStory(
  'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002k50k5/manifest',
  'Moving Image',
  'A video item from the Digital Library. Moving images use Video.js for playback with HLS/DASH support.',
)

// Cartographic - ark:/21198/z1kh5nht
export const Cartographic: Story = createStory(
  'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1kh5nht/manifest',
  'Cartographic',
  'A cartographic item (map) from the Digital Library. Maps are displayed using Universal Viewer.',
)

// Text - ark:/21198/zz0002267k
export const Text: Story = createStory(
  'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002267k/manifest',
  'Text',
  'A text item from the Digital Library. Text items are displayed using Universal Viewer for page-by-page viewing.',
)

// Mixed Material - ark:/21198/z1621bbf
export const MixedMaterial: Story = createStory(
  'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1621bbf/manifest',
  'Mixed Material',
  'A mixed material item from the Digital Library. Mixed materials can contain various content types and are displayed using Universal Viewer.',
)

// Sinai Palimpsest example (if needed)
export const SinaiPalimpsest: Story = {
  args: {
    iiif_manifest_url: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1621bbf/manifest',
    site: 'sinai',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sinai Palimpsest items use a special Mirador viewer for multi-spectral imaging analysis.',
      },
    },
  },
}
