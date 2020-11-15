import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store' 

import AppHeader from 'components/app-header/AppHeader'
import AppFooter from 'components/app-footer/AppFooter'

export default memo(function App() {
  return ( 
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>

  )
})

