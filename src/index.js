import React from 'react';
import ReactDOM from 'react-dom';
import AppTable from './components/AppTable/AppTable'
import LocalDataProvider from "./components/communication/LocalDataProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppTable dataProvider={new LocalDataProvider()}/>
  </React.StrictMode>,
  document.getElementById('root')
);

