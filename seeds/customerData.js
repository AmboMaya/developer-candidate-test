
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('customerData').del()
    .then(() => {
      // Inserts seed entries
      return knex('customerData').insert([
        {id: 1, name: 'Jim', age: 30, gender:'male'},
        {id: 2, name: 'Jane', age: 55, gender:'female'},
        {id: 3, name: 'Bob', age: 20, gender:'male'},
        {id: 4, name: 'Sally', age: 24, gender:'female'}
      ])
  })
