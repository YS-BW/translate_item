<script setup lang="ts">
import GlassCard from '@/components/GlassCard/GlassCard.vue'
import TranslatorForm from '@/components/Translator/TranslatorForm.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-200 dark:from-slate-900 dark:to-slate-800 p-8 flex flex-col items-center justify-start relative overflow-x-hidden">
    <!-- Background Decor -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-light/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Header Section -->
    <div class="w-full max-w-4xl mx-auto mb-12 text-center z-10 pt-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light dark:from-blue-400 dark:to-purple-400">
        AI 智能翻译助手
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        基于深度学习的精准翻译与关键词提取，体验极简与高效。
      </p>
    </div>

    <!-- Translator Component -->
    <div class="w-full z-10 mb-16">
      <TranslatorForm />
    </div>

    <!-- Feature Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl z-10 px-4">
      <GlassCard class="p-6 text-center" :opacity="0.4" :blur-intensity="8">
        <div class="text-3xl mb-3">⚡</div>
        <h3 class="text-xl font-semibold mb-2">实时响应</h3>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
          基于FastAPI的高性能后端，秒级返回翻译结果。
        </p>
      </GlassCard>
      
      <GlassCard class="p-6 text-center" :opacity="0.4" :blur-intensity="8">
        <div class="text-3xl mb-3">🎯</div>
        <h3 class="text-xl font-semibold mb-2">关键词提取</h3>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
          自动识别文本核心要素，提炼关键信息点。
        </p>
      </GlassCard>
      
      <GlassCard class="p-6 text-center" :opacity="0.4" :blur-intensity="8">
        <div class="text-3xl mb-3">🎨</div>
        <h3 class="text-xl font-semibold mb-2">极致体验</h3>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
          采用Glassmorphism设计语言，带来沉浸式视觉享受。
        </p>
      </GlassCard>
    </div>
  </div>
</template>
