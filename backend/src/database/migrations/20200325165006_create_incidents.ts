import Knex, { SchemaBuilder } from 'knex'

export const up = function(knex: Knex): SchemaBuilder {
    return knex.schema.createTable('incidents', (table: Knex.TableBuilder) => {
        table.increments('id')

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable()

        table.foreign('ong_id').references('id').inTable('ongs')
    })
}

export const down = function(knex: Knex): SchemaBuilder {
    return knex.schema.dropTable('incidents');
}
