import React from 'react';
const useMousePosition = (unit: string) => {
    const [timestamp, setTimestamp] = React.useState<number | null>(null);
    const [
        mousePosition,
        setMousePosition
    ] = React.useState<{ x: null | number, y: null | number, speedX?: null | number, speedY?: null | number }>();

    React.useEffect(() => {
        if (unit === "MouseSpeed") {
            const updateMousePosition = (ev: MouseEvent) => {
                if (timestamp === null) {
                    setTimestamp(Date.now());
                    setMousePosition({ x: ev.screenX, y: ev.screenX });
                    return;
                }
                if (mousePosition && mousePosition?.x !== null && mousePosition?.y !== null) {
                    let now = Date.now();
                    let dt = now - timestamp;
                    let dx = ev.screenX - mousePosition.x;
                    let dy = ev.screenY - mousePosition.y;
                    let speedX = Math.round(dx / dt * 100);
                    let speedY = Math.round(dy / dt * 100);
                    setTimestamp(now)
                    setMousePosition({ x: ev.clientX, y: ev.clientY, speedX: Math.abs(speedX), speedY: Math.abs(speedY) });
                    if (dx === 0 || dy === 0) {
                        setTimeout(() => {
                            setMousePosition({ x: mousePosition.x, y: mousePosition.y, speedX: 0, speedY: 0 });
                        }, 1000)
                    }
                }
            };

            window.addEventListener('mousemove', updateMousePosition);
            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }
    }, [mousePosition, unit, timestamp]);
    return mousePosition;
};
export default useMousePosition;