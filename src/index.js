import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from'./reducer/reducer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './login';
import ViewEntry from './components/viewentries';
import AddEntry from './components/addentries';
import ViewAllentries from './components/viewallentries';
import UpdateEntries from './components/updatedelete';

const store=createStore(reducer)
store.subscribe(()=>{
  console.log(store.getState())
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<App />}>
      <Route path="/home/add" element={<AddEntry />}/>
      <Route path="/home/view" element={<ViewEntry />}/>
      <Route path="/home/viewall" element={<ViewAllentries />}/>
      <Route path="/home/update" element={<UpdateEntries />}/>
      </Route>
        </Routes>
        </BrowserRouter>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
