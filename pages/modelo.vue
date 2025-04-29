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
              
              <div class="mb-6 relative required-field">
                <label class="font-medium mb-2 block">
                  Qual atividade anti-stress você acha ideal para começar? *
                  <span v-if="formErrors.antiStress" class="text-red-500 ml-1 animate-pulse">Campo obrigatório</span>
                </label>
                <div class="space-y-2" :class="{'border-l-4 border-red-500 pl-2': formErrors.antiStress}">
                  <UCheckbox 
                    :model-value="formData.antiStress.includes('standup')"
                    @update:model-value="val => updateCheckboxArray('antiStress', 'standup', val)"
                    name="antiStress" 
                    label="Stand-up intimista (sessão de risos personalizados)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    :model-value="formData.antiStress.includes('respiracao')"
                    @update:model-value="val => updateCheckboxArray('antiStress', 'respiracao', val)"
                    name="antiStress" 
                    label="Respiração guiada + toques sutis (desacelerar antes da conexão)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    :model-value="formData.antiStress.includes('jogo')"
                    @update:model-value="val => updateCheckboxArray('antiStress', 'jogo', val)"
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
                  <span v-if="formErrors.descontracao" class="text-red-500 ml-1 animate-pulse">Campo obrigatório</span>
                </label>
                <div class="space-y-2" :class="{'border-l-4 border-red-500 pl-2': formErrors.descontracao}">
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
              
              <div class="mb-6 relative required-field">
                <label class="font-medium mb-2 block">
                  Qual dinâmica lúdica usaria para quebrar o gelo? *
                  <span v-if="formErrors.dinamica" class="text-red-500 ml-1 animate-pulse">Campo obrigatório</span>
                </label>
                <div class="space-y-2" :class="{'border-l-4 border-red-500 pl-2': formErrors.dinamica}">
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
                <div class="mt-3">
                  <label class="text-sm mb-1 block">Sua dinâmica personalizada:</label>
                  <UTextarea 
                    v-model="formData.dinamicaOutro" 
                    rows="2"
                    placeholder="Descreva sua própria dinâmica para quebrar o gelo..."
                    :ui="{ base: 'w-full' }"
                  />
                </div>
              </div>
              
              <div>
                <label class="font-medium mb-2 block">
                  Qual elemento surpresa deixaria o momento único? *
                  <span v-if="formErrors.surpresa" class="text-red-500 ml-1 animate-pulse">Campo obrigatório</span>
                </label>
                <div class="space-y-2" :class="{'border-l-4 border-red-500 pl-2': formErrors.surpresa}">
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
              
              <div class="relative required-field">
                <label class="font-medium mb-2 block">
                  Qual seria a ponte perfeita entre descontração e desejo? *
                  <span v-if="formErrors.ponte" class="text-red-500 ml-1 animate-pulse">Campo obrigatório</span>
                </label>
                <div class="space-y-2" :class="{'border-l-4 border-red-500 pl-2': formErrors.ponte}">
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
              
              <div class="relative required-field">
                <label class="font-medium mb-2 block">
                  Que lembrança sensorial você daria no final? *
                  <span v-if="formErrors.lembranca" class="text-red-500 ml-1 animate-pulse">Campo obrigatório</span>
                </label>
                <div class="space-y-2" :class="{'border-l-4 border-red-500 pl-2': formErrors.lembranca}">
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
                    :model-value="formData.extras.includes('biofeedback')"
                    @update:model-value="val => updateCheckboxArray('extras', 'biofeedback', val)"
                    name="extras" 
                    label="Biofeedback (ex.: sincronizar respiração + toque)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    :model-value="formData.extras.includes('roleplay')"
                    @update:model-value="val => updateCheckboxArray('extras', 'roleplay', val)"
                    name="extras" 
                    label="Roleplay leve (ex.: histórias sensuais durante o relaxamento)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    :model-value="formData.extras.includes('tantra')"
                    @update:model-value="val => updateCheckboxArray('extras', 'tantra', val)"
                    name="extras" 
                    label="Elementos de tantra (ex.: práticas de respiração e energia)"
                    :ui="{ wrapper: 'flex items-center gap-2' }"
                  />
                  <UCheckbox 
                    :model-value="formData.extras.includes('bdsm')"
                    @update:model-value="val => updateCheckboxArray('extras', 'bdsm', val)"
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
                <UFormGroup label="Nome Completo *" required :error="formErrors.nome ? 'Campo obrigatório' : null">
                  <UInput 
                    v-model="formData.nome" 
                    placeholder="Seu nome completo" 
                    :ui="{ base: formErrors.nome ? 'border-red-500 focus:ring-red-500 animate-pulse' : '' }"
                    ref="nomeRef"
                    @keydown="(e) => handleEnterKey(e, nomeArtisticoRef)"
                  />
                </UFormGroup>
                <UFormGroup label="Nome Artístico">
                  <UInput 
                    v-model="formData.nomeArtistico" 
                    placeholder="Como prefere ser chamada" 
                    ref="nomeArtisticoRef"
                    @keydown="(e) => handleEnterKey(e, emailRef)"
                  />
                </UFormGroup>
                <UFormGroup label="Email *" required :error="formErrors.email ? 'Campo obrigatório' : null">
                  <UInput 
                    v-model="formData.email" 
                    placeholder="Seu email" 
                    type="email"
                    :ui="{ base: formErrors.email ? 'border-red-500 focus:ring-red-500 animate-pulse' : '' }"
                    ref="emailRef"
                    @keydown="(e) => handleEnterKey(e, telefoneRef)"
                  />
                </UFormGroup>
                <UFormGroup label="Telefone/WhatsApp *" required :error="formErrors.telefone ? 'Campo obrigatório' : null">
                  <UInput 
                    v-model="formData.telefone" 
                    placeholder="(00) 00000-0000"
                    :ui="{ base: formErrors.telefone ? 'border-red-500 focus:ring-red-500 animate-pulse' : '' }"
                    ref="telefoneRef"
                    @input="formatPhoneNumber"
                    @blur="formatPhoneOnBlur"
                    @keydown="(e) => handleEnterKey(e, instagramRef)"
                  />
                </UFormGroup>
                <UFormGroup label="Instagram">
                  <UInput 
                    v-model="formData.instagram" 
                    placeholder="@seuinsta"
                    ref="instagramRef"
                    @blur="formatInstagramOnBlur"
                    @keydown="(e) => handleEnterKey(e, cidadeRef)"
                  />
                </UFormGroup>
                <UFormGroup label="Cidade/Estado *" required :error="formErrors.cidade ? 'Campo obrigatório' : null">
                  <UInput 
                    v-model="formData.cidade" 
                    placeholder="São Paulo, SP"
                    :ui="{ base: formErrors.cidade ? 'border-red-500 focus:ring-red-500 animate-pulse' : '' }"
                    ref="cidadeRef"
                    @keydown.enter="submitForm"
                  />
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
import { ref, reactive, watch } from 'vue'

