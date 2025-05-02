# Linguagem e Localização na Arquitetura MCP

Este documento detalha a estratégia e implementação de localização e linguagem na plataforma Sorteios Premium, seguindo a arquitetura MCP.

## Diretrizes Principais

- **Idioma Principal**: Português Brasileiro (pt-BR)
- **Idioma Secundário**: Inglês (en-US) somente para código
- **Sistema de Medidas**: Sistema métrico (R$/km)

## Requisitos Críticos

1. **Conteúdo para Usuários**: Todo conteúdo visível ao usuário deve estar em pt-BR
2. **Nuances Culturais**: Preservar terminologia cultural brasileira
   - Exemplo: "Sorteio" em vez de "Raffle" na interface
   - Exemplo: "R$" em vez de "$" para valores monetários
3. **Código e Comentários**: Podem ser em inglês para facilitar a manutenção

## Implementação na Arquitetura MCP

### Camada de Modelo

```javascript
// Nomenclatura de atributos internos em inglês
interface Experience {
  id: string;
  title: string;          // Será exibido em pt-BR
  price: number;          // Valor em Reais (R$)
  distance: number;       // Distância em quilômetros (km)
  
  // Método para formatação localizada
  formatCurrency() {
    // Formata como R$ 1.000,00
    return `R$ ${this.price.toLocaleString('pt-BR')}`;
  }
  
  formatDistance() {
    // Formata como 10 km
    return `${this.distance} km`;
  }
}
```

### Camada de Componente

Os componentes devem implementar:

1. **Textos Estáticos**: Diretamente em pt-BR
2. **Textos Dinâmicos**: Passar por funções de formatação localizada

Exemplo:
```vue
<template>
  <div class="card-sorteio">
    <!-- Texto estático em pt-BR -->
    <h2>Experiência Premium</h2>
    
    <!-- Valores formatados conforme localização -->
    <p>Valor do ingresso: {{ experience.formatCurrency() }}</p>
    <p>Distância: {{ experience.formatDistance() }}</p>
    
    <!-- Botões com texto em pt-BR -->
    <button class="btn-primary">Comprar Ingresso</button>
  </div>
</template>
```

### Camada de Presenter

O presenter deve:

1. Obter dados do modelo (em formato interno)
2. Transformar para apresentação localizada
3. Fornecer métodos utilitários para formatação

```javascript
// Em presenters/ExperiencePresenter.js
export function useExperience(experienceId) {
  // Estado reativo
  const experience = ref(null);
  
  // Formatadores para apresentação
  const formatters = {
    currency: (value) => `R$ ${value.toLocaleString('pt-BR')}`,
    date: (dateString) => {
      const date = new Date(dateString);
      // Formato: 01 de janeiro de 2023
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    },
    shortDate: (dateString) => {
      const date = new Date(dateString);
      // Formato: 01/01/2023
      return date.toLocaleDateString('pt-BR');
    }
  };
  
  // Carregar dados
  async function fetchExperience() {
    const data = await $fetch(`/api/experiencias/${experienceId}`);
    experience.value = data;
  }
  
  // Inicializar
  fetchExperience();
  
  // Retornar dados e formatadores
  return {
    experience,
    formatters
  };
}
```

## Convenções de Nomenclatura

| Contexto         | Convenção              | Exemplo                             |
|------------------|------------------------|-------------------------------------|
| Nomes de Classes | Inglês (CamelCase)     | `ExperienceModel`, `UserPresenter` |
| Variáveis        | Inglês (camelCase)     | `ticketsSold`, `modelName`         |
| Comentários      | Inglês ou Português    | `// Calculate total` ou `// Calcula o total` |
| Strings UI       | Português (pt-BR)      | `"Comprar Ingresso"`, `"Experiências"` |
| URLs             | Português (kebab-case) | `/experiencias/jantar-vip`         |
| Arquivos         | Inglês (kebab-case)    | `experience-card.vue`              |

## Termos Culturalmente Específicos

Para manter a consistência, os seguintes termos devem ser usados:

| Termo em Inglês   | Termo Correto em pt-BR |
|-------------------|------------------------|
| Raffle            | Sorteio                |
| Tickets           | Ingressos              |
| Model             | Modelo                 |
| Experience        | Experiência            |
| Winners           | Ganhadores             |
| Premium           | Premium (manter)       |
| VIP               | VIP (manter)           |
| Prize             | Prêmio                 |

## Formatação de Dados Localizados

### Valores Monetários
- Formato: R$ 1.000,00
- Separador decimal: vírgula (,)
- Separador de milhar: ponto (.)
- Símbolo: R$ com espaço

### Datas
- Formato extenso: 01 de janeiro de 2023
- Formato curto: 01/01/2023
- Dia antes do mês (diferente do formato en-US)

### Horários
- Formato 24h: 14:30
- Com segundos quando necessário: 14:30:45

### Números
- Separador decimal: vírgula (,)
- Exemplo: 1.000,50

## Implementação Técnica

### Arquivos de Tradução

Embora o foco seja pt-BR, mantemos um sistema de arquivos de tradução para possível expansão futura:

```javascript
// Em locales/pt-BR.js
export default {
  common: {
    buy: 'Comprar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    back: 'Voltar'
  },
  experiences: {
    title: 'Experiências Premium',
    tickets: 'Ingressos',
    remainingTime: 'Tempo Restante',
    soldOut: 'Esgotado'
  }
  // outros namespaces...
}
```

### Utilização no Código

```javascript
// Em composables/useLocale.js
export function useLocale() {
  const locale = ref('pt-BR');
  
  function t(key) {
    const keys = key.split('.');
    let value = translations[locale.value];
    
    for (const k of keys) {
      if (!value[k]) return key;
      value = value[k];
    }
    
    return value;
  }
  
  return {
    t,
    locale
  };
}
```

## Testes de Localização

Cada componente deve ser testado para garantir:

1. **Textos em pt-BR**: Todos os textos visíveis estão no idioma correto
2. **Formatação Correta**: Valores monetários, datas e números seguem o padrão brasileiro
3. **Termos Consistentes**: Terminologia padronizada em toda a aplicação

## Integração com Modelos de Experiência

Os modelos de experiência devem incorporar elementos de localização:

```javascript
interface ExperienceModel {
  // Outros campos...
  
  // Campos localizados
  localizedFields: {
    title: string;              // Título em pt-BR
    description: string;        // Descrição em pt-BR
    locationName: string;       // Nome do local em pt-BR
  };
  
  // Elementos culturais específicos
  culturalElements: {
    regionalCuisine?: string;   // Culinária regional brasileira
    localTraditions?: string[]; // Tradições locais relevantes
  };
}
```

## Plano de Evolução

1. **Fase 1**: Implementação completa em pt-BR (atual)
2. **Fase 2**: Estruturação para suporte multilíngue (futuro)
3. **Fase 3**: Expansão para espanhol (es-ES/es-LATAM) 
4. **Fase 4**: Suporte para inglês (en-US) na interface

## Ferramentas de Desenvolvimento

- **Editor VSCode**: Configurado com spell-checker em pt-BR
- **Linter**: Regras personalizadas para garantir strings localizadas
- **CI/CD**: Verificação automatizada de strings não localizadas 