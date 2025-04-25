<template>
  <div class="footer-section">
    <div class="tab-bar">
      <UiBottomNavigation
        :links="navigationLinks"
        :ui="{
          wrapper:
            'fixed bottom-0 left-0 right-0 z-10 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900',
          container: 'grid grid-cols-5 gap-1',
          item: {
            base: 'flex flex-col items-center justify-center py-2',
            label: 'text-xs mt-1',
            active: 'text-primary-500 dark:text-primary-400',
            inactive: 'text-gray-500 dark:text-gray-400',
          },
        }"
      />
    </div>
    <div class="gesture-indicator">
      <div class="indicator-bar"></div>
    </div>
  </div>

  <!-- Desktop Footer -->
  <UFooter
    :links="footerLinks"
    :socials="socialLinks"
    class="hidden lg:block"
    :ui="{
      wrapper:
        'bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800',
      container: 'py-8',
      title: 'text-sm uppercase font-bold text-gray-500 dark:text-gray-400',
      links: {
        wrapper: 'space-y-3',
        link: 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400',
      },
      socials: {
        wrapper: 'flex space-x-4',
        link: 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400',
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800 mt-8 pt-8',
        copyright: 'text-gray-700 dark:text-gray-300',
      },
    }"
  >
    <template #copyright>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }} Sorteios Premium. Todos os direitos
        reservados.
      </div>
    </template>
  </UFooter>
</template>

<script setup>
const navigationLinks = [
  {
    label: "Home",
    icon: "i-lucide-home",
    to: "/",
    active: true,
  },
  {
    label: "Explorar",
    icon: "i-lucide-search",
    to: "/explorar",
  },
  {
    label: "Criar",
    icon: "i-lucide-plus-circle",
    to: "/criar",
  },
  {
    label: "Favoritos",
    icon: "i-lucide-heart",
    to: "/favoritos",
  },
  {
    label: "Perfil",
    icon: "i-lucide-user",
    to: "/perfil",
  },
];

const faqs = [
  {
    question: 'Como as modelos recebem?',
    answer: 'Pix automático em 24h'
  },
  {
    question: 'Posso gravar?',
    answer: 'Proibido, detectamos vazamentos'
  },
  {
    question: 'Como garantir minha vaga?',
    answer: 'Participando do sorteio exclusivo'
  },
  {
    question: 'É seguro participar?',
    answer: 'Sim, utilizamos criptografia de ponta a ponta'
  }
]

const footerLinks = [
  {
    title: 'Para Modelos',
    links: [
      { name: 'Como funciona', href: '/modelos' },
      { name: 'Criar conta', href: '/cadastro-modelo' },
      { name: 'Política de conteúdo', href: '/politica-conteudo' }
    ]
  },
  {
    title: 'Para Clientes',
    links: [
      { name: 'Tipos de sorteios', href: '/sorteios' },
      { name: 'Como participar', href: '/participar' },
      { name: 'Regras', href: '/regras' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre nós', href: '/sobre' },
      { name: 'Termos de uso', href: '/termos' },
      { name: 'Privacidade', href: '/privacidade' }
    ]
  }
]

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'i-heroicons-camera' },
  { name: 'Discord', href: 'https://discord.com', icon: 'i-heroicons-chat-bubble-left-right' }
]
</script>

<style scoped>
.footer-section {
  background-color: rgba(254, 250, 255, 1);
  width: 100%;
  padding-top: 4px;
  overflow: hidden;
  padding-bottom: 70px; /* Space for the bottom navigation */
}

.gesture-indicator {
  display: flex;
  margin-top: 4px;
  width: 100%;
  padding: 20px 79px 8px 79px;
  flex-direction: column;
  align-items: center;
}

.indicator-bar {
  border-radius: 360px;
  background-color: rgba(82, 82, 82, 0.09);
  width: 120px;
  height: 4px;
}

@media (min-width: 1024px) {
  .footer-section {
    display: none;
  }
}

.dark .footer-section {
  background-color: rgb(18, 18, 18);
}

.dark .indicator-bar {
  background-color: rgba(200, 200, 200, 0.2);
}

.faq-card {
  transform: translateY(0);
  transition: all 0.3s ease;
}

.faq-card:hover {
  transform: translateY(-3px);
  border-left: 3px solid var(--color-primary-500);
}

@media (min-width: 768px) {
  .mobile-bottom-nav {
    display: none;
  }
}
</style>
