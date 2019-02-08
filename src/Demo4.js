import React from 'react'
import {
  connect
} from './react-redux'
import {
  handleAdd,
  handleReduce
} from './redux2.js'


class Demo4 extends React.Component {
  render() {
    const {
      num,
      handleAdd,
      handleReduce
    } = this.props
    return (
      <div>
        <h2>{num}</h2>
        <button onClick={handleAdd}>+</button> <button onClick={handleReduce}>-</button>
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
)(Demo4)