import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { persistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
