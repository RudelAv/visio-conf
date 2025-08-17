import { PORT } from "./domain/config/configDev";
import server from "./server";
import db from "../firebase"
import userRoute from "./presentation/routes/user.route";
import signupRoute from "./presentation/routes/signup.route";
import { SignUpEmail } from "./domain/uses-case/signup/signUpEmail";
import { SignUpEmailRepository } from "./domain/repositories/signup/signup-email-repositories";

require('dotenv').config();

(async () => {
    const userRouter = userRoute()
    const signupMiddleware = signupRoute(
        new SignUpEmail(new SignUpEmailRepository())
    )
    server.use('/api/signup', signupMiddleware)
    server.use('/api/user', userRouter)
    const onlineserver = server.listen(PORT, () => console.log("Api is running at http://localhost:" + PORT))
    const signals = ["SIGINT", "SIGTERM", "SIGQUIT"] as const;
    console.log("voici la bd", db)
    for (let i = 0; i < signals.length; i++) {
        const signal = signals[i];
        process.on(signal as NodeJS.Signals, async () => {
            onlineserver.close();

            process.exit(0);
        });
    }

})()
