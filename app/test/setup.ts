import { config, enableAutoUnmount } from '@vue/test-utils'
import { afterEach } from 'vitest'

// vue instance configuration
config.global.renderStubDefaultSlot = true

// automatic clean up
enableAutoUnmount(afterEach)
