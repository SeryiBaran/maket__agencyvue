import type { Directive } from 'vue'
import { animate, onScroll } from 'animejs'
import { mergeDeep } from '~/shared/utils'

// TODO: maybe replace all vueuse/motion animations with this. But idk, make branch for it!

export const vAnimSlide: Directive<HTMLElement> = {
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

export const vAnimRotate: Directive<HTMLElement> = {
  mounted(el, binding) {
    const path = 60
    const xAngle = binding.modifiers.bottom && !binding.modifiers.top ? path : -path
    const yAngle = binding.modifiers.right && !binding.modifiers.left ? path : -path

    if (el.parentElement)
      el.parentElement.style.perspective = '400px'

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
        ...(binding.modifiers.right || binding.modifiers.left
          ? { rotateY: {
              from: `${yAngle}deg`,
              to: `${0}deg`,
            } }
          : {}),
        ...(binding.modifiers.bottom || binding.modifiers.top
          ? { rotateX: {
              from: `${xAngle}deg`,
              to: `${0}deg`,
            } }
          : {}),
      }),
      binding.arg === 'settings' && binding.value && binding.value.custom ? binding.value.custom : {},
    ))
  },
}
