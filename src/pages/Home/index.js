import React from "react";
import { makeStyles } from "@material-ui/core/";
import market from "./assets/market.jpg";
import path from "./assets/path.jpg";
import pigalle from "./assets/pigalle.jpg";
import pigalle2 from "./assets/place-pigalle.jpg";
import zoom from "./assets/zoom-pigalle.jpg";
import patissier from "./assets/patissier.jpg";

import pasture from "./assets/pasture.JPG";
import portrait from "./assets/portrait.jpg";
import godmother from "./assets/godmother.jpg";
import farm from "./assets/farm.jpg";
import japon from "./assets/japon.png";
import ombrelle from "./assets/ombrelle.jpg";
import pont from "./assets/pont.jpg";
import clichy from "./assets/clichy.png";
import millstone from "./assets/millstone.jpg";
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
    '@global': {
        p: {
            lineHeight: "1.7",
            padding: "10px 0"
        },
        h2: {
            paddingRight: "50px"
        }
    }

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
                        style={{ position: "absolute", height: "200px", top: "500px", left: "100px" }}
                    >
                        <h2 id="modal-title">FIRMIN-GIRARD, FAMILIER DE LA PLACE PIGALLE</h2>
                        <div id="modal-description">
                            <img src={pigalle} alt="La place Pigalle" style={{ height: "400px" }} />
                            <p>Après les années 1870 durant lesquelles les succès se sont enchaînés avec, en particulier, Le Quai aux fleurs, Firmin-Girard va reprendre le chemin de la campagne. Ses origines rurales, ses souvenirs, lorsqu’encore étudiant il se rendait à Barbizon avec ses amis peindre la nature, le conduisent à redécouvrir les richesses qu’offre la campagne, tout particulièrement, ses paysages, ses constructions, ses habitants et leur mode de vie.
                        Dans un premier temps, la campagne lui sert de décor dans lequel il met en scène ses personnages en costume d’époque ou de la bourgeoisie en robe et chapeau à la mode émerveillée par les animaux de la ferme.</p>
                            <img src={ecrivain} alt="L'écrivain'" style={{ height: "400px" }} />
                            <img src={patissier} alt="Le patissier'" style={{ height: "400px" }} />
                            <p>Certains jours la place s’animait des étals du marché. A d’autres moments, des  manèges et d’autres attractions foraines occupaient une partie de la place.  Toute cette vie grouillante fascinait Firmin-Girard.
                            Dans sa première version de la place, qu’il exposa au Salon de la Société des Beaux Arts de 1903, Firmin-Girard a peint l’arrière de la place avec les premiers immeubles du boulevard de Clichy où l’on peut apercevoir les grandes verrières des ateliers d’artiste.</p>
                            <img src={pigalle2} alt="La Place Pigalle" style={{ height: "400px" }} />
                            <p>Le bâtiment rose représenté à l’arrière-plan était un lieu mythique de la place. Le restaurant qui l’occupait portait le nom de « l’abbaye de Thélème » imaginée par Rabelais dans Gargantua. Au-dessus de la porte d’entrée figurait la devise de l’écrivain « Fais ce que voudras »
                            et à l’intérieur des fresques illustraient les aventures du géant. Transformé en cabaret, il fut prisé par les peintres et les écrivains du quartier. A proximité, à l’angle avec l’avenue Frochot, le « Rat mort » était un autre cabaret aussi très fréquenté.
                            On y rencontrait, entre autres, Verlaine et Rimbaud dont on raconte qu’il voulut tenter une expérience en coupant le poignet de son compagnon, mais aussi Courbet et Manet.
                            </p>
                        </div>
                    </ModalComponent>

                    <ModalComponent
                        image={path}
                        alt="Le chemin"
                        title="FIRMIN-GIRARD À LA CAMPAGNE"
                        style={{ position: "absolute", height: "250px", top: "100px", left: "250px" }}
                    >

                    </ModalComponent>

                    <ModalComponent
                        image={pasture}
                        alt="paturage"
                        text="Paturage"
                        style={{ position: "absolute", height: "250px", top: "100px", left: "1100px" }}
                    />
                    <ModalComponent
                        image={godmother}
                        alt="Le jardin de la marraine"
                        text="Paturage"
                        style={{ position: "absolute", height: "400px", top: "80px", left: "750px" }}
                    />
                    <ModalComponent
                        image={portrait}
                        alt="Portrait de Jeanne"
                        text="Paturage"
                        style={{ position: "absolute", height: "350px", top: "480px", left: "400px" }}
                    />
                    <ModalComponent
                        image={farm}
                        alt="La ferme"
                        text="Paturage"
                        style={{ position: "absolute", height: "320px", top: "500px", left: "700px" }}
                    >
                        <h2 id="modal-title">FIRMIN-GIRARD À LA CAMPAGNE</h2>
                        <div id="modal-description">
                            <img src={millstone} alt="Les meules" style={{ height: "400px" }} />
                            <p>Après les années 1870 durant lesquelles les succès se sont enchaînés avec, en particulier, Le Quai aux fleurs, Firmin-Girard va reprendre le chemin de la campagne. Ses origines rurales, ses souvenirs, lorsqu’encore étudiant il se rendait à Barbizon avec ses amis peindre la nature, le conduisent à redécouvrir les richesses qu’offre la campagne, tout particulièrement, ses paysages, ses constructions, ses habitants et leur mode de vie.
                            Dans un premier temps, la campagne lui sert de décor dans lequel il met en scène ses personnages en costume d’époque ou de la bourgeoisie en robe et chapeau à la mode émerveillée par les animaux de la ferme.</p>
                            <p>Puis les bourgeoises de la ville ont laissé la place aux fermières et à leurs activités. Firmin-Girard devient un interprète de la vie rurale pour laquelle il manifeste un attrait grandissant et  rejoint les peintres tels Millet, Lhermitte, Jules Breton et son ami Paul Vayson qui ont  leur art à la peinture des paysans.</p>
                            <p>Firmin-Girard dans ces années 1890 après son adhésion à la Société Nationale des Beaux-Arts va centrer une partie de son oeuvre à la peinture des hommes et des femmes qui travaillent dans les fermes et les champs. Attaché à dépeindre la vie rurale telle qu’il la voit.  Alors que la mécanisation de l’agriculture commence à se développer, il prend le parti d’une iconographie des travaux exécutés avec un outillage primitif, décrivant avec réalisme la situation des paysans telle qu’il l’observe dans les régions où il se rend, en particulier dans l’arrière pays d’Ault-Onival où il séjourne une partie de l’été ou à proximité de Charlieu d’où son épouse est originaire.</p>
                            <p>Firmin-Girard dépeint avec précision l’activité rurale, la garde des chèvres et des moutons, la nourriture de la volaille, des lapins ou des cochons, le labourage des champs, la moisson et le glanage. Témoignant d’une union harmonieuse entre les hommes et la nature, il offre un visage aimable de la campagne qui lui rappelle son enfance lorsqu’avec son père il parcourait les paysages du Haut-Bugey.</p>
                        </div></ModalComponent>
                    <ModalComponent
                        image={market}
                        alt="Le marché aux fleurs"
                        style={{ position: "absolute", height: "500px", top: "400px", left: "1160px" }}
                    >
                        <h2 id="modal-title">RECORD DES ENCHÈRES POUR FIRMIN-GIRARD: LE QUAI AUX FLEURS</h2>
                        <div id="modal-description">
                            <img src={market} alt="Le marché aux fleurs" style={{ height: "600px" }} />
                            <p>Estimé 300,000 – 500 000 USD, le Quai aux fleurs fut vendu 3,021,000 USD chez Sotheby’s le 9 mai 2014.</p>
                            <p>En 1876 lors de la présentation du Quai aux fleurs au salon, vendu à 85 000 francs or à l’américain Butler par l’intermédiaire de Knoedler, une galerie new-yorkaise, la notoriété de Firmin Girard s’affirme.</p>
                            <p>Les critiques fusent, Zola déplore « une perfection poussée jusqu’à l’impossible»,</p>
                            <p>« le sentiment d’avoir chaussé des lunettes pour myope qui vous aveuglent tellement les détails se détachent les uns des autres » et il déclare :</p>
                            <p>« Ah ! Quelle infamie ce vil triomphe de l’argent ! ».</p>
                            <p>Alors que le Bon Marché s’agrandit encore sous la direction de l’architecte Boileau, Zola n’a pas commencé Au Bonheur des Dames mais la critique du Quai aux fleurs sonne comme une préface acerbe à l’encontre du déploiement des apparats de la Belle Époque qu’il moquera tant.</p>
                            <p>Le Quai aux fleurs fut d’abord une œuvre de commande. Firmin-Girard venait de se faire connaître aux Etats-Unis par l’intermédiaire de la galerie Goupil-Knoedler qui diffusait des gravures des peintres français. Alexandre Turney Stewart, homme d’affaires new-yorkais qui avait fait fortune dans le textile et possédait un grand magasin sur Broadway passe commande à Firmin-Girard d’une peinture représentant les quais de Paris animés par le marché aux fleurs et dans laquelle il fixe au peintre une condition particulière, celle de se représenter au centre du tableau. Cette commande ne pouvait que satisfaire le peintre qui trouvait là une occasion d’assouvir sa passion pour les fleurs mais aussi d’exprimer pleinement son talent en montrant la vie parisienne et ses habitants revêtus de tenues à la mode. Celui-ci s’exécute, demande à la préfecture de Paris l’autorisation de s’installer sur la voie publique et peint des esquisses des lieux et des personnages, puis travaille dans son atelier pour finaliser son œuvre. Cela lui prend plusieurs mois au cours de l’année 1875, à tel point qu’il ne peut satisfaire son commanditaire, décédé entre temps.  Le tableau achevé Firmin-Girard le présente pour être exposé au Salon de 1876. C’est un triomphe auprès du public. On dit qu’il avait fallu mettre en place un service d’ordre pour contenir la foule qui se pressait devant le tableau. Les critiques affluent, certaines pour louer le talent de l’artiste, d’autres pour en contester la valeur artistique, en prétendant qu’il est de l’école des appareils photographiques. Le tableau fait aussi l’objet de nombreuses caricatures dans les journaux illustrant les salons. On y voit par exemple un visiteur incommodé par le parfum des fleurs, tandis qu’un autre compte les pétales des fleurs.</p>
                            <p>Les marchands d’art, attirés par le succès du tableau, sollicitent Firmin-Girard pour le vendre. Plusieurs galeries de Londres et de New-York le pressent. C’est finalement Knoedler qui fait l’affaire. Il envoie un télégramme au peintre depuis Alger où il passe l’hiver, pour lui annoncer la vente du tableau, pour un montant impressionnant, à un autre homme d’affaires américain Theron R. Butler, propriétaire de compagnies de chemin de fer. Celui-ci l’accroche dans sa résidence de la cinquième avenue à New-York. Madame Butler écrit au peintre, quelques semaines plus tard, pour lui exprimer toute son admiration et celle de ses visiteurs devant le tableau. Il sera présenté dans plusieurs expositions aux Etats-Unis, au Canada et en Europe ainsi que très récemment dans des salons d’antiquité dont la biennale de Paris de 2014, 138 ans après qu’il ait quitté Paris.</p>
                        </div>
                    </ModalComponent>
                    <ModalComponent
                        image={japon}
                        alt="La Toilette Japonaise"
                        style={{ position: "absolute", height: "320px", top: "50px", left: "1500px" }}
                    >
                        <h2 id="modal-title">FIRMIN-GIRARD, À L’HEURE JAPONAISE</h2>
                        <div id="modal-description">
                            <img src={japon} alt="La Toilette japonaise" style={{ height: "400px" }} />
                            <p>Le critique d’art de Cherville, dans l’Illustration du 30 août 1873 qui avait fait paraître une reproduction de La toilette japonaise de Firmin Girard rapportait</p>
                            <p>« Nous avons désormais une nouvelle école, l’école japonaise et nous sommes heureux de reproduire pour nos lecteurs, le tableau de l’un de ses représentants les plus distingués ».</p>
                            <p>Après la découverte des traditions, de la culture et des estampes japonaises présentées pour la première fois en Europe lors des expositions universelles de Londres puis de Paris en 1867, des écrivains, des peintres, mais aussi des musiciens, fascinés par tant d’exotisme, ont développé ce que l’on a appelé le japonisme.</p>
                            <p>Firmin Girard, qui a pu acquérir des objets traditionnels et des costumes japonais, est l’un de ces peintres. En 1872, il peint La femme à l’ombrelle,  durant cette même année où les premières toiles de ce mouvement sont exposés au Salon. On peut, en effet, en voir quatre parmi l’ensemble des peintures présentes, montrant des scènes japonaises, Le bazar japonais d’Edouard Castres, Un perroquet de Charles-Auguste Escudier, Le bac japonais de Paul-Marie Lenoir et La Mousouné d’un dai-myo d’Adrien Marie. Quelques années auparavant, James-Jacques-Joseph Tissot avait déjà présenté ses japonaiseries, se limitant, toutefois, à mettre en scène des objets et des décors japonais. Ce mouvement, fort du succès qu’il rencontre auprès du public, va se poursuivre durant quelques années avec de célèbres artistes, dont, en particulier, Van Gogh et Monet qui peint en 1886 sa » japonaise à l’ombrelle ».</p>
                            <p>En 1873, Firmin Girard réalise deux toiles présentant des scènes japonaises, Les japonaises au ruisseau et La toilette japonaise qui, exposée au salon de cette même année, suscite l’enthousiasme  du public et de la critique. Charles Garnier, l’architecte de l’opéra, se dit charmé par la grâce du sujet, l’élégance des tons, la parfaite exécution et  la richesse du décor. Castagnary considère la peinture de Firmin Girard comme l’une des œuvres les plus réussies du salon.</p>
                            <img src={pont} alt="Japonaises au ruisseau" style={{ height: "400px" }} />
                            <p>La toilette japonaise est, sans doute, l’une de ses œuvres les plus connues et les plus reproduites. Après son acquisition par le collectionneur new-yorkais, Auguste Belmont, qui l’a présentée en 1876, dans le cadre de l’exposition de sa collection privée dans sa résidence de la 5ème avenue, elle est, aujourd’hui, conservée au musée d’art de Porto-Rico. On a, toutefois, pu la voir en 1983 à New-York et en 1988 à Paris et à Tokyo, lors de l’exposition sur le japonisme et plus récemment dans le film de Bertrand Bonello l’Apollonide.</p>
                            <p>Ces scènes japonaises ont, en effet séduit les collectionneurs américains. La japonaise à l’ombrelle a longtemps fait partie de la collection de William Waldorf Astor, homme politique new-yorkais, avant sa dispersion en 1926.</p>
                            <img src={ombrelle} alt="La japonaise à l'ombrelle" style={{ height: "400px" }} />
                            <p>Une quatrième toile de Firmin Girard datant également de 1873 a été acquise par un autre collectionneur américain Henry Gibson de Philadelphie. Représentant « deux japonaises nourrissant des canards », elle est restée longtemps inconnue, la plupart des recherches sur l’œuvre de Firmin Girard ne mentionnant que trois tableaux relevant de ce mouvement du japonisme.</p>
                            <p>Après ces deux années 1872 et 1873, Firmin Girard abandonne sa parenthèse japonaise. Elle lui a, pourtant, apporté le succès attendu. Il n’abandonne, cependant, pas les scènes en costume, puisqu’il réalisera de nombreuses peintures à caractère historique avec des personnages en costume louis XIII ou du 18 ème siècle comme, par exemple, ses fiancés.</p>
                        </div>
                    </ModalComponent>
                </div>
            </div>
        </div>
    )
}