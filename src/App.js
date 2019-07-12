import React, {useState} from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  const [display, setDisplay] = useState('Home')

  const changeDisplay = (event) => {
    const selected = event.target.nextSibling.textContent
    setDisplay(selected)
  }

  return (
    <div className="App">
      <Menu handleClick={changeDisplay}/>
      <Content display={display}/>
    </div>
  );
}

export default App;
