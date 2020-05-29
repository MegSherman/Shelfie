module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get ('db')
        db.get_inventory ('db')
        .then (inventory => res.status(200).send(inventory))
        .catch (error => {
            res.status(500).send ({errorMessage: 'Could not retrieve inventory.'})
            console.log(error)
        })
    }
}
