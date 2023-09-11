import merge from 'lodash.merge'



process.env.NODE_ENV = process.env.NODE_ENV ?? "development"

const stage = process.env.STAGE ?? "local"
let envConfig;

if (stage === "production") {
    envConfig = require('./prod').default
} else if (stage === "staging") {
    envConfig = require('./staging').default
} else {
    envConfig = require('./local').default
}

const defaultConfig = {
    stage,
    env: process.env.NODE_ENV,
    port: 3000,
    secrets: {
        dbUrl: process.env.DATABASE_URL,
        jwt: process.env.JWT_SECRET,
    }
}

export default merge(defaultConfig, envConfig)

