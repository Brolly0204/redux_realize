import React, {
  Component
} from 'react'
import Demo from './Demo2.js'
import {
  CompContext
} from './context.js'

class Root extends Component {
  render() {
    return (
      <Demo/>
    )
  }
}

// const custom = {
//   title: 'lili'
// }

// class Root extends Component {
//   render() {
//     return (
//       <CompContext.Provider value={custom}>
//         <Demo/>
//       </CompContext.Provider>
//     )
//   }
// }

export default Root