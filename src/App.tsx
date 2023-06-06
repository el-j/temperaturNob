import React from 'react';
import { TempNob, TempNobStyled } from './Components/TempNob';
import { Interface } from './Components/Interface';
import useMousePosition from './hooks/useMousePosition';

function App() {

  const [styled, setStyled] = React.useState<boolean>(false)
  const [minValue, setMinValue] = React.useState<number>(-20)
  const [unit, setUnit] = React.useState("°C")
  const [maxValue, setMaxValue] = React.useState<number>(unit === "MouseSpeed" ? 4000 : 40)
  const [value, setValue] = React.useState<number>(20)

  React.useEffect(() => {
    if (unit === "MouseSpeed") {
      setMaxValue(4000)
      setMinValue(0)
    }
  }, [unit])
  const pos = useMousePosition(unit)
  return (
    <div style={{ display: "grid" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {!styled ? <div style={{ padding: 16 }}>
          <h5>Simple:</h5>
          <TempNob
            min={minValue}
            max={maxValue}
            value={value}
            unit={unit}
          />
        </div> :
          <div style={{ padding: 16 }}>
            <h5>Styled:</h5>
            {unit === "MouseSpeed" ? <div style={{ display: "grid" }}>
              <TempNobStyled
                min={minValue}
                max={maxValue}
                value={pos?.speedX as number}
                unit={"mouse speed X"} />
              <TempNobStyled
                min={minValue}
                max={maxValue}
                value={pos?.speedY as number}
                unit={"mouse speed Y"} /></div> :
              <TempNobStyled
                min={minValue}
                max={maxValue}
                value={value}
                unit={unit} />
            }
          </div>
        }
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: 8, padding: 16 }}>
          <Interface name={"min"} value={minValue} setValue={setMinValue} />
          {unit !== "MouseSpeed" ? <Interface name={"value"} value={value} setValue={setValue} /> : null}
          <Interface name={"max"} value={maxValue} setValue={setMaxValue} />
          <Interface name={"unit"} value={unit} setValue={setUnit} select />
          <div style={{ padding: 8 }}>
            <button onClick={() => setStyled(!styled)} >{styled ? "disable Styled" : "enable Styled"}</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
