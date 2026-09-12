import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? '')
  const router = useRouter()
  let observer: IntersectionObserver | undefined

  onMounted(async () => {
    if (!('IntersectionObserver' in window)) return

    await router.isReady()
    await nextTick()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        })
      },
      { rootMargin: '-25% 0px -62% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer?.observe(section)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeSection }
}
