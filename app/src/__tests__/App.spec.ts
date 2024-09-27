import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'

import App from '@/App.vue'


describe('App', () => {
  async function createWrapper () {
    return {
      wrapper: shallowMount(App)
    }
  }

  it('should match snapshot', async ({ expect }) => {
    const { wrapper } = await createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
