<a name="readme-top"></a>
<br />

<div align="center">
  <h2 align="center">WhatsApp Chatbot</h2>
  <p align="center">Um chatbot para atendimento personalizado através do aplicativo WhatsApp</p>
  <br />
  <a href="https://github.com/acn3to/chat-app"><strong>Explore os arquivos »</strong></a>
</div>

<div align="center">
Crie um Chatbot personalizado para seus atendimentos, integre à suas aplicações e receba as mensagens em tempo real no seu WhatsApp.
</div>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Construído com

<img align="center" alt="Node-Icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"> [Node.js](https://nodejs.org/en/download/)
<br><br>
<img align="center" alt="Express-Icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"> [Express.js](https://expressjs.com/pt-br/)
<br><br>
<img align="center" alt="Twilio-Icon" height="40" width="40" src="https://res.cloudinary.com/dcwq0wmwi/image/upload/v1670520986/pngwing.com_a7qyii.png"> [Twilio](https://www.twilio.com/)
<br><br>
<img align="center" alt="Dialogflow-Icon" height="40" width="40" src="https://res.cloudinary.com/dcwq0wmwi/image/upload/v1670520986/kisspng-dialogflow-chatbot-conversation-google-natural-lan-5b090339058126.6139877915273173050226_k3wjko.png"> [Dialogflow](https://dialogflow.cloud.google.com/)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Pré-requisitos

Para acessar o projeto em seu ambiente local, sugiro que tenha o [Git](https://git-scm.com/) instalado.

É indispensável que você possua:

- O [Node.js](https://nodejs.org/en/download/)
- Uma conta na [Twilio](https://www.twilio.com/) para a ultilização da API oficial do WhatsApp
- [Dialoglow](https://dialogflow.cloud.google.com/) para a construção de bots personalizados

## Instalação

_A Twilio fornece a documentação completa de como conectar-se ao agente do [Dialogflow](https://www.twilio.com/pt-br/docs/voice/twiml/stream/connect-to-dialogflow), assim como implementa-la em sua aplicação [Node.js com Express](https://www.twilio.com/pt-br/docs/verify/quickstarts/node-express)_

1. Clone o repositório

```
git clone https://github.com/acn3to/whatsapp-chatbot.git
```

2. Em seu repositório local instale as dependências

```sh
npm install
```

3. Crie um arquivo `.env` e preencha com as suas credencias da Twilio

```js
ACCOUNT_SID = 'SUA SID'
AUTH_TOKEN = 'SEU TOKEN'
FROM_NUMBER = 'NUMERO DE TESTES GERADO PELA TWILIO'
TO_NUMBER = 'SEU NUMERO'
```

## Uso

1. Em seu terminal acesse a pasta:

```
chatbot\
```

2. Execute o comando:

```
node .\api\server.js
```

4. Realize uma requisição POST com o seguinte corpo:

```json
{
  "msg": "Esta é uma mensagem de teste!"
}
```

para a rota:

```
http://localhost:3000/messages
```

## Exemplo

![product-screenshot](https://res.cloudinary.com/dcwq0wmwi/image/upload/v1670524356/Captura_de_tela_20221208_153019_jpxddb.png)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contribuindo

1. Faça um _fork_ do projeto (<https://github.com/acn3to/whatsapp-chatbot.git>)
2. Crie uma _branch_ para suas alterações (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -m 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie uma nova _Pull Request_

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contato

<div align="center">
  <a href="https://www.linkedin.com/in/arnaldo-n3to/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-Arnaldo%20Neto-05122A?style=flat&logo=linkedin" alt="linkedin"/>
  </a>
  <a href="https://www.instagram.com/acn3to/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-arnaldo.neto-05122A?style=flat&logo=instagram" alt="instagram"/>
  </a>
  <a href="https://discordapp.com/users/366398902846619649/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-Arnaldo.Neto-05122A?style=flat&logo=discord" alt="discord"/>
  </a>
  <a href="mailto:costanetoow@gmail.com" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-costanetoow@gmail.com-05122A?style=flat&logo=gmail" alt="gmail"/> 
  </a>
</div>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
