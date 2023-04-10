const {Router} = require('express');
const router = Router();
const methods = require('../controllers/categoryController');

router.get('/categories',methods.getCategoryAll);
router.get('/categories/:idCategory',methods.getCategory);
router.get('/categories/products/:idCategory',methods.getCategoryProducts)

module.exports = router;