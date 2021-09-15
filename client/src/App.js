import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "../src/Reducer/index";
import Login from "./Components/LoginScreen/Login";
import Todolist from "./Components/TodoList/Todolist";

const store = createStore(combineReducers, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/todo">
              <Todolist />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
