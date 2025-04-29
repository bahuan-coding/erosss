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
          console.log('🔧 Formatação da chave privada corrigida (substituindo \\n)');
        }
        
        // Garantir que a chave privada tenha o formato correto, mesmo se já tiver \n
        // Este é um problema comum com aspas no Windows, formatação do arquivo etc.
        credentials.private_key = credentials.private_key
          .replace(/(?:\\r\\n|\\n|\\r)/g, '\n')  // Substituir qualquer representação de newline
          .replace(/\s+(?=-----END)/g, '\n');    // Garantir quebra antes do END

        console.log('🔧 Chave privada processada para garantir formato correto');
        
        // Verificar integridade básica da chave
        const keyStart = credentials.private_key.trim().startsWith('-----BEGIN PRIVATE KEY-----');
        const keyEnd = credentials.private_key.trim().endsWith('-----END PRIVATE KEY-----');
        
        if (!keyStart || !keyEnd) {
          console.error('❌ Formato da chave privada parece inválido!');
          console.error('❌ Início correto:', keyStart, 'Final correto:', keyEnd);
          throw new Error('Credenciais inválidas - chave privada com formato inválido');
        }
        
        // Mostrar um fingerprint seguro da chave (apenas primeiros e últimos caracteres)
        const keyLength = credentials.private_key.length;
        const firstChars = credentials.private_key.slice(0, 30);
        const lastChars = credentials.private_key.slice(-30);
        console.log(`🔑 Fingerprint da chave (${keyLength} caracteres): ${firstChars}...${lastChars}`);
        
      } catch (fileError) {
        console.error('❌ Erro ao ler ou analisar o arquivo de credenciais:', fileError);
        throw new Error('Falha ao carregar credenciais do Google: ' + fileError.message);
      }

      // Configura a autenticação JWT (Service Account)
      console.log('🔑 Configurando autenticação JWT');
      console.log('🔑 Email da conta de serviço:', credentials.client_email);
      const auth = new google.auth.JWT(
        credentials.client_email,
        null,
        credentials.private_key,
        [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file'
        ]
      );
      
      // Cria a instância da API do Google Sheets
      const sheets = google.sheets({ version: 'v4', auth });
      console.log('✅ Google Sheets API inicializada');
      
      // Adiciona teste de conexão de forma assíncrona
      const testConnection = async () => {
        try {
          console.log('🔍 Testando acesso à planilha...');
          const spreadsheetId = process.env.MODELO_SPREADSHEET_ID || '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk';
          console.log('🔍 ID da planilha:', spreadsheetId);
          console.log('🔍 Projeto do Google Cloud:', credentials.project_id);
          console.log('🔍 Client ID:', credentials.client_id);
          
          const testResponse = await sheets.spreadsheets.get({
            spreadsheetId: spreadsheetId
          });
          
          console.log('✅ Teste de conexão bem-sucedido! Título da planilha:', testResponse.data.properties.title);
          
          // Verificar se a aba "Sheet1" existe
          console.log('🔍 Verificando se a aba "Sheet1" existe...');
          const sheetExists = testResponse.data.sheets.some(
            sheet => sheet.properties.title === 'Sheet1'
          );
          
          if (sheetExists) {
            console.log('✅ Aba "Sheet1" encontrada com sucesso!');
          } else {
            console.error('❌ Aba "Sheet1" NÃO encontrada! Abas disponíveis:');
            testResponse.data.sheets.forEach(sheet => {
              console.log(`- ${sheet.properties.title}`);
            });
            
            // Tentar criar a aba automaticamente
            console.log('🔧 Tentando criar a aba "Sheet1" automaticamente...');
            try {
              await sheets.spreadsheets.batchUpdate({
                spreadsheetId: spreadsheetId,
                resource: {
                  requests: [
                    {
                      addSheet: {
                        properties: {
                          title: 'Sheet1',
                          gridProperties: {
                            rowCount: 1000,
                            columnCount: 25
                          }
                        }
                      }
                    }
                  ]
                }
              });
              
              // Adicionar cabeçalhos
              const headers = [
                'Timestamp', 
                'Anti-Stress', 
                'Anti-Stress (Outro)', 
                'Descontração', 
                'Descontração (Outro)',
                'Dinâmica',
                'Dinâmica (Outro)',
                'Elemento Surpresa',
                'Elemento Surpresa (Descrição)',
                'Ponte',
                'Ponte (Descrição)',
                'Lembrança',
                'Lembrança (Descrição)',
                'Extras',
                'Nome',
                'Nome Artístico',
                'Email',
                'Telefone',
                'Instagram',
                'Cidade'
              ];
              
              await sheets.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: 'Sheet1!A1:T1',
                valueInputOption: 'USER_ENTERED',
                resource: {
                  values: [headers]
                }
              });
              
              console.log('✅ Aba "Sheet1" criada com sucesso!');
            } catch (createError) {
              console.error('❌ Erro ao criar aba:', createError.message);
            }
          }
          
          // Testar inserção de dados
          console.log('🔍 Testando inserção de dados...');
          try {
            const testData = ['Teste automático', new Date().toISOString(), 'Verificação de permissões'];
            await sheets.spreadsheets.values.append({
              spreadsheetId: spreadsheetId,
              range: 'Sheet1!A:C',
              valueInputOption: 'USER_ENTERED',
              insertDataOption: 'INSERT_ROWS',
              resource: {
                values: [testData]
              }
            });
            console.log('✅ Teste de inserção bem-sucedido!');
          } catch (insertError) {
            console.error('❌ Erro ao testar inserção:', insertError.message);
            if (insertError.errors) {
              console.error('Detalhes:', JSON.stringify(insertError.errors, null, 2));
            }
          }
        } catch (testError) {
          console.error('❌ Erro no teste de conexão:', testError.message);
          if (testError.status) console.error('❌ Status do erro:', testError.status);
          if (testError.errors) {
            console.error('❌ Detalhes do erro:', JSON.stringify(testError.errors, null, 2));
          }
          console.error('❌ Causa provável: a conta de serviço não tem acesso à planilha');
          console.error('⚠️ Verifique se a conta de serviço foi compartilhada com a planilha:');
          console.error(`⚠️ Email: ${credentials.client_email}`);
        }
      };
      
      // Executa o teste de conexão
      testConnection();
      
      return {
        sheets,
        SPREADSHEET_ID: process.env.MODELO_SPREADSHEET_ID || '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk',
        SHEET_NAME: 'Sheet1'
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
        SHEET_NAME: 'Sheet1'
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