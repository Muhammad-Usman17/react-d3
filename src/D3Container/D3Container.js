// libs
import React, { createElement, createRef } from 'react'
import * as d3 from 'd3'

class D3Container extends React.Component {
  constructor(props) {
    super(props)
    this.containerEl = createRef()
  }

  componentDidMount() {
    const { d3Callback } = this.props
    const selection = d3.select(this.containerEl.current)
    d3Callback(selection, this.props)
  }

  componentDidUpdate() {
    const { d3Callback } = this.props
    d3.select(this.containerEl.current)
      .selectAll('*')
      .remove()
    const selection = d3.select(this.containerEl.current)
    d3Callback(selection, this.props)
  }

  render() {
    const { element = 'div' } = this.props
    const options = { ref: this.containerEl }
    return createElement(element, options, '')
  }
}
export default D3Container
