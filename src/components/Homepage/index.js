import React from "react";
import { makeStyles } from "@material-ui/core/";
import market from "./assets/market.jpg";
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
        transition: "transform 1s",
        "&:hover": {
            transform: "translate(60px, 60px)"
        }
    },
    block: {
        display: "block",
        transition: "transform 1s",
        "&:hover": {
            transform: "translate(60px, 60px)"
        }
    },
    market: {
        height: "300px",
        position: "absolute",
        top: "62px",
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
        left: "900px",
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
    }
})

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <div className={classes.block}>
                <img src={market} alt="Market" className={classes.market} />
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
        </div>
    )
}