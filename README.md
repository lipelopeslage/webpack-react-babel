# Webpack+React+Babel (es5)

##### Conversão de módulos CommonJS + syntax-sugar React (JSX), para um único bundle, via um webpack loader chamado 'babel-loader'.

Versões de módulos NPM utilizadas neste exemplo:

 * react/react-dom: ~0.14.7
 * webpack: ^1.12.14
 * babel-core: ^6.7.4
 * babel-loader: ^6.2.4
 * babel-preset-react: ^6.5.0


### Como usar:
Para instalar as dependências necessárias deste exemplo, clone este repositório e execute `npm i`.
Após as dependências instaladas, digite `webpack` para compilar os módulos ou `webpack --watch` para ir compilando novos bundles conforme suas modificações no projeto.
 
####  [Clique aqui](http://lipelopeslage.com.br/jobs/github/webpack-react-babel/) e veja o exemplo.

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
require('../components/IndexComponent.js');
```



Veja abaixo um exemplo de arquivo webpack.config.js, a utilização do objeto 'module .. loaders', que mostra a utilização do loader babel para a conversão de arquivos contendo JSX:
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
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:{
        presets: ['react']
      }
    }]
  }
};
```

### ** Os arquivos com sintaxe JSX devem estar salvos com extensão `.js`

O arquivo acima compacta o módulo main.js, e todos os módulos dentro dele em um arquivo bundle.js, na pasta /build.

### O arquivo **bundle.js** deve ser importado no arquivo html principal, pois este possui todos os arquivos compactados ###



### Referências:

* [commonjs](https://webpack.github.io/docs/commonjs.html) tutorial commonjs
* [npm](https://www.npmjs.com/) para dependências (package.json)
* [webpack-howto](https://github.com/petehunt/webpack-howto) ótimo tutorial de webpack para iniciantes
* [webpack-loaders](https://webpack.github.io/docs/list-of-loaders.html) lista de loaders, que juntos ao à configuração do webpack, auxiliam na obtenção de comportamentos extras
* [babel-loader](https://github.com/babel/babel-loader) essencial para a conversão da sintaxe JSX em createElement
* [reactjs-workflow](https://github.com/fdaciuk/reactjs-workflow) repositório de Fernando Daciuk, de grande ajuda para a elaboração deste exemplo
