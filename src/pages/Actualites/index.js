import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";
import polenov from "./assets/polenov.jpg";

const useStyles = makeStyles({
    actualites: {
        overflow: "scroll",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        top: 200,
        left: 30
    },
    text: {
        display: "block",
        height: "500px",
        color: "white",
        padding: "0 30px",
        textAlign: "justify",
        columnWidth: "700px",
        lineHeight: "1.7"
    },
    image: {
        height: "500px",
        objectFit: "cover"
    }
})

export default function Actualites() {
    const classes = useStyles();

    return (
        <div className={classes.actualites}>
            <img className={classes.image} src={polenov} alt="Vassily Polenov" />
            <Box className={classes.text}>
                <Typography>FIRMIN-GIRARD présent dans un article de la revue de la Galerie Trétaiakov. La revue de la Galerie Trétaiakov de Moscou, dans son numéro d’octobre, évoque FIRMIN-GIRARD dans un article consacré au peintre russe Vassily POLENOV qui résida à Paris de 1873 à 1876, ayant bénéficié d’une bourse de l’Académie des Beaux-Arts de Saint Pétersbourg pour se familiariser avec les courants artistiques en Europe. Lors de son séjour parisien il eut l’occasion de rencontrer FIRMIN-GIRARD, dont il fut impressionné par  son « Quai aux fleurs », au cours de la visite qu’il fit au Salon.</Typography>
            </Box>
        </div>
    )
}