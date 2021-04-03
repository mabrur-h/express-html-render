const { users } = require('../data/users')
const { errors } = require('../data/errors')

const DeleteController = (req, res) => {
    const isExists = users.find(user => user.id === parseInt(req.params.id));
    const user = users.findIndex(user => user.name === isExists.name)
    if ( isExists ) {
        users.splice(user, 1);
        res.redirect('/');
    } else {
        errors.length = 0;
        errors.push('this user does not exists!');
    }
}

module.exports = DeleteController
