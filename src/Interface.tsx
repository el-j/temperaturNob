export const Interface = ({ name, value, setValue }: { name: string; value: number; setValue: any; }) => {
  return <div style={{ display: "grid" }}>{name}:<input type='number' aria-label={name} onChange={e => setValue(e.target.value)} value={value}></input></div>;

};
