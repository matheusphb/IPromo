# IPromo - Aplicativo de Promoções

<!-- Adicione uma breve descrição do seu projeto aqui -->
Este projeto é um aplicativo web focado em promoções, com ideias e/ou conteúdo inicial inspirado ou gerado com o auxílio de IA generativa (Gemini).

## Tecnologias Utilizadas

*   React
*   Vite
*   Tailwind CSS
*   TypeScript (Opcional, mas comum com Vite)

## Rodando Localmente

1.  **Clone o repositório (se ainda não o fez):**
    ```bash
    git clone https://github.com/matheusphb/IPromo.git
    cd IPromo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, se especificada pelo Vite).

## Build para Produção

Para criar uma versão otimizada do seu aplicativo para produção:

```bash
npm run build
```
Isso gerará os arquivos estáticos na pasta `dist/`.

## Deploy no GitHub Pages

Este projeto está configurado para fazer deploy no GitHub Pages usando a branch `gh-pages`.

1.  **Certifique-se de que seu `vite.config.js` (ou `vite.config.ts`) tem a propriedade `base` configurada corretamente:**
    ```javascript
    // vite.config.js ou vite.config.ts
    export default {
      // ... outras configurações
      base: '/IPromo/', // Nome do seu repositório
    };
    ```

2.  **Execute o script de deploy:**
    ```bash
    npm run deploy
    ```
    Este comando irá primeiro fazer o build do projeto (`vite build`) e depois usará `gh-pages` para enviar o conteúdo da pasta `dist` para a branch `gh-pages` do seu repositório no GitHub.

3.  **Configure o GitHub Pages no seu repositório:**
    *   Vá para `Settings` > `Pages`.
    *   Em "Build and deployment", selecione `Deploy from a branch`.
    *   Selecione a branch `gh-pages` e a pasta `/(root)`.
    *   Salve as configurações.

O site estará disponível em: `https://matheusphb.github.io/IPromo/`

## Estrutura do Projeto (Sugestão)

*   `/public/`: Assets estáticos (favicons, etc.)
*   `/src/`: Código fonte
    *   `/src/components/`: Componentes React reutilizáveis
    *   `/src/pages/`: Componentes de página (se usando `react-router-dom`)
    *   `/src/assets/`: Imagens, fontes, etc.
    *   `/src/App.tsx`: Componente principal da aplicação
    *   `/src/index.css`: Estilos globais e diretivas Tailwind
    *   `/src/index.tsx`: Ponto de entrada do React
*   `index.html`: Template HTML principal (na raiz)
*   `vite.config.ts`: Configurações do Vite
*   `tailwind.config.js`: Configurações do Tailwind CSS
*   `postcss.config.js`: Configurações do PostCSS

## Contribuindo

<!-- Se você aceita contribuições, adicione diretrizes aqui -->
Contribuições são bem-vindas! Por favor, abra uma issue para discutir o que você gostaria de mudar ou adicione um Pull Request.

## Licença

<!-- Especifique a licença do seu projeto, por exemplo: MIT -->
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações (se aplicável).
