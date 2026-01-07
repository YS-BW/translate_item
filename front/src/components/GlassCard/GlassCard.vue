<script setup lang="ts">
import { computed } from 'vue'
import { useGlassEffect } from '@/composables/useGlassEffect'
import type { GlassEffectProps } from '@/types/glass'

interface Props {
  blurIntensity?: number
  opacity?: number
  backgroundColor?: string
  borderRadius?: string
  transitionDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  blurIntensity: 10,
  opacity: 0.2,
  backgroundColor: '',
  borderRadius: '16px',
  transitionDuration: 300
})

const emit = defineEmits<{
  (e: 'hover-start'): void
  (e: 'hover-end'): void
}>()

// Computed to ensure we pass a complete GlassEffectProps object
const effectProps = computed<GlassEffectProps>(() => ({
  blurIntensity: props.blurIntensity,
  opacity: props.opacity,
  backgroundColor: props.backgroundColor,
  borderRadius: props.borderRadius,
  transitionDuration: props.transitionDuration
}))

const { style } = useGlassEffect(effectProps)

const handleMouseEnter = () => emit('hover-start')
const handleMouseLeave = () => emit('hover-end')
</script>

<template>
  <div 
    class="glass-card-component"
    :style="style"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.glass-card-component {
  padding: 1.5rem;
  overflow: hidden;
}
</style>
