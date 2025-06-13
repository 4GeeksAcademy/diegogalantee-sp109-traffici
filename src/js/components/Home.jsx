import React, { useState } from "react";
import "../../styles/index.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const cycleColor = () => {
        const index = colors.indexOf(color);
        const nextColor = colors[(index + 1) % colors.length];
        setColor(nextColor);
    };

    const generateRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
        return randomColor;
    };

    const addRandomColor = () => {
        let newColor;
        do {
            newColor = generateRandomColor();
        } while (colors.includes(newColor));
        setColors([...colors, newColor]);
    };

    const resetColors = () => {
        setColors(["red", "yellow", "green"]);
        setColor("red");
    };

    return (
        <div className="text-center mt-5">
            <div className="traffic-light">
                {colors.map((c) => (
                    <div
                        key={c}
                        onClick={() => handleClick(c)}
                        className={`light ${color === c ? "glow" : ""}`}
                        style={{ backgroundColor: c }}
                    ></div>
                ))}
            </div>
            <button className="btn btn-primary m-2" onClick={cycleColor}>
                Cambiar Color
            </button>
            <button className="btn btn-secondary m-2" onClick={addRandomColor}>
                Agregar color
            </button>
            <button className="btn btn-danger m-2" onClick={resetColors}>
                Reiniciar semáforo
            </button>
        </div>
    );
};

export default TrafficLight;