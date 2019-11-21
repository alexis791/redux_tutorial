import React from 'react';
import Notes from './Notes';
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
        <Notes />
    </Provider>
  );
}

export default App;