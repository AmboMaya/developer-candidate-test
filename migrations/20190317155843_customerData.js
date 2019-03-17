exports.up = knex => 
  knex.schema.createTable('customerData', (table) => {
      table.increments('id')
      table.string('name')
      table.integer('age')
      table.string('gender')
    })

exports.down = knex => knex.schema.dropTable('customerData')
