import { scaleValue } from "./scaleValue";

interface ITempNob {
    min: number
    max: number
    value: number
}

const TempNobStyled = ({ min, max, value }: ITempNob) => {
    const showValue = scaleValue(value, min, max, -141, 141)
    const nobColor = "black"
    const bgColor = showValue > 50 ? `rgba(255,100,100,${scaleValue(showValue, -141, 141, 0, 1)})` : showValue < -50 ? `rgba(0,0,200,${scaleValue(showValue, 141, -141, 0, 1)})` : `rgba(240,240,240,${scaleValue(showValue, -141, 141, 0.4, 1)})`
    return <div style={{
        height: 200,
        width: 200,
        flexFlow: "column",
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    }}>
        <div style={{
            height: 100,
            width: 100,
            borderRadius: "100%",
            position: "relative",
            transition: "all 1s ease 0s"
        }}
        >
            <div style={{
                background: `linear-gradient(${showValue}deg,${bgColor},transparent,transparent,transparent)`,
                height: 100,
                width: 100,
                borderRadius: "100%",
                position: "absolute",
                transition: "all 5s ease 0s",
            }}
            >
                <div style={{
                    width: "2px",
                    height: "100px",
                    position: "relative",
                    transform: `rotate(${showValue}deg)`,
                    transformOrigin: "center",
                    margin: "auto",
                    transition: "all 1s ease 0s"
                }}>
                    <div style={{
                        transition: "all 1s ease 0s",
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        borderWidth: "0 2.5px 20px 2.5px",
                        borderColor: `transparent transparent ${nobColor} transparent`,
                        position: "absolute",
                        top: 5,
                        transform: "translate(-1.5px,1.5px)",
                        WebkitMaskImage: `linear-gradient(to bottom,transparent,${bgColor},${bgColor})`,
                    }}>
                    </div>
                </div>
                <div style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    bottom: 8,
                    transform: "rotate(43deg)",
                    borderStyle: "solid",
                    borderWidth: "0 2.5px 10px 2.5px",
                    borderColor: `transparent transparent ${nobColor} transparent`,
                    left: "17px"
                }}></div>
                <div style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    bottom: 8,
                    transform: "rotate(-43deg)",
                    borderStyle: "solid",
                    borderWidth: "0 2.5px 10px 2.5px",
                    borderColor: `transparent transparent ${nobColor} transparent`,
                    right: "17px"
                }}></div>
            </div>
        </div>
        <div style={{
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>{value} °C
        </div>
    </div>
}



export default TempNobStyled;
