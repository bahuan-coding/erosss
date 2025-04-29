# Configuração da Integração com Google Sheets

Este documento explica como configurar a integração do formulário de modelos com o Google Sheets.

## 1. Criar uma Planilha no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com) e crie uma nova planilha
2. Renomeie a primeira aba para "Respostas"
3. Adicione os seguintes cabeçalhos na primeira linha:
   ```
   Timestamp | Anti-Stress | Anti-Stress (Outro) | Descontração | Descontração (Outro) | Dinâmica | Dinâmica (Outro) | Elemento Surpresa | Elemento Surpresa (Descrição) | Ponte | Ponte (Descrição) | Lembrança | Lembrança (Descrição) | Extras | Nome | Nome Artístico | Email | Telefone | Instagram | Cidade
   ```
4. Anote o ID da planilha, que é a parte da URL entre `/d/` e `/edit`: `https://docs.google.com/spreadsheets/d/`**SPREADSHEET_ID**`/edit`

## 2. Criar uma Conta de Serviço no Google Cloud

1. Acesse o [Console do Google Cloud](https://console.cloud.google.com/)
2. Crie um novo projeto ou use um existente
3. Ative a API do Google Sheets para o projeto:
   - No menu lateral, clique em "APIs e Serviços" > "Biblioteca"
   - Pesquise por "Google Sheets API" e clique nela
   - Clique em "Ativar"
4. Crie uma conta de serviço:
   - No menu lateral, clique em "APIs e Serviços" > "Credenciais"
   - Clique em "Criar credenciais" > "Conta de serviço"
   - Dê um nome à conta de serviço e clique em "Concluir"
5. Gere uma chave para a conta de serviço:
   - Na página de "Credenciais", clique na conta de serviço que você acabou de criar
   - Vá para a aba "Chaves"
   - Clique em "Adicionar chave" > "Criar nova chave"
   - Selecione "JSON" e clique em "Criar"
   - Um arquivo JSON será baixado. Guarde-o com segurança!

## 3. Compartilhar a Planilha com a Conta de Serviço

1. Abra a planilha que você criou no Google Sheets
2. Clique no botão "Compartilhar" no canto superior direito
3. No campo "Adicionar pessoas e grupos", cole o email da conta de serviço (encontrado no arquivo JSON, campo `client_email`)
4. Conceda permissão de "Editor"
5. Desmarque a opção "Notificar pessoas"
6. Clique em "Compartilhar"

## 4. Configurar as Variáveis de Ambiente

1. Crie um arquivo `.env` na raiz do seu projeto com o seguinte conteúdo:
   ```
   # Google Sheets API
   GOOGLE_SERVICE_ACCOUNT_EMAIL=email-da-conta-de-servico@project-id.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSuaChavePrivadaAqui\n-----END PRIVATE KEY-----\n"
   MODELO_SPREADSHEET_ID=seu-spreadsheet-id
   ```

2. Substitua os valores:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Email da conta de serviço (campo `client_email` do arquivo JSON)
   - `GOOGLE_PRIVATE_KEY`: Chave privada da conta de serviço (campo `private_key` do arquivo JSON). Certifique-se de manter as aspas duplas.
   - `MODELO_SPREADSHEET_ID`: ID da planilha que você anotou no passo 1.4

3. Certifique-se de que o arquivo `.env` está no `.gitignore` para não expor suas credenciais.

## 5. Teste a Integração

1. Inicie o servidor de desenvolvimento: `npm run dev`
2. Acesse a página de cadastro de modelos
3. Preencha o formulário e envie
4. Verifique se os dados aparecem na sua planilha do Google Sheets

## Solução de Problemas

Se encontrar erros, verifique:

1. Se a planilha está compartilhada corretamente com a conta de serviço
2. Se as variáveis de ambiente estão configuradas corretamente
3. Se a API do Google Sheets está ativada no projeto do Google Cloud
4. Os logs do console para mensagens de erro específicas 