// Usando imports compatíveis com Nuxt/Nitro para server-side
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { google } from 'googleapis'

// Função para inicializar a API do Google Sheets - tornando lazy-loaded para melhor compatibilidade
export function initializeGoogleSheets() {
  try {
    // Caminho para o arquivo de credenciais
    const CREDENTIALS_PATH = resolve(process.cwd(), 'server/config/google-credentials.json')

    // Carrega as credenciais do arquivo
    const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf8'))

    // Configura a autenticação JWT (Service Account)
    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    )

    // Cria a instância da API do Google Sheets
    const sheets = google.sheets({ version: 'v4', auth })
    
    return {
      sheets,
      SPREADSHEET_ID: process.env.MODELO_SPREADSHEET_ID || '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk',
      SHEET_NAME: 'Respostas'
    }
  } catch (error) {
    console.error('Erro ao inicializar Google Sheets:', error)
    throw error
  }
} 