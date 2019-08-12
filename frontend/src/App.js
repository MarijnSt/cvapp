import React, {useState, useEffect} from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  const [display, setDisplay] = useState('Home'); 

  // Menu item met active id zoeken en class verwijderen
  const removePreviousActive = () => {
    if (document.querySelector('.menu-item#active-menu')) {
      const active = document.querySelector('.menu-item#active-menu');
      active.removeAttribute('id');
    } else {
      return
    }
  }

  // Content veranderen en active id meegeven in menu
  const changeDisplay = (event) => {
    let content = '';
    let click = event.currentTarget;

    //vorige active id wegnemen
    removePreviousActive()

    //active id toekennen en content aanpassen
    click.id = "active-menu"
    content = click.classList.value.split(' ').slice(-1)[0]
    setDisplay(content)
  }

  const giveActive = () => {
    const active = document.querySelector('.menu-item')
    active.id = "active-menu"
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
