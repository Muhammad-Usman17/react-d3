# d3-react-container

[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/react-tooltip.svg?style=flat-square
[download-url]: https://npmjs.org/package/d3-react-container

## Maintainer

[Muhammad Usman](https://github.com/Muhammad-Usman17)

## Installation

```sh
npm install d3-react-container
```

## Usage

**Using NPM**

1 . Require d3-react-container after installation

```js
import D3Container from 'd3-react-container'
```

2 . Add parent element = "html element" to D3Container component

```jsx
<D3Container element="div" />
```

3 . Include d3 implementation in D3Callback props

```js
<D3Container element="div"
        element="div"
        d3Callback={selection => {
          //d3 code
        }/>
```

## Options

| props      | Type     | Description       | Default Value    |
| :--------- | :------- | :---------------- | :--------------- |
| element    | String   | HTML element      | 'div'            |
| D3Callback | Function | D3 Implementation | (selection)=> {} |

> Show specific tooltip manually, for example:

```js
import D3Container from 'd3-react-container'

  <D3Container
        element="div"
        d3Callback={selection => {
          const div = selection.attr('class', 'App')
          .style('width', '500px')
          .style('height', '500px')
          const header = div.append('header').attr('class', 'App-header')}/>
```

## Contributing

We welcome your contribution! Fork the repo, make some changes, submit a pull-request! Our [contributing](contributing.md) doc has some details.

## License

MIT
