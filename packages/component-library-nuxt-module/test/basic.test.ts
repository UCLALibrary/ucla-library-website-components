import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
    browser: true,
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('<div>basic</div>')
    expect(html).toContain('shadowrootmode="open"')
  })

  it('preserves the server-rendered calendar shadow root through hydration', async () => {
    const warnings: string[] = []
    const page = await createPage()

    page.on('console', (message) => {
      if (message.type() === 'warning' || message.type() === 'error')
        warnings.push(message.text())
    })

    await page.goto('/')
    await page.locator('add-to-calendar-button').waitFor()
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))

    const state = await page.locator('add-to-calendar-button').evaluate((button) => ({
      hasShadowRoot: Boolean(button.shadowRoot),
      hasVisibleTrigger: Boolean(button.shadowRoot?.querySelector('[part="atcb-button"]')),
    }))

    expect(state).toEqual({ hasShadowRoot: true, hasVisibleTrigger: true })
    expect(warnings.filter(warning => /hydration|mismatch/i.test(warning))).toEqual([])
  })
})
