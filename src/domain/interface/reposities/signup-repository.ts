import { User } from "../../entities/User";

export interface SignupRepository {
    createUser(user: User): Promise<User>;
}
