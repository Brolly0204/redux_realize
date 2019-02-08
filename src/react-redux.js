import React from 'react'

let NewContext = React.createContext({})
export class Provider extends React.Component {
  render() {
    return (
      <NewContext.Provider value={{...this.props.store}}>
        {this.props.children}
      </NewContext.Provider>
    )
  }
}

export const connect = (mapStateToProps, mapActionToProps) => (Child) => {
  return class NewComponent extends React.Component {
    static contextType = NewContext
    constructor(props) {
      super(props)
      this.state = {}
    }
    componentWillMount() {
      const {
        subscribe
      } = this.context

      this.handleSate()

      subscribe(this.handleSate)
    }
    handleSate = () => {
      const {
        getState
      } = this.context
      let states = mapStateToProps ? mapStateToProps(getState()) : {}
      this.setState({
        ...states
      })
    }
    render() {
      const {
        dispatch,
      } = this.context

      const actionProps = mapActionToProps || {}
      const actions = {}
      for (let key in actionProps) {
        if (actionProps.hasOwnProperty(key)) {
          actions[key] = () => dispatch(actionProps[key]())
        }
      }
      return <Child {...this.state} {...actions}/>
    }
  }
}