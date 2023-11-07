# LinkApp 👨‍💻
 O LinkApp é um assistente de desenvolvimento de páginas web estáticas em Node.js, projetado para simplificar a criação de páginas web. Esqueça a complexidade do código HTML e concentre-se no que realmente importa. Com o LinkApp, você pode escrever o conteúdo importante diretamente em sua **página principal**, economizando tempo e esforço no desenvolvimento de páginas estáticas.

## Índice 📜
 - Índice
 - [Caderninho de nomenclatura](#caderninho-de-nomenclatura)
 - [Como utilizar](#como-utilizar)
    - [Atributo link](#atributo-link)

## Caderninho de nomenclatura 📖
 ### Atributo link
 Faz a [*conexão linkage*](#conexão-linkage) do conteúdo de um [*elemento principal*](#elemento-principal) com o de um [*elemento conteúdo*](#elemento-conteúdo).
 ### Atributo link-remove
 Remove o conteúdo da página gerada caso tenha valor "true" na **página conteúdo** ou valor "true" na *página principal* e nenhum valor na página conteúdo.
 ### Conexão linkage
 É quando o [*elemento principal*](#elemento-principal) indica através de um atributo [**link**](#atributo-link) mostra qual será o [*elemento*](#elemento-conteúdo) que o conteúdo será unido a este elemento principal.
 ### Elemento conteúdo
 O elemento que carrega o conteúdo de cada página individualmente e será somado ao conteúdo de seu respectivo [*elemento principal*](#elemento-principal). 
 ### Elemento principal
 São elementos na página principal e que servem de base para a criação dos elementos de [*páginas de conteúdo*](#página-conteúdo).
 ### Linkage 
 Processo de somar o conteúdo do [*elemento principal*](#elemento-principal) com o do [*elemento conteúdo*](#elemento-conteúdo) e assim gerar um "novo" elemento.
 ### Página conteúdo 
 Páginas que terão os conteúdos e [*elementos*](#elemento-conteúdo) individuais, sendo nelas onde o verdadeiro desenvolvimento ocorre.
 ### Página principal 
 É a página que serve como base para criação dos elementos, nela terão os [*elementos principais*](#elemento-principal).

## Como utilizar
 - Instale as dependências:
 ```npm install```
 - Rode o comando para assistir seu desenvolvimento
 ```npm run watch``` 
 - Desenvolva 🤓

 | Atributo | Onde é utilizado | Exemplos |
 | -------- | ---------------- | -------- |
 | link | página principal | Sem exemplos até o momento |
 | link-remove | página principal e/ou página conteúdo | Sem exemplos até o momento | 
