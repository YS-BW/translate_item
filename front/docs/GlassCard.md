# GlassCard Component

Modern glassmorphism card component with dynamic blur and transparency effects.

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| blurIntensity | number | 10 | Blur strength in pixels |
| opacity | number | 0.2 | Background opacity (0-1) |
| backgroundColor | string | '' | Custom background color override |
| borderRadius | string | '16px' | Border radius |
| transitionDuration | number | 300 | Transition duration in ms |

## Events

- `hover-start`: Emitted when mouse enters the card
- `hover-end`: Emitted when mouse leaves the card

## Usage

```vue
<script setup>
import GlassCard from '@/components/GlassCard/GlassCard.vue'
</script>

<template>
  <GlassCard :blur-intensity="20" :opacity="0.5">
    <h1>Hello Glass</h1>
  </GlassCard>
</template>
```
