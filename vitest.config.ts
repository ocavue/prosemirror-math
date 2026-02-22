import { playwright } from '@vitest/browser-playwright'
import { playwrightCommands } from 'vitest-browser-commands'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [playwrightCommands()],
  test: {
    browser: {
      enabled: true,
      provider: playwright({
        contextOptions: {
          reducedMotion: 'reduce',
          hasTouch: true,
          permissions: ['clipboard-read', 'clipboard-write'],
        },
      }),
      headless: true,
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
  },
})
