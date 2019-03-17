const config = require('../../knexfile').development
const connection = require('knex')(config)

function personsQuery (filter) {
    let query = connection('customerData').select()

    if(filter.minAge >0) {
        query.where('age','>=', filter.minAge)
    }

    if(filter.maxAge >0) {
        query.where('age','<=', filter.maxAge)
    }
    
    if(filter.gender === 'male' || filter.gender === 'female') {
        query.where('gender', filter.gender)
    }

    if(filter.name && filter.name.length > 0)
        query.where('name', filter.name)
    return query;
  }

module.exports = personsQuery
