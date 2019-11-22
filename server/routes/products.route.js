const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router()
//Load model
const Product =  require('../models/product.model');

//GET all products
router.get('/product', function(req, res){
    let products = Product.find({}, function(err, products){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            res.json(products);
        }
    })
})

    
  
module.exports = router;