import React from 'react'

import Predictant from './predictants'
import Header from './Header'

const App = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <main className="mdl-layout__content">
      <div className="page-content">
        <Predictant />
      </div>
    </main>
  </div>
)

export default App
