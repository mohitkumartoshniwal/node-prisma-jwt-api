import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";


const router = Router()


// Product

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
// .optional().
router.post('/product', [body('name').exists().isString(), body('description').isString()], handleInputErrors, createProduct)
router.put('/product/:id', [body('name').exists().isString(), body('description').isString()], handleInputErrors, updateProduct)
router.delete('/product/:id', deleteProduct)

router.use((err, req, res, next) => {
    console.error(err)
    res.json({ message: 'in router handler' })
})

export default router