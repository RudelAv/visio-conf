import { object, z } from "zod";

export const signupSchema = object({
    body: object({
        name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
        email: z.string().email("Veuillez entrer un email valide"),
        password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
        confirm_password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    }).refine((data) => data.password === data.confirm_password, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirm_password"],
    })
});
    