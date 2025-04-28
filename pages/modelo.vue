<template>
  <div class="modelo-page">
    <UContainer class="py-16 md:py-24">
      <div class="max-w-4xl mx-auto">
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Cadastro de Modelo
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Preencha o formulário abaixo para se cadastrar como modelo em nossa plataforma.
          </p>
        </div>
        
        <!-- Form Content -->
        <UCard class="mb-8">
          <template #header>
            <div class="text-center">
              <h3 class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                🌟 Formulário de Estilo & Experiência VIP
              </h3>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Nosso objetivo: criar atendimentos tão bons para você quanto para os clientes. Responda com autenticidade!
              </p>
            </div>
          </template>

          <div class="p-5 space-y-6">
            <!-- Pergunta 1 -->
            <div>
              <label class="font-medium mb-2 block">
                1. Qual sua vibe ideal durante um atendimento? (Marque até 2) *
              </label>
              <div class="space-y-2">
                <UCheckbox 
                  v-model="formData.vibe" 
                  value="celebracao"
                  name="vibe" 
                  label="🥂 Celebração: champanhe, festa privada, energia alta."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.vibe" 
                  value="conforto"
                  name="vibe" 
                  label="🎶 Conforto elegante: música suave, conversa inteligente, clima íntimo."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.vibe" 
                  value="romance"
                  name="vibe" 
                  label="🌹 Romance premium: jantar à luz de velas, luxo discreto."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.vibe" 
                  value="divertido"
                  name="vibe" 
                  label="🎮 Divertido e interativo: jogos, histórias engraçadas, descontração."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.vibe" 
                  value="teatral"
                  name="vibe" 
                  label="✨ Teatral e envolvente: roleplay, fantasia, suspense sedutor."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
              </div>
            </div>

            <!-- Pergunta 2 -->
            <div>
              <label class="font-medium mb-2 block">
                2. Quais atividades extras você ama ou gostaria de experimentar?
              </label>
              <div class="space-y-2">
                <UCheckbox 
                  v-model="formData.atividades" 
                  value="show"
                  name="atividades" 
                  label="💃 Show pessoal: dança, karaokê, performance exclusiva."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.atividades" 
                  value="jogos"
                  name="atividades" 
                  label="♟️ Jogos de sedução: pôquer com apostas, desafios sensuais."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.atividades" 
                  value="intimas"
                  name="atividades" 
                  label="🛁 Experiências íntimas: banho relaxante, massagens temáticas."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.atividades" 
                  value="segredos"
                  name="atividades" 
                  label="🗝️ Segredos compartilhados: histórias pessoais, confidências."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
              </div>
            </div>

            <!-- Pergunta 3 -->
            <div>
              <label class="font-medium mb-2 block">
                3. Se pudesse escolher um cenário de fantasia, qual seria?
              </label>
              <div class="space-y-2">
                <URadio 
                  v-model="formData.cenario" 
                  value="personagens"
                  name="cenario" 
                  label="🎭 Personagens: CEO poderosa, artista famosa, heroína de filme."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <URadio 
                  v-model="formData.cenario" 
                  value="viagens"
                  name="cenario" 
                  label="🌎 Viagens imaginárias: encontro em Veneza, deserto secreto."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <URadio 
                  v-model="formData.cenario" 
                  value="luxo"
                  name="cenario" 
                  label="🏰 Luxo absoluto: festa em um palácio, festival privativo."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
              </div>
              <div class="mt-3">
                <label class="text-sm mb-1 block">Descreva seu cenário dos sonhos:</label>
                <UTextarea 
                  v-model="formData.cenarioDescricao" 
                  rows="3"
                  placeholder="Descreva seu cenário ideal aqui..."
                  :ui="{ base: 'w-full' }"
                />
              </div>
            </div>

            <!-- Pergunta 4 -->
            <div>
              <label class="font-medium mb-2 block">
                4. Como você gosta de iniciar a experiência com o cliente?
              </label>
              <div class="space-y-2">
                <URadio 
                  v-model="formData.inicio" 
                  value="brinde"
                  name="inicio" 
                  label="🍸 Brinde especial: coquetel personalizado com seu nome."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <URadio 
                  v-model="formData.inicio" 
                  value="jogo"
                  name="inicio" 
                  label="🤍 Jogo de confiança: desafio leve (ex.: verdades e mentiras)."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <URadio 
                  v-model="formData.inicio" 
                  value="magico"
                  name="inicio" 
                  label="✨ Momento mágico: surpresa pré-combinada (ex.: presente ou carta)."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
              </div>
            </div>

            <!-- Pergunta 5 -->
            <div>
              <label class="font-medium mb-2 block">
                5. Qual presente faria seu dia melhor? (Para clientes premium)
              </label>
              <div class="space-y-2">
                <URadio 
                  v-model="formData.presente" 
                  value="acessorios"
                  name="presente" 
                  label="💎 Acessórios de luxo: colar, relógio, perfume importado."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <URadio 
                  v-model="formData.presente" 
                  value="bem-estar"
                  name="presente" 
                  label="🧖 Experiências de bem-estar: dia no spa, tratamento de beleza."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <URadio 
                  v-model="formData.presente" 
                  value="vale"
                  name="presente" 
                  label="🛍️ Vale-presente: das suas lojas preferidas."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
              </div>
            </div>

            <!-- Pergunta 6 -->
            <div>
              <label class="font-medium mb-2 block">
                6. O que tornaria um atendimento perfeito para você?
              </label>
              <div class="space-y-2">
                <UCheckbox 
                  v-model="formData.perfeito" 
                  value="conexao"
                  name="perfeito" 
                  label="🌟 Conexão genuína: cliente que valoriza sua companhia."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.perfeito" 
                  value="surpresa"
                  name="perfeito" 
                  label="🎁 Surpresa memorável: algo inesperado e elegante."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
                <UCheckbox 
                  v-model="formData.perfeito" 
                  value="registro"
                  name="perfeito" 
                  label="📸 Registro profissional: fotos ou vídeos para seu portfólio."
                  :ui="{ wrapper: 'flex items-center gap-2' }"
                />
              </div>
            </div>

            <!-- Pergunta 7 -->
            <div>
              <label class="font-medium mb-2 block">
                7. Complete a frase com seu toque único: "Um atendimento inesquecível para mim é…"
              </label>
              <UTextarea 
                v-model="formData.frase" 
                rows="3"
                placeholder="Complete a frase aqui..."
                :ui="{ base: 'w-full' }"
              />
            </div>

            <!-- Informações de Contato -->
            <div class="border-t pt-4 border-gray-100 dark:border-gray-800">
              <h4 class="font-medium mb-2">Informações de Contato</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UFormGroup label="Nome Completo *" required>
                  <UInput v-model="formData.nome" placeholder="Seu nome completo" />
                </UFormGroup>
                <UFormGroup label="Email *" required>
                  <UInput v-model="formData.email" placeholder="Seu email" type="email" />
                </UFormGroup>
                <UFormGroup label="Telefone/WhatsApp *" required>
                  <UInput v-model="formData.telefone" placeholder="(00) 00000-0000" />
                </UFormGroup>
                <UFormGroup label="Instagram">
                  <UInput v-model="formData.instagram" placeholder="@seuinsta" />
                </UFormGroup>
              </div>
            </div>
          </div>

          <template #footer>
            <div class="flex justify-between gap-3">
              <UButton 
                color="gray" 
                variant="ghost" 
                @click="navigateHome"
              >
                Cancelar
              </UButton>
              <UButton 
                color="primary" 
                :loading="loading"
                :ui="{
                  variant: { solid: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600' }
                }"
                @click="submitForm"
              >
                Enviar
              </UButton>
            </div>
          </template>
        </UCard>
        
        <!-- Back to home button -->
        <div class="text-center mt-8">
          <UButton
            color="white"
            variant="ghost"
            to="/"
            icon="i-heroicons-arrow-left"
          >
            Voltar para página inicial
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const router = useRouter()
const loading = ref(false)
const toast = useToast()

