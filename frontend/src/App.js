import React, {useState, useEffect} from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  const [display, setDisplay] = useState('Home'); 

  // Menu item met active id zoeken en class verwijderen
  const removePreviousActive = () => {
    if (document.querySelector('.menu-item#active-menu')) {
      const test = document.querySelector('.menu-item#active-menu');
      test.removeAttribute('id');
    } else {
      return
    }
  }

  // Content veranderen en active id meegeven in menu
  const changeDisplay = (event) => {
    let content = '';
    let click = event.target;

    //vorige active id wegnemen
    removePreviousActive()
    
    //nieuwe active id toekennen en content aanpassen
    switch (click.tagName) {
      case 'path':
        content = click.parentNode.classList.value
        click.parentNode.parentNode.id = "active-menu"
        break;
      case 'svg':
        content = click.classList.value
        click.parentNode.id = "active-menu"
        break;
      case 'P':
        content = click.classList.value.split(' ').slice(-1)[0]
        click.parentNode.id = "active-menu"
        break;
      case 'DIV':
        content = click.classList.value.split(' ').slice(-1)[0]
        click.id = "active-menu"
    }

    setDisplay(content)
  }

  const giveActive = () => {
    const test = document.querySelector('.menu-item')
    test.id = "active-menu"
  }

  useEffect(() => {
    setTimeout(giveActive, 100)
  },[])

  return (
    <div className="App">
      <Content display={display}/>
      <Menu handleClick={changeDisplay} onLoad={giveActive}/>
    </div>
  );
}

export default App;
