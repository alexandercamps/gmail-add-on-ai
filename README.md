# Guia de Configuração e Validação do Add-on do Gmail

Este guia aborda as etapas para configurar e validar um add-on do Gmail que utiliza a API da OpenAI.

## Passos para a Configuração

### 1. Configurar Conta na OpenAI

- Assista ao vídeo [Configuração de conta na OpenAI](https://youtu.be/Ik49LY5SHEc) para entender como criar uma conta na OpenAI e obter um token de API.

### 2. Criar um Add-on do Gmail usando Google Apps Script

- Siga os passos oficiais para [criar um add-on do Gmail](https://developers.google.com/gmail/add-ons/how-tos/creating-gmail-addons).

### 3. Configurar o Projeto no Google Apps Script

- Acesse [Google Apps Script](https://script.google.com/).
- Crie um novo projeto para o seu add-on do Gmail.

### 4. Substituir o Conteúdo do Arquivo `appsscript.json`

- Substitua o conteúdo do arquivo `appsscript.json` pelo [conteúdo do repositório](LINK_DO_REPO_APPSSCRIPT_JSON).

### 5. Substituir o Conteúdo do Arquivo `Code.gs`

- Substitua o conteúdo do arquivo `Code.gs` pelo [conteúdo do repositório](LINK_DO_REPO_CODE_GS).

### 6. Criar um Deployment

- Siga os passos para [criar um deployment](https://developers.google.com/apps-script/concepts/deployments) no Google Apps Script.

### 7. Testar o Deployment

- No Google Apps Script, vá para `Executar > Testar como add-on`.
- Configure e execute um teste para seu deployment.

### 8. Definir Usuários para Teste

- Defina quais usuários podem usar a versão de teste do add-on. Veja mais em [gerenciar deployments](https://developers.google.com/apps-script/concepts/deployments#managing_deployments).

### 9. Ativar e Verificar o Add-on

- Ative o add-on na área de configuração do Gmail.
- Verifique se o add-on está funcionando conforme esperado.

## Links Úteis

- [Documentação Oficial do Google Apps Script](https://developers.google.com/apps-script/overview)
- [Documentação da API da OpenAI](https://beta.openai.com/docs/)

---

Lembre-se de seguir as melhores práticas de segurança, como manter sua chave de API privada e seguir as diretrizes de uso da API.
