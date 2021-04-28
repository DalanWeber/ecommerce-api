const products = require('../products.json')

const getProduct = (req, res) => {
    const foundProduct = products.find(product => product.id === parseInt(req.params.id))
    if (!foundProduct){
        return res.status(500).send("Item not in list")
    }
    res.status(200).send(foundProduct)
}


module.exports = getProduct
