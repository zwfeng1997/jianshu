import React, { Component } from 'react'
import {Globalstyle} from './style.js'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <Header />
          <Globalstyle />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
