module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get ('db')
        db.get_inventory ('db')
        .then (inventory => res.status(200).send(inventory))
        .catch (error => {
            res.status(500).send ({errorMessage: 'Could not retrieve inventory.'})
            console.log(error)
        })
    },

    createProduct: (req, res) => {
        const {name, price, img} = req.body
        const newProduct = {id, name, price, img}
        inventory.push (newProduct)
        i++
        res.status(200).send(inventory)
    }
}
