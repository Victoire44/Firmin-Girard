import React from "react";
import market from "./assets/market.jpg";
import { makeStyles } from '@material-ui/core/styles';
// import path from "./assets/path.jpg";
import pigalle from "./assets/pigalle.jpg";
import pigalle2 from "./assets/place-pigalle.jpg";
import patissier from "./assets/patissier.jpg";
import calvet from "./assets/calvet.jpg";
import landscape from "./assets/landscape.jpg";
import borddemer from "./assets/borddemer.jpg";
import pasture from "./assets/pasture.JPG";
import portrait from "./assets/portrait.jpg";
import godmother from "./assets/godmother.jpg";
import roses from "./assets/roses.jpg";
import orientale from "./assets/orientale.jpg";
import mauresque from "./assets/mauresque.jpg";
import maquignon from "./assets/maquignon.JPG";
import farm from "./assets/farm.jpg";
import japon from "./assets/japon.png";
import ombrelle from "./assets/ombrelle.jpg";
import pont from "./assets/pont.jpg";
import millstone from "./assets/millstone.jpg";
import forest from "./assets/forest.jpg";
import moisson from "./assets/moisson.png";
import tisserand from "./assets/tisserand.jpg";
import feu from "./assets/feu.jpg";
import berger from "./assets/berger.jpg";
import moutons from "./assets/moutons.jpg";
import coucher from "./assets/coucher-du-soleil.jpg";
import roy from "./assets/roy.jpg";
import ecrivain from "./assets/ecrivain.jpg";
import ModalComponent from "../../components/ModalComponent"
import CanvasScroll from "../../components/CanvasScroll"
import CanvasItem from "../../components/CanvasItem"

const useStyles = makeStyles({
    '@global': {
        p: {
            lineHeight: "1.7",
            padding: "10px 0"
        },
        h2: {
            paddingRight: "50px"
        }
    }
});

