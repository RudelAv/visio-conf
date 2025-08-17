import { getUtilisateurs, createUtilisateur } from "../../firebase/User";

createUtilisateur("1", { nom: "John Doe", email: "john.doe@example.com" });
getUtilisateurs().then((users) => console.log(users));