import React, {
  Component
} from 'react'
import {
  CompContext
} from './context.js'


class Demo3 extends Component {
  static contextType = CompContext
  render() {
    console.log(this.context)
    return <h3>hello {this.context.title}</h3>
  }
}

export default Demo3