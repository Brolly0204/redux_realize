import React from 'react'

const NewContext = React.createContext({})
export class Provider extends React.Component {
  render() {
    return (
      <NewContext.Provider value={{...this.props.store}}>
        {this.props.children}
      </NewContext.Provider>
    )
  }
}

export const bindActionCreators = (mapDispatchToProps = {}, dispatch) => {
  const actions = {}
  Object.keys(mapDispatchToProps).forEach(k => {
    actions[k] = () => dispatch(mapDispatchToProps[k]())
  })
  return actions
}

export const connect = (mapStateToProps, mapDispatchToProps = {}) => (Child) => {
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

      this._updateState()
      subscribe(this._updateState)
    }

    _updateState = () => {
      const {
        getState,
        dispatch
      } = this.context

      const states = mapStateToProps ? mapStateToProps(getState(), this.props) : {}
      const actions = bindActionCreators(mapDispatchToProps, dispatch)

      this.setState({
        ...states,
        ...actions
      })
    }

    render() {
      return <Child {...this.state}/>
    }
  }
}