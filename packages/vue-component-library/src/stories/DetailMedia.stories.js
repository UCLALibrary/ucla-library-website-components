import { computed } from 'vue'
import DetailMedia from '@/lib-components/DetailMedia'

export default {
  title: 'Funkhaus / DetailMedia',
  component: DetailMedia,
  argTypes: {
    manifestUrl: {
      control: 'text',
      description: 'IIIF manifest URL (required)',
    },
    height: {
      control: 'text',
      description: 'Height of the IIIF viewer',
    },
    title: {
      control: 'text',
      description: 'Title for accessibility',
    },
    description: {
      control: 'text',
      description: 'Description for accessibility',
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS class',
    },
  },
}

// Working IIIF manifest URLs (tested and confirmed working)
const exampleManifests = {
  // Wellcome Collection - confirmed working
  wellcome: 'https://wellcomelibrary.org/iiif/b18035723/manifest',
  wellcome2: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
  // Invalid manifest for testing error handling
  invalid: 'invalid-manifest.json.com',
  // Empty manifest for testing error handling
  empty: '',
}

// Default story
export function Default() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { DetailMedia },
    template: `
      <div>
        <p><strong>Manifest URL:</strong> {{ manifestUrl }}</p>
        <p><strong>Aspect Ratio:</strong> 1185px × 680px (responsive)</p>
        <detail-media 
          :manifest-url="manifestUrl"
        />
      </div>
    `,
    data() {
      return {
        manifestUrl: exampleManifests.wellcome,
      }
    },
  }
}
export function Wellcome2() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { DetailMedia },
    template: `
      <div>
        <p><strong>Manifest URL:</strong> {{ manifestUrl }}</p>
        <p><strong>Aspect Ratio:</strong> 1185px × 680px (responsive)</p>
        <detail-media 
          :manifest-url="manifestUrl"
          title="Vincent van Gogh - Self-Portrait Dedicated to Paul Gauguin"
          description="A self-portrait by Vincent van Gogh from 1888, dedicated to Paul Gauguin"
        />
      </div>
    `,
    data() {
      return {
        manifestUrl: exampleManifests.wellcome2,
      }
    },
  }
}

// Large viewer with custom height
export function LargeViewer() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { DetailMedia },
    template: `
      <div>
        <p><strong>Manifest URL:</strong> {{ manifestUrl }}</p>
        <p><strong>Custom Height:</strong> 800px (overrides aspect ratio)</p>
        <detail-media 
          :manifest-url="manifestUrl"
          height="800px"
        />
      </div>
    `,
    data() {
      return {
        manifestUrl: exampleManifests.wellcome,
      }
    },
  }
}

// Small viewer
export function SmallViewer() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { DetailMedia },
    template: `
      <div>
        <p><strong>Manifest URL:</strong> {{ manifestUrl }}</p>
        <detail-media 
          :manifest-url="manifestUrl"
          height="300px"
        />
      </div>
    `,
    data() {
      return {
        manifestUrl: exampleManifests.wellcome,
      }
    },
  }
}

// Error handling stories
export function ErrorHandling() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { DetailMedia },
    template: `
      <div>
        <h3>Error Handling Examples</h3>
        
        <h4>Invalid Manifest URL</h4>
        <p><strong>Manifest URL:</strong> {{ invalidUrl }}</p>
        <detail-media 
          :manifest-url="invalidUrl"
          height="400px"
          title="Invalid Manifest Test"
        />
        
        <h4>Empty Manifest URL</h4>
        <p><strong>Manifest URL:</strong> "{{ emptyUrl }}"</p>
        <detail-media 
          :manifest-url="emptyUrl"
          height="400px"
          title="Empty Manifest Test"
        />
      </div>
    `,
    data() {
      return {
        invalidUrl: exampleManifests.invalid,
        emptyUrl: exampleManifests.empty,
      }
    },
  }
}
