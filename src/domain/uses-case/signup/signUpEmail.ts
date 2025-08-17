import { User } from "../../entities/User";
import { SignupRepository } from "../../interface/reposities/signup-repository";
import { SignupUseCase } from "../../interface/uses-cases/signup";

export class SignUpEmail implements SignupUseCase {
    signUpRepository: SignupRepository;

    constructor(signUpRepository: SignupRepository) {
        this.signUpRepository = signUpRepository;
    }

    execute(user: User): Promise<User> {
        return this.signUpRepository.createUser(user);
    }
}