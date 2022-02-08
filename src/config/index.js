module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'SportsPartner',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || '123',
        options: {
            host: process.env.HOST || 'localhost',
            dialect: process.env.DIALECT || 'postgres'
        }
    }
}