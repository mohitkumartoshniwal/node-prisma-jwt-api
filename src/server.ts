import express from 'express'
import morgan from "morgan";
import cors from "cors";


import router from './router'
import { protect } from './modules/auth';
import { createNewUser, signIn } from './handlers/user';

const app = express()


// const customLogger = (message) => (req, res, next) => {
//     console.log(`Hello from ${message},`)
//     next()
// }

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(customLogger('custom Logger'))

app.get('/', (req, res) => {
    throw new Error('heelo')
})

app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('/sign-in', signIn)

app.use((err, req, res, next) => {
    console.error(err)
    res.json({ message: 'OOps there was an error' })
})


export default app