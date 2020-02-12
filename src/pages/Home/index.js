import React from "react";
import { makeStyles } from "@material-ui/core/";
import market from "./assets/market.jpg";
import path from "./assets/path.jpg";
import pigalle from "./assets/pigalle.jpg";
import pasture from "./assets/pasture.JPG";
import portrait from "./assets/portrait.jpg";
import godmother from "./assets/godmother.jpg";
import farm from "./assets/farm.jpg";

const useStyles = makeStyles({
    background: {
        position: "relative",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 9998,
    },
    block: {
        transitionDelay: "1000ms"
    },
    path: {
        height: "300px",
        position: "absolute",
        top: "100px",
        left: "22px",
    },
    pigalle: {
        height: "200px",
        position: "absolute",
        top: "500px",
        left: "100px",
    },
    pasture: {
        height: "250px",
        position: "absolute",
        top: "100px",
        left: "1100px",
    },
    godmother: {
        height: "400px",
        position: "absolute",
        top: "80px",
        left: "500px",
    },
    portrait: {
        height: "350px",
        position: "absolute",
        top: "600px",
        left: "350px",
    },
    farm: {
        height: "350px",
        position: "absolute",
        top: "500px",
        left: "650px",
        zindex: 1
    },
    market: {
        height: "500px",
        position: "absolute",
        top: "800px",
        left: "850px",
        zindex: 2
    }
})

export default function Home() {
    const classes = useStyles();

    const handleMouseMove = e => {
        const reducer = 10
        const x = (((e.target.offsetWidth / 2) - e.nativeEvent.offsetX)) / reducer
        const y = (((e.target.offsetHeight / 2) - e.nativeEvent.offsetY)) / reducer

        e.target.style.transition = "transform 1000ms";
        e.target.style.transform = `translate(${x}px, ${y}px)`;
    }

    return (
        <div>
            <div className={classes.background} onMouseMove={handleMouseMove}>
                <div className={classes.block}>
                    <img src={path} alt="Market" className={classes.path} />
                </div>
                <div className={classes.block}>
                    <img src={pigalle} alt="Pigalle" className={classes.pigalle} />
                </div>
                <div className={classes.block}>
                    <img src={pasture} alt="Pasture" className={classes.pasture} />
                </div>
                <div className={classes.block}>
                    <img src={godmother} alt="Godmother" className={classes.godmother} />
                </div>
                <div className={classes.block}>
                    <img src={portrait} alt="Portrait" className={classes.portrait} />
                </div>
                <div className={classes.block}>
                    <img src={farm} alt="Farm" className={classes.farm} />
                </div>
                <div className={classes.block}>
                    <img src={market} alt="Market" className={classes.market} />
                </div>
            </div>
        </div>
    )
}