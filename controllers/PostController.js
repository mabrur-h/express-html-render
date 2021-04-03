const { users } = require('../data/users')
const { errors } = require('../data/errors')

const PostController = (req, res) => {
    const { name, date } = req.body
    if ( name && date ) {
        const isExists = users.find(user => user.name === name)
        if ( isExists ) {
            errors.length = 0;
            errors.push("This user is already exists!");
        } else {
            users.push({
                id: users.length + 1,
                name,
                date,
                delete: `/delete/${users.length + 1}`
            });
        }
    } else {
        errors.length = 0;
        errors.push("name and birth date required!");
    }
    res.redirect('/');
}

module.exports = PostController
