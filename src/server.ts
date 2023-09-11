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

app.get('/', (req, res, next) => {
    // throw new Error('heelo')
    // setTimeout(() => {
    //     throw new Error('heelo')
    // }, 1000)
    setTimeout(() => {
        next(new Error('hello'))
    }, 1000)
})

app.get('/dummy', (req, res) => {
    res.json({ message: 'Hello' })
})

app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('/sign-in', signIn)

app.use((err, req, res, next) => {
    // console.error(err)
    // res.json({ message: 'OOps there was an error' })

    if (err.type === 'auth') {
        res.status(401).json({ message: "Un Authorized" })
    } else if (err.type === 'input') {
        res.status(400).json({ message: "Invalid Input" })
    } else {
        res.status(500).json({ message: 'Server Error' })
    }
})


export default app