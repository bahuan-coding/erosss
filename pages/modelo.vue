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
            Crie experiências que unam bem-estar, diversão e intimidade
          </p>
        </div>
        
        <!-- Form Content -->
        <UCard class="mb-8">
          <template #header>
            <div class="text-center">
              <h3 class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                🌟 Formulário de Experiência & Intimidade VIP
              </h3>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Ajude-nos a criar momentos únicos que encantarão seus clientes e valorizarão sua arte
              </p>
            </div>
          </template>

          <div class="p-5 space-y-8">
            <!-- Seção 1: Antes da Conexão Íntima -->
            <div class="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
              <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                1. ANTES DA CONEXÃO ÍNTIMA: O RITUAL
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                (Escolha ou descreva atividades que relaxem e aproximem)
              </p>
              
              <div class="mb-6">
                <label class="font-medium mb-2 block">
                  Qual atividade anti-stress você acha ideal para começar? *
                </label>
                <div class="space-y-2">
                  <UCheckbox 
                    v-model="formData.antiStress" 
                    value="standup"
                    name="antiStress" 
                    label="Stand-up intimista (sessão de risos personalizados)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    v-model="formData.antiStress" 
                    value="respiracao"
                    name="antiStress" 
                    label="Respiração guiada + toques sutis (desacelerar antes da conexão)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    v-model="formData.antiStress" 
                    value="jogo"
                    name="antiStress" 
                    label="Jogo leve de perguntas + desafios corporais (ex.: &quot;Verdade ou Toque?&quot;)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
                <div class="mt-3">
                  <label class="text-sm mb-1 block">Outra ideia:</label>
                  <UInput 
                    v-model="formData.antiStressOutro" 
                    placeholder="Descreva sua ideia..."
                  />
                </div>
              </div>
              
              <div>
                <label class="font-medium mb-2 block">
                  Se fosse criar um momento de descontração exclusivo, qual seria? *
                </label>
                <div class="space-y-2">
                  <URadio 
                    v-model="formData.descontracao" 
                    value="massagem"
                    name="descontracao" 
                    label="Uma massagem relaxante... mas com apostas sensoriais"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.descontracao" 
                    value="adivinhacao"
                    name="descontracao" 
                    label="Um jogo de adivinhação com estímulos progressivos"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
                <div class="mt-3">
                  <label class="text-sm mb-1 block">Sua versão:</label>
                  <UTextarea 
                    v-model="formData.descontracaoOutro" 
                    rows="2"
                    placeholder="Descreva sua versão de um momento de descontração exclusivo..."
                    :ui="{ base: 'w-full' }"
                  />
                </div>
              </div>
            </div>
            
            <!-- Seção 2: Construindo Confiança -->
            <div class="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-xl">
              <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                2. CONSTRUINDO CONFIANÇA
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                (O que faria para estabelecer uma ligação real antes da intimidade?)
              </p>
              
              <div class="mb-6">
                <label class="font-medium mb-2 block">
                  Qual dinâmica lúdica usaria para quebrar o gelo? *
                </label>
                <div class="space-y-2">
                  <URadio 
                    v-model="formData.dinamica" 
                    value="segredoToque"
                    name="dinamica" 
                    label="&quot;O Segredo do Toque&quot; (descobrir preferências sem palavras)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.dinamica" 
                    value="jogoPulsacoes"
                    name="dinamica" 
                    label="&quot;Jogo das Pulsações&quot; (controlar um vibrador pelo ritmo cardíaco)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.dinamica" 
                    value="desafioSentidos"
                    name="dinamica" 
                    label="&quot;Desafio dos Sentidos&quot; (vendar e explorar texturas antes do contato)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
              </div>
              
              <div>
                <label class="font-medium mb-2 block">
                  Qual elemento surpresa deixaria o momento único? *
                </label>
                <div class="space-y-2">
                  <URadio 
                    v-model="formData.surpresa" 
                    value="presente"
                    name="surpresa" 
                    label="Um presente inesperado (ex.: um objeto para provocar curiosidade)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.surpresa" 
                    value="jogo"
                    name="surpresa" 
                    label="Um jogo com final aberto (ex.: o cliente escolhe o próximo passo)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.surpresa" 
                    value="experiencia"
                    name="surpresa" 
                    label="Uma experiência sincronizada com música ou respiração"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
                <div class="mt-3">
                  <label class="text-sm mb-1 block">Descreva seu elemento surpresa:</label>
                  <UTextarea 
                    v-model="formData.surpresaDescricao" 
                    rows="2"
                    placeholder="Qual seria seu elemento surpresa para tornar o momento único..."
                    :ui="{ base: 'w-full' }"
                  />
                </div>
              </div>
            </div>
            
            <!-- Seção 3: O Clímax da Experiência -->
            <div class="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl">
              <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                3. O CLÍMAX DA EXPERIÊNCIA
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                (Como você imaginaria a transição do bem-estar para a intimidade?)
              </p>
              
              <div>
                <label class="font-medium mb-2 block">
                  Qual seria a ponte perfeita entre descontração e desejo? *
                </label>
                <div class="space-y-2">
                  <URadio 
                    v-model="formData.ponte" 
                    value="toque"
                    name="ponte" 
                    label="&quot;Um toque inesperado após uma gargalhada&quot;"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.ponte" 
                    value="jogo"
                    name="ponte" 
                    label="&quot;Um jogo que lentamente se torna mais intenso&quot;"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.ponte" 
                    value="pausa"
                    name="ponte" 
                    label="&quot;Uma pausa para respiração... que vira um suspiro de prazer&quot;"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
                <div class="mt-3">
                  <label class="text-sm mb-1 block">Descreva sua ideia de transição:</label>
                  <UTextarea 
                    v-model="formData.ponteDescricao" 
                    rows="3"
                    placeholder="Como você imaginaria essa transição de forma única..."
                    :ui="{ base: 'w-full' }"
                  />
                </div>
              </div>
            </div>
            
            <!-- Seção 4: Pós-Experiência -->
            <div class="bg-fuchsia-50 dark:bg-fuchsia-900/30 p-6 rounded-xl">
              <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                4. PÓS-EXPERIÊNCIA - O TOQUE FINAL
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                (Como deixar o cliente com vontade de mais?)
              </p>
              
              <div>
                <label class="font-medium mb-2 block">
                  Que lembrança sensorial você daria no final? *
                </label>
                <div class="space-y-2">
                  <URadio 
                    v-model="formData.lembranca" 
                    value="cheiro"
                    name="lembranca" 
                    label="Um cheiro marcante (ex.: perfume personalizado)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.lembranca" 
                    value="objeto"
                    name="lembranca" 
                    label="Um objeto simbólico (ex.: carta com um desafio para a próxima vez)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <URadio 
                    v-model="formData.lembranca" 
                    value="mensagem"
                    name="lembranca" 
                    label="Uma mensagem de voz provocante (enviada depois)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
                <div class="mt-3">
                  <label class="text-sm mb-1 block">Sua ideia de lembrança sensorial:</label>
                  <UTextarea 
                    v-model="formData.lembrancaDescricao" 
                    rows="2"
                    placeholder="Que lembrança única você deixaria..."
                    :ui="{ base: 'w-full' }"
                  />
                </div>
              </div>
              
              <div class="mt-6">
                <label class="font-medium mb-2 block">
                  Gostaria de incluir algum destes elementos extras na experiência?
                </label>
                <div class="space-y-2">
                  <UCheckbox 
                    v-model="formData.extras" 
                    value="biofeedback"
                    name="extras" 
                    label="Biofeedback (ex.: sincronizar respiração + toque)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    v-model="formData.extras" 
                    value="roleplay"
                    name="extras" 
                    label="Roleplay leve (ex.: histórias sensuais durante o relaxamento)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    v-model="formData.extras" 
                    value="tantra"
                    name="extras" 
                    label="Elementos de tantra (ex.: práticas de respiração e energia)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    v-model="formData.extras" 
                    value="bdsm"
                    name="extras" 
                    label="BDSM leve (ex.: jogos de poder consensuais e seguros)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                </div>
              </div>
            </div>

            <!-- Informações de Contato -->
            <div class="border-t pt-6 border-gray-100 dark:border-gray-800">
              <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                INFORMAÇÕES DE CONTATO
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UFormGroup label="Nome Completo *" required>
                  <UInput v-model="formData.nome" placeholder="Seu nome completo" />
                </UFormGroup>
                <UFormGroup label="Nome Artístico">
                  <UInput v-model="formData.nomeArtistico" placeholder="Como prefere ser chamada" />
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
                <UFormGroup label="Cidade/Estado *" required>
                  <UInput v-model="formData.cidade" placeholder="São Paulo, SP" />
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
  // Seção 1
  antiStress: [],
  antiStressOutro: '',
  descontracao: null,
  descontracaoOutro: '',
  
  // Seção 2
  dinamica: null,
  surpresa: null,
  surpresaDescricao: '',
  
  // Seção 3
  ponte: null,
  ponteDescricao: '',
  
  // Seção 4
  lembranca: null,
  lembrancaDescricao: '',
  extras: [],
  
  // Contato
  nome: '',
  nomeArtistico: '',
  email: '',
  telefone: '',
  instagram: '',
  cidade: ''
})

function navigateHome() {
  router.push('/')
}

function submitForm() {
  // Validar que as perguntas obrigatórias foram respondidas
  if (!formData.nome || !formData.email || !formData.telefone || !formData.cidade ||
      !formData.antiStress.length || !formData.descontracao || 
      !formData.dinamica || !formData.surpresa || 
      !formData.ponte || !formData.lembranca) {
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

  loading.value = true

  // Simular envio do formulário
  setTimeout(() => {
    loading.value = false
    
    // Mostrar notificação de sucesso
    toast.add({
      id: 'form-success',
      color: 'green',
      title: 'Formulário enviado com sucesso!',
      text: 'Suas experiências exclusivas foram registradas. Entraremos em contato em breve para os próximos passos!',
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