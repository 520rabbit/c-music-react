import React, { memo } from 'react' 

import { renderRoutes } from 'react-router-config'
 
import routes from './router'

import { HashRouter } from 'react-router-dom'
import AppHeader from 'components/AppHeader/AppHeader'
import AppFooter from 'components/AppFooter/AppFooter'

export default memo(function App() {
  return (
    <HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>
  )
})
 
