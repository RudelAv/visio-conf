import { User } from "../../entities/User";
import { SignupRepository } from "../../interface/reposities/signup-repository";
import * as admin from "firebase-admin";

export class SignUpEmailRepository implements SignupRepository {
    async createUser(user: User): Promise<User> {
        try {
            const userRecord = await admin.auth().createUser({
                email: user.email,
                password: user.password,
            });
            return {
                id: userRecord.uid,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
                dateCreation: user.dateCreation,
            }
        } catch (error: any) {
            console.log(error)
            throw error
        }
    }
}
