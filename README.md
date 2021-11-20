Projeto que busca informações sobre leitos hospitalares de COVID-19 na cidade de Ribeirão Preto - SP, acesse [aqui](https://covid-leitos-ribeirao-preto.vercel.app/).

## Primeiros Passos

Inicie o servidor de desenvolvimento.

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## API Utilizada

Os dados foram obtidos ao consumir uma API disponibilizada pelo [openDataSUS](https://opendatasus.saude.gov.br/).

- API - [Registro de Ocupação Hospitalar COVID-19](https://opendatasus.saude.gov.br/dataset/registro-de-ocupacao-hospitalar).
- Além do [manual](https://opendatasus.saude.gov.br/dataset/registro-de-ocupacao-hospitalar/resource/d9e43883-aaf8-43b2-aed6-772a03e2a578) da API, foi utilizado um [artigo](https://transparenciacovid19.ok.org.br/files/ESPECIAL_Transparencia-Covid19_OcupacaoLeitos_01.pdf) como suporte para compreensão dos dados.

##

Desenvolvido por Carlos Eduardo Lopes, Henrique Biazibetti e Leonardo Moitinho, com [Next.js](https://nextjs.org/).