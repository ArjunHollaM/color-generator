import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  let colors;
  const [color, setColor] = useState('#700b97')
  const [error, setError] = useState(false)
  const [variation, setVariation] = useState(10)
  const [list, setList] = useState(new Values('#700b97').all(variation))
  const [colorvariation, setColorVariation] = useState(10)
  const changevarto20 = () => {setVariation(20);setColorVariation(5);}
  const changevarto10 = () => {setVariation(10);setColorVariation(10);}
  const changevarto5 = () => {setVariation(5);setColorVariation(20);}
  const changevarto1 = () => {setVariation(1);setColorVariation(100)}
  const changevarto2 = () => {setVariation(2);setColorVariation(50);}
  const changevarto3 = () => {setVariation(3);setColorVariation(33);}
  const changevarto4 = () => {setVariation(4);setColorVariation(25);}
  
  const generateRandomColor = () =>
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor)
}
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    try {
      colors = new Values(color).all(variation)
      setList(colors)
      console.log(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  const colorInput = (e) => {
    setColor(e.target.value)
  }

  return (
    <>
      <section className='navbar'>
        <div><h3>color generator</h3></div>
        <form className='buttons' onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#700b97'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
          <input className='colorPicker' type='color' onChange={colorInput} value={color}/>
          <button className='btn' onClick={generateRandomColor}>Generate Random Color</button>
          <button className="btn dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Select Variation
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><i className="dropdown-item" onClick={changevarto1} >1%</i></li>
              <li><i className="dropdown-item" onClick={changevarto2} >2%</i></li>
              <li><i className="dropdown-item" onClick={changevarto3} >3%</i></li>
              <li><i className="dropdown-item" onClick={changevarto4} >4%</i></li>
              <li><i className="dropdown-item" onClick={changevarto5} >5%</i></li>
              <li><i className="dropdown-item" onClick={changevarto10} >10%</i></li>
              <li><i className="dropdown-item" onClick={changevarto20} >20%</i></li>
            </ul>
          </button>
          </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              colorvariation={colorvariation}
            />
          )
        })}
      </section>
    </>
  )
}

export default App