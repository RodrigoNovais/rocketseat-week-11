import Knex, { SchemaBuilder } from 'knex'

export const up = function(knex: Knex): SchemaBuilder {
    return knex.schema.createTable('NGOs', (table: Knex.TableBuilder) => {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

export const down = function(knex: Knex): SchemaBuilder {
    return knex.schema.dropTable('NGOs')
}
