const { users } = require('../data/users')


const FilterController = (request, response) => {
    const filterByDate = users.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    response.render("filter", {
        filtered: filterByDate,
    });
}

module.exports = FilterController;
