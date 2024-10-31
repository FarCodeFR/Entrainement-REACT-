// Etoile automatisé
//    le props qu'on importe : puis on definit son type au lieu d'utiliser une interface
function Etoile({ stars }: { stars: number }) {
  // ici on vient créer un new tableau (Array) avec stars en paramètre puis .fill(null) qui vas remplacer les cases vides par null en fonction de combien d'étoile on à mis.
  const tableau = new Array(stars).fill(null);

  return (
    <>
      <section>
        {/* Ensuite on créer un nouveau tableau qui viendra remplacer les emplacement null par des images étoile */}
        {tableau.map(() => {
          return <img className="etoile" src="../public/img/Etoile.png"></img>;
        })}
      </section>
    </>
  );
}

export default Etoile;
