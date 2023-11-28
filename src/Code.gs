function buildAddOn(e) {
  if (!e) { 
    console.log('no message to tasks');
    return null;
  }
  
  var accessToken = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);

  var messageId = e.messageMetadata.messageId;
  var message = GmailApp.getMessageById(messageId);
  var subject = message.getSubject();
  var sender = message.getFrom();
  var body = message.getPlainBody();

  // Formatando o prompt para a API da OpenAI
  var prompt = "Título: " + subject + "\nCorpo: " + body +
              "\n\nPor favor, analise o e-mail acima para:\n" +
              "1. Identificar e listar até duas tarefas principais mencionadas.\n" +
              "2. Avaliar se a mensagem tem intenção fraudulenta e responder com \"Não fraudulenta\" ou \"Fraudulenta\".";

  console.log(prompt); // Exibindo o prompt para verificação

  // Chamada à API da OpenAI
  var openAiResponse = callOpenAiApi(prompt);

  // Construindo o card para o add-on
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newCardHeader().setTitle("Análise do Email"));

  var section = CardService.newCardSection();

  // Adicionando o título ao card
  section.addWidget(CardService.newTextParagraph().setText("Resposta da IA:"));

  // Adicionando a resposta da OpenAI ao card
  section.addWidget(CardService.newKeyValue()
      .setTopLabel("Análise do Email")
      .setContent(openAiResponse));

  card.addSection(section);

  return card.build();
}

/**
* Call api openai, using the reference: 
* https://platform.openai.com/docs/api-reference/authentication
*
* @param {!String} prompt
* @return {!String}
*/
function callOpenAiApi(prompt) {
  var apiKey = 'token open ai'; // Substitua com sua chave de API
  var apiUrl = 'https://api.openai.com/v1/chat/completions'; // URL da API da OpenAI

  var payload = {
    "model": "gpt-3.5-turbo-16k",
    "messages": [{"role": "user", "content": prompt}],
    "temperature": 0.7,
    "max_tokens": 150
  };

  var options = {
    "method" : "post",
    "contentType": "application/json",
    "headers": {
      "Authorization": "Bearer " + apiKey
    },
    "payload" : JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(apiUrl, options);
  var jsonResponse = JSON.parse(response.getContentText());

  return jsonResponse.choices[0].message.content;
}