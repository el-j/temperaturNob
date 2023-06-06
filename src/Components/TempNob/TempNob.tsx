import { scaleValue } from "../../helper/scaleValue";


interface ITempNob {
    min: number
    max: number
    value: number,
    unit?: string 
}
const TempNob = ({ min, max, value,  unit }: ITempNob) => {
    const showValue = scaleValue(value, min, max, -141, 141)
    const nobColor =  showValue > 50 ? "red": showValue < -50 ? "blue":"black"
    return <div style={{
            background: "#dadada",
            height: 200,
            width: 200,
            flexFlow: "column",
            alignItems: "center",
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{ 
                background: "#fff",
                height: 100, 
                width: 100, 
                borderRadius: "100%", 
                position: "relative", 
                border: "2px solid grey"
                }}
                >
                <div style={{
                    width: "2px",
                    height: "102px",
                    position: "relative",
                    transform: `rotate(${showValue}deg)`,
                    transformOrigin: "center",
                    margin: "auto",
                    transition: "all 1s ease 0s"
                }}>
                    <div style={{
                        background: nobColor,
                        transition: "all 1s ease 0s",
                        width: "2px",
                        height: "16px",
                        position: "absolute",
                        top: 0
                    }}>
                    </div>
                </div>
                <div style={{ 
                    background: "#000",
                    width: "2px", 
                    height: "10px", 
                    position: "absolute", 
                    bottom: "0", 
                    transform: "rotate(40deg)", 
                    left: "14px" 
                    }}></div>
                <div style={{ 
                    background: "#000",
                    width: "2px",
                    height: "10px",
                    position: "absolute", 
                    bottom: "0", 
                    transform: "rotate(-40deg)", 
                    right: "14px" 
                    }}></div>
            </div>
            <div style={{
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>{value}  {unit?unit:"°C"}
            </div>
        </div>
}



export default TempNob;
