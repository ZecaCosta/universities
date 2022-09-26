# API Bis2Bis

Aplicação desenvolvida para o desafio de técnico do processo seletivo Bis2Bis, o objetivo é buscar dados em uma API externa e salvar num banco de dados.

Esse projeto foi desenvolvido da forma mais minimalista possível, para isto a opção foi usar o framework Express e diretamente o mongoDB sem qualquer ODM. Foi também opção usar a língua portuguesa tanto nas mensagens quanto nos commits.

### Clonar repositório

- `git clone https://github.com/ZecaCosta/universities.git

### Instalação
```bash
npm install
```
### Variáveis de ambiente a definir
PORT
MONGO_DB
MONGO_SERVER
MONGO_USER
MONGO_PASSWORD

### rodar script para buscar e salvar dados das universidades
```bash
npm run start:script
```

### Rodando em desenvolvimento

```bash
npm run start:dev
```

## Rodando em produção
```bash
npm start
```

## Método‌ ‌para‌ ‌listagem‌ ‌de‌ ‌Universidades
Permite ‌filtro‌ ‌por‌ ‌país, o nome da variável de filtro é country:
Por exemplo: GET‌ ‌/universities?country=brazil‌

Permite ‌informar‌ ‌a‌ ‌página‌, o nome da variável é page:
Por exemplo: GET‌ ‌/universities?page=2

## Tecnologias utilizadas

- NodeJS [Documentação](https://nodejs.org/pt-br/)
- Mongodb: [Documentação](https://www.mongodb.com/)
- Express: [Documentação](https://expressjs.com/pt-br/)
- Axios: [Documentação](https://axios-http.com/ptbr/)
