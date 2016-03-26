# Webpack+React

##### Conversão de módulos em CommonJS e syntax-sugar React (JSX), para um único bundle, via um webpack loader chamado 'jsx-loader'.

Versões de módulos NPM utilizadas neste exemplo:

 * React-addons/React-DOM: ~0.14.7
 * Webpack
 * jsx-loader

###  Atenção: Este repositório usa um loader descontinuado, chamado [jsx-loader](https://github.com/petehunt/jsx-loader). Porém, foi o único jeito encontrado (até o momento) de se fazer funcionar sem a utilização do ecmascript 6.  

###  [Clique aqui](http://lipelopeslage.com.br/jobs/github/webpack-react/) e veja o exemplo.


Os componentes ReactJS são escritos de acordo com o formato JSX.
Veja um exemplo de componente abaixo:

```javascript
var Component = React.createClass({
		render: function(){
			return (
				<div>
					Este é um componente React =)
				</div>
			);
		}
	});
	ReactDOM.render(
		<Component/>, document.querySelector('main')
	);
```

Mudando os módulos de Require para CommonJS, é necessário, contudo, especificar o caminho relativo dos
módulos a serem carregados.

```javascript
// Conteúdo do módulo index.js (em Common.js)
require('../components/IndexComponent.jsx');
```



Veja abaixo um exemplo de arquivo webpack.config.js, a utilização do objeto 'module .. loaders', que mostra a utilização do loader jsx-loader para a conversão de arquivos JSX:
```javascript
module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
};
```

O arquivo acima compacta o módulo main.js, e todos os módulos dentro dele (inclusive os arquivos .jsx) em um arquivo bundle.js, na pasta /build.

### O arquivo **bundle.js** deve ser importado no arquivo html principal, pois este possui todos os arquivos compactados ###



### Referências:

* [commonjs](https://webpack.github.io/docs/commonjs.html) tutorial commonjs
* [npm](https://www.npmjs.com/) para dependências (package.json)
* [webpack-howto](https://github.com/petehunt/webpack-howto) ótimo tutorial de webpack para iniciantes
* [webpack-loaders](https://webpack.github.io/docs/list-of-loaders.html) lista de loaders, que juntos ao à configuração do webpack, auxiliam na obtenção de comportamentos extras
* [jsx-loader](https://github.com/petehunt/jsx-loader) ajuda a converter rquivos jsx em js para o bundle final
* [react](https://facebook.github.io/react/) para criação de componentes em JSX
