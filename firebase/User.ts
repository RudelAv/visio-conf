import * as admin from "firebase-admin";
import db from "../firebase"

export const getUser = async (uid: string) => {
    const user = await db.collection("users").doc(uid).get();
    return user.data();
}

export async function createUtilisateur(id: string, data: { nom: string; email: string; role?: string }) {
    try {
        await db.collection("utilisateurs").doc(id).set({
            nom: data.nom,
            email: data.email,
            role: data.role ?? "participant",
            dateCreation: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log(`✅ Utilisateur ${id} créé avec succès`);
    } catch (error) {
        console.error("❌ Erreur création utilisateur:", error);
    }
}

export async function getUtilisateurs() {
    try {
      const snapshot = await db.collection("utilisateurs").get();
      const utilisateurs: any[] = [];
      snapshot.forEach(doc => {
        utilisateurs.push({ id: doc.id, ...doc.data() });
      });
      return utilisateurs;
    } catch (error) {
      console.error("❌ Erreur lecture utilisateurs:", error);
      return [];
    }
}