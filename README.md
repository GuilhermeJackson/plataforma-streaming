# plataforma-streaming

Esse projeto tem como objetivo fornecer uma plataforma de aprendizado com vídeos do Youtube de maneira intuitiva e de fácil compartilhamento.

https://plataforma-streaming-gamma.vercel.app/

## Rodar o projeto localmente

Clonar o projeto

```bash
  git clone https://github.com/GuilhermeJackson/plataforma-streaming.git
```

Siga para o diretório plataforma-streaming

```bash
  cd plataforma-streaming
```

Instale as dependências

```bash
  npm install
```

Iniciar o projeto

```bash
  npm run start
```
### Criando banco no GraphQL
- 1- Criar uma conta no GraphCMS e clona esse projeto: https://app.graphcms.com/clone/f411e65e5587442cb48a90a21447a535?name=Ignite%20Lab%2002 OU https://rseat.in/lab-graphcms
- 2- No GraphCM: Em settings -> API Access: copy Content API
- 3- No projeto: Em libe -> apollo.ts: cola sua URL api
- 4- Crie dados em content nas entidades, primeiro na tabela 'Professor' e em seguida crie uma 'Aula'.
- 5- Ao criar o video, deve ser pego o o id encontrado no link do video desejado, ex:'youtube.com/SO4-izct7Mc', logo id do video recebe 'SO4-izct7Mc'
<pre>
   npm i
   npm run dev / yarn dev 
</pre>

## Layout/Prototipo
- Prototipo: https://www.figma.com/file/M1hb6wN2Dsgx5BMzRxivCh/Plataforma-de-evento---Ignite-Lab-(Community)?node-id=40%3A129
- Demonstração Web: https://www.figma.com/proto/M1hb6wN2Dsgx5BMzRxivCh/Plataforma-de-evento---Ignite-Lab-(Community)?page-id=0%3A1&node-id=8%3A399&viewport=-1061%2C780%2C0.46&scaling=min-zoom


## Lições aprendidas
Setup da aplicação com Vite, Tailwind, GraphQL, Apolo, codeGen, Vime

Criação de layout com Tailwind.

Criação e consumo de queries e mutation com GraphQL e Apollo.

Exibição dos vídeos do Youtube com Vime utilizando slug para alteração de vídeos.

Formatação de datas com datefns.

Roteamento de páginas com react-router-dom


<!--## Otimizações

Quais otimizações você fez no seu código? Por exemplo. refatorações, melhorias de desempenho, acessibilidade -->


## Tech Stack

- React
- React router dom
- Vite
- Typescript
- Tailwind
- GraphQL
- GraphQL code generator
- GraphCMS
- Apollo

## Suporte

Para obter suporte, envie um e-mail para guilherme.lamim96@gmail.com.

