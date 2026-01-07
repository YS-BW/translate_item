<script setup lang="ts">
import { ref } from 'vue'
import GlassCard from '../GlassCard/GlassCard.vue'
import { translateText, type TranslationResponse } from '@/services/api'

const inputText = ref('')
const result = ref<TranslationResponse | null>(null)
const isLoading = ref(false)
const error = ref('')

const handleTranslate = async () => {
  if (!inputText.value.trim()) return
  
  isLoading.value = true
  error.value = ''
  result.value = null
  
  try {
    result.value = await translateText(inputText.value)
  } catch (e) {
    error.value = '翻译请求失败，请稍后重试'
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="w-full max-w-4xl mx-auto space-y-8">
    <!-- 输入区域 -->
    <GlassCard 
      class="p-6 transition-all duration-300"
      :blur-intensity="10"
      :opacity="0.6"
    >
      <div class="space-y-4">
        <label class="block text-gray-700 font-medium mb-2">输入文本</label>
        <textarea
          v-model="inputText"
          class="w-full h-32 p-4 rounded-xl bg-white/20 border border-white/30 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all resize-none text-gray-800 placeholder-gray-500 backdrop-blur-sm"
          placeholder="请输入需要翻译的中文文本..."
          :disabled="isLoading"
        ></textarea>
        
        <div class="flex justify-end">
          <button
            @click="handleTranslate"
            :disabled="isLoading || !inputText.trim()"
            class="px-8 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-medium transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/30 backdrop-blur-md"
          >
            <span v-if="isLoading" class="flex items-center gap-2">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              翻译中...
            </span>
            <span v-else>开始翻译</span>
          </button>
        </div>
      </div>
    </GlassCard>

    <!-- 结果区域 -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <GlassCard
        v-if="result || error"
        class="p-6"
        :blur-intensity="12"
        :opacity="0.7"
      >
        <div v-if="error" class="text-red-500 text-center py-4">
          {{ error }}
        </div>
        
        <div v-else class="space-y-6">
          <div>
            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">翻译结果</h3>
            <div class="p-4 rounded-xl bg-white/30 border border-white/40 text-lg leading-relaxed text-gray-800">
              {{ result?.translation }}
            </div>
          </div>
          
          <div v-if="result?.keywords?.keywords && result.keywords.keywords.length > 0" class="mt-6 pt-6 border-t border-white/20">
            <h3 class="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-4">
              <span class="text-lg">🏷️</span> 核心关键词
            </h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="keyword in result.keywords.keywords" 
                :key="keyword"
                class="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-200/30 text-blue-800 dark:text-blue-100 text-sm font-medium backdrop-blur-md transition-colors cursor-default shadow-sm"
              >
                {{ keyword }}
              </span>
            </div>
          </div>
          <div v-else-if="result" class="mt-6 pt-6 border-t border-white/20">
             <h3 class="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              <span class="text-lg">🏷️</span> 核心关键词
            </h3>
            <p class="text-sm text-gray-400 italic">未能提取到显著的关键词。</p>
          </div>
        </div>
      </GlassCard>
    </Transition>
  </div>
</template>
