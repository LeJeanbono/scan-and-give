import axios from "axios";

// Passer ce flag à true pour mocker le serveur
const MOCKED = false;

let api;

if (!MOCKED) {
  api = {
    getAssociations: () =>
      axios.get("/api/associations").then(response => response.data),
    getAssociation: id =>
      axios.get("/api/associations/" + id).then(response => response.data),
    addDon: (hash, date, associationId) =>
      axios
        .post("/api/dons", JSON.stringify({ hash, date, associationId }), {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.data),
    getDons: () => axios.get("/api/dons").then(response => response.data)
  };
} else {
  api = {
    getAssociations: () =>
      Promise.resolve([
        {
          id: 1,
          nom: "Bretagne Vivante",
          image: "logo_bretagnevivante.png",
          description:
            "Consciente de ne pouvoir agir seule, Bretagne Vivante initie et contribue à de nombreux projets et démarches interassociatives, pour peser ensemble dans le débat public.\nPour faire avancer la prise en compte de la nature, nous développons aussi de nombreux partenariats avec l’Etat, les collectivités, les entreprises, les écoles, les agriculteurs, etc."
        },
        {
          id: 2,
          nom: "APF France Handicap",
          image: "apf.png",
          description:
            "APF France handicap propose, sur l’ensemble du territoire national, tous les types d’établissements et services pour accompagner l’inclusion de la personne en situation de handicap.\nNous avons à cœur d’offrir aux personnes des réponses diversifiées, au plus près de leurs attentes.\nNous privilégions un parcours inclusif pour tous, dans le respect des choix de vie de chacun."
        },
        {
          id: 3,
          nom: "Action contre la Faim",
          image: "action_contre_faim.png",
          description:
            "Action contre la Faim lutte contre la faim dans le monde. Sa mission est de sauver des vies en éliminant la faim par la prévention,\nla détection et le traitement de la sous-nutrition, en particulier pendant et après les situations d’urgence liées aux conflits et aux catastrophes naturelles."
        }
      ]),
    getDons: () =>
      Promise.resolve([
        {
          associationId: "1",
          association: "Bretagne Vivante",
          image: "logo_bretagnevivante.png",
          dons: 1
        },
        {
          associationId: "2",
          association: "APF France Handicap",
          image: "apf.png",
          dons: 2
        },
        {
          associationId: "3",
          association: "Action contre la Faim",
          image: "action_contre_faim.png",
          dons: 1
        }
      ])
  };
}

export default api;
