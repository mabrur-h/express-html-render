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
            const length = users.length === 0 ? 0 : users[users.length - 1].id;
            users.push({
                id: length + 1,
                name,
                date,
                delete: `/delete/${length + 1}`
            });
        }
    } else {
        errors.length = 0;
        errors.push("name and birth date required!");
    }
    res.redirect('/');
}

module.exports = PostController
