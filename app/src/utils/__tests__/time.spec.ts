import { flushPromises } from '@vue/test-utils'
import { afterEach, beforeEach, describe, it, vi } from 'vitest'

import { secondsToMinutes, secondsBetween, sleep } from '@/utils/time'

describe('Utils > Time', () => {
  describe('secondsToMinutes', () => {
    it('should format seconds as a timestamp', ({ expect }) => {
      expect(secondsToMinutes(0)).toBe('0:00')
      expect(secondsToMinutes(59)).toBe('0:59')
      expect(secondsToMinutes(60)).toBe('1:00')
      expect(secondsToMinutes(90)).toBe('1:30')
      expect(secondsToMinutes(900)).toBe('15:00')
      expect(secondsToMinutes(907)).toBe('15:07')
    })
  })

  describe('secondsBetween', () => {
    it('should return the seconds between 2 times', ({ expect }) => {
      const date1 = new Date('2023-01-01T12:00:00').valueOf()
      const date2 = new Date('2023-01-01T11:51:23').valueOf()
      expect(secondsBetween(date1, date2)).toBe(517)
      expect(secondsBetween(date2, date1)).toBe(517)
      expect(secondsBetween(date1, date1)).toBe(0)
    })
  })

  describe('sleep', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should resolve after the given time', async ({ expect }) => {
      let resolved = false
      void sleep(100).then(() => {
        resolved = true
      })
      expect(resolved).toBe(false)

      vi.advanceTimersByTime(99)
      await flushPromises()
      expect(resolved).toBe(false)

      vi.advanceTimersByTime(1)
      await flushPromises()
      expect(resolved).toBe(true)
    })
  })
})
