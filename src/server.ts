import express from 'express'
import morgan from "morgan";

import router from './router'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', router)

app.get('/', (req, res) => {
    res.json({ messasge: 'hello world' })
})

export default app