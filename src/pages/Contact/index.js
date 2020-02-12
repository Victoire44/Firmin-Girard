import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles ({
contact: {
    position: "absolute",
        display: "flex",
        flexDirection: "row",
        top: 200,
        left: 30
}
})

export default function Home() {
const classes = useStyles();

    return (
        <div className={classes.contact}>
            <Typography style={{color:"white"}}>Arrière petit-fils du peintre, Patrick Faucheur dirige les recherches du catalogue raisonné de Firmin-Girard dont la parution est prévue pour l’année 2018.</Typography>
        </div>
    )
}