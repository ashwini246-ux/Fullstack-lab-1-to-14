
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

// Define Student Model
const Student = sequelize.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");

        await Student.sync();
        console.log("Student table created or already exists!");

        const students = await Student.findAll();
        console.log(students.map(student => student.toJSON()));
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
