const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProducSchema = new Schema({
productName: {
    type: String,
    required: true

},
color: {
    type: String,
    required: true  
},
size: {
    type: String,
    required: true  
},
price: {
    type: String,
    required: true  
},
quantity: Number
})

module.exports = productSchema = mongoose.model('customerInfo', productSchema);