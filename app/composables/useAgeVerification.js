export const useAgeVerification = () => {
  const cookieOptions = {
    default: () => false,
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }

  const ageVerified = useCookie('age-verified', cookieOptions)

  const verify = () => {
    ageVerified.value = true

    const intendedRoute = useCookie('intended-route')
    const redirectTo = intendedRoute.value || '/'

    intendedRoute.value = null

    navigateTo(redirectTo)
  }

  const isVerified = computed(() => ageVerified.value === true)

  return {
    isVerified,
    verify,
  }
}
