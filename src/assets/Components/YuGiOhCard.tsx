import { useState } from "react";
import "../CSS/Card.css";
import Etoile from "./Etoile";

const YuGiOhList = [
  {
    id: 0,
    name: "Yugi",
    imgSrc: "public/img/Gif-Yugi.gif",
    description: `Yugi Mutou is a fictional character and the main protagonist of the
        Yu-Gi-Oh! manga series created by Kazuki Takahashi. Yugi is introduced
        as a teenager who is solving an Ancient Egyptian artifact known as the
        Millennium Puzzle, hoping that it will grant him his wish of making
        friends.`,
  },
  {
    id: 1,
    name: "Joey",
    imgSrc: "public/img/Gif-Joey.gif",
    description:
      "Joey started out as a bully, but becoming friends with Yugi Muto changes this. Joey can seem gullible, sarcastic, impulsive, and occasionally cocky; but he is also heroic, loyal, bold, kind-hearted, caring, good-natured, funny, brave, selfless and loving.",
  },
  {
    id: 2,
    name: "Bernard",
  },
];

function YuGiOhCard() {
  const [index, setIndex] = useState(0);

  // Fonction changement de carte +1 et -1

  const handleIncremente = () => {
    setIndex(index + 1);
  };

  const handleDecremente = () => {
    setIndex(index - 1);
  };
  return (
    <figure>
      {/* On vient selection la list YuGiOhList et on viens choisir l'index de chaque élément */}
      <figcaption>{YuGiOhList[index].name}</figcaption>
      {/* Nombre d'étoile sur la carte */}
      <Etoile stars={4} />
      {/* Je pose la question si il y'a une image si oui j'affiche l'image sinon je mets un message  */}
      {YuGiOhList[index].imgSrc ? (
        <img className="photo" src={YuGiOhList[index].imgSrc}></img>
      ) : (
        <p>???</p>
      )}
      <figcaption className="description">
        {YuGiOhList[index].description}
      </figcaption>
      {/* Je pose une question pour savoir si mon index de la list et supérieure si oui j'affiche le button sinon je l'enleve */}
      <section className="buttonCard">
        {index > 0 ? <button onClick={handleDecremente}>Précédent</button> : ""}
        {/* Je pose la même question mais cette fois-ci si mon index et inferieur à la longueur de la liste -1  */}
        {index < YuGiOhList.length - 1 ? (
          <button onClick={handleIncremente}>Suivant</button>
        ) : (
          ""
        )}
      </section>
    </figure>
  );
}

export default YuGiOhCard;
