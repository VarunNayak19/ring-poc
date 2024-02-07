
import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const [value, setValue] = useState(20);
  const [widthValue,setWidthValue] = useState(0); // Initial value for the slider

  const handleChange = (event :any) => {
    console.log(event);
    setValue(event.target.value); 
    setWidthValue(event.target.value * offsetWidth/25.4);// Update the value when the slider is changed
  };

  // const mmToPx = (mm:any) =>  {
  //   return mm * 3.779527559;
  // }

  const [pixelsPerInch, setPixelsPerInch] = useState(0);

  useEffect(() => {
    const testDiv = document.createElement("div");
    testDiv.style.width = "1in";
    testDiv.style.height = "1in";
    // testDiv.style.visibility = "hidden";
    document.body.appendChild(testDiv);
    const newPixelsPerInch = testDiv.offsetWidth;
    // document.body.removeChild(testDiv);
    setPixelsPerInch(newPixelsPerInch);
  }, []);


  const divRef = useRef(null);
  const [offsetWidth, setOffsetWidth] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setOffsetWidth(width);
      setValue(value);
    
      setWidthValue(value * width/25.4);
    }
  }, []);
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
        <div className='pp-div' ref={divRef}></div>
      <input
        type="range"
        min="8"
        max="30"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
      <p>width: {widthValue}</p>
      <p>offset: {offsetWidth}</p>
      <p>pizelratio: {window.devicePixelRatio}</p>
<div className='circle' style={{width:`${widthValue}px`,height:`${widthValue}px`}}></div>
    </div>
</div>
    </>
  )
}

export default App
