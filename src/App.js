import React, {useState} from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  const [display, setDisplay] = useState('Home')

  //Textcontent van p meegeven als display, div class active geven
  const changeDisplay = (event) => {
    console.log(event.target)
    
    const tag = event.target.tagName

    if(tag.includes('DIV')){
      console.log('selected van child p halen')
    } else {
      console.log('selected via div van child p halen')
    }
    
    // setDisplay(selected)
  }

  return (
    <div className="App">
      <Menu handleClick={changeDisplay}/>
      <Content display={display}/>
    </div>
  );
}

export default App;