const formData = reactive({
  vibe: [],
  atividades: [],
  cenario: null,
  cenarioDescricao: '',
  inicio: null,
  presente: null,
  perfeito: [],
  frase: '',
  nome: '',
  email: '',
  telefone: '',
  instagram: ''
})

function navigateHome() {
  router.push('/')
}

function submitForm() {
  // Validar que as perguntas obrigatórias foram respondidas
  if (formData.vibe.length === 0 || !formData.nome || !formData.email || !formData.telefone) {
    // Exibir mensagem de erro
    toast.add({
      id: 'form-error',
      color: 'red',
      title: 'Por favor, preencha todos os campos obrigatórios',
      text: 'Os campos marcados com * são de preenchimento obrigatório',
      icon: 'i-heroicons-exclamation-circle',
      timeout: 5000
    })
    return
  }

  // Se mais de 2 opções forem selecionadas na primeira pergunta
  if (formData.vibe.length > 2) {
    toast.add({
      id: 'vibe-error',
      color: 'red',
      title: 'Por favor, selecione no máximo 2 opções na primeira pergunta',
      text: 'Escolha até 2 opções que melhor representem sua vibe ideal',
      icon: 'i-heroicons-exclamation-circle',
      timeout: 5000
    })
    return
  }

  loading.value = true

  // Simular envio do formulário
  setTimeout(() => {
    loading.value = false
    
    // Mostrar notificação de sucesso
    toast.add({
      id: 'form-success',
      color: 'green',
      title: 'Formulário enviado com sucesso!',
      text: 'Agradecemos seu cadastro! Entraremos em contato em breve.',
      icon: 'i-heroicons-check-circle',
      timeout: 5000
    })
    
    // Redirecionar para página inicial após envio
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, 1500)
}
</script>

<style scoped>
.modelo-page {
  background-image: 
    linear-gradient(to bottom right, rgba(255, 245, 255, 0.95), rgba(240, 220, 255, 0.95)),
    url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.dark .modelo-page {
  background-image: 
    linear-gradient(to bottom right, rgba(30, 10, 60, 0.95), rgba(15, 5, 30, 0.95)),
    url('/images/hero.jpg');
}
</style> 