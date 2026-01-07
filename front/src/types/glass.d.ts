export interface GlassEffectProps {
  blurIntensity: number; // 模糊强度 (0-20px)
  opacity: number; // 透明度 (0-1)
  backgroundColor: string; // 背景颜色
  borderRadius: string; // 圆角大小
  transitionDuration: number; // 过渡时间 (ms)
}

export interface GlassCardEmits {
  (e: 'effect-change', config: GlassEffectProps): void;
  (e: 'hover-start'): void;
  (e: 'hover-end'): void;
}
