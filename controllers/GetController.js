const { users } = require('../data/users')
const { errors } = require('../data/errors')

const GetController = (req, res) => {
    res.render("index", {
        users,
        errors
    })
}

module.exports = GetController;
