import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import portrait from "./assets/portrait.jpg"
import sebastien from "./assets/sebastien.jpg"
import joseph from "./assets/joseph.jpg"
import dejeuner from "./assets/dejeuner.jpg"
import jugement from "./assets/jugement.jpg"


const useStyles = makeStyles({
    scroll: {
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
        width: "500px",
        color: "white",
        padding: "0 20px",
        textAlign: "justify",
        columnWidth: "1000px",
        lineHeight: "1.7",
    },
    image: {
        height: "500px",
        objectFit: "cover"
    },
    title: {
        margin: "20px 0",
    }
})

export default function Biographie() {
    const classes = useStyles()

    return (
        <div className={classes.scroll}>
            <img src={portrait} alt="portrait" className={classes.image} />
            <Box className={classes.text}>
                <Typography vriant="h1">FIRMIN GIRARD, 1838-1921 </Typography>
                <br />
                <Typography variant="body1">1838 : Naissance à Poncin dans l’Ain</Typography>
                <Typography variant="body1">1845 : Installation en région parisienne de ses parents, il est mis en pension à Paris chez les Lassaliens. Son attrait pour le dessin s’affirme.</Typography>
                <Typography variant="h6" className={classes.title}>L’APPRENTISSAGE DU PEINTRE</Typography>
                <Typography variant="body1">1853 : On l’inscrit à l’Ecole Impériale et spéciale de dessin, de mathématique, d’architecture et de sculpture d’ornement, appliqués aux arts industriels, dirigée par Jean Hilaire Belloc, puis Horace Lecoq de Boisbaudran. Il fait son premier apprentissage du dessin</Typography>
                <Typography variant="body1">1854 : Il intègre l’atelier Gleyre et l’Ecole Nationale des Beaux-Arts et suit un enseignement académique, à partir de l’étude du modèle vivant</Typography>
                <Typography variant="body1">1859 : Il expose pour la première fois au Salon une peinture religieuse Saint Sébastien</Typography>
            </Box>
            <img src={sebastien} alt="Saint Sébastien" className={classes.image} />
            <Box className={classes.text}>
                <Typography variant="body1">Il participe aux décors du Faust de Gounod pour le théâtre lyrique auprès du décorateur de théâtre Charles-Antoine Cambon.</Typography>
                <Typography variant="body1">1861-1866  Il concourt à cinq reprises pour le Prix de Rome dans la section de la peinture d’Histoire.</Typography>
                <Typography variant="body1">Deuxième second grand prix en 1861 avec La mort de Priam.</Typography>
                <Typography variant="body1">Grande médaille d’émulation en 1863 pour Joseph reconnu par ses frères.</Typography>
            </Box>
            <img src={joseph} alt="Joseph reconnu par ses frères" className={classes.image} />
            <Box className={classes.text}>
                <Typography variant="body1">1861 Il poursuit sa présence au Salon avec une peinture religieuse,  Saint Charles Borromée pendant la peste de Milan et une autre d’inspiration naturaliste, les convalescents.</Typography>
                <Typography variant="body1">1862  Il découvre Barbizon et la peinture de plein air avec d’autres élèves de l’atelier Gleyre dont ses amis Jules Le Coeur, Paul Vayson et les futurs Impressionnistes Monet, Sisley, Renoir. Il peint quelques toiles de facture impressionniste.</Typography>
            </Box>
            <img src={dejeuner} alt="Déjeuner sur l'herbe" className={classes.image} />
            <Box className={classes.text}>
                <Typography variant="body1">1863  Il reçoit la médaille de troisième classe du Salon pour son tableau Après le bal, acheté par la Princesse Mathilde</Typography>
                <Typography variant="body1">1864-1866 Il expose au Salon des toiles académiques et des scènes historiques,la naissance de Vénus, la mort de la Princesse de Lamballe, le jugement de Pâris</Typography>
            </Box>
            <img src={jugement} alt="Jugement de Paris" className={classes.image} />
            <Box className={classes.text}>
                <Typography variant="body1">1865  Zola le recommande à ses amis journalistes du “Conventionnel”</Typography>
                <Typography variant="body1">1867 Il séjourne en Avignon chez son ami Paul Vayson de l’atelier Gleyre , il peint des fresques reproduisant le jugement de Pâris et les sirènes dans une des pièces du château</Typography>
                <Typography variant="body1">Il participe à la création du groupe de “l’Arche de Noé” avec ses amis peintres, notamment, Henri Regnault, Léon Glaize, Adrien Moreau, Eugène Beaudoin, Georges Clairin</Typography>
                <Typography variant="body1">1867-1870 Il expose au Salon ses premières peintures de genre,  un miroir improvisé, un mariage in extremis, une maladresse, le vase brisé, le mendiant, la charité.</Typography>
            </Box>
        </div>
    )
}