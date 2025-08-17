import express from "express";
import { getUtilisateurs, createUtilisateur } from "../../../firebase/User";
export default function userRoute() {
    const router = express.Router();

    router.get("/", (req, res) => {
        getUtilisateurs().then((users) => res.json(users));
    });

    router.post("/", (req, res) => {
        createUtilisateur(req.body.id, req.body.data);
        res.json({ message: "Utilisateur créé avec succès" });
    });

    return router;
}