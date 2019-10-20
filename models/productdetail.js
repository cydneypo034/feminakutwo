const mongoose = require('./connection.js')

var ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    priceRange: String,
    website: String,
})

const ProductCollection = mongoose.model('Product', ProductSchema)


function getAllProducts() {
    return ProductCollection.find()
}

function deleteProducts(noProducts) {
    return ProductCollection.findByIdAndDelete(noProducts)
}

function getOneProduct(productOneId) {
    return ProductCollection.findById(productOneId)
}

function addNewProducts(newProduct) {
    return ProductCollection.create(newProduct);
}

function editProducts(productEditId, brandNewProduct) {
    return ProductCollection.findByIdAndUpdate(productEditId, brandNewProduct)
}
module.exports = {
    addNewProducts,
    deleteProducts,
    editProducts,
    getAllProducts,
    getOneProduct
}