import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  
  render() {
        return (
      <>
        <h1>Состояние компонента</h1>

        <Counter initialValue={0} />
        <ColorPicker options={colorPickerOptions} />
        <Dropdown />
              
      </>
    );
  }
}

export default App;
