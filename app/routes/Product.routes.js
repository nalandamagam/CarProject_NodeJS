//const { myFunction } = require("../controllers/Product.controller");
const product = require('../controllers/Product.controller');



module.exports= (app)=>{
    app.get('/product/:PId',product.authenticateJWT, product.find);
    app.post('/product', product.authenticateJWT,product.create);
    app.put('/product/:PId',product.authenticateJWT,product.updateProduct);
    app.delete('/product/:PName',product.authenticateJWT,product.delete);
    app.get('/product/',product.authenticateJWT,product.findAll);
    app.post('/login',product.login);




}