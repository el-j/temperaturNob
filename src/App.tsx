import React from 'react';
import { TempNob, TempNobStyled } from './Components/TempNob';
import { Interface } from './Components/Interface';

function App() {

  const [styled, setStyled] = React.useState<boolean>(false)
  const [minValue, setMinValue] = React.useState<number>(-20)
  const [maxValue, setMaxValue] = React.useState<number>(40)
  const [value, setValue] = React.useState<number>(20)
  const [unit, setUnit] = React.useState("°C")
  return (
    <div style={{ display: "grid" }}> 
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {!styled?<div style={{padding:16}}>
      <h5>Simple:</h5>
        <TempNob
          min={minValue}
          max={maxValue}
          value={value}
          unit={unit}
        />
        </div>:
        <div style={{padding:16}}>
      <h5>Styled:</h5>
        <TempNobStyled
          min={minValue}
          max={maxValue}
          value={value}
          unit={unit} />
      </div>
}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: 8,padding:16 }}>
        
        <Interface name={"min"} value={minValue} setValue={setMinValue} />
        <Interface name={"value"} value={value} setValue={setValue} />
        <Interface name={"max"} value={maxValue} setValue={setMaxValue} />
        <Interface name={"unit"} value={unit} setValue={setUnit} select />
        <div style={{padding:8}}>
          <button onClick={()=>setStyled(!styled)} >{styled?"disable Styled":"enable Styled"}</button>
        </div>
      </div>
      </div>
    </div>

  );
}

export default App;
