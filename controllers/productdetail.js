const express = require('express')

const productApi = require('../models/productdetail.js')

const productRouter = express.Router()

///////////////////GET ALL USERS/////////////////////////////
productRouter.get('/', function (req, res) {
    productApi.getAllProducts().then((products) => {
        res.json(products) 
    })
  })
  
  /////////////////////GET ONE USER//////////////////////////
  productRouter.get('/:productId', function(req,res){
    productApi.getOneProduct(req.params.productId).then((foundProduct) => {
        res.json(foundProduct);
    })
  })
  
  /////////////////////ADD USER///////////////////////////////
  productRouter.post('/', function (req, res) {
    productApi.addNewProducts(req.body).then((newProducts) => {
        res.json(newProducts)
    })
  })
  
  /////////////////EDIT USER/////////////////////////////////
  productRouter.put('/:productId', function(req, res) {
    productApi.editProducts(req.params.productId, req.body).then((brandNewProducts) => {
    res.json(brandNewProducts)
    })
  })
  
  ////////////////////DELETE USER/////////////////////////////
  productRouter.delete('/:productId', function(req,res){
    productApi.deleteProducts(req.params.productId).then((noProduct) => {
        res.json(noProduct);
    })
  })

  module.exports = {
    productRouter
  }
  