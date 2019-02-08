import React, {
  Component,
  createContext
} from 'react'

const ParentContext = createContext({
  title: 'wenli'
})

class ParentCom extends Component {
  render() {
    return <ChildCom/>
  }
}


class ChildCom extends Component {
  static contextType = ParentContext
  render() {
    console.log(this.context)
    return <h2>hello react</h2>
  }
}

export default ParentCom