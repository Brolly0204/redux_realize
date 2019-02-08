export function createStore(reducer) {
  let currentState
  let listeners = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    console.log(action, currentState)
    currentState = reducer(currentState, action)
    listeners.forEach(fn => fn())
    return action
  }

  dispatch({
    type: '@@redux/init',
  })
  return {
    getState,
    subscribe,
    dispatch
  }
}