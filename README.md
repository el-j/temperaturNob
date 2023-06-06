# temperature nob

this is a reusable react temperature nob made with plain css.
![image](https://github.com/el-j/temperaturNob/assets/2795534/907d2fe4-e981-4e6d-906f-43eb625c1a66)

## live example 
![page online](https://github.com/el-j/temperaturNob/actions/workflows/node.js.yml/badge.svg)   

https://el-j.github.io/temperaturNob/


## usage
the TempNob needs 3 inputs as numbers. 
```
min:  number // the minimum value
max: number // the maximum value
value: number // the value itself
unit?: string // the unit of the text, default °C (optional)
```

```
<TempNob 
  min={minValue}
  max={maxValue} 
  value={value} 
  />
```


## reuse

copy from `src/Components/TempNob`:
-  TemperatureNob.tsx or TemperatureNobStyled.tsx
and copy from `src/helper`:
-  scaleValue.tsx


### enhancement
- [x] more style to the nob
- [x] change unit via input as optional property
- [ ] max-min for input value range cannot exceed
- ...

