import type { RouterConfig } from 'nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition)
      }
      else {
        const scrollableElement = document.getElementById('scrollable')
        if (scrollableElement) {
          scrollableElement.scrollTo(0, 0)
        }
        else {
          window.scrollTo(0, 0)
        }
        resolve({ left: 0, top: 0 })
      }
    })
  },
}
