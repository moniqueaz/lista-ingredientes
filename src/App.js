import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Default from './components/templates/Default';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Default>
        <GlobalStyle />
        <Routes />
      </Default>
    </Provider>
  );
}

export default App;
