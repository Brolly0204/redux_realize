export function createStore(reducer) {
  let currentState
  let listeners = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)
    return () => {
      listeners.filter(l => l !== listener)
    }
  }

  function dispatch(action) {
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