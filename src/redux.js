import {
  createStore
} from './myRedux'

export const ADD_NUM = 'ADD_NUM'
export const REDUCE_NUM = 'REDUCE_NUM'

const initState = {
  num: 1
}

function reducer(state = initState, action) {
  console.log('state', state, action)
  switch (action.type) {
    case ADD_NUM:
      return { ...state,
        num: state.num + 1
      }
    case REDUCE_NUM:
      return { ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}

export default createStore(reducer)