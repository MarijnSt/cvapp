import React, {useState} from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  const [display, setDisplay] = useState('Home')

  // Textcontent van p meegeven als display, div class active geven
  const changeDisplay = (event) => {
    let selected = '';
    let click = event.target;
    
    switch (click.tagName) {
      case 'path':
        selected = click.parentNode.classList.value
        break;
      case 'svg':
        selected = click.classList.value
        break;
      default:
        const splitted = click.classList.value.split(' ')
        selected = splitted.slice(-1)[0]
    }

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
