import React from "react";
import { makeStyles } from "@material-ui/core/";
import { positions } from '@material-ui/system';
import market from "./assets/market.jpg";
import path from "./assets/path.jpg";
import pigalle from "./assets/pigalle.jpg";
import pasture from "./assets/pasture.JPG";
import portrait from "./assets/portrait.jpg";
import godmother from "./assets/godmother.jpg";
import farm from "./assets/farm.jpg";
import japon from "./assets/japon.png";


const useStyles = makeStyles({
    background: {
        position: "relative",
        width: "2000px",
        height: "2000px",
        top: 0,
        left: 0,
        zIndex: 9998,
    },
    block: {
        transitionDelay: "1000ms",
    },
})

export default function Home() {
    const classes = useStyles();
    
    const wrapperRef = React.useRef()
    const mouseXRef = React.useRef()
    const mouseYRef = React.useRef()
    const animationRef = React.useRef()
    const contentRef = React.useRef()

    React.useEffect(() => {
        wrapperRef.current.scrollLeft = (contentRef.current.offsetWidth / 2) - (wrapperRef.current.offsetWidth / 2)
        wrapperRef.current.scrollTop = (contentRef.current.offsetHeight / 2) - (wrapperRef.current.offsetHeight / 2)

        animationRef.current = requestAnimationFrame(scrollAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    }, [])

    const scrollAnimation = timestamp => {
        const speedReducer = 100
        const scrollHorizontal = ((wrapperRef.current.offsetWidth / 2) - mouseXRef.current) / speedReducer
        const scrollVertical = ((wrapperRef.current.offsetHeight / 2) - mouseYRef.current) / speedReducer

        wrapperRef.current.scrollLeft -= scrollHorizontal
        wrapperRef.current.scrollTop -= scrollVertical

        animationRef.current = requestAnimationFrame(scrollAnimation)
    }

    const recordMousePosition = e => {
        mouseXRef.current = e.clientX
        mouseYRef.current = e.clientY
    }

    return (
        <div ref={wrapperRef} style={{ height: "100vh", overflow: "scroll" }}>
            <div ref={contentRef} className={classes.background} onMouseMove={recordMousePosition}>
                <div className={classes.block}>
                    <img src={path} alt="Le chemin" style={{ position: "absolute", height: "300px", top: "100px", left: "200px" }} />
                </div>
                <div className={classes.block}>
                    <img src={pigalle} alt="La Place Pigalle" style={{ position: "absolute", height: "200px", top: "500px", left: "100px" }} />
                </div>
                <div className={classes.block}>
                    <img src={pasture} alt="Paturage" style={{ position: "absolute", height: "250px", top: "100px", left: "1100px" }} />
                </div>
                <div className={classes.block}>
                    <img src={godmother} alt="Le jardin de la marraine" style={{ position: "absolute", height: "400px", top: "80px", left: "750px" }} />
                </div>
                <div className={classes.block}>
                    <img src={portrait} alt="Portrait de Jeanne" style={{ position: "absolute", height: "350px", top: "480px", left: "400px" }} />
                </div>
                <div className={classes.block}>
                    <img src={farm} alt="La ferme" style={{ position: "absolute", height: "320px", top: "500px", left: "700px" }} />
                </div>
                <div className={classes.block}>
                    <img src={market} alt="La marché aux fleurs" style={{ position: "absolute", height: "500px", top: "400px", left: "1160px" }} />
                </div>
                <div className={classes.block}>
                    <img src={japon} alt="La Toilette Japonaise" style={{ position: "absolute", height: "320px", top: "50px", left: "1500px" }} />
                </div>
            </div>
        </div>
    )
}