import React from "react";
export const Interface = ({
  name,
  value,
  setValue,
  select
}
  :
  {
    name: string;
    value: number | string;
    setValue: React.Dispatch<React.SetStateAction<any>>
    select?: boolean
  }) => {
  if (!select) return <div style={{ display: "grid" }}>
    {name}:
    <input type='number' aria-label={name} onChange={e => setValue(Number(e.target.value))} value={value} />
  </div>;

  return <div style={{ display: "grid" }}>
    {name}:
    <select name={"unit"} value={value} onChange={(e) => {
      console.log("hello", e.target.value)
      setValue(e.target.value)
    }}>
      {["°C", "F", "K", "RPM"].map(u => <option value={u}>{u}</option>)}
    </select>
  </div>

};
