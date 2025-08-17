import { User } from "../../entities/User";

export interface SignupUseCase {
    execute(user: User): Promise<User>;
}
    