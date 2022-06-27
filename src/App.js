import logo from './logo.svg';
import ItemList from './components/item-list/item-list';
import InputText from './components/input-text/input-text';




import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/reducers'
import mySaga from './sagas/sagas'
import Home from './pages/home';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application





// function App() {
const App = () => {

  // onSomeButtonClicked() {
  //   const { userId, dispatch } = this.props
  //   dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  // }

  return (
    <div className="App">
      {/* <InputText />
      <ItemList /> */}
      <Home />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
