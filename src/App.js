import React from 'react';
import './App.css';
import {Header} from './components/Header'
import CHeader from './components/CHeader'
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <Header name="Anuj" last="sharma">
      <p> Anuj is a Good Boy</p>
      </Header>
      <Header name="vivek" last="verma"/>
      <Header name="rahul"/>
      <CHeader name="Priya" last="Developer"/>
      </div>
    );
  }
}
export default App;