import React, {Component} from 'react';
import './App.css';
import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
     <LearningComponents></LearningComponents>
    </div>
  );
}

class LearningComponents extends Component {
  render () {
    return (
      <div>
        <Counter></Counter>
      </div>
      
    );
  }
}

export default App;
