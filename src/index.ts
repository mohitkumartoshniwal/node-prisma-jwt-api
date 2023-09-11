import * as dotenv from "dotenv";
dotenv.config()

import app from './server'
import config from "./config";

app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`)
})