import React from 'react';
import TempNob from './TempNob';
import { Interface } from './Interface';

function App() {

  const [minValue, setMinValue] = React.useState(-20)
  const [maxValue, setMaxValue] = React.useState(40)
  const [value, setValue] = React.useState(22)

  return (
    <div style={{ display: "grid" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <TempNob min={minValue} max={maxValue} value={value}></TempNob>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "space-around", marginTop: "16px" }}>
        <Interface name={"min"} value={minValue} setValue={setMinValue} />

        <Interface name={"value"} value={value} setValue={setValue} />
        <Interface name={"max"} value={maxValue} setValue={setMaxValue} />
      </div>
      
    </div>

  );
}

export default App;
