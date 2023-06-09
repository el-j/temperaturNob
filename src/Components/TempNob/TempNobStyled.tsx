import { scaleValue } from "../../helper/scaleValue";

interface ITempNob {
    min: number
    max: number
    value: number,
    unit?: string
}



const TempNobStyled = ({ min, max, value, unit }: ITempNob) => {
    const showValue = scaleValue(value, min, max, -141, 141)
    const nobColor = "black"
    const red = `rgba(255,100,100,${scaleValue(showValue, -141, 141, 0, 1)})`
    const blue = `rgba(0,0,200,${scaleValue(showValue, 141, -141, 0, 1)})`
    const grey = `rgba(100,100,100,${scaleValue(showValue, -141, 141, 0.6, 1)})`
    const bgColor = showValue > 50 ? red : showValue < -50 ? blue : grey
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
            transition: "all 1s ease 0s",
            borderBottom: "2px solid #cccccc"
        }}
        >
            <div style={{
                background: `linear-gradient(to top,${bgColor},transparent,transparent,transparent)`,
                zIndex: 0,
                height: 100,
                width: 100,
                borderRadius: "100%",
                position: "absolute",
                transition: "all 10s ease 0s",
                WebkitMaskImage: `radial-gradient(circle, rgb(0 0 0 / 0%) 0%, rgba(0, 0, 0, 0) 50%, rgb(255, 255, 255) 100%)`,
            }}
            ></div>
            <div style={{
                height: 100,
                width: 100,
                borderRadius: "100%",
                position: "absolute",
                transition: "all 1s ease 0s",

            }}
            >
                <div style={{
                    width: "2px",
                    height: "100px",
                    position: "relative",
                    transform: `rotate(${showValue}deg)`,
                    transformOrigin: "center",
                    margin: "auto",
                    transition: "all 0.1s ease 0s"
                }}>
                    <div style={{
                        transition: "all 0.1s ease 0s",
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        borderWidth: "0 2.5px 20px 2.5px",
                        borderColor: `transparent transparent ${nobColor} transparent`,
                        position: "absolute",
                        top: 5,
                        transform: "translate(-1.5px,1.5px)",
                        WebkitMaskImage: `linear-gradient(to bottom,${bgColor},${bgColor},transparent)`,
                    }}>
                    </div>
                </div>
                <div style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    bottom: 10,
                    transform: "rotate(43deg)",
                    borderStyle: "solid",
                    borderWidth: "0 2.5px 10px 2.5px",
                    borderColor: `transparent transparent #999 transparent`,
                    left: 19
                }}></div>
                <div style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    bottom: 10,
                    transform: "rotate(-43deg)",
                    borderStyle: "solid",
                    borderWidth: "0 2.5px 10px 2.5px",
                    borderColor: `transparent transparent #999 transparent`,
                    right: 19
                }}></div>
                <div style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    top: 0,
                    transform: "rotate(180deg)",
                    borderStyle: "solid",
                    borderWidth: "0 2.5px 10px 2.5px",
                    borderColor: "transparent transparent rgba(100,100,100,0.2)",
                    left: "47.75px"
                }}></div>
            </div>
        </div>
        <div style={{
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>{value} {unit ? unit : "°C"}
        </div>
    </div>
}



export default TempNobStyled;
