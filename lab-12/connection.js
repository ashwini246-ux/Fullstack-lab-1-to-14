
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

async function connectDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Database connection successful!");
    } catch (error) {
        console.log("Database connection failed:", error.message);
    } finally {
        await sequelize.close();
        console.log("Database connection closed.");
    }
}

connectDatabase();
