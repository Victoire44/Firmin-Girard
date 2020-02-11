import React from "react";
import portrait from "./assets/portrait.jpg"
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    scroll: {
        position: "absolute",
        display: "block",
        top: "200px",
        left: 0,
        margin: 0,
        width: "1000px",
        height: "100hv",
        overflowX: "hidden",
        overflowY: "auto",
        transform: "rotate(-90deg) translateY(-100px)",
        transformOrigin: "right top"
    },
    items: {
        width: "100hv",
        height: "100hv",
        display: "block",
        padding: "5px",
        color: "white",
        transform: "rotate(90deg)",
        transformOrigin: "right top"
    }
})


export default function Introduction() {
    const classes = useStyles()

    return (
        <div class="horizontal-scroll" className={classes.scroll}>
            <div >
                <img
                    className={classes.items}
                    src={portrait}
                    alt="portrait"
                />
            </div>
            <div className={classes.items}>
                <Typography style={{ color: "white" }}>
                    <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
                    <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
                    <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
                    <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
            <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
            <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
            <Box>
                        Célèbre à son époque, Marie François Firmin-Girard est resté méconnu pendant quelques décennies jusqu’à ce que sa peinture réapparaisse en salle des ventes ou lors d’expositions dans des musées d’œuvres acquises de son vivant ou plus récemment. Cette actualité a, fort heureusement, permis de voir certaines de ses œuvres majeures comme Le Quai aux fleurs de 1876 qui lui valut un très grand succès lors de sa présentation au Salon, mais aussi d’autres aspects de sa palette présents régulièrement sur le marché de l’art comme ses scènes de campagne ou de bords de mer, caractéristiques des années où ayant quitté le Salon officiel, il rejoignit la Société Nationale des Beaux-Arts. Très en vogue, durant son vivant, en France mais aussi en Angleterre et aux Etats-Unis auprès de collectionneurs avisés, avec ses scènes de genre ou ses vues d’un Paris où la bourgeoisie parée de tenues à la mode se mêle à l’activité des marchés, des halles ou des places, il fut salué par le public des salons, louangé mais aussi critiqué par la presse.
            </Box>
                </Typography>
            </div>

        </div>

    )
}

