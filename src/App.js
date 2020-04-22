import React from 'react';
import Default from './components/templates/Default';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Default>
      <GlobalStyle />
      <Routes />
    </Default>
  );
}

export default App;
