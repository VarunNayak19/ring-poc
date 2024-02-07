
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const [value, setValue] = useState(20); // Initial value for the slider

  const handleChange = (event :any) => {
    console.log(event);
    setValue(event.target.value); // Update the value when the slider is changed
  };

  // const mmToPx = (mm:any) =>  {
  //   return mm * 3.779527559;
  // }
  return (
    <>
<div className='anim-container'>
  {
    false &&
  <>
  <div className='v-container'>
<div className="parallelogram parallelogram-v-one"></div>
<div className="parallelogram parallelogram-v-two"></div>
  </div>
  <div className="n-container">
    <div className="parallelogram parallelogram-n-one"></div>
    <div className="parallelogram parallelogram-n-two"></div>
    <div className="parallelogram parallelogram-n-three"></div>
  </div>
  </>
  }
      <div className='slider-div'>
      <input
        type="range"
        min="8"
        max="30"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
<div className='circle' style={{width:`${value}mm`,height:`${value}mm`}}></div>
    </div>
</div>
    </>
  )
}

export default App
