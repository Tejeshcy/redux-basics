import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./Components/User";
import { reducers } from "./reducer";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
