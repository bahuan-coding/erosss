import { useAgeVerification } from '../composables/useAgeVerification'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/verificar-idade') {
    return
  }

  const excludedRoutes = ['/termos', '/politica-de-privacidade']
  if (excludedRoutes.includes(to.path)) {
    return
  }

  const { isVerified } = useAgeVerification()

  if (!isVerified.value) {
    const intendedRoute = useCookie('intended-route')
    intendedRoute.value = to.fullPath

    return navigateTo('/verificar-idade')
  }
})
