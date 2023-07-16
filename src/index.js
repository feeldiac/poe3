const poems = [
  {
    id: 1,
    title: "",
    text: `Las preguntas que brotan
            del suelo y no recoges
            van tapando la tierra,
            pudriendo el suelo.`,
  },
  {
    id: 2,
    title: "",
    text: `Cómo cansa a veces
            este laberinto sinusoidal
            del que todos escapan.`,
  },
  {
    id: 3,
    title: "",
    text: `Los recuerdos son pequeñas tormentas  
            que van tranquilamente creando estragos  
            en la tierra y en el mar, 
            quedando en boca de todos. 
            Oscurecen, enloquecen, ahogan 
            y lo peor. 
            Regresan.`,
  },
  {
    id: 4,
    title: "",
    text: `Camino hacia la puerta,
        miro por la rendija,
        me observo,
        abro,
        entro,
        me observo,
        miro por la rendija,
        camino hacia la puerta`,
  },
  {
    id: 5,
    title: "",
    text: `Correr y crear,
        crear y creer,
        creer y crecer,
        creer y criar,
        criar y correr.
        Ser nuestros propios padres y madres.`,
  },
];

const getRandomPoem = () =>
  poems[Math.floor(Math.random() * poems.length)]?.text ??
  "No se encontró un texto para este poema.";

module.exports = { getRandomPoem };
