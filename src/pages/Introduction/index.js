import React from "react";
import portrait from "./assets/portrait.jpg"
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";


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
        color: "white",
        padding: "0 30px",
        textAlign: "justify",
        columnWidth: "300px",
        lineHeight: "1.7"
    },
    image: {
        height: "500px"
    }
})

export default function Introduction() {
    const classes = useStyles()

    return (
        <div className={classes.scroll}>
            <img src={portrait} alt="portrait" className={classes.image} />
            <Box className={classes.text} >
                <Typography vriant="h1">FIRMIN GIRARD, 1838-1921 </Typography>
                <br />
                Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse. 
                Ayant consacré toute sa vie à la peinture et actif presque jusqu’au dernier jour, il laissa plus de six cent œuvres identifiées et connues pour la plupart aujourd’hui. Certaines appartiennent à des musées en France mais aussi un peu partout dans le monde, d’autres sont régulièrement vendues à New-York, Paris, Londres ou ailleurs, d’autres enfin sont détenues et prisées par des collectionneurs. Cet intérêt renouvelé, s’il témoigne d’un engouement retrouvé pour ceux que l’on a appelés «les petits maîtres» ne doit pas occulter la redécouverte d’un peintre dont les multiples facettes ont contribué à son succès.
                Après la publication d’un ouvrage par l’un de ses petits-enfants Paul Girard, qui s’est livré à un premier travail d’inventaire, il a paru utile d’accompagner le retour de Firmin-Girard sur la scène artistique des peintres de le seconde moitié du XIXème siècle et du début du XXème par un livre de référence. Il constitue l’aboutissement des travaux de recherche menés par son arrière-petit-fils Patrick Faucheur, avec la collaboration d’historiens de l’art, issus notamment de l’Ecole du Louvre, mais aussi tout particulièrement de Victoire Baron. Il a vocation à contribuer aux recherche et études menées par les étudiants et les professionnels de l’histoire de l’art et du marché de l’art mais aussi à documenter les collectionneurs et les amateurs et fournir des informations et des réponses aux questions sur Firmin-Girard et son œuvre.
                Le livre retracera la vie du peintre dans le contexte de son époque, son cursus, ses ambitions et ses choix artistiques, son entourage, son cercle et ses relations, son œuvre au travers des divers courants qui l’ont traversée, la peinture académique, l’impressionnisme, le réalisme, le naturalisme. Il parcourra les thèmes qu’il a traités, de la peinture historique à la représentation de la vie et des métiers dans les régions qu’il affectionna, Paris, les rivages de la Manche, la Haute-Loire. Une seconde partie se présentera sous la forme d’un catalogue raisonné, dans lequel chacune des œuvres connues à ce jour fera l’objet d’une fiche illustrée et qui détaillera ses caractéristiques (date, support, signature, bibliographie, exposition, vente). Sa publication prévue à l’automne 2018 sera accompagnée d’une exposition d’œuvres du peintre.
            </Box>
        </div>

    )
}

