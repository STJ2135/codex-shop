import type { Directive } from 'vue'

const isReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
let observer: IntersectionObserver | undefined

const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -45px' },
    )
  }
  return observer
}

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(element, binding) {
    element.classList.add('reveal')
    if (binding.value) element.style.transitionDelay = `${binding.value}ms`

    if (isReducedMotion() || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return
    }

    getObserver().observe(element)
  },
  unmounted(element) {
    observer?.unobserve(element)
  },
}
