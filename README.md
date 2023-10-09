# Alura Studies

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Para inicializar

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.


### `npm install --save-dev sass`
Para instalar o packge do SASS. Este pacote é uma distribuição do Dart Sass, compilado para JavaScript puro sem código nativo ou dependências externas. Ele fornece um executável de linha de comando e uma API .js Node.sass

### `npm install -D typescript-plugin-css-modules`
Então, para conseguirmos criar uma classe única mesmo que o nome seja genérico para não termos o problema de sobreposição. Temos um pacote que o resolve, chamado CSS Modules.


Ainda na parte de "Installation" mais adiante, pede-se que coloquemos este plugin no arquivo tsconfig.json, pois é onde está a configuração de TypeScript.

Então copiaremos apenas a linha com o nome de "plugins": fornecido no site, sem copiar também o "compilerOptions":, pois já temos o em nosso arquivo.

~~~
{
    "compilerOptions": {
        "plugins": [{ "name": "typescript-plugin-css-modules" }]
    }
}
~~~