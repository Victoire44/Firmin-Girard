import React from "react";
import { makeStyles } from "@material-ui/core/";
import market from "./assets/market.jpg";
import path from "./assets/path.jpg";
import pigalle from "./assets/pigalle.jpg";
import pigalle2 from "./assets/place-pigalle.jpg";
import zoom from "./assets/zoom-pigalle.jpg";
import pasture from "./assets/pasture.JPG";
import portrait from "./assets/portrait.jpg";
import godmother from "./assets/godmother.jpg";
import farm from "./assets/farm.jpg";
import japon from "./assets/japon.png";
import clichy from "./assets/clichy.png";
import ecrivain from "./assets/ecrivain.jpg";
import { Link, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalComponent from "../../components/Modal"

const useStyles = makeStyles({
    wrapper: {
        overflow: "hidden",
        height: "100vh"
    },
    background: {
        position: "relative",
        width: "2000px",
        height: "2000px",
        top: 0,
        left: 0,
        zIndex: 9998,
    },
})

export default function Home(props) {
    const classes = useStyles();

    // const reducer = 10
    // const x = (((e.target.offsetWidth / 2) - e.nativeEvent.offsetX)) / reducer
    // const y = (((e.target.offsetHeight / 2) - e.nativeEvent.offsetY)) / reducer

    // e.target.style.transition = "transform 1000ms";
    // e.target.style.transform = `translate(${x}px, ${y}px)`;


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
        <div>
            <div ref={wrapperRef} className={classes.wrapper}>
                <div ref={contentRef} className={classes.background} onMouseMove={recordMousePosition}>
                    <ModalComponent 
                        image={pigalle}
                        alt="pigalle"
                        title="FIRMIN-GIRARD, FAMILIER DE LA PLACE PIGALLE"
                        imageModal={pigalle2}
                        text="Après son mariage en 1871 avec Sabine Andriot qu’il a rencontrée lors de son séjour à Charlieu à l’invitation de son ami peintre Armand Charnay, Firmin-Girard s’installe à Paris, Boulevard de Clichy à proximité de la Place Pigalle. Des fenêtres de son atelier, il peut voir la place s’animer avec tous les personnages qui déambulent ou s’activent à leurs occupations.
                        Il a choisi ce quartier proche de la « Nouvelle Athènes » où de nombreux artistes avaient suivi la mode en y implantant leur atelier. Jean-Léon Gêrome, James Abbot Mc Neil Whistler et Emile Friant, notamment, sont ses voisins boulevard de Clichy. Dans une petite rue à l’arrière du boulevard, Alfred Stevens a son atelier.  Le quartier recélait aussi de nombreux cafés dans lesquels les artistes fréquentaient des écrivains, générant aux  alentours de la place Pigalle une vie intellectuelle particulièrement dense qui en a faisait sa réputation.
                        A cette agitation culturelle, se mêlait un bouillonnement de petits métiers, vendeurs de rue, écrivain public,  marchands de friandises,  de fleurs ou de journaux, tout un monde que depuis son atelier Firmin-Girard observe et dont il fait des esquisses avant de les replacer dans ses compositions représentant la place."
                        style= {{position:"absolute", height:"200px", top:"500px", left:"100px"}}
                    />
                    <ModalComponent 
                        image={path}
                        alt="Le chemin"
                        text="Bon,yuy"
                        style= {{position:"absolute", height:"300px", top:"100px", left:"225px"}}
                    />
                    <ModalComponent 
                        image={pasture}
                        alt="paturage"
                        text="Paturage"
                        style= {{position: "absolute", height: "250px", top: "100px", left: "1100px"}}
                    />
                    <ModalComponent 
                        image={godmother}
                        alt="Le jardin de la marraine"
                        text="Paturage"
                        style= {{position: "absolute", height: "400px", top: "80px", left: "750px"}}
                    />
                    <ModalComponent 
                        image={portrait}
                        alt="Portrait de Jeanne"
                        text="Paturage"
                        style= {{position: "absolute", height: "350px", top: "480px", left: "400px"}}
                    />
                    <ModalComponent 
                        image={farm}
                        alt="La ferme"
                        text="Paturage"
                        style= {{position: "absolute", height: "320px", top: "500px", left: "700px"}}
                    />
                    <ModalComponent 
                        image={market}
                        alt="Le marché aux fleurs"
                        text="Paturage"
                        style= {{position: "absolute", height: "500px", top: "400px", left: "1160px"}}
                    />
                    <ModalComponent 
                        image={japon}
                        alt="La Toilette Japonaise"
                        text="Paturage"
                        style= {{position: "absolute", height: "320px", top: "50px", left: "1500px"}}
                    />
                </div>
            </div>
        </div>
    )
}