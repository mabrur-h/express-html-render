const { users } = require('../data/users')

const GetController = (req, res) => {
    res.render("index", {
        users: users
    })
}

module.exports = GetController
