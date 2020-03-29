import { Config } from 'knex'

export const test: Config = {
    client: 'sqlite3',
    connection: {
        filename: './src/database/test.sqlite',
    },
    migrations: {
        directory: './src/database/migrations'
    },
    useNullAsDefault: true,
}

export const development: Config = {
    client: 'sqlite3',
    connection: {
        filename: './src/database/db.sqlite',
    },
    migrations: {
        directory: './src/database/migrations'
    },
    useNullAsDefault: true,
}

export const staging: Config = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    }
}

export const production: Config = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    }
}

export default {
    development,
    test,
    staging,
    production,
}
