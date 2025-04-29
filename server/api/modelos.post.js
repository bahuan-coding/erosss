import { initializeGoogleSheets } from '../config/googleSheetsConfig';

// Definir variável para modo de teste
const TEST_MODE = true; // Mude para false quando quiser usar o Google Sheets real

export default defineEventHandler(async (event) => {
  try {
    // Obter dados do corpo da requisição
    const formData = await readBody(event);
    
    // Formatar os dados para inserção na planilha
    const formattedData = formatFormData(formData);
    
    // Adicionar timestamp
    formattedData.unshift(new Date().toISOString());
    
    if (TEST_MODE) {
      // Em modo de teste, apenas loga os dados no console
      console.log('🧪 MODO DE TESTE: Dados que seriam enviados para o Google Sheets:');
      console.log('Timestamp:', formattedData[0]);
      console.log('Dados do formulário:', formData);
      console.log('Dados formatados:', formattedData);
      
      // Simula uma resposta bem-sucedida
      return {
        success: true,
        message: 'Dados salvos com sucesso (MODO DE TESTE)',
        rowsAdded: 1,
        testMode: true
      };
    }
    
    // Se não estiver em modo de teste, usa o Google Sheets
    // Inicializar Google Sheets API
    const { sheets, SPREADSHEET_ID, SHEET_NAME } = initializeGoogleSheets();
    
    // Inserir dados na planilha
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:Z`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [formattedData]
      }
    });
    
    return {
      success: true,
      message: 'Dados salvos com sucesso na planilha!',
      rowsAdded: response.data.updates.updatedRows
    };
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    
    // Retornar erro 500 com mensagem amigável
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao salvar os dados',
      data: {
        message: 'Houve um problema ao salvar suas respostas. Por favor, tente novamente.'
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