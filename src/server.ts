import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({ messasge: 'hello world' })
})

export default app