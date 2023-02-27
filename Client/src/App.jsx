import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as ReactRouter } from 'react-router-dom'

import GlobalStyle from './theme/GlobalStyle'
import Router from './Router'
import store from './store'
import theme from './theme/config'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ReactRouter>
          <Router />
        </ReactRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