export default function Home(props) {
    const classes = useStyles();

    return (
        <CanvasScroll canvasSize={{ x: 700, y: 500 }} initialFocus={{ x: 200, y: 0 }}>
            <CanvasItem top="110px" left="320px" zIndex={10}>
                <ModalComponent image={pigalle} alt="pigalle" style={{ height: "250px" }}>
                    <h2 id="modal-title">FIRMIN-GIRARD, FAMILIER DE LA PLACE PIGALLE</h2>
                    <div id="modal-description">
                        <img src={pigalle} alt="La place Pigalle" style={{ height: "400px" }} />
                        <p>Après son mariage en 1871 avec Sabine Andriot qu’il a rencontrée lors de son séjour à Charlieu à l’invitation de son ami peintre Armand Charnay, Firmin-Girard s’installe à Paris, Boulevard de Clichy à proximité de la Place Pigalle. Des fenêtres de son atelier, il peut voir la place s’animer avec tous les personnages qui déambulent ou s’activent à leurs occupations.</p>
                        <p>Il a choisi ce quartier proche de la « Nouvelle Athènes » où de nombreux artistes avaient suivi la mode en y implantant leur atelier. Jean-Léon Gêrome, James Abbot Mc Neil Whistler et Emile Friant, notamment, sont ses voisins boulevard de Clichy. Dans une petite rue à l’arrière du boulevard, Alfred Stevens a son atelier.  Le quartier recélait aussi de nombreux cafés
                               dans lesquels les artistes fréquentaient des écrivains, générant aux  alentours de la place Pigalle une vie intellectuelle particulièrement dense qui en a faisait sa réputation.</p>
                        <p>A cette agitation culturelle, se mêlait un bouillonnement de petits métiers, vendeurs de rue, écrivain public,  marchands de friandises,  de fleurs ou de journaux, tout un monde que depuis son atelier Firmin-Girard observe et dont il fait des esquisses avant de les replacer dans ses compositions représentant la place.</p>
                        <img src={ecrivain} alt="L'écrivain'" style={{ height: "400px" }} />
                        <p>Certains jours la place s’animait des étals du marché. A d’autres moments, des  manèges et d’autres attractions foraines occupaient une partie de la place.  Toute cette vie grouillante fascinait Firmin-Girard.</p>
                        <img src={patissier} alt="Le patissier'" style={{ height: "400px" }} />
                        <p>Dans sa première version de la place, qu’il exposa au Salon de la Société des Beaux Arts de 1903, Firmin-Girard a peint l’arrière de la place avec les premiers immeubles du boulevard de Clichy où l’on peut apercevoir les grandes verrières des ateliers d’artiste.</p>
                        <img src={pigalle2} alt="La Place Pigalle" style={{ height: "400px" }} />
                        <p>Le bâtiment rose représenté à l’arrière-plan était un lieu mythique de la place. Le restaurant qui l’occupait portait le nom de « l’abbaye de Thélème » imaginée par Rabelais dans Gargantua. Au-dessus de la porte d’entrée figurait la devise de l’écrivain « Fais ce que voudras »
                        et à l’intérieur des fresques illustraient les aventures du géant. Transformé en cabaret, il fut prisé par les peintres et les écrivains du quartier. A proximité, à l’angle avec l’avenue Frochot, le « Rat mort » était un autre cabaret aussi très fréquenté.
                        On y rencontrait, entre autres, Verlaine et Rimbaud dont on raconte qu’il voulut tenter une expérience en coupant le poignet de son compagnon, mais aussi Courbet et Manet.
                        </p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="60px" left="750px" zIndex={3}>
                <ModalComponent image={orientale} alt="La belle orientale" style={{ height: "350px" }}>
                    <h2 id="modal-title">FIRMIN-GIRARD ORIENTALISTE</h2>
                    <div id="modal-description">
                        <p>Alors qu’il est tenté par la vague du japonisme qui commence à se répandre dans la vie artistique, ce qui lui vaudra un grand succès au Salon de 1873 avec La toilette japonaise, Firmin-Girard aborde, dans le même temps, la peinture orientaliste à l’instar de nombreux peintres du XIXème siècle. C’est lors ou à l’issue de voyages
                           en Orient ou en Afrique du nord que ceux-ci, en particulier, Eugène Delacroix, Théodore Chassériau, Eugène Fromentin ou Théodore Chassériau représentent des scènes orientales ou des paysages aux couleurs si particulières. Firmin-Girard avait vu leurs tableaux exposés au Salon. Il avait aussi eu connaissance des travaux de son
                           maître Charles Gleyre que celui-ci avait réalisés lors de son périple oriental avec son mécène américain.</p>
                        <p>Firmin-Girard ne foule pas la terre d’Orient. Il se contente d’une documentation particulièrement fouillée  et puise son inspiration dans une iconographie abondante, comme ce fut le cas pour ses tableaux japonisants dans lesquels le luxe de détails et la richesse du décor créent l’illusion de la réalité.</p>
                        <p>On ne connaît, en fait, dans sa peinture que deux œuvres orientalistes, <i>La Mauresque</i> et <i>La belle Orientale</i>.</p>
                        <img src={orientale} alt="Le belle orientale" style={{ height: "400px" }} />
                        <p>La belle Orientale représente une femme à demi-allongée sur un tapis richement coloré, vêtue d’un sarouel et d’une tunique parée de bijoux. Tandis qu’elle s’évente d’une main, elle tient l’embout d’un narguilé de l’autre. Par la prolifération de détails, les céramiques du mur, les étoffes jetées négligemment, le mobilier ouvragé,
                           le narguilé et le brûleur d’encens, Firmin-Girard cherche à entraîner le spectateur dans l’univers envoûtant de l’Orient qu’il a lui-même découvert dans les récits de voyage ou dans ces tableaux orientalistes exposés au Salon.</p>
                        <img src={mauresque} alt="La mauresque" style={{ height: "600px" }} />
                        <p>Dans La Mauresque, le décor est plus limité, même s’il reste caractéristique d’un intérieur oriental avec ces céramiques et ces tapis. Firmin-Girard s’est véritablement concentré sur le personnage dont la tenue chatoyante et les étoffes attirent le regard. Elle semble préparer le mélange de tabac et d’essences de fruits destiné
                           à être posé dans la partie supérieure du narguilé pout être fumé.</p>
                        <p>Malgré l’ambiance qui se dégage de ces tableaux, Firmin-Girard ne semble pas avoir convaincu. Il ne les présenta pas au Salon, mais  poursuivant sa parenthèse exotique ce fut avec ses tableaux japonisants qu’il parvint à emporter l’adhésion du public.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="80px" left="1230px" zIndex={1}>
                <ModalComponent image={farm} alt="La ferme" style={{ height: "320px" }}>
                    <h2 id="modal-title">FIRMIN-GIRARD À LA CAMPAGNE</h2>
                    <div id="modal-description">
                        <img src={farm} alt="La ferme" style={{ height: "400px" }} />
                        <p>Après les années 1870 durant lesquelles les succès se sont enchaînés avec, en particulier, Le Quai aux fleurs, Firmin-Girard va reprendre le chemin de la campagne. Ses origines rurales, ses souvenirs, lorsqu’encore étudiant il se rendait à Barbizon avec ses amis peindre la nature, le conduisent à redécouvrir les richesses qu’offre
                        la campagne, tout particulièrement, ses paysages, ses constructions, ses habitants et leur mode de vie.
                            Dans un premier temps, la campagne lui sert de décor dans lequel il met en scène ses personnages en costume d’époque ou de la bourgeoisie en robe et chapeau à la mode émerveillée par les animaux de la ferme.</p>
                        <p>Puis les bourgeoises de la ville ont laissé la place aux fermières et à leurs activités. Firmin-Girard devient un interprète de la vie rurale pour laquelle il manifeste un attrait grandissant et  rejoint les peintres tels Millet, Lhermitte, Jules Breton et son ami Paul Vayson qui ont  leur art à la peinture des paysans.</p>
                        <img src={millstone} alt="Les meules" style={{ height: "400px" }} />
                        <p>Firmin-Girard dans ces années 1890 après son adhésion à la Société Nationale des Beaux-Arts va centrer une partie de son oeuvre à la peinture des hommes et des femmes qui travaillent dans les fermes et les champs. Attaché à dépeindre la vie rurale telle qu’il la voit.  Alors que la mécanisation de l’agriculture commence à se développer,
                           il prend le parti d’une iconographie des travaux exécutés avec un outillage primitif, décrivant avec réalisme la situation des paysans telle qu’il l’observe dans les régions où il se rend, en particulier dans l’arrière pays d’Ault-Onival où il séjourne une partie de l’été ou à proximité de Charlieu d’où son épouse est originaire.</p>
                        <p>Firmin-Girard dépeint avec précision l’activité rurale, la garde des chèvres et des moutons, la nourriture de la volaille, des lapins ou des cochons, le labourage des champs, la moisson et le glanage. Témoignant d’une union harmonieuse entre les hommes et la nature, il offre un visage aimable de la campagne qui lui rappelle son enfance
                           lorsqu’avec son père il parcourait les paysages du Haut-Bugey.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="0px" left="1730px" zIndex={9}>
                <ModalComponent image={godmother} alt="Le jardin de la marraine" style={{ height: "400px" }}>
                    <h2 id="modal-title">LES FEMMES AU JARDIN DE FIRMIN-GIRARD</h2>
                    <div id="modal-description">
                        <p>Son goût pour les fleurs que l’on avait déjà pu observer dans ses « marchés aux fleurs » conduit Firmin Girard à en faire un de ses thèmes favoris</p>
                        <img src={godmother} alt="Le jardin de la marraine" style={{ height: "400px" }} />
                        <p>Il peint les femmes de son entourage dans des jardins ouvragés ou sur des terrasses, entourées de riches compositions florales. Les roses, les pivoines, les hortensias et les dahlias sont ses fleurs favorites, composant de véritables théatres de verdure. Parées de robes, de rubans et d’ombrelles et coiffées de chapeaux assortis, ses élégantes complètent le décor par leurs postures et les coloris de leurs vêtements.</p>
                        <p>Ces scènes sont en vogue dans le 19ème siècle finissant. D’autres artistes en font aussi un des sujets qu’ils affectionnent. Auguste Toulmouche peint avec le même soin du détail que Firmin-Girard des femmes dans des décors somptueux de verdure. Claude Monet, notamment, dans ses Femmes au jardin conservé au musé d’Orsay, s’il se différencie des précédents par le traitement de sa peinture met en scène ses personnages dans
                         les mêmes postures et dans des compositions qui restent proches. Tous deux ont été élèves de Gleyre comme Firmin-Girard.</p>
                        <img src={roses} alt="L'allée de roses" style={{ height: "400px" }} />
                        <p>Les critiques et le public sauront rendre hommage à ces scènes. La nombreuse correspondance que Firmin-Girard entretenait avec son marchand Knoedler aux États-unis témoigne, d’ailleurs, de l’attrait qu’elles ont suscité auprès des collectionneurs américains.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="380px" left="40px" zIndex={4}>
                <ModalComponent image={japon} alt="La Toilette Japonaise" style={{ height: "320px" }} >
                    <h2 id="modal-title">FIRMIN-GIRARD, À L’HEURE JAPONAISE</h2>
                    <div id="modal-description">
                        <img src={japon} alt="La Toilette japonaise" style={{ height: "400px" }} />
                        <p>Le critique d’art de Cherville, dans l’Illustration du 30 août 1873 qui avait fait paraître une reproduction de La toilette japonaise de Firmin Girard rapportait</p>
                        <p>« Nous avons désormais une nouvelle école, l’école japonaise et nous sommes heureux de reproduire pour nos lecteurs, le tableau de l’un de ses représentants les plus distingués ».</p>
                        <p>Après la découverte des traditions, de la culture et des estampes japonaises présentées pour la première fois en Europe lors des expositions universelles de Londres puis de Paris en 1867, des écrivains, des peintres, mais aussi des musiciens, fascinés par tant d’exotisme, ont développé ce que l’on a appelé le japonisme.</p>
                        <p>Firmin Girard, qui a pu acquérir des objets traditionnels et des costumes japonais, est l’un de ces peintres. En 1872, il peint La femme à l’ombrelle,  durant cette même année où les premières toiles de ce mouvement sont exposés au Salon. On peut, en effet, en voir quatre parmi l’ensemble des peintures présentes, montrant des scènes japonaises,
                           Le bazar japonais d’Edouard Castres, Un perroquet de Charles-Auguste Escudier, Le bac japonais de Paul-Marie Lenoir et La Mousouné d’un dai-myo d’Adrien Marie. Quelques années auparavant, James-Jacques-Joseph Tissot avait déjà présenté ses japonaiseries, se limitant, toutefois, à mettre en scène des objets et des décors japonais. Ce mouvement,
                           fort du succès qu’il rencontre auprès du public, va se poursuivre durant quelques années avec de célèbres artistes, dont, en particulier, Van Gogh et Monet qui peint en 1886 sa » japonaise à l’ombrelle ».</p>
                        <p>En 1873, Firmin Girard réalise deux toiles présentant des scènes japonaises, Les japonaises au ruisseau et La toilette japonaise qui, exposée au salon de cette même année, suscite l’enthousiasme  du public et de la critique. Charles Garnier, l’architecte de l’opéra, se dit charmé par la grâce du sujet, l’élégance des tons, la parfaite exécution et
                           la richesse du décor. Castagnary considère la peinture de Firmin Girard comme l’une des œuvres les plus réussies du salon.</p>
                        <img src={pont} alt="Japonaises au ruisseau" style={{ height: "400px" }} />
                        <p>La toilette japonaise est, sans doute, l’une de ses œuvres les plus connues et les plus reproduites. Après son acquisition par le collectionneur new-yorkais, Auguste Belmont, qui l’a présentée en 1876, dans le cadre de l’exposition de sa collection privée dans sa résidence de la 5ème avenue, elle est, aujourd’hui, conservée au musée d’art de Porto-Rico.
                           On a, toutefois, pu la voir en 1983 à New-York et en 1988 à Paris et à Tokyo, lors de l’exposition sur le japonisme et plus récemment dans le film de Bertrand Bonello l’Apollonide.</p>
                        <p>Ces scènes japonaises ont, en effet séduit les collectionneurs américains. La japonaise à l’ombrelle a longtemps fait partie de la collection de William Waldorf Astor, homme politique new-yorkais, avant sa dispersion en 1926.</p>
                        <img src={ombrelle} alt="La japonaise à l'ombrelle" style={{ height: "400px" }} />
                        <p>Une quatrième toile de Firmin Girard datant également de 1873 a été acquise par un autre collectionneur américain Henry Gibson de Philadelphie. Représentant « deux japonaises nourrissant des canards », elle est restée longtemps inconnue, la plupart des recherches sur l’œuvre de Firmin Girard ne mentionnant que trois tableaux relevant de ce mouvement du japonisme.</p>
                        <p>Après ces deux années 1872 et 1873, Firmin Girard abandonne sa parenthèse japonaise. Elle lui a, pourtant, apporté le succès attendu. Il n’abandonne, cependant, pas les scènes en costume, puisqu’il réalisera de nombreuses peintures à caractère historique avec des personnages en costume louis XIII ou du 18 ème siècle comme, par exemple, ses fiancés.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="440px" left="480px" zIndex={5}>
                <ModalComponent image={berger} alt="Le berger" style={{ height: "250px" }}>
                    <h2 id="modal-title">MOUTONS ET BERGER PAR FIRMIN-GIRARD</h2>
                    <div id="modal-description">
                        <p>Avec le produit de la vente de son Quai aux fleurs à un collectionneur américain, Firmin-Girard se fait construire une villa à Onival sur mer, en bord des falaises, à proximité du bourg d’Ault, déjà fréquenté par quelques peintres dont notamment Jules Cogniet ou Auguste Hillemacher un de ses élèves. Le site est encore vierge, si ce n’est la présence de quelques chaumières habitées par des familles de pêcheurs.
                            Firmin-Girard, séduit par la beauté et l’authenticité du paysage et de ses habitants, mais aussi par les couleurs du ciel et de la
                             mer qui changent à tout moment a décidé de s’y implanter et d’y séjourner durant les périodes estivales, voyant dans ces lieux de nombreux sujets pour ses peintures.</p>
                        <p>Arpentant les pâtures qui s’étendent depuis sa villa le long de la côte jusqu’à la baie de la Somme, séparées de la mer par les Bas-Champs du Hâble d’Ault recouverts par les eaux lors des grandes marées, il est attiré par les moutons qui semblent familiers du paysage, occupant l’espace sous l’œil attentif du berger et de son chien qui veille sur le troupeau.</p>
                        <img src={moutons} alt="Le berger et ses moutons" style={{ height: "400px" }} />
                        <p> Il peint de nombreuses toiles sur place  représentant la scène du berger et de ses moutons dans ces paysages caractéristiques de la région. La mer lui sert d’horizon, sans que rien ne vienne heurter la vue sauf parfois, quelques meules de foin ou la cabine du berger montée sur ses roues pour lui permettre d’itinérer au gré du déplacement de son troupeau dans cet espace immense et sans limites.</p>
                        <p>On reconnaît de très loin le berger à son chapeau et à sa grande cape de laine de mouton, striée de lignes verticales, qui le protège de la pluie et du vent qui souffle par rafales depuis la mer sans que rien ne l’arrête. Appuyé sur sa grande canne, il surveille sans relâche son troupeau jusqu’au coucher du soleil. La description qu’a faite Zacharie Astruc du tableau de Millet, Berger ramenant son troupeau le soir,
                            pourrait parfaitement s’appliquer aux tableaux de Firmin-Girard. « Ce calme, ce mystère des premières ombres, ce caractère sauvage et doux de la nature[…] vous plonge dans une émotion profonde ».</p>
                        <img src={coucher} alt="Le coucher de soleil" style={{ height: "400px" }} />
                        <p>Parfois Firmin-Girard saisit des moments particuliers, couchers du soleil, arc-en-ciel, conférant aux lieux une atmosphère étrange sans cependant que la quiétude du troupeau ne s’en trouve perturbée.</p>
                        <p>Rien n’affole le troupeau, confiant dans son berger et son chien, semble vouloir nous dire le peintre dans ces moments où la rudesse du temps contraste avec la douceur de la scène.</p>
                        <p>Si Firmin-Girard semble avoir eu un attachement particulier à ces lieux et à leurs occupants, alors qu’il n’était pas encore un peintre consacré il avait déjà peint une scène de berger dans un paysage de montagne qui évoque le Bas-Jura de son enfance. L’influence de Gleyre semble ici particulièrement manifeste.</p>
                        <p>Ses  peintures représentant des moutons et leur berger ne seront d’ailleurs pas limitées à la Picardie. La campagne aux alentours de Charlieu, autre région de prédilection du peintre, lui offre aussi des occasions pour satisfaire son attirance pour les scènes pastorales.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="450px" left="880px" zIndex={2}>
                <ModalComponent image={portrait} alt="Portrait" style={{ height: "350px" }}>
                    <h2 id="modal-title">FIRMIN-GIRARD, LES PORTRAITS</h2>
                    <div id="modal-description">
                        <p>Firmin-Girard a peint un nombre limité de portraits préférant les scènes dans lesquelles ses personnages, parfois en gros plan, s’adonnent à leurs occupations.</p>
                        <p>Alors qu’il est encore étudiant, au cours des années 1860, il peint des portraits suite à des commandes ou pour des membres de sa famille. Il fait aussi le portrait de ses hôtes pour les remercier de l’avoir accueilli. C’est notamment le cas du portrait de son ami peintre, Paul Vayson,
                        élève comme lui de l’atelier Gleyre, qui l’a invité dans le château familial du Vaucluse. C’est aussi le portrait qu’il fait de la mère d’Armand Charnay chez qui il est venu se reposer des épreuves de la guerre de 1870.</p>
                        <img src={portrait} alt="Portrait de Jeanne" style={{ height: "400px" }} />
                        <p>Après cette période au cours de laquelle il répond la plupart du temps à des  commandes, il se limite, à quelques exceptions près, à ses enfants, sa fille Jeanne et son fils Marc. On ne lui connaît pas d’autoportrait et s’il peint souvent sa femme, c’est toujours dans des mises en scène,
                        en particulier dans des jardins, ou lisant devant sa cheminée comme dans l’un de ses derniers tableaux.</p>
                        <p>Il représente son fils à des âges différents, à 8 ans en costume de campagne dans une allée boisée, adolescent en tenue de collégien du collège Stanislas à Paris et à 20 ans alors qu’il vient de rentrer à l’Ecole Polytechnique. Le portrait de Marc enfant est exposé au Salon de 1883.</p>
                        <p>Lors du Salon de la Société Nationale des Beaux Arts de 1892, il présente le portait qu’il a fait de sa fille.</p>
                        <img src={calvet} alt="Portrait" style={{ height: "400px" }} />
                        <p>Exceptionnellement, il répond à des commandes comme celle pour le portrait de la Baronne de Rochetaillée présenté au Salon de 1875. Les critiques lors du Salon ne troublent pas son commanditaire qui exprime dans une lettre  à quel point il retrouve « sa Marguerite » dans le tableau.</p>
                        <p><i> « […] Ma vraie Marguerite. Je ne sais ce qu’était le portrait qui a subi bien des critiques;
                            Mais je sais ce qu’il en est , il me satisfait, il me ravit et m’enchante; je ne permets à personne de ne pas retrouver Marguerite toute entière dans ce délicieux tableau aussi bien du point de vue artistique que parfait comme ressemblance. […] » « […] Ma vraie Marguerite. Je ne sais ce qu’était le portrait
                            qui a subi bien des critiques; Mais je sais ce qu’il en est , il me satisfait, il me ravit et m’enchante; je ne permets à personne de ne pas retrouver Marguerite toute entière dans ce délicieux tableau aussi bien du point de vue artistique que parfait comme ressemblance. […] »
                        </i></p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="430px" left="1180px" zIndex={8}>
                <ModalComponent image={market} alt="Le marché aux fleurs" style={{ height: "500px" }}>
                    <h2 id="modal-title">RECORD DES ENCHÈRES POUR FIRMIN-GIRARD: LE QUAI AUX FLEURS</h2>
                    <div id="modal-description">
                        <img src={market} alt="Le marché aux fleurs" style={{ height: "600px" }} />
                        <p>Estimé 300,000 – 500 000 USD, le Quai aux fleurs fut vendu 3,021,000 USD chez Sotheby’s le 9 mai 2014.</p>
                        <p>En 1876 lors de la présentation du Quai aux fleurs au salon, vendu à 85 000 francs or à l’américain Butler par l’intermédiaire de Knoedler, une galerie new-yorkaise, la notoriété de Firmin Girard s’affirme.</p>
                        <p>Les critiques fusent, Zola déplore « une perfection poussée jusqu’à l’impossible»,</p>
                        <p>« le sentiment d’avoir chaussé des lunettes pour myope qui vous aveuglent tellement les détails se détachent les uns des autres » et il déclare :</p>
                        <p>« Ah ! Quelle infamie ce vil triomphe de l’argent ! ».</p>
                        <p>Alors que le Bon Marché s’agrandit encore sous la direction de l’architecte Boileau, Zola n’a pas commencé Au Bonheur des Dames mais la critique du Quai aux fleurs sonne comme une préface acerbe à l’encontre du déploiement des apparats de la Belle Époque qu’il moquera tant.</p>
                        <p>Le Quai aux fleurs fut d’abord une œuvre de commande. Firmin-Girard venait de se faire connaître aux Etats-Unis par l’intermédiaire de la galerie Goupil-Knoedler qui diffusait des gravures des peintres français. Alexandre Turney Stewart, homme d’affaires new-yorkais qui avait fait fortune dans le textile et possédait un grand magasin sur Broadway
                            passe commande à Firmin-Girard d’une peinture représentant les quais de Paris animés par le marché aux fleurs et dans laquelle il fixe au peintre une condition particulière, celle de se représenter au centre du tableau. Cette commande ne pouvait que satisfaire le peintre qui trouvait là une occasion d’assouvir sa passion pour les fleurs mais aussi
                            d’exprimer pleinement son talent en montrant la vie parisienne et ses habitants revêtus de tenues à la mode. Celui-ci s’exécute, demande à la préfecture de Paris l’autorisation de s’installer sur la voie publique et peint des esquisses des lieux et des personnages, puis travaille dans son atelier pour finaliser son œuvre. Cela lui prend plusieurs
                            mois au cours de l’année 1875, à tel point qu’il ne peut satisfaire son commanditaire, décédé entre temps.  Le tableau achevé Firmin-Girard le présente pour être exposé au Salon de 1876. C’est un triomphe auprès du public. On dit qu’il avait fallu mettre en place un service d’ordre pour contenir la foule qui se pressait devant le tableau. Les critiques
                            affluent, certaines pour louer le talent de l’artiste, d’autres pour en contester la valeur artistique, en prétendant qu’il est de l’école des appareils photographiques. Le tableau fait aussi l’objet de nombreuses caricatures dans les journaux illustrant les salons. On y voit par exemple un visiteur incommodé par le parfum des fleurs, tandis qu’un autre
                                compte les pétales des fleurs.</p>
                        <p>Les marchands d’art, attirés par le succès du tableau, sollicitent Firmin-Girard pour le vendre. Plusieurs galeries de Londres et de New-York le pressent. C’est finalement Knoedler qui fait l’affaire. Il envoie un télégramme au peintre depuis Alger où il passe l’hiver, pour lui annoncer la vente du tableau, pour un montant impressionnant, à un autre homme
                            d’affaires américain Theron R. Butler, propriétaire de compagnies de chemin de fer. Celui-ci l’accroche dans sa résidence de la cinquième avenue à New-York. Madame Butler écrit au peintre, quelques semaines plus tard, pour lui exprimer toute son admiration et celle de ses visiteurs devant le tableau. Il sera présenté dans plusieurs expositions aux Etats-Unis,
                                au Canada et en Europe ainsi que très récemment dans des salons d’antiquité dont la biennale de Paris de 2014, 138 ans après qu’il ait quitté Paris.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="730px" left="0px" zIndex={6}>
                <ModalComponent image={pasture} alt="paturage" style={{ height: "270px" }}>
                    <h2 id="modal-title">FIRMIN-GIRARD PAYSAGISTE</h2>
                    <div id="modal-description">
                        <p>Ses camarades de l’atelier Gleyre l’avaient surnommé « le dernier des paysagistes ». Firmin-Girard a découvert le paysage à Barbizon, à la suite des  peintres, les Corot, Millet, Diaz, Théodore Rousseau, Jules Breton qui ont fréquenté, les premiers, cette région de Fontainebleau dès les années 1820.</p>
                        <img src={landscape} alt="Paysage" style={{ height: "400px" }} />
                        <p>Tandis qu’il étudie dans l’atelier Gleyre et à l’Ecole des Beaux-Arts et se prépare au concours de Rome, ses amis, en particulier Jules Le Cœur, l’entraînent peindre sur le motif la forêt de Fontainebleau et ses environs. Firmin-Girard au coté de ceux que l’on nommera, quelques années plus tard, les
                           impressionnistes, découvre la peinture de plein air. Il peint des après-midi entiers des pochades qu’il ramène le soir et accroche sur les murs de l’auberge Ganne où il réside. Il s’émancipe progressivement de la figuration classique à laquelle il s’était consacré jusqu’alors.</p>
                        <p>Cette initiation à la peinture de paysage témoigne déjà d’une grande maîtrise de la représentation de la nature et des paysages qu’il confortera au fil des années.</p>
                        <p>Son goût pour le paysage le suivra tout au long de sa carrière. Nombreuses seront ses toiles des divers lieux qu’il  a fréquentés qu’il s’agisse, notamment, de la région de Charlieu dans la Loire, avec par exemple ses diverses représentations des bords du Sornin ou des falaises et du littoral de la Manche.</p>
                        <img src={borddemer} alt="Bord de mer" style={{ height: "400px" }} />
                        <p>A Paris, Firmin-Girard fréquente les cercles et les dîners où se retrouvent les peintres de paysages, Prosper Galerne, Antoine Guillemet, Paul Vayson, Paul Sain, notamment. On les voit les soirs d’été à « la pêche miraculeuse » sur les bords de la Seine au Bas-Meudon, dont il fait une peinture. Son amitié avec Armand Charnay
                           qui s’était fait construire une maison à Marlotte à proximité de Barbizon  lui donne l’occasion de revenir peindre les paysages de cette région, mais aussi de peindre à ses cotés, en particulier lors de séjours à Charlieu.</p>
                        <p>Jusqu’à la fin de sa vie Firmin-Girard conservera cet attrait pour la peinture de paysage, qu’il agrémente parfois de personnages ou d’animaux.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="740px" left="440px" zIndex={7}>
                <ModalComponent image={feu} alt="ferronnier" style={{ height: "405px" }}>
                    <h2 id="modal-title">LES PETITS MÉTIERS PAR FIRMIN-GIRARD</h2>
                    <div id="modal-description">
                        <img src={feu} alt="ferronnier" style={{ height: "400px" }} />
                        <p>Lorsqu’en 1890, il rejoint la Société Nationale des Beaux-Arts qui vient d’être relancée par Meissonier, Puvis de Chavannes, Braquemond et Rodin pour se démarquer du Salon de plus en plus dominé par la peinture « officielle » et dont il devient sociétaire, Firmin-Girard se rapproche des courants naturalistes et évolue vers des sujets empruntés aux régions dans lesquelles il séjourne régulièrement, la Picardie,
                            Charlieu et ses environs, la Bresse de son enfance.</p>
                        <p>Durant cette période charnière entre la fin du XIXème siècle et les débuts du XXème, entre un monde qui se clôt et un autre qui s’ouvre à la modernité, Firmin-Girard va s’attacher à représenter la vie dans la campagne,  ses travaux à la ferme, ses métiers artisanaux comme s’il pressentait leur disparition. Après ses années de succès, il semble mettre à profit sa vocation et son talent pour témoigner des activités
                            traditionnelles qu’il côtoie et de sa vision des régions qui lui sont chères et de leurs habitants</p>
                        <img src={roy} alt="Clément Roy" style={{ height: "400px" }} />
                        <p>Rendant régulièrement visite au menuisier installé à Onival, Clément Roy, il le représente façonnant une pièce de bois, alors qu’il est interrompu par sa femme accompagnée de sa fille.</p>
                        <img src={tisserand} alt="tisserand" style={{ height: "400px" }} />
                        <p>Le tissage qui se pratiquait à Charlieu depuis plusieurs siècles avait résisté à la mécanisation qui commençait à se développer dans l’industrie textile. les manufactures  de la région avaient maintenu les petits ateliers à domicile dans lesquels, la plupart du temps, des femmes s’activaient sur les métiers à tisser.</p>
                        <p>Le tisserand construisait le bâti de son métier avec les pièces métalliques que lui fournissait son commanditaire. Firmin-Girard peint plusieurs tableaux dans lesquelles le tisserand s’affaire à son métier pour tisser une toile dont il a reçu commande.</p>
                        <p>La pêche à l’épervier qui se pratiquait dans le Sornin aux abords de Charlieu nécessitait un filet particulièrement fin. les tisseurs utilisaient de la lignette, sorte de ficelle très fine, pour fabriquer de tels filets. Dans son tableau les lignettes, Firmin-Girard représente un homme filant la lignette pour en faire un écheveau qui servira pour la confection des filets.</p>
                        <p>Dans un de ses derniers tableaux, il peint un potier à Vallauris, lors d’un séjour sur la Côte d’azur où il est venu passer l’hiver avec sa femme.</p>
                        <p>Ces tableaux sont un précieux témoignage de ces métiers qui subsistaient malgré l’industrialisation naissante et la mécanisation qui se développait. Si les scènes qu’il peint procurent, par tous les détails que l’on peut apercevoir, une image fidèle de la réalité du travail de ces artisans, et de leur environnement, Firmin-Girard cherche aussi à rendre l’atmosphère qui règne dans ces ateliers, par la lumière qui
                            filtre derrière les fenêtres, les tonalités chaudes des murs et du mobilier ou la quiétude des personnes qui transparaît.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
            <CanvasItem top="850px" left="830px" zIndex={4}>
                <ModalComponent image={maquignon} alt="Le maquignon" style={{ height: "235px" }}>
                    <h2 id="modal-title">FIRMIN-GIRARD À LA CAMPAGNE</h2>
                    <div id="modal-description">
                        <img src={maquignon} alt="Le maquignon" style={{ height: "400px" }} />
                        <p>Après les années 1870 durant lesquelles les succès se sont enchaînés avec, en particulier, Le Quai aux fleurs, Firmin-Girard va reprendre le chemin de la campagne. Ses origines rurales, ses souvenirs, lorsqu’encore étudiant il se rendait à Barbizon avec ses amis peindre la nature, le conduisent à
                           redécouvrir les richesses qu’offre la campagne, tout particulièrement, ses paysages, ses constructions, ses habitants et leur mode de vie.</p>
                        <p>Dans un premier temps, la campagne lui sert de décor dans lequel il met en scène ses personnages en costume d’époque ou de la bourgeoisie en robe et chapeau à la mode émerveillée par les animaux de la ferme.</p>
                        <img src={forest} alt="Dans la foret'" style={{ height: "400px" }} />
                        <p>Puis les bourgeoises de la ville ont laissé la place aux fermières et à leurs activités. Firmin-Girard devient un interprète de la vie rurale pour laquelle il manifeste un attrait grandissant et  rejoint les peintres tels Millet, Lhermitte, Jules Breton et son ami Paul Vayson qui ont  leur art à la peinture des paysans.</p>
                        <img src={moisson} alt="La moisson" style={{ height: "400px" }} />
                        <p>Firmin-Girard dans ces années 1890 après son adhésion à la Société Nationale des Beaux-Arts va centrer une partie de son oeuvre à la peinture des hommes et des femmes qui travaillent dans les fermes et les champs. Attaché à dépeindre la vie rurale telle qu’il la voit.  Alors que la mécanisation de l’agriculture commence à se développer, il prend le parti d’une iconographie des travaux exécutés
                            avec un outillage primitif, décrivant avec réalisme la situation des paysans telle qu’il l’observe dans les régions où il se rend, en particulier dans l’arrière pays d’Ault-Onival où il séjourne une partie de l’été ou à proximité de Charlieu d’où son épouse est originaire.</p>
                        <p>Firmin-Girard dépeint avec précision l’activité rurale, la garde des chèvres et des moutons, la nourriture de la volaille, des lapins ou des cochons, le labourage des champs, la moisson et le glanage. Témoignant d’une union harmonieuse entre les hommes et la nature, il offre un visage aimable de la campagne qui lui rappelle son enfance lorsqu’avec son père il parcourait les paysages du Haut-Bugey.</p>
                    </div>
                </ModalComponent>
            </CanvasItem>
        </CanvasScroll>
    )
}