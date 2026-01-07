import { ref } from 'vue'
import EffectSlideToggle from '@/lib-components/EffectSlideToggle.vue'

export default {
  title: 'Funkhaus / EffectSlideToggle',
  component: EffectSlideToggle,
  argTypes: {
    duration: {
      control: { type: 'number', min: 100, max: 2000, step: 100 },
      description: 'Animation duration in milliseconds'
    },
    easing: {
      control: 'text',
      description: 'CSS easing function for animation'
    },
    opened: {
      control: 'boolean',
      description: 'Whether the toggle is initially opened'
    }
  }
}

export function Default() {
  return {
    components: { EffectSlideToggle },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle>
          <template #summary>
            <div style="padding: 12px; background: #f0f0f0; border: 1px solid #ddd; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Click to toggle</span>
              <span>▼</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #ddd; border-top: none;">
            <h3>Content Area</h3>
            <p>This content slides in and out smoothly when you click the summary above.</p>
            <p>The animation uses the Web Animations API for smooth transitions.</p>
          </div>
        </EffectSlideToggle>
      </div>
    `
  }
}

export function InitiallyOpened() {
  return {
    components: { EffectSlideToggle },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle :opened="true">
          <template #summary>
            <div style="padding: 12px; background: #e3f2fd; border: 1px solid #2196f3; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Initially opened</span>
              <span>▲</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #2196f3; border-top: none;">
            <h3>Pre-opened Content</h3>
            <p>This toggle starts in the opened state.</p>
          </div>
        </EffectSlideToggle>
      </div>
    `
  }
}

export function CustomDuration() {
  return {
    components: { EffectSlideToggle },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle :duration="800">
          <template #summary>
            <div style="padding: 12px; background: #f3e5f5; border: 1px solid #9c27b0; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Slow animation (800ms)</span>
              <span>▼</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #9c27b0; border-top: none;">
            <h3>Slow Animation</h3>
            <p>This toggle uses a slower animation duration of 800ms.</p>
          </div>
        </EffectSlideToggle>
      </div>
    `
  }
}

export function CustomEasing() {
  return {
    components: { EffectSlideToggle },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)">
          <template #summary>
            <div style="padding: 12px; background: #e8f5e8; border: 1px solid #4caf50; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Bouncy animation</span>
              <span>▼</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #4caf50; border-top: none;">
            <h3>Bouncy Animation</h3>
            <p>This toggle uses a bouncy easing function for a more playful effect.</p>
          </div>
        </EffectSlideToggle>
      </div>
    `
  }
}

export function WithFormContent() {
  return {
    components: { EffectSlideToggle },
    setup() {
      const formData = ref({
        name: '',
        email: '',
        message: ''
      })

      return { formData }
    },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle>
          <template #summary>
            <div style="padding: 12px; background: #fff3e0; border: 1px solid #ff9800; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Contact Form</span>
              <span>▼</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #ff9800; border-top: none;">
            <h3>Contact Information</h3>
            <form @submit.prevent>
              <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Name:</label>
                <input 
                  v-model="formData.name" 
                  type="text" 
                  style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"
                  placeholder="Enter your name"
                >
              </div>
              <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Email:</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"
                  placeholder="Enter your email"
                >
              </div>
              <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Message:</label>
                <textarea 
                  v-model="formData.message" 
                  style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; height: 80px; resize: vertical;"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                style="background: #ff9800; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;"
              >
                Submit
              </button>
            </form>
          </div>
        </EffectSlideToggle>
        <div style="margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
          <strong>Form Data:</strong> {{ formData }}
        </div>
      </div>
    `
  }
}

export function WithLongContent() {
  return {
    components: { EffectSlideToggle },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle>
          <template #summary>
            <div style="padding: 12px; background: #fce4ec; border: 1px solid #e91e63; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Long Content</span>
              <span>▼</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #e91e63; border-top: none;">
            <h3>Long Content Example</h3>
            <p>This toggle contains a lot of content to test how the animation handles different heights.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul>
              <li>First item in a long list</li>
              <li>Second item in a long list</li>
              <li>Third item in a long list</li>
              <li>Fourth item in a long list</li>
              <li>Fifth item in a long list</li>
            </ul>
            <p>More content to make this section even longer and test the animation behavior with substantial height changes.</p>
          </div>
        </EffectSlideToggle>
      </div>
    `
  }
}

export function EventHandlers() {
  return {
    components: { EffectSlideToggle },
    setup() {
      const events = ref([])

      const logEvent = (eventName) => {
        events.value.unshift({
          event: eventName,
          timestamp: new Date().toLocaleTimeString()
        })
        // Keep only last 10 events
        if (events.value.length > 10)
          events.value = events.value.slice(0, 10)
      }

      return { events, logEvent }
    },
    template: `
      <div style="max-width: 400px; margin: 20px;">
        <EffectSlideToggle
          @opening="() => logEvent('opening')"
          @opened="() => logEvent('opened')"
          @closing="() => logEvent('closing')"
          @closed="() => logEvent('closed')"
        >
          <template #summary>
            <div style="padding: 12px; background: #e1f5fe; border: 1px solid #03a9f4; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span>Event Logging Toggle</span>
              <span>▼</span>
            </div>
          </template>
          <div style="padding: 20px; background: #fff; border: 1px solid #03a9f4; border-top: none;">
            <h3>Event Logging</h3>
            <p>This toggle logs all animation events. Check the event log below to see the events being fired.</p>
          </div>
        </EffectSlideToggle>
        
        <div style="margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 4px;">
          <h4>Event Log:</h4>
          <div v-if="events.length === 0" style="color: #666; font-style: italic;">No events yet. Click the toggle above to see events.</div>
          <div v-else>
            <div v-for="(event, index) in events" :key="index" style="padding: 2px 0; font-family: monospace; font-size: 12px;">
              <strong>{{ event.timestamp }}</strong> - {{ event.event }}
            </div>
          </div>
        </div>
      </div>
    `
  }
}
