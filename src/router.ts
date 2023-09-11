import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";


const router = Router()


// Product

router.get('/product', (req, res) => {
    res.json({ message: 'product' })
})
router.get('/product/:id', () => { })
router.post('/product', [body('name').exists().isString(), body('description').optional().isString()], handleInputErrors, (req, res) => {

})
router.put('/product/:id', [body('name').exists().isString(), body('description').optional().isString()], handleInputErrors, () => { })
router.delete('/product/:id', () => { })

export default router