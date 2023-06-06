import React from 'react';
import { TempNob, TempNobStyled } from './Components/TempNob';
import { Interface } from './Components/Interface';

function App() {

  const [minValue, setMinValue] = React.useState<number>(-20)
  const [maxValue, setMaxValue] = React.useState<number>(40)
  const [value, setValue] = React.useState<number>(20)
  const [unit, setUnit] = React.useState("°C")
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <h5>simple version:</h5>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>

        <TempNob
          min={minValue}
          max={maxValue}
          value={value}
          unit={unit}
        />
      </div>
      <h5>other styled version:</h5>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <TempNobStyled
          min={minValue}
          max={maxValue}
          value={value}
          unit={unit} />
      </div>

      <div style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "space-around", marginTop: "16px" }}>
        
        <Interface name={"min"} value={minValue} setValue={setMinValue} />
        <Interface name={"value"} value={value} setValue={setValue} />
        <Interface name={"max"} value={maxValue} setValue={setMaxValue} />
        <Interface name={"unit?"} value={unit} setValue={setUnit} select />
        
      </div>

    </div>

  );
}

export default App;
