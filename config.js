module.exports = {
    hashToken: 'cJNDDEVJGm',
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME || 'daily',
        port: process.env.DB_PORT || 3306,
    },
    PORT: process.env.PORT || 8000,
};