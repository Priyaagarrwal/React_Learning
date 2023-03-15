import React from 'react';
import './App.css';
import Header from './components/Header'
import CHeader from './components/CHeader'
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <Header/>
      <CHeader/>
      </div>
    );
  }
}
export default App;