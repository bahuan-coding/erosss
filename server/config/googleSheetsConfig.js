// Usando imports compatíveis com Nuxt/Nitro para server-side
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { google } from 'googleapis'

// Função para inicializar a API do Google Sheets - tornando lazy-loaded para melhor compatibilidade
export function initializeGoogleSheets() {
  // Esta função só será executada no server-side (API routes)
  if (import.meta.server) {
    try {
      // Caminho para o arquivo de credenciais
      const CREDENTIALS_PATH = resolve(process.cwd(), 'server/config/google-credentials.json')
      
      console.log('📁 Caminho das credenciais:', CREDENTIALS_PATH);

      // Carrega as credenciais do arquivo
      let credentials;
      try {
        const credentialsContent = readFileSync(CREDENTIALS_PATH, 'utf8')
        console.log('📄 Arquivo de credenciais encontrado');
        
        credentials = JSON.parse(credentialsContent)
        
        // Verifica se as credenciais contêm as propriedades necessárias
        if (!credentials.client_email || !credentials.private_key) {
          console.error('❌ Arquivo de credenciais não contém client_email ou private_key');
          throw new Error('Credenciais inválidas - campos essenciais ausentes');
        }
        
        // Corrigir um problema comum com a chave privada vinda de variáveis de ambiente
        // As quebras de linha podem ser codificadas como "\n" literal em vez de quebras reais
        if (credentials.private_key.includes('\\n') && !credentials.private_key.includes('\n')) {
          credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
          console.log('🔧 Formatação da chave privada corrigida');
        }
        
      } catch (fileError) {
        console.error('❌ Erro ao ler ou analisar o arquivo de credenciais:', fileError);
        throw new Error('Falha ao carregar credenciais do Google: ' + fileError.message);
      }

      // Configura a autenticação JWT (Service Account)
      console.log('🔑 Configurando autenticação JWT');
      const auth = new google.auth.JWT(
        credentials.client_email,
        null,
        credentials.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
      )

      // Cria a instância da API do Google Sheets
      const sheets = google.sheets({ version: 'v4', auth })
      console.log('✅ Google Sheets API inicializada');
      
      return {
        sheets,
        SPREADSHEET_ID: process.env.MODELO_SPREADSHEET_ID || '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk',
        SHEET_NAME: 'Respostas'
      }
    } catch (error) {
      console.error('❌ Erro ao inicializar Google Sheets:', error);
      
      // Retorna um objeto mock que irá falhar graciosamente ao ser usado
      return {
        sheets: { 
          spreadsheets: { 
            values: { 
              append: async () => {
                throw new Error('Falha na configuração do Google Sheets: ' + error.message);
              } 
            } 
          } 
        },
        SPREADSHEET_ID: '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk',
        SHEET_NAME: 'Respostas'
      }
    }
  } else {
    // Se não estiver no server-side, retorna um mock para evitar erros durante o build
    console.warn('GoogleSheetsConfig: Tentando acessar no ambiente client-side')
    return {
      sheets: { spreadsheets: { values: { append: async () => ({ data: { updates: { updatedRows: 0 } } }) } } },
      SPREADSHEET_ID: 'mock-id',
      SHEET_NAME: 'mock-sheet'
    }
  }
} 