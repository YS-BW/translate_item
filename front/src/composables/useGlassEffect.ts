import { computed, toValue, type MaybeRefOrGetter } from 'vue';
import type { GlassEffectProps } from '@/types/glass';
import { checkBackdropFilterSupport, getFallbackStyle } from '@/utils/browser';

export function useGlassEffect(propsSource: MaybeRefOrGetter<GlassEffectProps>) {
  const isSupported = checkBackdropFilterSupport();

  const style = computed(() => {
    const props = toValue(propsSource);
    
    if (!isSupported) {
      return {
        borderRadius: props.borderRadius,
        transition: `all ${props.transitionDuration}ms ease-out`,
        ...getFallbackStyle(props.opacity)
      };
    }

    return {
      backdropFilter: `blur(${props.blurIntensity}px)`,
      WebkitBackdropFilter: `blur(${props.blurIntensity}px)`,
      backgroundColor: props.backgroundColor || `rgba(255, 255, 255, ${props.opacity})`,
      borderRadius: props.borderRadius,
      transition: `all ${props.transitionDuration}ms ease-out`,
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
    };
  });

  return {
    style,
    isSupported
  };
}