const router = useRouter()
const loading = ref(false)
const toast = useToast()
const formErrors = ref({})

const formData = reactive({
  // Seção 1
  antiStress: [],
  antiStressOutro: '',
  descontracao: null,
  descontracaoOutro: '',
  
  // Seção 2
  dinamica: null,
  dinamicaOutro: '',
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

// Ensure checkbox arrays are always properly initialized
if (!Array.isArray(formData.antiStress)) formData.antiStress = []
if (!Array.isArray(formData.extras)) formData.extras = []

function navigateHome() {
  router.push('/')
}

// Função para formatar o número de telefone no formato brasileiro
function formatPhoneNumber(_event) {
  // Remove todos os caracteres não numéricos
  const value = formData.telefone.replace(/\D/g, '')
  
  // Se o campo está vazio, não faça nada
  if (!value) return
  
  let formattedValue = ''
  
  // Formata como (XX) XXXXX-XXXX
  if (value.length <= 2) {
    // Só tem o DDD ou parte dele
    formattedValue = `(${value}`
  } else if (value.length <= 7) {
    // Tem o DDD e parte do número
    formattedValue = `(${value.substring(0, 2)}) ${value.substring(2)}`
  } else {
    // Tem o número completo
    formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`
  }
  
  // Atualiza o valor formatado
  formData.telefone = formattedValue
}

// Função para formatar número de telefone quando o campo perde o foco
function formatPhoneOnBlur() {
  const value = formData.telefone.replace(/\D/g, '')
  
  // Se o número não estiver completo, completa com o formato correto
  if (value.length > 0) {
    if (value.length < 11) {
      // Preenche com zeros se necessário
      const paddedValue = value.padEnd(11, '0')
      formData.telefone = `(${paddedValue.substring(0, 2)}) ${paddedValue.substring(2, 7)}-${paddedValue.substring(7, 11)}`
    } else {
      // Formata normalmente
      formData.telefone = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`
    }
  }
}

// Função para adicionar @ no Instagram quando o campo perde o foco
function formatInstagramOnBlur() {
  let value = formData.instagram.trim()
  
  // Se o campo está vazio, não faça nada
  if (!value) return
  
  // Remove @ se o usuário digitar duas vezes
  value = value.replace(/^@+/, '')
  
  // Adiciona @ se não existir
  if (!value.startsWith('@')) {
    value = '@' + value
  }
  
  // Atualiza o valor
  formData.instagram = value
}

// Função para ir para o próximo campo ao pressionar Enter
function handleEnterKey(event, nextFieldRef) {
  if (event.key === 'Enter' && nextFieldRef) {
    event.preventDefault()
    nextFieldRef.focus()
  }
}

async function submitForm() {
  // Reset error state
  formErrors.value = {}
  let hasErrors = false
  
  // Validate antiStress (multiple selection)
  if (!formData.antiStress || formData.antiStress.length === 0) {
    formErrors.value.antiStress = true
    hasErrors = true
  }
  
  // Validate radio selections
  const requiredRadios = ['descontracao', 'dinamica', 'surpresa', 'ponte', 'lembranca']
  requiredRadios.forEach(field => {
    if (!formData[field]) {
      formErrors.value[field] = true
      hasErrors = true
    }
  })
  
  // Validate contact fields
  const requiredContacts = ['nome', 'email', 'telefone', 'cidade']
  requiredContacts.forEach(field => {
    if (!formData[field]) {
      formErrors.value[field] = true
      hasErrors = true
    }
  })
  
  // Validate email format
  if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
    formErrors.value.email = true
    hasErrors = true
    toast.add({
      id: 'email-error',
      color: 'red',
      title: 'Email inválido',
      text: 'Por favor, insira um endereço de email válido',
      icon: 'i-heroicons-exclamation-circle',
      timeout: 5000
    })
  }
  
  // Validate phone format
  if (formData.telefone && !/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) {
    formErrors.value.telefone = true
    hasErrors = true
    toast.add({
      id: 'phone-error',
      color: 'red',
      title: 'Telefone inválido',
      text: 'Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX',
      icon: 'i-heroicons-exclamation-circle',
      timeout: 5000
    })
  }
  
  // Show error message if validation fails
  if (hasErrors) {
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

  try {
    // Enviar dados para a API
    const response = await $fetch('/api/modelos', {
      method: 'POST',
      body: formData
    })
    
    if (response && response.success) {
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
    } else {
      throw new Error('Resposta do servidor indicou falha')
    }
  } catch (error) {
    // Mostrar notificação de erro
    toast.add({
      id: 'form-api-error',
      color: 'red',
      title: 'Erro ao enviar o formulário',
      text: error.message || 'Houve um problema ao salvar suas respostas. Por favor, tente novamente.',
      icon: 'i-heroicons-exclamation-circle',
      timeout: 5000
    })
  } finally {
    loading.value = false
  }
}

function updateCheckboxArray(arrayName, value, checked) {
  if (!Array.isArray(formData[arrayName])) {
    formData[arrayName] = []
  }
  
  if (checked) {
    if (!formData[arrayName].includes(value)) {
      formData[arrayName].push(value)
      // Clear error when field is updated
      if (formData[arrayName].length > 0) {
        formErrors.value[arrayName] = false
      }
    }
  } else {
    formData[arrayName] = formData[arrayName].filter(item => item !== value)
  }
}

// Watch for changes in required form fields to clear errors
watch(() => formData.descontracao, (val) => {
  if (val) formErrors.value.descontracao = false
})

watch(() => formData.dinamica, (val) => {
  if (val) formErrors.value.dinamica = false
})

watch(() => formData.surpresa, (val) => {
  if (val) formErrors.value.surpresa = false
})

watch(() => formData.ponte, (val) => {
  if (val) formErrors.value.ponte = false
})

watch(() => formData.lembranca, (val) => {
  if (val) formErrors.value.lembranca = false
})

watch(() => formData.nome, (val) => {
  if (val) formErrors.value.nome = false
})

watch(() => formData.email, (val) => {
  if (val) formErrors.value.email = false
})

watch(() => formData.telefone, (val) => {
  if (val) formErrors.value.telefone = false
})

watch(() => formData.cidade, (val) => {
  if (val) formErrors.value.cidade = false
})

// Referencias para focar nos próximos campos
const nomeRef = ref(null)
const nomeArtisticoRef = ref(null)
const emailRef = ref(null)
const telefoneRef = ref(null)
const instagramRef = ref(null)
const cidadeRef = ref(null)
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

/* Animação de brilho para campos obrigatórios */
@keyframes glow {
  0% { box-shadow: 0 0 0 rgba(236, 72, 153, 0); }
  50% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.5); }
  100% { box-shadow: 0 0 0 rgba(236, 72, 153, 0); }
}

.required-field {
  position: relative;
  padding-left: 10px;
  border-left: 4px solid #ec489930;
}

/* Pulsating animation for error fields */
@keyframes pulse {
  0% { border-left-color: rgba(239, 68, 68, 0.4); }
  50% { border-left-color: rgba(239, 68, 68, 1); }
  100% { border-left-color: rgba(239, 68, 68, 0.4); }
}

.border-red-500 {
  animation: pulse 1s infinite;
}

/* Style for required form groups */
:deep(.required) label::after {
  content: " *";
  color: #ef4444;
}
</style> 