# LinkApp 👨‍💻

 O LinkApp é um assistente de desenvolvimento de páginas web estáticas em Node.js, projetado para simplificar a criação de páginas web. Esqueça a complexidade do código HTML e concentre-se no que realmente importa. Com o LinkApp, você pode escrever o conteúdo importante diretamente em sua **página principal**, economizando tempo e esforço no desenvolvimento de páginas estáticas.

## Índice 📝

- Índice
- [Como utilizar](#como-utilizar)
- [Atributos](#atributos)
- [Elementos](#elementos)
- [MIT License](#mit-license)

## Como utilizar

 Instale as dependências:
 ``` npm install ```
 Rode o comando:
 ``` npm run watch ```

## Atributos

 | Atributo | Descrição |
 | -------- | --------- |
 | link | Conecta o conteúdo das páginas conteúdo com o da página principal (elemento link) |
 | remove | Caso "true" no elemento da página principal e sem valor na página conteúdo ou caso tenha valor "true" em um elemento link na página de conteúdo então o elemento é excluído |
 | processed | Atributo inserido em elementos link para demonstrar que estes foram processados |

## Elementos

 | Elemento | Parâmetros | Descrição |
 | -------- | ---------- | --------- |
 | tab-list | *href* | Elemento lista de navegação de abas numa mesma página |
 | tab | *tab* | Aba de navegação numa mesma página, é gerado uma âncora "a" dentro deste elemento, parâmetro tab é o nome da aba a ser navegada |

## MIT License

Copyright (c) 2023 [ShiMigui](https://github.com/ShiMigui) - Miguel Nascimento

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
