
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql"
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Sequelize connected successfully!");
    } catch (error) {
        console.log("Connection failed:", error.message);
    } finally {
        await sequelize.close();
        console.log("Database connection closed.");
    }
}

testConnection();
