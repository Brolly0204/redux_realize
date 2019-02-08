import React, {
  Component
} from 'react'
import {
  handleAdd,
  handleReduce
} from './redux2.js'
import {
  connect
} from 'react-redux'
import {
  CompContext
} from './context.js'

class Demo extends Component {
  static contextType = CompContext
  render() {
    return (
      <div>
        <h2>{this.props.num}</h2>
        {/*<button onClick={this.handleClick}>添加</button>*/}
        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleReduce}>-</button>
      </div>
    )
  }
}

export default connect(
  state => ({ ...state
  }), {
    handleAdd,
    handleReduce
  }
)(Demo)