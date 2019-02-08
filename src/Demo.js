import React, {
  Component
} from 'react'
import store, {
  ADD_NUM,
  REDUCE_NUM
} from './redux.js'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...store.getState()
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ ...state
      })
    })
  }

  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
    // this.setState({
    //   num: this.state.num + 2
    // })
    // setTimeout(() => {
    //   console.log('time', this.state.num)
    // }, 0)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   return nextState.num % 3 === 0
  // }
  handleAdd = () => {
    store.dispatch({
      type: ADD_NUM
    })
  }
  handleReduce = () => {
    store.dispatch({
      type: REDUCE_NUM
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        {/*<button onClick={this.handleClick}>添加</button>*/}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleReduce}>-</button>
      </div>
    )
  }
}

export default Demo