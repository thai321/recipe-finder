import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/app';
import FavoriteRecipeList from './components/favorite_recipe_list';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe( () => console.log('store', store.getState()) );
// alow us to see current state of all reducers and dispatch

ReactDOM.render(
  <Provider store={ store } >
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
