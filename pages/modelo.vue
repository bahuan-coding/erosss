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
                  Qual atividade anti-stress você acha ideal para começar?
                  <span v-if="formErrors.antiStress" class="text-rose-500 ml-1 text-sm opacity-80 animate-pulse">recomendado</span>
                  <span class="help-tooltip" data-tooltip="Escolha no mínimo uma opção - isso ajuda a personalizar a experiência">?</span>
                </label>
                <div class="pl-2" :class="{'has-error': formErrors.antiStress, 'field-success': formData.antiStress.length > 0}">
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
                  Se fosse criar um momento de descontração exclusivo, qual seria?
                  <span v-if="formErrors.descontracao" class="text-rose-500 ml-1 text-sm opacity-80 animate-pulse">recomendado</span>
                  <span class="help-tooltip" data-tooltip="Escolha uma das opções ou descreva sua própria ideia no campo abaixo">?</span>
                </label>
                <div class="pl-2" :class="{'has-error': formErrors.descontracao, 'field-success': formData.descontracao || formData.descontracaoOutro}">
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
                  Qual dinâmica lúdica usaria para quebrar o gelo?
                  <span v-if="formErrors.dinamica" class="text-rose-500 ml-1 text-sm opacity-80 animate-pulse">recomendado</span>
                  <span class="help-tooltip" data-tooltip="Escolha uma das opções ou descreva sua própria ideia no campo abaixo">?</span>
                </label>
                <div class="pl-2" :class="{'has-error': formErrors.dinamica, 'field-success': formData.dinamica || formData.dinamicaOutro}">
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
                  Qual elemento surpresa deixaria o momento único?
                  <span v-if="formErrors.surpresa" class="text-rose-500 ml-1 text-sm opacity-80 animate-pulse">recomendado</span>
                  <span class="help-tooltip" data-tooltip="Escolha uma das opções ou descreva seu elemento surpresa no campo abaixo">?</span>
                </label>
                <div class="pl-2" :class="{'has-error': formErrors.surpresa, 'field-success': formData.surpresa || formData.surpresaDescricao}">
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
                  Qual seria a ponte perfeita entre descontração e desejo?
                  <span v-if="formErrors.ponte" class="text-rose-500 ml-1 text-sm opacity-80 animate-pulse">recomendado</span>
                  <span class="help-tooltip" data-tooltip="Escolha uma das opções ou descreva sua ideia de transição no campo abaixo">?</span>
                </label>
                <div class="pl-2" :class="{'has-error': formErrors.ponte, 'field-success': formData.ponte || formData.ponteDescricao}">
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
                  Que lembrança sensorial você daria no final?
                  <span v-if="formErrors.lembranca" class="text-rose-500 ml-1 text-sm opacity-80 animate-pulse">recomendado</span>
                  <span class="help-tooltip" data-tooltip="Escolha uma das opções ou descreva sua lembrança sensorial no campo abaixo">?</span>
                </label>
                <div class="pl-2" :class="{'has-error': formErrors.lembranca, 'field-success': formData.lembranca || formData.lembrancaDescricao}">
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
            <div id="contact-section" class="border-t pt-6 border-gray-100 dark:border-gray-800">
              <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                INFORMAÇÕES DE CONTATO
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UFormGroup label="Nome Completo" :class="{'required': !formData.nome}" :error="formErrors.nome ? 'Campo recomendado' : null">
                  <UInput 
                    v-model="formData.nome" 
                    placeholder="Seu nome completo" 
                    :ui="{ base: formErrors.nome ? 'focus:ring-rose-500 has-error' : formData.nome ? 'field-success' : '' }"
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
                <UFormGroup label="Email" :class="{'required': !formData.email}" :error="formErrors.email ? 'Campo recomendado' : null">
                  <UInput 
                    v-model="formData.email" 
                    placeholder="Seu email" 
                    type="email"
                    :ui="{ base: formErrors.email ? 'focus:ring-rose-500 has-error' : formData.email ? 'field-success' : '' }"
                    ref="emailRef"
                    @keydown="(e) => handleEnterKey(e, telefoneRef)"
                  />
                </UFormGroup>
                <UFormGroup label="Telefone/WhatsApp" :class="{'required': !formData.telefone}" :error="formErrors.telefone ? 'Campo recomendado' : null">
                  <UInput 
                    v-model="formData.telefone" 
                    placeholder="(00) 00000-0000"
                    :ui="{ base: formErrors.telefone ? 'focus:ring-rose-500 has-error' : formData.telefone ? 'field-success' : '' }"
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
                <UFormGroup label="Cidade/Estado" :class="{'required': !formData.cidade}" :error="formErrors.cidade ? 'Campo recomendado' : null">
                  <UInput 
                    v-model="formData.cidade" 
                    placeholder="São Paulo, SP"
                    :ui="{ base: formErrors.cidade ? 'focus:ring-rose-500 has-error' : formData.cidade ? 'field-success' : '' }"
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
                icon="i-heroicons-arrow-left"
              >
                Voltar
              </UButton>
              <UButton 
                color="primary" 
                :loading="loading"
                :ui="{
                  variant: { solid: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-md hover:shadow-lg transition-all duration-200' }
                }"
                size="lg"
                icon="i-heroicons-sparkles"
                @click="submitForm"
              >
                Registrar minha experiência
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
  
  // Verificações suaves
  const requiredSections = [
    {
      field: 'antiStress',
      condition: formData.antiStress.length === 0 && !formData.antiStressOutro.trim(),
      message: 'Qual atividade anti-stress você prefere?'
    },
    {
      field: 'descontracao',
      condition: !formData.descontracao && !formData.descontracaoOutro.trim(),
      message: 'Qual momento de descontração você criaria?'
    },
    {
      field: 'dinamica',
      condition: !formData.dinamica && !formData.dinamicaOutro.trim(),
      message: 'Qual dinâmica você usaria para quebrar o gelo?'
    },
    {
      field: 'surpresa',
      condition: !formData.surpresa && !formData.surpresaDescricao.trim(),
      message: 'Qual elemento surpresa você considera único?'
    },
    {
      field: 'ponte',
      condition: !formData.ponte && !formData.ponteDescricao.trim(),
      message: 'Como você transitaria da descontração para o desejo?'
    },
    {
      field: 'lembranca',
      condition: !formData.lembranca && !formData.lembrancaDescricao.trim(),
      message: 'Que lembrança sensorial você deixaria?'
    }
  ];
  
  // Conta quantos campos das seções estão preenchidos
  const filledSections = requiredSections.filter(section => !section.condition).length;
  const percentComplete = Math.round((filledSections / requiredSections.length) * 100);
  
  // Se menos de 4 campos preenchidos, mostra dica amigável
  if (filledSections < 4) {
    // Marca os campos não preenchidos
    requiredSections.forEach(section => {
      if (section.condition) {
        formErrors.value[section.field] = true;
      }
    });
    
    // Feedback amigável
    toast.add({
      id: 'form-progress',
      color: 'blue',
      title: 'Mais algumas ideias...',
      text: `Você já completou ${percentComplete}% do formulário! Preencha pelo menos 4 das 6 perguntas principais para compartilhar sua experiência conosco.`,
      icon: 'i-heroicons-sparkles',
      timeout: 4000
    });
    
    // Scroll para o primeiro campo com erro
    const firstErrorField = requiredSections.find(section => section.condition)?.field;
    if (firstErrorField) {
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    
    return;
  }
  
  // Verifica campos de contato essenciais (nome e email, no mínimo)
  if (!formData.nome || !formData.email) {
    if (!formData.nome) formErrors.value.nome = true;
    if (!formData.email) formErrors.value.email = true;
    
    // Feedback amigável
    toast.add({
      id: 'contact-missing',
      color: 'amber',
      title: 'Quase lá!',
      text: 'Adoramos suas ideias! Precisamos apenas de seu nome e email para seguir com o cadastro.',
      icon: 'i-heroicons-identification',
      timeout: 4000
    });
    
    // Scroll para a seção de contato
    document.querySelector('#contact-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    return;
  }
  
  loading.value = true;
  
  console.log('Iniciando envio do formulário...');
  console.log('Dados a serem enviados:', formData);

  try {
    // Enviar dados para a API
    console.log('Fazendo requisição para /api/modelos...');
    const response = await $fetch('/api/modelos', {
      method: 'POST',
      body: formData
    });
    
    console.log('Resposta recebida:', response);
    
    if (response && response.success) {
      // Mostrar notificação de sucesso
      console.log('Formulário enviado com sucesso!');
      
      let title = 'Experiência cadastrada!';
      let text = 'Suas ideias criativas foram registradas. Entraremos em contato em breve!';
      
      if (response.fallback) {
        title = 'Dados registrados com sucesso!';
        text = 'Os dados foram registrados localmente, mas não na planilha. ' + (response.message || '');
        
        // Log error details for debugging
        console.error('Erro na integração com Google Sheets:', response.error);
        if (response.errorDetails) {
          console.error('Detalhes do erro:', response.errorDetails);
        }
      }
      
      toast.add({
        id: 'form-success',
        color: 'green',
        title: title,
        text: text,
        icon: 'i-heroicons-sparkles',
        timeout: 5000
      });
      
      // Redirecionar para página inicial após envio
      setTimeout(() => {
        router.push('/')
      }, 2000);
    } else {
      throw new Error('Resposta do servidor indicou falha')
    }
  } catch (error) {
    // Mostrar notificação de erro
    console.error('Erro ao enviar formulário:', error);
    toast.add({
      id: 'form-api-error',
      color: 'red',
      title: 'Ops, algo não funcionou',
      text: error.message || 'Houve um problema ao salvar suas respostas. Por favor, tente novamente.',
      icon: 'i-heroicons-exclamation-circle',
      timeout: 5000
    });
  } finally {
    loading.value = false;
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

/* Animação suave para campos obrigatórios */
@keyframes gentlePulse {
  0% { box-shadow: 0 0 0 rgba(236, 72, 153, 0); }
  50% { box-shadow: 0 0 8px rgba(236, 72, 153, 0.3); }
  100% { box-shadow: 0 0 0 rgba(236, 72, 153, 0); }
}

/* Estilo mais sutil para indicação de campos obrigatórios */
.required-field {
  position: relative;
}

.required-field::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 80%;
  background: linear-gradient(to bottom, rgba(236, 72, 153, 0.2), rgba(124, 58, 237, 0.2));
  border-radius: 2px;
  transition: all 0.3s ease;
}

.required-field:focus-within::before {
  background: linear-gradient(to bottom, rgba(236, 72, 153, 0.8), rgba(124, 58, 237, 0.8));
}

/* Animação elegante para erros de campos */
@keyframes gentleHighlight {
  0% { border-left-color: rgba(239, 68, 68, 0.2); }
  50% { border-left-color: rgba(239, 68, 68, 0.8); }
  100% { border-left-color: rgba(239, 68, 68, 0.2); }
}

.has-error {
  animation: gentleHighlight 2s infinite;
  border-left: 3px solid rgba(239, 68, 68, 0.4);
  padding-left: 10px;
  transition: all 0.3s ease;
}

/* Estilo para grupos de formulário com campos obrigatórios */
:deep(.required) label {
  position: relative;
  display: inline-flex;
  align-items: center;
}

:deep(.required) label::after {
  content: "•";
  color: rgba(236, 72, 153, 0.8);
  font-size: 10px;
  margin-left: 4px;
  opacity: 0.8;
  vertical-align: super;
}

/* Estilo para tooltip de ajuda */
.help-tooltip {
  display: inline-block;
  position: relative;
  margin-left: 6px;
  font-size: 12px;
  color: #6b7280;
  cursor: help;
}

.help-tooltip:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
  margin-bottom: 6px;
  background: white;
  color: #374151;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 220px;
  z-index: 10;
  font-size: 11px;
  text-align: center;
  animation: fadeIn 0.2s ease-out;
  white-space: normal;
}

.dark .help-tooltip:hover::after {
  background: #1f2937;
  color: #e5e7eb;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* Feedback visual para sucesso de preenchimento */
.field-success {
  border-left: 3px solid rgba(16, 185, 129, 0.4) !important;
  padding-left: 10px;
  transition: all 0.3s ease;
}

.field-success:focus-within {
  border-left: 3px solid rgba(16, 185, 129, 0.8) !important;
}
</style> 