import { initializeGoogleSheets } from '../config/googleSheetsConfig';
import { appendFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Definir variável para modo de teste - registra mais detalhes, mas ainda tenta salvar na planilha
const DEBUG_MODE = true;

// ID da planilha e nome da aba
const SPREADSHEET_ID = '1czk_7v1yw-z4DDn79XoXAEJ4wkTT6hNxhfZOh053gZk';
const SHEET_NAME = 'Sheet1';

// Função para salvar dados localmente como backup
function saveLocalBackup(data) {
  try {
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const backupDir = resolve(process.cwd(), 'server/data');
    const backupFile = resolve(backupDir, `form-data-${timestamp}.json`);
    
    // Garante que o diretório existe
    if (!existsSync(backupDir)) {
      mkdirSync(backupDir, { recursive: true });
    }
    
    // Escreve os dados no arquivo
    appendFileSync(backupFile, JSON.stringify(data, null, 2));
    console.log(`✅ Backup salvo em: ${backupFile}`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao salvar backup local:', error);
    return false;
  }
}

export default defineEventHandler(async (event) => {
  try {
    // Obter dados do corpo da requisição
    const formData = await readBody(event);
    
    // Formatar os dados para inserção na planilha
    const formattedData = formatFormData(formData);
    
    // Adicionar timestamp
    formattedData.unshift(new Date().toISOString());
    
    if (DEBUG_MODE) {
      console.log('🔍 MODO DEBUG: Tentando salvar na planilha com os seguintes dados:');
      console.log('Timestamp:', formattedData[0]);
      console.log('Dados do formulário:', formData);
      console.log('Dados formatados:', formattedData);
    }
    
    try {
      // Inicializar Google Sheets API
      const { sheets } = initializeGoogleSheets();
      
      // Inserir dados na planilha
      console.log('🔍 Tentando inserir dados na planilha:', SPREADSHEET_ID, 'aba:', SHEET_NAME);
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:Z`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [formattedData]
        }
      });
      
      console.log('✅ Dados salvos com sucesso na planilha!');
      if (response && response.data) {
        console.log('✅ Detalhes da resposta:', JSON.stringify(response.data, null, 2));
        console.log('✅ Linhas atualizadas:', response.data.updates?.updatedRows || 0);
        console.log('✅ Células atualizadas:', response.data.updates?.updatedCells || 0);
      }
      
      return {
        success: true,
        message: 'Dados salvos com sucesso na planilha!',
        rowsAdded: response.data.updates.updatedRows
      };
    } catch (googleError) {
      console.error('❌ Erro ao salvar no Google Sheets:', googleError.message);
      console.error('❌ Status:', googleError.status);
      console.error('❌ Detalhes completos:', JSON.stringify(googleError, null, 2));
      
      // Em caso de erro com Google Sheets, vamos salvar em um arquivo local
      const backupData = {
        timestamp: formattedData[0],
        rawData: formData,
        formattedData: formattedData,
        error: {
          message: googleError.message,
          code: googleError.code,
          status: googleError.status
        }
      };
      
      const backupSuccess = saveLocalBackup(backupData);
      
      // Return success anyway to not block the user experience
      return {
        success: true,
        message: backupSuccess 
          ? 'Dados registrados localmente para processamento posterior (Google Sheets indisponível)' 
          : 'Dados recebidos, mas houve um problema ao salvá-los',
        fallback: true,
        localBackup: backupSuccess,
        error: googleError.message,
        errorDetails: {
          message: googleError.message,
          code: googleError.code,
          status: googleError.status
        }
      };
    }
  } catch (error) {
    console.error('Erro ao processar dados:', error);
    
    // Retornar erro 500 com mensagem amigável
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao processar os dados',
      data: {
        message: 'Houve um problema ao processar suas respostas. Por favor, tente novamente.'
      }
    });
  }
});

// Função para formatar os dados do formulário
function formatFormData(formData) {
  // Array de valores para salvar na planilha, na mesma ordem das colunas
  return [
    // Seção 1
    Array.isArray(formData.antiStress) ? formData.antiStress.join(', ') : '',
    formData.antiStressOutro || '',
    formData.descontracao || '',
    formData.descontracaoOutro || '',
    
    // Seção 2
    formData.dinamica || '',
    formData.dinamicaOutro || '',
    formData.surpresa || '',
    formData.surpresaDescricao || '',
    
    // Seção 3
    formData.ponte || '',
    formData.ponteDescricao || '',
    
    // Seção 4
    formData.lembranca || '',
    formData.lembrancaDescricao || '',
    Array.isArray(formData.extras) ? formData.extras.join(', ') : '',
    
    // Contato
    formData.nome || '',
    formData.nomeArtistico || '',
    formData.email || '',
    formData.telefone || '',
    formData.instagram || '',
    formData.cidade || ''
  ];
} 