import { describe, it, expect, vi } from 'vitest'
import { useGlassEffect } from '../src/composables/useGlassEffect'
import { toValue } from 'vue'

// Mock the browser utility
vi.mock('../src/utils/browser', () => ({
  checkBackdropFilterSupport: () => true,
  getFallbackStyle: () => ({ backgroundColor: 'rgba(255,255,255,0.8)' })
}))

describe('useGlassEffect', () => {
  it('should generate correct glass styles when supported', () => {
    const props = {
      blurIntensity: 10,
      opacity: 0.5,
      backgroundColor: '',
      borderRadius: '16px',
      transitionDuration: 300
    }

    const { style } = useGlassEffect(props)
    const styleValue = toValue(style)

    expect(styleValue).toHaveProperty('backdropFilter', 'blur(10px)')
    expect(styleValue).toHaveProperty('borderRadius', '16px')
    expect(styleValue).toHaveProperty('backgroundColor')
  })
})
