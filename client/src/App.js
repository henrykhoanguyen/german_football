import React from "react";
import "./App.css";
import { Provider } from "redux-thunk";
import { Container } from "reactstrap";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Container>
          Hello
        </Container>
      </div>
    </Provider>
  );
}

export default App;
