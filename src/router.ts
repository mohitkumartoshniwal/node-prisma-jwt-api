import { Router } from "express";

const router = Router()


// Product

router.get('/product', (req, res) => {
    res.json({ message: 'product' })
})
router.get('/product/:id', () => { })
router.post('/product', () => { })
router.put('/product/:id', () => { })
router.delete('/product/:id', () => { })

export default router