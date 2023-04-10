const {Router} = require('express');
const router = Router();
const methods = require('../controllers/productController');

router.get('/products',methods.getProductAll);
router.get('/products/:idProduct',methods.getProduct);
router.put('/products/:idProduct',methods.putProduct);
router.post('/products',methods.postProduct);
router.delete('/products/:idProduct',methods.deleteProduct);

module.exports = router;