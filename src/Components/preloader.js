import React, { useEffect, useState } from "react";
import animaton from "./fonts/INTENTO2.gif"
import Forms from "./Form";
import Navbar from "./Navbar";
import "./preloader.css"

function PreLoader1() {
    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setDone(true);
                });
        }, 4000);
    }, []);

    return (
        <>
            {!done ? (
                <div style={{
                    display: "flex",
                    height: 600
                }}>
                    <img src={animaton} style={{ width: 250, margin: "auto", alignContent: "center", verticalAlign: "middle" }} />
                </div>

            ) : (
                <div className="App">
                    <Navbar />
                    <div className="formulario">
                        <Forms />
                    </div>
                </div>
            )
            }
        </>
    );
}

export default PreLoader1;