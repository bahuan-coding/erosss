// Usando imports compatíveis com Nuxt/Nitro para server-side
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { google } from 'googleapis'

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

// ID da planilha - aqui você pode colocar o ID da sua planilha
// Ou pegar de uma variável de ambiente (para testes, deixo um valor padrão)
const SPREADSHEET_ID = process.env.MODELO_SPREADSHEET_ID || '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk'
const SHEET_NAME = 'Respostas'

export { sheets, SPREADSHEET_ID, SHEET_NAME } 