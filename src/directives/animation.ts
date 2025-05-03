import type { Directive } from 'vue'
import { animate, onScroll } from 'animejs'
import { mergeDeep } from '~/shared/utils'

// TODO: maybe replace all vueuse/motion animations with this. But idk, make branch for it!

export const vAnimSlide: Directive = {
  mounted(el, binding) {
    const path = 100
    const yFrom = binding.modifiers.bottom && !binding.modifiers.top ? path : -path
    const xFrom = binding.modifiers.right && !binding.modifiers.left ? path : -path

    animate(el, mergeDeep(
      mergeDeep({
        opacity: {
          from: 0,
          to: 1,
        },
        duration: 400,
        autoplay: onScroll({ container: document.body, enter: (binding.value && binding.value.topVisibleY) ? binding.value.topVisibleY : '80%' }),
        ease: 'out',
      }, {
        ...(binding.modifiers.bottom || binding.modifiers.top
          ? { y: {
              from: yFrom,
              to: 0,
            } }
          : {}),
        ...(binding.modifiers.left || binding.modifiers.right
          ? { x: {
              from: xFrom,
              to: 0,
            } }
          : {}),
      }),
      binding.arg === 'settings' && binding.value && binding.value.custom ? binding.value.custom : {},
    ))
  },
}
