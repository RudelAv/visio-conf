import { SignupUseCase } from "../../domain/interface/uses-cases/signup";
import express from 'express'
import { validate } from "../../domain/middleware/validate";
import { signupSchema } from "../../domain/schema/signup-schema";

export default function SignUpRouter(
    signUpEmailUseCase: SignupUseCase
) {
    const router = express.Router();

    router.post('/email', validate(signupSchema), (req, res) => {
        const user = req.body
        signUpEmailUseCase.execute(user)
            .then((user) => res.json(user))
            .catch((error) => res.status(500).json(error))
    })

    return router;
}